---
url: summit2026/talks/tkey
layout: summittalk
title: "The TKey sign-if-logged tool"
topImage:
type:
room:
start:
speaker: Niels Möller
speakerTitle:
---

<div class="font-google font-medium">

The Sigsum transparency system enables detection of unexpected or
malicious use of a signing key. The owner of a signing key submits
each signature made to a Sigsum log, and gets back a corresponding
Sigsum proof of logging. The parties that rely on these signatures
(e.g., for installing signed software updates) are expected to reject
any signature that does not come with a valid proof of logging. The
key owner can then monitor the log and discover all signatures made
that are going to be accepted.

Discoverability of signatures is a desirable property, but what if you
are making signatures in a context where those relying on your
signatures are unable to process a Sigsum proof? E.g., the signature
may have to follow some standard that's not easily extended with a
Sigsum proof, or the signatures have to be verified on a slow embedded
system where extended verification is impractical for performance
reasons.

The Tillitis TKey is an open source USB hardware security device which
allows running small arbitrary applications in a more secure
environment, using measured boot to give each application its own
secret. Security keys and HSMs, including the TKey, are often used as
signing oracles. But we can do better, by having the device also
enforce Sigsum logging of the data before signing.

The sign-if-logged tool consists of a host program, and a TKey device
app. The host program configures the device app with a Sigsum policy
and a list of authorized submitter keys. The host program can then ask
the device to sign data, but the device requires that the host also
provides a Sigsum proof, valid according to its configuration.

This way, the signing party gets discoverability of signatures, and
the ability to detect unexpected or malicious key usage, without the
parties relying on those signatures having to know about it.

The talk will give a brief introduction to Sigsum and the TKey
hardware. It will explain how the sign-if-logged tool works and how to
use it. If time permits, it will also introduce the Sigsum C library,
which is designed with constrained embedded systems in mind.

A version 1.0.0 of the sign-if-logged tool was released this summer.

Source code and documentation:
https://git.glasklar.is/sigsum/apps/sign-if-logged

---

### Speaker

Working with the Sigsum project at Glasklar Teknik since 2022. Main
author and maintainer of the GNU Nettle crypto library. PhD from the
Automatic Control group at KTH.

</div>
