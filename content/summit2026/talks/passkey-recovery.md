---
url: summit2026/talks/passkey-recovery
layout: summittalk
title: "When Every Retry Matters: Tamper-Evident Passkey Recovery at Internet Scale"
topImage:
type:
room:
start:
speaker: Joe Linscott
speakerTitle:
---

<div class="font-google font-medium">

Passkey recovery is a high-stakes state machine: every failed PIN attempt must
advance a counter, the counter must not roll back, and an attacker must not be
able to create a split view of whether a user has reached lockout. In Microsoft
Password Manager, Azure Confidential Ledger is used to integrity-protect the
retry counter and recovery metadata that govern cross-device passkey
activation. The result is a practical transparency system embedded directly in
an authentication control plane, not simply an audit log examined after an
incident.

This talk presents the design and operational lessons from supporting a
large-scale consumer passkey service with tens of millions of projected
recovery retries each year. We will explain how an append-only, tamper-evident
ledger complements confidential computing, hardware-rooted key protection,
attestation, and device-bound authorization. The key design principle is
separation of duties: confidential compute protects sensitive operations while
they execute, and the ledger makes security-critical state changes durable,
ordered, and independently verifiable against rollback or manipulation.

---

### Speaker

Joe Linscott is a Senior Product Manager at Microsoft focused on transparency
and confidential computing.

</div>
