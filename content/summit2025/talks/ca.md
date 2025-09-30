---
url: summit2025/talks/ca.html
layout: summittalk
title: "CT: Managing uptime as a CA"
topImage:
type:
room:
start:
speaker: Matthew McPherrin
speakerTitle:
---

<div class="font-google font-medium">

As a Certificate Authority, Let's Encrypt needs to submit pre-certificates to CT
logs to get SCTs for embedding in certificates. This adds an external dependency
on our issuance process, which was historically one of the big concerns CAs have
had about CT. In this talk, we'll discuss how we've managed that availability
risk through the different submission algorithms we've used, and what the real
world impact CT has had on our certificate issuance process. Looking forward,
our new Static CT logs provide different tradeoffs on latency and reliability,
which will make the Let's Encrypt CA more reliable overall, and how operating CT
logs helps us keep our CA running.

---

### Speaker

Matthew is the technical lead for the Let’s Encrypt SRE team, which operates our
Certificate Authority and Certificate Transparency logs. He has worked in PKI,
infrastructure security, open-source, and improving the reliability and scale of
the entire Web PKI.

</div>
