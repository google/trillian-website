---
url: summit2026/talks/sostenuto
layout: summittalk
title: "Sostenuto: Scaling & Sustaining Android Binary Transparency"
topImage:
type:
room:
start:
speaker: Billy Lau
speakerTitle:
---

<div class="font-google font-medium">

Since its inception, Android Binary Transparency (ABT) has served as a
foundational security primitive for the Android ecosystem. While our effort
began by tackling transparency at the firmware level (characterized by
low-cadence monolithic OS builds and manually curated log entries),
extending these guarantees to the application layer (building on our
previous work presented in [Crescendo](https://www.youtube.com/watch?v=TZMspOgnr_A))
introduces distinct onerational requirements, such as high-volume input
processing and data integrity. Unlike OS images, apps have continuous release
cadences, multi-variant delivery formats, and widespread deployment footprints.

In this talk, we discuss [Google Product Application Transparency](https://developers.google.com/android/binary_transparency/google_apk/overview)
(GPAT) and [Android Mainline Modules Transparency](https://developers.google.com/android/binary_transparency/mainline_modules/overview)
(modular OS components delivered via app update channels), extending
cryptographic transparency guarantees to standalone product applications
and OS modules. Logging continuous-release applications such as Google Play
Services (com.google.android.gms) and YouTube (com.google.android.youtube)
differs substantially from firmware logging: release cadences shift from
monthly to continuous, and binary releases involve multidimensional variant
matrices (varying across ABIs, screen densities, and dynamic feature
splits). Consequently, a single logical version does not yield a single
binary hash; it produces a combinatorial explosion of split binaries that
must all be mapped, deduplicated, and verified without corrupting the log's
state.

To address these requirements, we designed and built TLUaaS (Transparency
Log Updater as a Service), a backend ingestion and orchestration pipeline
engineered for large-scale log writing. We will discuss the design
decisions, failure modes, and operational lessons learned from running
TLUaaS in production, including:

- Variant Resolution and Pre-Ingestion Deduplication: How TLUaaS computes
document deltas across continuous release streams, resolves multi-APK
variant sets, and deterministically normalizes binaries before committing
irreversible writes to the log.
- Production Safeguards and Ingestion Containment: Managing ingestion
pipelines where source metadata (including app signing keys, true release
manifests, and distribution streams) only exists in production environments
restricts our ability to perform pre-production testing. Because synthetic
data cannot account for real-world production variability, we will cover
the operational safeguards developed to mitigate bad-data ingestion, such
as emergency containment fail-safes for test packages and strict
server-targeting controls.

To illustrate end-to-end verification, we will demonstrate [Uraniborg](https://github.com/android/android-binary-transparency/tree/main/uraniborg),
an open-source audit tool used to scan on-device APKs and verify them
against published transparency logs and cryptographic proofs. Attendees
will leave with practical design patterns for operating immutable
transparency logs that take input from multiple pipelines at scale,
techniques for handling variant-heavy release pipelines, and strategies for
maintaining data integrity in supply-chain verification systems.

---

### Speaker

Billy Lau is a security engineer in the Android Security team. He is
primarily interested in information security, with emphasis on operating
systems and user applications. In recent years, he has been trying to
leverage transparency constructs into the Android OS and influence the
larger ecosystem for the further protection of users. He has been examining
various security designs for mobile devices and analyzing the security and
privacy impacts of mobile computing devices in everyday life. He
particularly loves to challenge the status quo on conventional security
assumptions, which are often broken when put to test. He aspires to push
the scientific envelope in mobile security and to make Android the most
secure consumer operating system by identifying and solving the deepest
problems in the realm of mobile security and leveraging his position in the
industry to make mobile computing more reliable and secure. In general, he
hopes to make a difference by making usable computer systems more secure
and secure systems more usable.

</div>
