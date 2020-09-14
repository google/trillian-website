HTTPS security relies on hundreds of Certificate Authorities (CAs) whose job is to issue certificates while checking that the requester is eligible. For example, they should only issue a certificate for mozilla.org to entities that can prove they control mozilla.org (hopefully only authorized people at Mozilla!).

Unfortunately any CA can issue a certificate for any domain (more or less). So an obscure CA in Russia could issue a legitimate certificate for a UK bank. This led to many problems:

* Governments made fake certificates for e.g. gmail.com, allowing the government to spy on users’ traffic to that domain with a man-in-the-middle attack.
* Some CAs performed inadequate checking of an organisation and mistakenly issued certificates that shouldn’t have been allowed.
* Some CAs had poor security, resulting in hackers stealing their signing key and creating new illegitimate certificates.

Fake certificates are hard to detect if they’re used in a limited, targeted way by a malicious user: no-one else sees the fake certificate, so no-one knows it exists. And the whole premise of HTTPS was weakened by sloppy CAs, so there was a big incentive to fix the problem. However, previous attempts to fix it were ineffective. CAs were passing traditional auditing of their business processes but were still miss-issuing certificates.

## Certificate Transparency is built with Trillian

Certificate Transparency proposed that **if all certificates had to be published openly** in order to be valid, it would:

* discourage deliberate misbehaviour - since any certificates would be public for all to see
* incentivize better security, since mis-issued certificates would be visible
* and provide a way for domain owners (and others) to keep an eye on certificates issued for their domain

Google led the adoption of Certificate Transparency by mandating its use in Chrome, the most popular desktop browser. Chrome checks that every certificate has been published into a Certificate Transparency Log and only accepts it if so. This forces CAs to publish their certificates.

Certificate Transparency Logs use Trillian in verifiable log mode. Certificates are stored as leaves in the Merkle Tree, and the browser verifies that certificates are included in the log[^1], and that the log history hasn’t been tampered with.
[Certificate Transparency has logged more than 2 billion certificates since 2013](https://certificate.transparency.dev/).

[^1]: Technically, a new certificate may not yet have been incorporated into the log, which updates its Merkle tree periodically. The browser accepts a "promise" to insert the certificate (called a signed certificate timestamp, or SCT) as good enough.
