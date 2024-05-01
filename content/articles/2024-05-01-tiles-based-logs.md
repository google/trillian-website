---
url: /articles/tiles-based-logs
title: "Tiles-Based Transparency Logs"
show_side_bar: true
author: "Jay Hou"
---

# Tiles-Based Transparency Logs

## Background

The TrustFabric team launched Trillian in 2016 as an implementation for verifiable logs - a tamper-evident data structure based on Merkle trees. Since then, Trillian has been adopted by and had transformative impact on applications like Certificate Transparency, [binary transparency](https://security.googleblog.com/2023/08/pixel-binary-transparency-verifiable.html), and [AI model transparency](https://security.googleblog.com/2023/10/increasing-transparency-in-ai-security.html?m=1). Trillian provides readers with APIs to get entries from the log and request proofs from the log to verify it hasn't been tampered with. To read more or brush up on verifiable logs, head over to the [Verifiable Data Structures](https://transparency.dev/verifiable-data-structures/) page.

After years of working with these logs at scale – building, operating, learning from other operators – we've learned there are better ways to design and implement APIs to make logs more scalable, particularly to reads, and cheaper to operate, in terms of engineering and storage resources. This tiles-based approach has already been tested and proven in several ecosystems, and has been available in our [serverless tooling](https://github.com/transparency-dev/serverless-log) since 2021. The ecosystems include the [Go module checksum database](https://go.dev/blog/module-mirror-launch), [ArmoryDrive Firmware Transparency](https://github.com/usbarmory/armory-drive/wiki/Firmware-Transparency), [Pixel Binary Transparency](https://developers.google.com/android/binary_transparency/pixel), and [Sunlight](https://letsencrypt.org/2024/03/14/introducing-sunlight.html) in Certificate Transparency. Today, we're announcing that we're working on a general, ecosystem-agnostic implementation which embodies these changes and explaining why we believe it's better for transparency ecosystems to adopt.

## What are tiles?

A Merkle tree is composed of hash values. To optimize storage and hash re-computation, Trillian splits the Merkle tree data into tiles, where a tile contains more than one hash value.

![How to represent a Merkle tree with tiles](/images/tiles-based-logs/merkle-tree-tiles.svg)

When Trillian serves a read request such as an [inclusion proof](https://transparency.dev/verifiable-data-structures/), it does some computing to find which hash values within a Merkle tree must be used to compute and prove a given entry is included in the tree. It fetches these hashes from tiles, and serves them to clients. The reader then takes the hash values the server provides, uses them to recompute the root hash, and checks that it matches the one claimed by the log.

In a world where the interface to the log is via the tiles API, the log makes these subtree tiles available directly to clients, and rather than asking the log to build proofs, the clients identify which tiles includes the hashes they need and fetch them in order to build and verify the proof themselves.

## Benefits of tiles

So you can see that while the interface to the log is changing, the underlying cryptography — the hashing and proofs — are not. Why, then, are we making this change?

*   Improve cacheability: Static, immutable resources, like tiles, are much easier to trivially cache via CDN, or even locally on the client, than parameterised requests as in Trillian.
*   Uniform interface across logs and ecosystems: allows different ecosystems to build shared tools.
    *   For example, witnessing, which protects against split-view attacks and verifies that logs are consistent.
*    Logs are easier to spin up: transparency ecosystems can use the standard tiles API which incorporates best practices, rather than designing their own front end personalities.
*    Logs are easier to maintain: since reads are cheaper to serve with better caching, the cost of operation goes down.
*    Static responses: when a client requests leaves from the log, it gets a static, cacheable, response.
    *   This removes the need for complex optimizations, such as the leaf-aligning in the current GetLeavesByRange Trillian call.

As with any migration, there's a cost to moving a transparency ecosystem to the new tiles logs. However, we think the benefits above outweigh the costs and bring benefits to all participants in the ecosystem. Logs that are easier and cheaper to run ultimately make transparency systems stronger, and clients benefit from higher performance logs. If you're interested in contributing or talking more about it, we'd love to hear from you. Come join us on [Slack](https://transparency-dev.slack.com/)!