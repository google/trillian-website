---
url: schedule/sct-auditing.html
layout: summittalk
title: "⚡ Lightning Talk: SCT Auditing Revisited"
topImage:
type: standard
room: Ziggy Stardust
start: 2024-10-09T15:45:00
speaker: Lena Heimberger
speakerTitle: Cloudflare
---

<div class="font-google font-medium">

A Signed Certificate Timestamp (SCT) is a promise that a Certificate Transparency (CT) log will eventually incorporate a certificate into its public log. This inclusion allows users to account for issued certificates and detect misissued certificates. By default, clients do not check if the log fulfilled the promise given with the SCT, as requesting a proof of inclusion from the log leaks the browsing history to the log. If an SCT is not checked, a sophisticated attacker could serve a bogus certificate that compromises privacy. There are numerous proposals for privacy-preserving SCT auditing, including foregoing the current architecture and switching to a new certificate system. 
In this talk we start by giving an update on current deployments and recent developments in SCT auditing proposals. We will follow by covering how SCT auditing could be deployed wider, auditing (almost) all connections either via cryptographic or non-cryptographic strategies. We then discuss a potential scenario where Merkle Tree Certificates (MTC) or a similar system is deployed, which would significantly reduce the number of SCTs that need to be audited: By using MTC, an outdated device may need to fall back to a different certificate system, e.g. X.509, we discuss several scenarios for the fallbacks and their estimated probabilities. We revisit SCT auditing strategies given that our estimates show that less than 0.1% of the connections will require an audit. 

* [Speaker Slides]({{< rel "/pdfs/summit2024/heimberger-sct.pdf" >}})
* [Talk Recording](https://youtu.be/f8unMB2Qjho?si=72ClhykaYDHf0sND)

---

### Speaker

Lena is a PhD student at Graz University of Technology and currently a research intern at Cloudflare Research, working on SCT auditing, especially in the context of Merkle Tree Certificate fallbacks. 

</div>