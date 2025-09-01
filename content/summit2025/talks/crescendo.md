---
url: summit2025/talks/crescendo.html
layout: summittalk
title: "Crescendo: Increasing the intensity of binary transparency in the Android ecosystem"
topImage:
type:
room:
start:
speaker: Billy Lau
speakerTitle:
---

<div class="font-google font-medium">

In this talk I will be discussing the progress that we made since The Odyssey,
Android's First Firmware Binary Transparency [CATS2023]. In particular, I will
walk through the process of expanding coverage of the type of binaries that's
running on an Android device, and the rationale behind that.

In particular, I will discuss how we expanded coverage from the granularity of
an entire firmware as a whole to the APK level, particularly privileged/system
APKs. While the work aims to cover all Google produced APKs, I will use a
category of APKs known as Google System Services as a working example throughout
this talk. I will first describe some deployment challenges of expanding
coverage and perform a deep dive on how we tackle them, zooming in on tackling
the issue of not having access to the APKs (due to the nature of APK
distribution by Google Play) during the time of log writing operation.

I will also shed some light on the operational aspects of this work, which may
be beneficial to the aspirational practitioners in the audience. We will examine
the limitations in the initial approach, which eventually points to the
conclusion that automation is and should be the gold standard when it comes to
large scale binary transparency publication (and deployment).

Since automation is a large subject by itself, I will spend some time
highlighting the complexity of building automation surrounding legacy systems
and provide some tips on working across functional and even product areas in
order to make automation a reality.

To end, we will peek at some projects in the pipeline to entice continuous
engagements with the community. I will also include a couple of open ended
questions to stir thoughts and provoke further discussions.

---

### Speaker

Billy Lau is a security engineer in the Android Security team. He is primarily
interested in information security, with emphasis on operating systems and user
applications. In recent years, he has been trying to leverage transparency
constructs into the Android OS and influence the entire ecosystem for the
further protection of users. He has been examining various security designs for
mobile devices and analyzing the security and privacy impacts of mobile
computing devices in everyday life. He particularly loves to challenge the
status quo on conventional security assumptions, which are often broken when put
to test. He aspires to push the scientific envelope in mobile security and to
make Android the most secure consumer operating system by identifying and
solving the deepest problems in the realm of mobile security and leveraging his
position in the industry to make mobile computing more reliable and secure. In
general, he hopes to make a difference by making usable computer systems more
secure and secure systems more usable.

</div>
