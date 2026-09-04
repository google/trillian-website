---
url: summit2026/talks/git-ratchet
layout: summittalk
title: "Git-ratchet: tooling for Git commit transparency"
topImage:
type: lightning
room:
start:
speaker: Ben Birt
speakerTitle:
---

<div class="font-google font-medium">

Dependents of Git repositories often depend directly on a
branch or tag. Unfortunately, without taking further precautions, this
exposes those dependents to attack by any party authorised to change the
target commits of those branches or tags. Worse, those attacks can then be
hidden by scrubbing the evidence - by repointing the branch or tag back to
a legitimate commit. Git-ratchet is a tool which dependents can use to
enforce that upstream Git repository owners are transparent about their
branch and tag state (and how it evolves over time) - and it uses witnesses
to prevent split-view attacks on that commit transparency.

---

### Speaker

Ben is a software engineer on Google's Oak team. He is part
of the group that launched Google's new Private AI Compute (PAIC) platform
and most recently set up PAIC's new Tessera-based binary transparency log.

</div>
