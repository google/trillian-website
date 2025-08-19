---
url: summit2025/talks/silentct.html
layout: summittalk
title: "silentct: A Certificate Transparency monitor that filters out the noise"
topImage:
type:
room:
start:
speaker: Rasmus Dahlberg
speakerTitle:
---

<div class="font-google font-medium">

Certificate Transparency sets out to make the web's public-key infrastructure
auditable.  Yet, anyone who's tried to opt in to such auditing quickly notices
they get a lot of notifications about legitimately issued certificates.  For
example, a site that uses Let's Encrypt regularly gets their certificate renewed
once every 60 days.  With the upcoming short lived certificates, this could go
as low as once every few days.  This is a lot of certificate notifications for a
single site, not to mention if one is someone managing multiple sites!

silentct is an implementation of a Certificate Transparency monitor that filters
out the noise.  This talk gives an introduction to the silentct design and
implementation, including the speaker's usage experiences so far.

The free and open-source software implementation is available at:
https://git.glasklar.is/rgdd/silentct

---

### Speaker

Rasmus Dahlberg is a computer scientist and software engineer based in Karlstad,
Sweden. He has contributed to transparency log research and development since
2016. Examples of recent contributions include his involvement in the Sigsum
project and the C2SP community specifications related to witness cosigning.

</div>
