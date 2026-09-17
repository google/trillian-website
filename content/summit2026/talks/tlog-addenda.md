---
url: summit2026/talks/tlog-addenda
layout: summittalk
title: "tlog-addenda: an adoptable standard for log-adjacent data, mirroring, and redaction too!"
topImage:
type: lightning
room:
start:
speaker: Eric Myhre
speakerTitle:
---

<div class="font-google font-medium">

Transparency Logs are great for publishing commitments of data, but when
rolling them out in a new domain, there are two common questions that can
cause stalls in the design process:

* what do we do with this data that we want the log's commitment on,
  but is... big?
* what do we do with data that we might need to redact (e.g. stop
  publishing, without taking down the whole log) someday?

These questions do have conventional answers -- and, yes, long story short,
it's "put another hash on it" -- but this is currently communicated as
folklore, and solved on a per-application basis rather than standardized.

tlog-addenda is a newly proposed standard that offers concrete but minimally
opinionated answers to these recurring questions. It offers a standard for how
to store and access additional data alongside a transparency log; how to link
it from the log's entries; and a guide to how to structure log entries so that
data is redactable without having overly large impact the monitorability of
the log. Being content-addressed, it also deduplicates any large addenda data.
It is designed to do these things while still dictating as little structure as
possible on log entries: the majority of the entry is still free-form.

tlog-addenda is an /optional/ standard.  Adopters of it will be able to share
common tools (e.g. log explorers, mirror tools) that work over any log+entry
that’s aligned with the standard.

tlog-addenda is grounded in lessons learned from static-ct log entry designs,
and refined while building new systems."

---

### Speaker

Eric Myhre is an independent hasher and haberdasher, with a long running
interest in designing serialization protocols, content addressed storage
systems, and security through legibility. Transparency logs are one of the
latest natural extensions of these interests.

</div>
