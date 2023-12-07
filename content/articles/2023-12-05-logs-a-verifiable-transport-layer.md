---
url: /articles/logs-a-verifiable-transport-layer
title: "Transparency Logs: A Verifiable Transport Layer"
show_side_bar: true
author: "Martin Hutchinson"
---

Transparency logs are a powerful tool for storing information and presenting it to all users in such a way that they can all verify they see the same entries. Originally deployed for Certificate Transparency over a decade ago, logs are now being used to provide tamper evidence for other ecosystems such as [binary transparency](https://security.googleblog.com/2023/08/pixel-binary-transparency-verifiable.html) and [AI model transparency](https://security.googleblog.com/2023/10/increasing-transparency-in-ai-security.html). When a transparency log is used correctly in a tight feedback loop it allows for timely detection and response to malfeasance, forming an important part of security response to protect users.

This article looks at what it means to verify a log. Readers familiar with verifiable logs probably have an idea about what “verifying a log” means, which is likely one of the following:

1. Verifying that an entry is included in a log
2. Verifying that a new checkpoint for a log is consistent with any previous version (i.e. the log has grown in an append-only fashion)
3. Verifying that all users are seeing the same entries in a log
4. Verifying the entries in a log to discover any malfeasance

The fact that logs can be verified on so many levels is both a blessing and a curse. The blessing is that the first three verification options cover all of the properties of transparency logs needed to provide security guarantees. When these are fully verified, nobody needs to trust the log operator; if the log operator is misbehaving then they will be caught. The curse is that one or more of these verification options is often forgotten because it is easy to fall into the trap of believing that the log is already verified after performing some subset of the verification checks.

Note that the paragraph above delineates these checks into two subgroups:

*   Checks 1-3 verify that the log operator is behaving correctly
*   Check 4 verifies that the entries in the log are safe to rely on and aren’t evidence of malicious activity

Checking for correct log operation is a well beaten path at this point; libraries for verifying inclusion and consistency are available at [github.com/transparency-dev/merkle](https://github.com/transparency-dev/merkle), and witnessing libraries are available at [github.com/transparency-dev/witness](https://github.com/transparency-dev/witness). This verification is standard across all logs that use the [standard checkpoint format](https://github.com/transparency-dev/formats).

The rest of the article will discuss the remaining verification check: looking for evidence of malfeasance stored in the log. This check is arguably the most important, and is the primary motivation for introducing transparency logs: "sunlight is the best disinfectant" after all. Once a log has integrated an entry, an appropriate party must verify the contents of that entry in a timely manner. This verification must go beyond checking the cryptographic log proofs because an entry being present in a log _does not mean that this entry is good_. Lies can also be recorded in logs. Prompt verification of log entries allows such lies to be detected and corrective action taken, ideally before harm is caused.


## A quick analogy: store CCTV

Many large stores have a CCTV security system. If nobody is watching this footage then theft can go undetected indefinitely. Even if the theft is detected via other security practices, e.g. a stock count, then determining how and when the theft occurred will require someone to look through all of the footage.

If this footage was being tracked in real-time, then the thief could be apprehended before they had got away with the crime.

Transparency logs are like this CCTV in that they record everything that happens, but the security benefits are only realised if this recorded data is verified in a timely manner. If you verify the data close to real time, you can prevent fraud or other malicious activity. However, if you don't verify the data until after the fact, the entries are only useful for forensics once the crime is complete and detected via its impact in the real world. Either way the perpetrator will be dealt with, but less damage will occur if they are caught sooner.


## The role of verifiers

By now you should be convinced that verifying entries in a log is just as important as putting entries in a log to realise security benefits from transparency. Any ecosystem trying to drive an increase in security through transparency logs must have one or more entities that are verifying the correctness of entries in the log. Such verifiers must understand how to parse and interpret an entry in order to verify it. This is quite different from verifiers that operate only on the log as a generic verifiable data structure, such as a [log witness](https://github.com/transparency-dev/witness).

Let’s look at some real world examples:
*   [Certificate Transparency](https://certificate.transparency.dev/): each entry is an X.509 certificate issued by Certificate Authorities on behalf of a Domain Owner. The only actor that can verify a certificate to ensure that it hasn’t been misissued is the Domain Owner.
*   [Go Sum DB](https://sum.golang.org/): each entry is a tuple of {module, version, hash}. Any actor can verify that no module + version is mapped to more than one hash within the log.
*   [Sigstore](https://www.sigstore.dev/): each entry contains a tuple of {identity, certificate, signature}. Only the identity owner can verify that these signatures were created on their behalf, and not as the result of key, identity or service compromise.
*   [USBArmory Firmware Transparency](https://github.com/usbarmory/armory-drive/wiki/Firmware-Transparency): each entry contains a tuple of {git commit hash, toolchain, binary hash}. Any actor can check out the code at the given commit, run the build toolchain, and verify that a binary with the given hash is the resulting build artefact.

Some of these ecosystems also have additional verifiers. For example, USBArmory Firmware Transparency also logs a signature, which enables the owner of the release keys to verify that no releases were made without their knowledge. This is similar to Sigstore identity verification.

The [Claimant Model](https://transparency.dev/how-to-design-a-verifiable-system/) provides precise terminology to allow clear analysis and discussion of the different _claims_ that verifiers check.


## In practice

Unlike most users of a log, verifiers must download and inspect every entry at least once. This is required even if the verifier is only responsible for verifying a subset of entries that match a particular condition. The reason for this is that logs cannot verifiably prove that they have returned all entries that match a particular condition, even if the log operator runs a search service alongside the log. Consequently, a verifier that operated only using a search service could be misled into believing they had verified all of the entries that applied to them, but bad results not returned in the search would remain unverified. The good news is that [verifiable maps](https://github.com/google/trillian/tree/master/experimental/batchmap) can provide log operators, or indeed anyone else, a way to run a verifiable search service.

To see these principles in practice, let’s look at a concrete implementation. The [Go Sum DB Verifier](https://github.com/google/trillian-examples/tree/master/clone/cmd/sumdbverify) can be deployed by anyone. When running, it downloads all of the entries from the log into a local database, and then verifies the entries in the log using this local database. Initially this runs in a batch mode to quickly copy the log to the local storage. After completing the initial download, the log is polled frequently to check for new entries. All downloaded entries are cryptographically checked to make sure the local copy is the same as the log publicly commits to. The verifier periodically checks the local copy of the log in the database to ensure that there are no duplicate entries.

Writing a verifier for another log should be possible using this verifier as a template. Much of the code remains the same, with customization only required for:

*   Binding the clone tool to a different log API
*   The verification logic


## Call to action

**Ecosystem designers**: be clear about what the entries in logs are claiming, and be thoughtful about who can verify the truth of these claims. Provide open source tooling to help verification, and be clear in your messaging that verification of logs contents is an important part of your security.

**Ecosystem participants**: verify logs you depend on if possible. If you can’t verify claims yourself, ensure that someone is verifying them. If you depend on a claim that is never verified, you could be tricked and it might never be detected.


