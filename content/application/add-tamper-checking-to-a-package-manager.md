---
url: application/add-tamper-checking-to-a-package-manager
layout: linked-headers
eyebrow: Trillian lets you
title: Add tamper checking to a package manager
description: This means you can detect if a package file has been modified since it was first added to the package manager.
topImage: top_tamper-checking.svg
headers:
   - display: "Advantages"
     link: "advantages"
   - display: "How it works"
     link: "how-it-works"
   - display: "How the system is verifiable"
     link: "how-the-system-is-verifiable"
   - display: "Limitations"
     link: "limitations"
   - display: "How to implement this"
     link: "how-to-implement-this"
   - display: "How to further strengthen"
     link: "how-to-further-strengthen"
   - display: "Examples"
     link: "examples"
   - display: "Further resources"
     link: "further-resources"
---

## Advantages

<div class="font-google font-medium">

* Ensure all users receive exactly the same code for a given package version.
* Protect you against hacked Github accounts force-pushing malicious code.
* Minimise the impact of a hacked download server.
* Protect you from a man-in-the-middle attack serving a tampered package with malicious code.
* Prevent upstream authors modifying the source code of an existing released version.

</div>

## How it works

Tamper checking means the ability to detect if a package file has been modified since it was first added to the package manager.

This is a form of trust-on-first-use, similar to logging into an SSH server for the first time and storing the host key fingerprint. However in this case "first use" is the first time any user downloaded the file.

{{< rel-figure "/images/application-illustrations/diagram_package-tamper-checking.svg" >}}

1. The package manager downloads a versioned package from the download server. This is typically a tarball or ZIP file and should never change after it's published.
2. The package manager calculates the hash value of the downloaded package.
3. The package manager asks the hash database if it has the hash value for the package's name and version number e.g. "libfoo-1.4.6"
4. The hash database checks whether it has previously downloaded the package by looking in its verifiable log. If not, it downloads the package, calculates the hash value and enters it into the verifiable log.
5. The hash database returns the hash value along with extra details about the record in the verifiable log.
   The package manager verifies the answer from the hash database and compares the returned hash value with the one it generated in (2). If they match, installation can continue.

## How the system is verifiable

### Package records are stored in a verifiable log

The hash database creates a record for every package that looks like:

```
{
    "package": "libfoo-1.4.6",
    "fileHash": "h1:gnP5JzjVOuiZD07fKKToCAOjS0yOpj/qPETTXCCS6hw="
}
```

Every package record is inserted as a leaf node in the Merkle tree underlying the [verifiable log]({{< relref "/verifiable-data-structures#verifiable-log" >}}).

### Replies from the hash database include the signed tree head

When the package manager queries the hash database for a package version, it returns the record in addition to a [signed tree head]({{< relref "/verifiable-data-structures#signed-tree-head" >}}) and the current tree size.

```
{
    "package": "libfoo-1.4.6",
    "fileHash": "h1:gnP5JzjVOuiZD07fKKToCAOjS0yOpj/qPETTXCCS6hw=",
    "signedTreeHead": "8LWIh9TTzhdSA21WbE0oEL4JPlmADkfP3Z0=",
    "treeSize": 1291072
}
```

The signed tree head is the top level hash, signed by a private key known only to the hash database. The public key is baked into the package manager. This gives more confidence that the package manager is communicating with the real hash database (and no man-in-the-middle is occurring, for example).

### The package manager proves the record is in the log

The package manager verifies that the hash value is really in the log described by the tree head. It calculates the chain of hashes from the leaf to the top of the tree, verifying it matches the received tree head. If so, it's confirmed the record is in the log. This is called the [inclusion proof]({{< relref "/verifiable-data-structures#inclusion-proof" >}}).

### The package manager checks previous trees haven't been tampered with

Every time the package manager validates a signed tree head, it keeps a local copy it will use later. The tree head acts as a snapshot of the tree at a particular point in time or log size.

As time passes and new records are added to the log, the tree expands. A verifiable log is always populated in a way that the new, larger tree should fully contain any previous trees, providing no records have been tampered with.

The second time the package queries the hash database, it receives the updated signed tree head. It uses the previously stored tree head to check that the previous tree is fully contained in the current tree. This proves that nothing in the previous tree has been tampered with.

This process of comparing one tree against another is called a [consistency proof]({{< relref "/verifiable-data-structures#consistency-proof" >}}).

### Tampering with the log would be highly visible

Tampering with the log would cause the inclusion proof or consistency proof to fail in every installation of the package manager. This would be highly visible since there could be thousands or millions of installs.

## Limitations

* **It doesn't protect against malicious code** - while an attacker can't modify the code for an existing version number, they could create a new version. However, the new version would become globally visible - it couldn't be delivered to a single user. This would increase the likelihood of it being discovered.
* **The hash database could lie to targeted users** - it could return the hash of a malicious variant of a particular package. However:
  * It would have to collude with the download server to serve the malicious version of the package to that user (and only them).
  * It would have to maintain a separate "forked" log for that user to pass any subsequent verifications by the package manager.
* **Tamper detection is only as good as the UI that explains it** - if a user does encounter a tampered package, they may not understand the implications. In the worst case, a user may wipe their verification cache and try again to "make it work". This could be mitigated with a feedback loop where the package manager uploads such incidents to a security team.

## How to implement this

To implement this you need to build two components:

1. **Hash database** (Trillian personality). This exposes the API used by the package manager, and builds on Trilian's verifiable log data structure. Roughly, the API endpoints would be:
    * `/lookup/{package-name}-{version}` - returns the hash value of the package file along with a record number and signed tree head.
    * `/consistency-proof` - returns data required to verify that a previously-stored signed tree head exists in a later tree. This verifies that the log hasn't been tampered with since you last accessed it.

2. **Verify component** in the package manager. This component:
    * Queries the hash database's API for the package version.
    * Compares the calculated hash value of the downloaded file and the hash value returned by the hash database.
    * Verifies the hash database's verifiable log and stores a local cache of all signed tree heads it encounters.
    * Carries out consistency proofs for new tree heads.

## How to further strengthen

* **Encourage external monitors** - to carry out a full audit of the hash database, re-calculating all the hashes in the tree and ensuring they re-create the tree head.
* **Notify code authors about new releases** - if an author's account is hacked and a malicious version is released, notifying the author makes it more likely the malicious update is detected.
* **Make code diffs visible** - making it easy for members of the community to glance at what actual code has changed between versions makes it more likely malicious code will be spotted.
* **Introduce a feedback loop on failures** - sharing verification failures with people familiar with the whole system takes the burden off the end-user and makes it more likely malicious changes will be detected.

## Examples
This is implemented in production for Golang with a [checksum database](https://go.googlesource.com/proposal/+/master/design/25530-sumdb.md) and [module mirror](https://blog.golang.org/module-mirror-launch).

## Further resources
* [Proposal: Secure the Public Go Module Ecosystem](https://go.googlesource.com/proposal/+/master/design/25530-sumdb.md) describes the checksum database that forms Golang’s approach to this pattern.
* [GopherCon 2019: Katie Hockman - Go Module Proxy: Life of a Query](https://www.youtube.com/watch?v=KqTySYYhPUE&t=15m0s) -
  Talk from GopherCon explaining how Go achieves 1) - talk from GopherCon explaining how Go achieves 1) reproducible builds, 2) persistent dependencies and 3) trustworthy fetches. Point 3) goes into detail about the checksum database, starting at 15:00.
* [Rust implementation of Crate Transparency using Google Trillian](https://pretired.dazwilkin.com/posts/200429/) and [PyPi Transparency](https://pretired.dazwilkin.com/posts/190926/)
  Daz Wilkin demonstrates building a Trillian personality to apply this pattern to Rust and Python's package managers.
