---
url: summit2026/talks/sigstore.html
layout: summittalk
title: "Simplicity through Transparency: How the PQC Migration is Streamlining Sigstore"
topImage:
type:
room:
start:
speaker: Hayden Blauzvern
speakerTitle:
---

<div class="font-google font-medium">

The transition to post-quantum cryptography is an emerging necessity, but
PQC algorithms like ML-DSA introduce a significant hurdle for signing: keys
and signatures are orders of magnitude larger, ballooning metadata, egress
and storage costs for transparency ecosystems.

In this talk, we present the design for PQC for Sigstore, showing how
migrating to quantum-resistant algorithms is a greenfield opportunity to
drastically simplify artifact signing and verification with Sigstore.
Instead of just swapping out classical algorithms, we leveraged this unique
opportunity to revisit the system architecture and focus the design around
the transparency log as the primary enabler of simplicity and auditability.

Sigstore will provide "keyless" identity-bound signatures rooted in
transparency. We'll explore how this shift shrinks verification metadata
down to just a signed checkpoint while still preserving Sigstore's security
and threat models. Finally, we will discuss how a new leaf format elegantly
solves PQC signing algorithm storage overhead while concurrently preventing
log poisoning and preserving user privacy.

---

### Speaker

Hayden Blauzvern is a technical lead on Google’s Open Source Security
Team, focused on making open-source software supply chain more secure and
auditable. Hayden is a maintainer and the community chair on the Sigstore
project.

</div>
