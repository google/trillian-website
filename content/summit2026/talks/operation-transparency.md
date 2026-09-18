---
url: summit2026/talks/operation-transparency
layout: summittalk
title: "Operation Transparency for Encrypted Spaces"
topImage:
type:
room:
start:
speaker: Trevor Perrin
speakerTitle:
---

<div class="font-google font-medium">

The Encrypted Spaces project is a research and open source project
working on end-to-end encryption for shared persistent data like
documents, chat forums etc. (https://encryptedspaces.org)

As part of this work, we're exploring an *operation transparency*
notion to provide each group of users with a shared, fork-resistant
operation log for their shared data.  In our system this log is used
with zero knowledge proofs to provide users with succinct,
privacy-preserving proofs that the server has applied the operation
log correctly.

We're eager to discuss this notion and its requirements with the
transparency engineering community.  For this talk we will briefly
summarize our proposed system, frame the operation transparency
problem, and then raise some topics for further discussion:

* How operation transparency adds requirements compared to existing
transparency notions (e.g. Key Transparency), in particular
considering the relationship between transparency logs and ZK proofs
over the operation log.

* Whether operation transparency can be built "on top" of a standard
witnessing architecture like the transparency.dev witnesses.

* Whether we can extend the use of ZK proofs to provide a substitute
for 3rd-party auditing in transparency systems; what trade-offs are
involved there, and whether this is increasingly feasible with modern
ZKP systems.

- Stepping back further: Can Operation Transparency, Key Transparency,
Certificate Transparency, etc. be viewed as different points in a
unified design space?  How much reuse of code, protocols, ZK
techniques, infrastructure etc can be achieved?

---

### Speaker

Cryptography engineer and independent researcher. Co-creator of the
Signal Protocol, and author of the Noise Protocol Framework.

</div>
