---
url: /articles/logs-vs-maps
title: "Verifying Evolution of Logs vs Maps"
show_side_bar: true
author: "Martin Hutchinson"
---

## Log Evolution
Verifiable Logs represent a list which is committed to by a Checkpoint. Given a Checkpoint, a client can:
1. Verify inclusion of the value at any position in the list
2. Cheaply verify that another Checkpoint is consistent with it

If two Checkpoints are consistent then the lists they commit to are either the same, or one is a prefix of the other. If any of this doesn’t make sense then now would be a good time to review [Verifiable Data Structures](https://github.com/google/trillian/blob/master/docs/papers/VerifiableDataStructures.pdf).

Sidebar: a Golden Checkpoint represents an observer’s accepted view of a Verifiable Data Structure. This Golden Checkpoint commits to the state of the data structure that this observer has relied on (whether in the role of a Believer or a Verifier).

A typical client will maintain a Golden Checkpoint locally, only updating it to a newer Checkpoint when they are assured that this new Checkpoint is consistent with their Golden Checkpoint. In this way, a client can follow the evolution of the Verifiable Log, and cannot be coerced into updating to a new state which is inconsistent with their Golden state. In the event that they have 2 checkpoints for which consistency cannot be verified, this represents non-repudiable evidence from the Log which can be used to prove incorrect operation (e.g. editing, removing, reordering values which have been committed to).

So, once a client has a Golden Checkpoint, they can cheaply check that any evolution of the Log is only ever an extension of the list. However, in the absence of any way for these clients to communicate (e.g. Gossip), different clients have no way to know that they are seeing the same list. This “split view” could occur at any time. For example, both clients may see the list [D,O], but client G gets [D,O,G] and client T gets [D,O,T]. Both of these states are consistent with [D,O] but inconsistent with each other.

**Presenting a split view is easy and can be done cheaply. It can even be done by accident. But maintaining it and ensuring it remains undetected indefinitely is expensive.** A Verifiable Log which commits to a split view needs to continue to do so and never present a client with a view that contradicts their established viewpoint; a single lapse in this protocol brings the whole house of cards down. This hinges on the ease of client-side consistency checks; once two clients have seen different sides of a split view they can only be put back onto the same view of the log if one of them breaks protocol and updates the Golden Checkpoint without checking consistency.

## Map Evolution
A Verifiable Map represents a mapping from keys to values, which are committed to by a Checkpoint. Given a Checkpoint, a client can:
1. Verify the binding of a value (or absence of value) to a particular key

There is no feature support for clients to check consistency, and that’s because there is no efficient way to determine correct Map evolution. On the other hand, unlike Logs which have a clear append-only property which defines their correct evolution, we haven't really defined what Map evolution is.

One evolution strategy which is similar to Logs is the Insert-Only Map. A Checkpoint commits to the set of key+values that make up the Map, and Checkpoints are consistent if there is a superset relationship between the sets they commit to. It is illegal to have multiple values for the same key (one can construct a Map of Logs to support multimaps, but verifying this more complex data structure is more difficult than a simple Insert-Only Map).

The brute force method to fully verify consistency between two Insert-Only Map Checkpoints M1 and M2 is:
1. Enumerate KV1 and KV2: the set of all key+value pairs at each revision
2. Build the Merkle Tree for each and verify that M1 and M2 commit to these sets
3. Verify that KV1 is a subset of KV2

This is a radically different proposition for the average client than the one of a Verifiable Log; instead of needing to maintain local state which is logarithmic to the size of the data structure, the Map Client needs to duplicate the whole data structure. The amount of local state can be optimized to just require a checkpoint, at the cost of making the consistency proof more expensive (O(M log N) hashes are needed to prove that one map of N keys is M entries bigger than another one).

For the vast majority of applications (think lightweight clients such as IoT devices, or even mobile phones), this is likely to be too expensive and thus client-side consistency checks are not feasible for Verifiable Maps (note that this is contrary to what is stated in [Verifiable Data Structures](https://github.com/google/trillian/blob/master/docs/papers/VerifiableDataStructures.pdf); Verifiable Map clients cannot efficiently determine split-view attacks).

Without client-side consistency checks, we need to find a different mechanism to reliably update Golden Checkpoints. Relying on trust in the Map alone to update these checkpoints means that two Map Clients seeing different sides of a split view can be coerced into accepting the same view of the Map on a future update. Thus the long-term expense of maintaining a split-view has evaporated. The significance of this cannot be understated. Thus we must find some mechanism to verify the evolution of Verifiable Maps.

Two proposals to address this rely on the introduction of a Verifiable Log to store Map Checkpoints. Clients should only trust Checkpoints that are in this Log, and can safely update their Golden Checkpoint to any later entry in the Log. Verifying that this sequence of Checkpoints do represent valid evolutions of the Map is handled differently:

* Verifiable Log-Backed Maps: The Map is derived via a well-defined mapping function from the entries in an input Log. Verification relies on a Verifier constructing the Map from the log for every Map Checkpoint and confirming equivalent construction. This approach is possible for the append-only map built for SumDB (trillian-examples).
* Map Of Logs: Each client takes the role of Verifier for their own keyspace within the Map. The security hinges on all clients reviewing the values under their keys for correctness in every revision of the Map. Any revision which is not checked could contain a radically different log; see oscillation attacks in the linked paper.

Verification of Map evolution is only possible if extra trust assumptions are made on external Verifiers, and furthermore, **the cost of verifying Map Evolution currently scales linearly in the number of revisions.** Until a practical solution to the cost of verification being O(#revisions) is solved, feasible deployments of Verifiable Maps must limit the frequency of updates to a cadence that all verifiers can process.

With this in mind, the TrustFabric team is currently working on Verifiable Maps built using batch pipelines instead of an online/incremental approach. This allows far larger Maps to be constructed, at a tradeoff of latency for inclusion of updates. The batch approach now available in [trillian/experimental/batchmap](https://github.com/google/trillian/tree/master/experimental/batchmap) has been demonstrated to create & maintain updates to Verifiable Maps with 2<sup>30</sup> entries, producing revisions in the order of every 30 minutes.
