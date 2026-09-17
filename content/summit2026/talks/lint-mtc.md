---
url: summit2026/talks/lint-mtc
layout: summittalk
title: "Nobody Can Lint a Merkle Tree Certificate Yet"
topImage:
type: lightning
room:
start:
speaker: Corey Bonnell
speakerTitle:
---

<div class="font-google font-medium">

The Web PKI learned two lessons the hard way: catch problems before issuance,
and make anything that slips through publicly visible. Pre-issuance certificate
linting provides the first, preventing key material from signing malformed or
non-compliant objects; Certificate Transparency provides the second. Both
arrived only after the Web PKI had been in widespread use for many years, by
which point preventable problems were already common and long-standing
requirements had gone unenforced at issuance until linters were available.

In Merkle Tree Certificates (MTC), logging is issuance rather than a step that
follows it. Yet no zlint or pkilint exists for the new object types MTC
introduces, such as TBSCertificateLogEntry. This talk argues that MTC should be
validation-native as well as transparency-native. Building the tooling now,
while the spec is still draft, surfaces ambiguities and contradictions in the
standard and gives implementation guidance to everyone who will build on MTC.

---

### Speaker

Corey Bonnell is the founder of TurboLight Solutions, a PKI consultancy. He has
spent over a decade working in the Web PKI, including at two publicly trusted
certificate authorities, and created the pkilint linting framework and
contributed to zlint.

</div>
