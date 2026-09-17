---
url: summit2026/talks/sigsum
layout: summittalk
title: "The diff between sigsum/v1 and sigsum/v2?"
topImage:
type: lightning
room:
start:
speaker: Rasmus Dahlberg
speakerTitle:
---

<div class="font-google font-medium">

Sigsum is a transparency system that makes signatures discoverable [1].
In other words: everytime a signature is created that an end-user
accepts as valid, then that signature also becomes discoverable in a
global append-only log.

Since dubbing the stable version of Sigsum in 2023 [2], many of the bits
and pieces have been made available as independent specifications at
C2SP.org [3].  The next major version of Sigsum (v2.0.0) is therefore
expected to be mostly composed of multiple C2SP.org specifications:
tlog-witness, tlog-cosignature, tlog-tiles, tlog-proof, https-bastion,
and so forth.  One important piece that's still missing is the upcoming
v2 leaf format.  We're currently working with people from Sigstore to
define a single leaf format that could work for both Sigsum and
Sigstore [4], thereby taking us in the direction of interoperability.

This talk provides a primer of what we're planning to change from
sigsum/v1 to sigsum/v2.  We will also cover the work-in-progress leaf
format, which among other things brings PQ resistance and separate
signing contexts [5, 6, 7].

1: https://www.sigsum.org/  
2: https://lists.sigsum.org/mailman3/hyperkitty/list/sigsum-general@lists.sigsum.org/thread/LX42ONBGWO4JMSMCDGS5Z7ORKJHFHQOO/  
3: https://git.glasklar.is/sigsum/project/documentation/-/blob/main/proposals/2024-01-on-specifications-and-governance.md  
4: https://github.com/C2SP/C2SP/pull/244  
5: https://git.glasklar.is/sigsum/project/documentation/-/blob/main/archive/2024-11-04-sigsum-v2-ideas  
6: https://git.glasklar.is/sigsum/project/documentation/-/blob/main/archive/2025-09-03-leaf-context-for-sigsum-v2.md  
7: https://git.glasklar.is/sigsum/project/documentation/-/blob/main/archive/2026-05-12-sigsum-next-meetup-notes

---

### Speaker

Rasmus Dahlberg is a computer scientist and software engineer based in
Stockholm, Sweden. He has contributed to transparency log research and
development since 2016. Examples of recent contributions include his
involvement in the Sigsum project and C2SP community specifications
related to witness cosigning.

</div>
