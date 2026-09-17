---
url: summit2026/talks/witness-cosigning
layout: summittalk
title: "Setting Thresholds in Witness Cosigning"
topImage:
type: lightning
room:
start:
speaker: Lucia Lavagnino
speakerTitle:
---

<div class="font-google font-medium">

Transparency logs (TLs) underpin key transparency, binary transparency, and
software supply-chain security.  Deployed TLs rely on witness cosigning to
cryptographically prevent a malicious log operator from serving incompatible
views of the log to different clients, a so-called split-view attack.  This is
achieved by appointing a small set of $n$ trustworthy entities called witnesses,
who independently verify that each new log state is consistent with the previous
one and cosign it.  Clients accept a log state only if it carries at least $t$
out of $n$ valid cosignatures.  Witness cosigning is sound in an idealized
setting where witnesses are honest and always online.  Real deployments,
however, must withstand witnesses becoming malicious, going temporarily
unresponsive, or both at once.

We consider a rational adversary that wants to stay in the system and avoid
being caught. An honest witness never cosigns two incompatible log states, while
a malicious one may. A malicious witness, however, never withholds its
cosignature, since a witness that stops signing for a long period is removed
from the witness set.

This talk analyzes witness cosigning in two models. In the first, without
monitors, protecting against split views in the presence of up to $m$ malicious
witnesses requires a threshold of at least $\lceil (n+m+1)/2 \rceil$
cosignatures, strictly above a simple majority.  The same bound caps how many
witnesses may be unresponsive before split-view protection is lost.

In the second model, we consider monitors: a different setting arises when
monitors shift part of this burden onto continuous log inspection, allowing
clients who subscribe to monitor alerts to safely accept fewer cosignatures.  By
subscribing to a monitor, the client can split the number of signatures it needs
to check with the monitor.  When a monitor or a client catches a split view, it
obtains publicly verifiable evidence against the log operator, and against any
witness that cosigned both incompatible log states.

Thresholds in deployed transparency logs are key to their security guarantees,
and must be set considerably higher than intuition suggests.

---

### Speaker

Lucia Lavagnino is a PhD student in cryptography at Chalmers University of
Technology, where she works on transparency systems with her supervisor Elena
Pagnin, and she recently presented her work on the statistical analysis of
anonymous committee selection at SCN 2026.

</div>
