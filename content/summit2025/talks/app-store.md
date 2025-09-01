---
url: summit2025/talks/app-store.html
layout: summittalk
title: "Let’s Make the Internet an App Store (but not in the dystopian way)"
topImage:
type:
room:
start:
speaker: Michael Rosenberg
speakerTitle:
---

<div class="font-google font-medium">

The web browser is the most powerful application platform in existence. As long
as you have the right hardware APIs, you can run anything you want in a browser.
Well, almost anything. Common wisdom is that end-to-end encrypted applications
should not be run in the browser. In fact, Javascript cryptography as a whole is
widely Considered Harmful. This is because the server ultimately has control: if
the server gives a client malicious Javascript, the client’s end-to-end security
guarantees vanish.

Native apps don’t have this issue. This is because app stores offer far more
guarantees than a simple web server: they sign the binaries they distribute,
they ensure every user gets the same binary, and they retain copies of binaries
for future inspection if necessary. In other words, app stores can serve
end-to-end encryption apps because they directly provide integrity, consistency,
and transparency for their binaries.

In this talk I will discuss Web Application Integrity, Consistency, and
Transparency (WAICT), a plan to offer these properties to the entire web in a
way that’s less centralized than any app store. With standardization and browser
buy-in, we will soon be able to run browser-based tools like WhatsApp, Cryptpad,
Jitsi, and Bitwarden with the same security properties as if they were native
apps.

---

### Speaker

Michael Rosenberg is a cryptography engineer at Cloudflare. His work lately has
involved drafting and implementing transparency standards and constructing
hybrid-PQ password-based cryptographic primitives.

</div>
