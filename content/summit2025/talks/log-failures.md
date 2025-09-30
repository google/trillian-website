---
url: summit2025/talks/log-failures.html
layout: summittalk
title: "Learning from Certificate Transparency Log Failures"
topImage:
type:
room:
start:
speaker: Andrew Ayer
speakerTitle:
---

<div class="font-google font-medium">

Certificate Transparency's defining property is verifiability, which allows any
party to check that a log is behaving properly. Verifiability is intended to
catch malicious logs, but in practice innocent operational mistakes have caused
logs to fail to uphold their verifiable properties. Some failures, like signing
an inconsistent tree head, are irrecoverable and require the log to be retired,
threatening ecosystem stability. Other failures, like returning incorrect
entries, are recoverable, but cause temporary disruptions to monitoring.

Over the past nine years of operating a Certificate Transparency
monitor/auditor, I've witnessed countless ways that logs malfunction.  This talk
will present the different ways that logs can fail, what I've learned about
building a monitor that handles recoverable failures robustly, and offer
suggestions to log implementers for reducing the likelihood of log failure.

---

### Speaker

Andrew Ayer is a software engineer and founder of SSLMate.  He is the author of
Cert Spotter, a Certificate Transparency monitor and auditor, a frequent
contributor to CT policy discussions, and a co-maintainer of the static-ct-api
specification.

</div>
