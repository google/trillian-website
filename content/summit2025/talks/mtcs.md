---
url: summit2025/talks/mtcs.html
layout: summittalk
title: "Merkle Tree Certificates: transparency as the root of trust for the post-quantum age"
topImage:
type:
room:
start:
speaker: Joe DeBlasio
speakerTitle:
---

<div class="font-google font-medium">

As highlighted in last year's transparency.dev summit, the top quantum-safe
signature algorithms require significant increases in key and signature sizes.
As a result, a straightforward adaptation of TLS and CT to use these algorithms
results in a massive increase in the size of the TLS handshake and the storage
and bandwidth requirements for CT logs. Combined with shorter certificate
lifetimes, this path would introduce several significant challenges to the CT
ecosystem.

To mitigate these costs, Merkle Tree Certificates (MTCs), an early
internet-araft co-authored by Chrome, Cloudflare, and Geomys, uses public
logging as a first-class building block for establishing trust. MTCs mitigate
the size penalty of PQ on TLS handshakes in the common case, and can result in
substantial storage savings over the status quo compared with the same volume of
certificates logged to CT.

In this talk, I'll give an overview of MTCs from a technical perspective, how
standardization efforts are going, discuss how Chrome and Cloudflare are
experimenting with MTCs, discuss how Chrome imagines adopting and migrating the
web to MTCs, and what the future might look like from a CT - and root program -
policy perspective.

---

### Speaker

Joe DeBlasio is an engineering manager and tech lead on Chrome's Security team.
His team focuses on network security, including engineering and policy for
Certificate Transparency, the Chrome Root Program, and TLS. Joe is interested
broadly in finding ways to improve the security of the web as a whole, and holds
a PhD in network security measurement from UC San Diego.

</div>
