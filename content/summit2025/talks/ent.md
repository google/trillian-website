---
url: summit2025/talks/ent.html
layout: summittalk
title: "ent: a protocol for distributed Content Addressable Storage"
topImage:
type:
room:
start:
speaker: Tiziano Santoro 
speakerTitle:
---

<div class="font-google font-medium">

What if you could resolve a content digest (e.g. a SHA-256) to its location
anywhere on the internet, just like DNS resolves a domain name to an IP address?
This talk introduces ent, a simple protocol for distributed Content-Addressable
Storage (CAS) that does exactly that, preserving integrity and verifiability of
the underlying data even when servers are untrusted.

A common pattern that arises in many systems (and especially in anything related
to transparency) is that of mutable pointers (e.g. labels, tags, keys, package
names, version numbers, etc.) referencing immutable data. We explore how ent
provides a flexible, scalable, and secure resolution layer for any CAS,
decoupling data's identity from its location.

The presentation will cover the protocol, our open-source client and server
libraries, a few use cases, and a demonstration of static.space, a public ent
server you can use today.

---

### Speaker

Tiziano is a Software Engineer at Google DeepMind, working on Transparency,
Privacy and Security. He is the engineering lead and co-founder of Project Oak,
which aims to provide transparency in distributed systems leveraging Trusted
Execution Environments. Tiziano is also deeply interested in the intersection
between Science, Art and Philosophy.

</div>
