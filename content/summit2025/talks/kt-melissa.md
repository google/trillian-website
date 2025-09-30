---
url: summit2025/talks/kt-melissa.html
layout: summittalk
title: "Key Transparency: Introduction, recent results, and active research areas"
topImage:
type:
room:
start:
speaker: Melissa Chase
speakerTitle:
---

<div class="font-google font-medium">

End-to-end encryption security guarantees crucially rely on the assumption that
the user has the correct identity public key for the person they wish to
communicate with. Traditionally, E2EE communication systems have required the
user to perform cumbersome manual checks to verify these keys, e.g. by
physically scanning QR codes, or by verbally reading a fingerprint. In practice,
these verifications are rarely performed.

Key transparency, first introduced in CONIKS, allows much of this verification
to be automated. Roughly, the communication service provider regularly publishes
a commitment to the identity key directory; this commitment must be publicly and
consistently visible to all users. Every key request is accompanied by a proof
that the key is correct w.r.t. the committed directory. Finally, the user’s
device regularly monitors the committed directory to ensure that the user’s key
is correctly reflected.

This talk will present the motivation for key transparency and introduce the
approach and intuition behind the constructions. It will then overview the state
of the art, survey current deployments, and discuss some areas of active
research.

---

### Speaker

Melissa Chase is a principal researcher in the Cryptography group at Microsoft
Research, Redmond. Her research focuses on defining, constructing, and analyzing
cryptographic protocols and primitives, with an emphasis on privacy-motivated
applications. She has been at Microsoft for more than 15 years; her work has
also formed the basis for systems deployed at Signal and WhatsApp. She has
worked in a variety of areas within cryptography and privacy, including
anonymous credentials, electronic cash, attribute-based encryption, and most
recently problems in identity, transparency, and end-to-end encryption.

</div>
