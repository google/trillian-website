---
url: summit2025/talks/verifiable-indexes.html
layout: summittalk
title: "Verifiable Indexes for a More Usable Transparency Ecosystem"
topImage:
type:
room:
start:
speaker: Martin Hutchinson
speakerTitle:
---

<div class="font-google font-medium">

Transparency logs, the bedrock of systems like Certificate Transparency and the
Go SumDB, promise unparalleled verifiability. But this promise comes with a
hidden cost. How can a user find their specific entries (their domain's
certificates, or their software's releases) within a log containing billions of
entries, without downloading terabytes of data or blindly trusting a centralized
indexer? This trade-off between efficiency and verifiability has held back the
full potential of transparency adoption and verification.

This talk introduces the Verifiable Index, a data structure that allows lookup
by a key, much like the index found at the back of a book. This index solves the
problem by allowing users to perform fast, targeted queries against massive logs
while receiving cryptographic proof that the results are complete and untampered
with. By extending the end-to-end chain of trust from the log to the query
itself, Verifiable Indexes make transparency data practical and accessible,
paving the way for a new generation of powerful, trustworthy applications.

---

### Speaker

Martin Hutchinson is a software engineer on the TrustFabric team at Google,
where he works on transparency and verifiable systems. He is the core author of
the Claimant Model, and a maintainer of several specifications at C2SP,
including tlog-tiles. As a core maintainer of the TrustFabric open source
libraries, he has worked on projects such as Trillian, Tessera, and the Armored
Witness.

</div>
