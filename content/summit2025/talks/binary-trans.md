---
url: summit2025/talks/binary-trans.html
layout: summittalk
title: "Binary Transparency via Endorsements"
topImage:
type:
room:
start:
speaker: Tom Binder
speakerTitle:
---

<div class="font-google font-medium">

Distributing binary blobs across organizational boundaries — such as between
internal and open-source repositories or from a developer to the public —
requires establishing trust and mitigating security risks. Binary transparency
refers to the collective efforts to create this trust, ensuring that a binary
has not been tampered with. This challenge is particularly relevant at Google,
where binaries from open-source environments are untrusted in the corporate
network, and conversely, corporate binaries are untrusted by the public.

We propose a general concept for binary transparency based on signed
endorsements. An endorsement is an in-toto statement that contains a
time-limited validity and falsifiable claims about a binary's properties. The
endorsement is signed by the developer. This signature is then immutably
recorded in Rekor, a public transparency log. To be effective, the claims within
an endorsement should be falsifiable, meaning there is a clear process to
empirically disprove them.

While this concept is broadly applicable, practical implementations must be
tailored to specific use cases, as requirements for file management, signing,
and publishing differ significantly. We have developed one such implementation,
designed to manage the boundary between open-source and internal repositories at
Google.

---

### Speaker

Tom Binder is a software engineer with Google Deepmind's Oak team, specializing
in the field of digital trust. He builds tools that establish binary
transparency, bridging the gap between Google's internal environment and the
open-source world. His focus also includes attestation verification to prove
that binaries are secure and untampered.

</div>
