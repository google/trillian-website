---
url: application/strengthen-discovery-of-encryption-keys
layout: linked-headers
eyebrow: Use Trillian's Map Mode to
title: Strengthen discovery of encryption keys
description: Key Transparency is a design for a tamper-evident key discovery service that providers of end-to-end encryption services could implement. Key Transparency uses Trillian's Map Mode.
headers:
   - display: "Tamper evident discovery"
     link: "key-transparency-offers-tamper-evident-key-discovery"
   - display: "Advantages"
     link: "advantages-of-key-transparency"
   - display: "Experimental map mode"
     link: "key-transparency-uses-trillians-experimental-map-mode"
   - display: "Users can check"
     link: "users-can-check-theyre-seeing-the-same-public-key"
   - display: "Misbehaviour is logged"
     link: "misbehaviour-by-key-servers-is-permanently-logged"
   - display: "Background: the problem"
     link: "background-the-problem-with-end-to-end-encryption"
   - display: "Further resources"
     link: "further-resources"
---

## Key Transparency offers tamper-evident key discovery

Key Transparency is a design for a tamper-evident key discovery service that providers of end-to-end encryption services could implement. Key Transparency solves [the problem of key discovery](#background-the-problem-with-end-to-end-encryption) using Trillian's Map Mode.

## Advantages of Key Transparency

<div class="font-google font-medium">

* Automate user discovery of end-to-end encryption keys.
* Provide a shared global view of public keys - everyone should see the same public key for a given username.
* Increase the difficulty of an attacker performing a man-in-the-middle attack.
* Record a history of a user's public keys that can't be altered, ensuring misbehaviour by the key server will be recorded, even if it is temporary.
* Reduce the impact of a compromised server or legal demands for surveillance.

</div>

## Key Transparency uses Trillian's Experimental Map Mode

Key Transparency uses Trillian's experimental map mode, rather than the more common log mode. Specifically, Key Transparency uses a [log-backed map]({{< relref "/verifiable-data-structures#log-backed-map" >}}) which is a [verifiable map]({{< relref "/verifiable-data-structures#verifiable-map" >}}) combined with a [verifiable log]({{< relref "/verifiable-data-structures#verifiable-log" >}}).

### Key discovery with Key Transparency

To illustrate the way key discovery works in Key Transparency, we refer to a messaging app that uses mobile numbers to identify users. (Key Transparency is more flexible, supporting any type of username and multiple public keys per username.)

{{< rel-figure "/images/application-illustrations/diagram_key-transparency.svg" >}}

When Bob wants to send Alice an encrypted message:

1. Alice's app uploads her mobile number and public key to the key server.

   The key server calculates a special hash on the mobile number and stores the public key in a “log-backed map” - a data structure which links mobile numbers to public keys.

2. Alice's app asks the key server for its own public key.

   The key server calculates the hash of the mobile number and uses it to locate the public key in the log-backed map. It returns the public key along with additional data that can be used to verify the map.

3. The app ensures that the public key matches its local key.

4. The app cryptographically verifies the map by calculating a chain of hashes from the public key up to a single map head hash. **If another user can calculate the same map head hash, it proves both users were querying the same map.**

5. The app “gossips” each map head hash it observes to other users by a gossip network. This is currently not defined by Key Transparency.

   Bob has Alice's mobile number and wants to send a message with the app.

6. Bob's app asks the key server for Alice's public key from her mobile number, and receives Alice's public key and a signed map head hash.

7. Bob's app cryptographically verifies the map by calculating a chain of hashes from the public key up to a single map head hash.

8. Bob's app compares the calculated map head hash with the one received via the gossip network.

   If Bob's app saw the same map head hash as Alice's app, they can be sure they have the same public key for Alice.

Terms:

* **App** - like Signal or Threema (Key Transparency supports any client software that links a username to a public key.)
* **Phone number** - used by other users to identify the person.
* **Account** - the link between the app and the users' phone number. For example, a user has a WhatsApp account after they receive an SMS from WhatsApp proving they control the number.
* **Public key** - the public part of the keys used by other users to encrypt messages to the user.
* **Key server** - a server which implements the Key Transparency pattern as a Trillian personality.

## Users can check they're seeing the same public key

The strength of Key Transparency is that two different apps can ensure they are accessing exactly the same map structure as long as they can compare a single value, the map head hash.

Both the sender and the receiver query for the receiver's public key, while verifying the map. If they both agree on the map head hash, the sender knows it has received the right public key.

As with all verifiable data structures, it's important they are monitored for consistency over time rather than at a single point in time. This ensures that values from the past can't be covertly modified without being detected.

## Misbehaviour by key servers is permanently logged

A key server can try and lie about a user's public keys but if the gossip system works, two apps will discover mismatching map heads which is suspicious.
Because keys are stored in a log-backed map, all changes to the map go into a verifiable log. This means that if a server lies about a key, even for a short time, there's a permanent record in the log.

## Background: the problem with end-to-end encryption

Billions of people's private messages are protected with end-to-end encryption like that built into Signal, iMessage, WhatsApp and others.

When you send an end-to-end encrypted message, your device encrypts to a public key where the private part exists only on the device of the person you're contacting. The provider doesn't have the private key, so can't read the content of the message as they transport it from you to the other person.

### Key discovery is the weakest link

The weakness is how the sender "discovers" the public key in the first place. How do they know they got the right key, and not a fake one offered by the provider?

A provider can offer fake keys to a pair of users and relay messages between them. Neither would know they are encrypting to the provider, rather than directly to the other user. This is called a man-in-the-middle attack.

### Governments are putting pressure on providers

Users can't trust in the good intentions of their provider. As well as the risk from attackers, many countries—democracies and otherwise—are pursuing laws to make providers circumvent end to end encryption. The obvious technical approach—and that proposed by GCHQ—is to modify the key discovery mechanism to insert additional "ghost" encryption keys.

* Australia's ["Assistance and Access" Act 2018](https://www.legislation.gov.au/Details/C2018A00148) allows the government to issue Technical Capability Notices to providers requiring them to remove encryption protection. [EFF's explanation and reaction](https://www.eff.org/deeplinks/2018/09/australian-government-ignores-experts-advancing-its-anti-encryption-bill).
* [Principles for a More Informed Exceptional Access Debate](https://www.lawfareblog.com/principles-more-informed-exceptional-access-debate) by Ian Levy (NCSC) & Crispin Robinson (GCHQ) - thoughtful article. Proposes adding "ghost keys" without notifying users. Open letter by [Privacy International hosts an open letter in response](https://privacyinternational.org/news-analysis/3002/ghosts-your-machine-spooks-want-secret-access-encrypted-messages).
* USA's ["EARN IT Act of 2019"](https://www.eff.org/document/earn-it-act) which is [viewed by EFF](https://www.eff.org/deeplinks/2020/01/congress-must-stop-graham-blumenthal-anti-security-bill) as a way of requiring companies to break encryption.

## Further resources

* [CONIKS homepage](https://coniks.cs.princeton.edu/about.html)
  CONIKS inspired Key Transparency. The original paper is good background reading: [CONIKS: Bringing Key Transparency to End Users](https://eprint.iacr.org/2014/1004.pdf).
* [Key Transparency Overview](https://github.com/google/keytransparency/blob/master/docs/overview.md)
  Introduces Key Transparency. The [design document](https://github.com/google/keytransparency/blob/master/docs/design.md) and [verification algorithm](https://github.com/google/keytransparency/blob/master/docs/verification.md) page are particularly important.
* ["Ghost trace on the wire? Using key evidence for informed decisions"](https://www.cl.cam.ac.uk/~arb33/papers/VasileEtAl-GhostsOnTheWire-SecurityProtocols2019.pdf)
  University of Cambridge - proposes an alternative solution to compare mappings between usernames and public keys by gossiping with other users on the same WiFi network.

