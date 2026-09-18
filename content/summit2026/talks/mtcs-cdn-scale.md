---
url: summit2026/talks/mtcs-cdn-scale
layout: summittalk
title: "Deploying MTCs at CDN scale"
topImage:
type: 
room:
start:
speaker: Luke Valenta
speakerTitle:
---

<div class="font-google font-medium">

Cloudflare aims to provision Merkle Tree Certificates (MTCs) with ML-DSA
signatures for the millions of Cloudflare-proxied domains we manage
classical certificates for today. But ML-DSA public keys and signatures are
far larger than their classical counterparts, and naïvely storing MTCs
would overwhelm the capacity budgets of the globally-distributed key-value
store backing our control plane. Fortunately, the properties of MTCs (e.g.,
batch signing) open up optimizations and deduplication that are not
possible with directly-signed certificates, and make our MTC deployment
feasible. We'll walk through the optimizations we apply, share the size
savings, and offer practical lessons for anyone planning to operate MTCs at
scale.

---

### Speaker

Luke Valenta is a research engineer primarily focused on building secure,
reliable systems and measuring the Internet. He is broadly interested in
computer security, network and protocol measurement, applied cryptography,
privacy, and distributed systems.

</div>
