---
url: summit2026/talks/logcabin
layout: summittalk
title: "LogCabin: a split-view resistant ledger as a t-log witness"
topImage:
type: lightning
room:
start:
speaker: Ernesto Ocampo
speakerTitle:
---

<div class="font-google font-medium">

Third-party witness networks are an effective defense against split-view
attacks on transparency logs, but they require coordinating multiple
independent organizations — incurring reliability, legal, and operational
cross-org constraints and risks.

This talk presents [LogCabin](https://github.com/project-oak/logcabin), an
open-source, split-view resistant ledger service built on a Nimble-inspired
protocol (Nimble: OSDI '23). When deployed as a witness, LogCabin enables a
new scenario: a single operator can offer a scalable t-log where the
operator itself is technically — not just practically — incapable of
creating undetected split views. As a structurally novel type of witness,
it contributes to enriching existing witness networks.

LogCabin uses a quorum of endorsers, each running as a Trusted Execution
Environment (TEE) application on Oak Restricted Kernel (Project Oak), to
collectively maintain append-only ledgers. Each append requires a majority
of endorsers to independently sign the new ledger state. Endorser signing
keys are generated ephemerally within TEE-protected volatile memory and
bound to the binary through a DICE attestation chain, so relying parties
can use remote attestation to cryptographically verify that signatures were
produced by a specific, measured build. The endorser's private key never
leaves the TEE, and the protocol core is a Rust no_std, zero-I/O pure state
machine — compact and auditable.

While LogCabin can be used as a powerful standalone ledger, its impact
magnifies when deployed as a witness to a high-throughput Merkle-tree-based
transparency log, with the overall system still speaking standard, widely
adopted t-log protocols. This approach also shifts the bar for
collusion-based split views: rather than requiring the log operator to
collude with third-party witnesses, collusion is required with the TEE
hardware manufacturer.

LogCabin's strong integrity guarantees come with real operational
challenges. The protocol prioritizes correctness over availability: if
conditions for safe operation are not met, LogCabin will fail rather than
drop its integrity guarantees. If a majority of endorsers in a cohort is
permanently lost, the instance itself is irrecoverably lost. Achieving
production-grade, continuous, reliable operation — including TEE lifecycle
management, cohort reconfiguration under load, and resilience to
infrastructure failures — is a hard problem. In this talk, we explore
proposals to achieve high levels of reliability with LogCabin and share
early results.

At present, the LogCabin core endorser TEE application is complete and
open-sourced, while the coordination, interface, and storage layers are
under construction.

---

### Speaker

Ernesto is a software engineer at Google DeepMind working on Security and
Privacy, where he designs systems to establish cryptographic trust and
transparency for server and AI workloads. His work spans confidential
computing, Trusted Execution Environments (TEEs), and verifiable systems,
with his current focus centering on the emerging challenges of agentic
security and privacy.

</div>
