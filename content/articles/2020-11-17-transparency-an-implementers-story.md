---
url: /articles/transparency-an-implementers-story
title: "Transparency: An Implementer's Story"
show_side_bar: true
author: "Martin Hutchinson"
---

Aether’s team is responsible for running a binary download service. Naming is hard, so their service is simply called DownloadServer. Their service has some guarantees that the binary has not been tampered with, by validating a checksum on the client before any binaries are installed. Aether has a concern that this only mitigates some errors and threat models. If their download servers provide a different binary to some users along with a valid checksum then these clients could install malicious software without detection.

While Aether trusts his team and their security practices, he knows that there is still a risk of an insider threat or server compromise, and starts to research what steps can be taken to raise the bar for an attacker. After reading the [Claimant Model](https://github.com/google/trillian/blob/master/docs/claimantmodel/CoreModel.md) and performing a Threat Model analysis, Aether devises the following model:

* Claim<sup>BINARY</sup>: (I, ${DownloadServer}, claim that binary X for platform P at version V has cryptographic checksum C)
* Statement<sup>BINARY</sup>: A manifest file for X, containing P, V, C (and URLs, etc)
* Claimant<sup>BINARY</sup>: DownloadServer
* Believer<sup>BINARY</sup>: Download Client
* Verifier<sup>BINARY</sup>: Clients and Publishers
* Arbiter<sup>BINARY</sup>: DownloadServer’s community forums

This Claimant Model description models how things currently work. Clients download the manifest file over HTTPS and then download the binary from the same server. They perform the checksum validation, and will raise any validation errors via the community. Publishers can download the manifests for binaries they have published from the server to ensure that nothing has been tampered with.

At first glance Aether thinks this provides enough transparency. After chatting with his pal Hypnos and sleeping on it, he realizes that his original concerns are still valid. While the manifest is obtained over TLS, it isn’t actually signed (which is a requirement for Statements in the Claimant Model), and thus cannot be shared in any peer-to-peer way that would allow mismatched manifests (i.e. those with X, P, V all being equal, but different C values) to be considered as proof; if users did share these and mismatches were found, DownloadServer could simply deny having authored either of them.

Aether proposes signing the manifests, which makes all manifests non-repudiable. Should two mismatching manifests be brought to light, DownloadServer could not dodge this and their reputation would be severely compromised. Their business model relies on this reputation, so this is an excellent deterrent for misbehavior and a great way to show their customers how much they care about security.

This step is rolled out, and receives some good press feedback. Their customers don’t seem to be sharing the manifest files though, which means in reality this checking isn’t happening and they could still get away with creating mismatched manifests.

Aether remembers the [Claimant Model of Logs](https://github.com/google/trillian/blob/master/docs/claimantmodel/Logs.md) and realizes that this is a perfect fit. His team had discussed using immutable logs in the past, but their discussion had revolved around storing the binaries themselves in the logs. This was deemed infeasible because of space requirements, and because publishers occasionally realize they have leaked private info and request some binaries are taken down. Some publishers allow debug versions of the software to be downloaded by limited audiences through DownloadServer, but a public log would allow anyone to get this binary.

While the binaries themselves occasionally need to be redacted, or made private to limited audiences, none of their publishers are particularly concerned with the metadata in the manifest being public domain. The manifest files are pretty small, and so Aether proposes that a Trillian Log is set up with all of the manifest files stored as entries. Clients would be migrated from the current mechanism of downloading manifest files from direct HTTPS connections to fetching manifests from the log, and validating an inclusion proof against their local Golden Checkpoint. Whenever they needed to download a manifest from the server which is newer than their Golden Checkpoint, they would download the latest Checkpoint from the Log, verify it is consistent with their Golden Checkpoint via a consistency proof, and then replace their Golden Checkpoint with the newer version.

Aether proposes this to the team, and everyone agrees that this scheme is certainly more resilient than the current system, however a couple of points are raised by Erebus that require some more consideration:

1. Mismatched manifests could still be put in the log, and if nobody checks all entries in the log for this type of mismatch then the problem is not mitigated
2. Different users could be presented with different versions of the log, and if they never compare checkpoints then this cannot be detected

The first issue can be resolved by having a new Verifier that simply copies the log locally and checks for mismatched manifests. Ananke found this role so compelling that she hacked up a simple Verifier in a couple of hours that could easily run on a low powered Raspberry Pi.

Now the remaining issue is how to ensure that all users are on the same log timeline. The team discusses that this can be solved with a gossip protocol, but decide to launch the log early without solving this problem, reasoning that:

* Maintaining consistent split-views of the log indefinitely already raises the bar for the cost of successfully pulling off an attack
* Users now have the option of sharing Log Checkpoints on the forums, which has a much better ROI than sharing each manifest directly; a single Log Checkpoint commits to all of the manifests in the log.
* A proper gossip network can be added later without breaking changes

And then everybody clapped.
