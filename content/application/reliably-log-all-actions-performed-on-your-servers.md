---
url: application/reliably-log-all-actions-performed-on-your-servers
layout: linked-headers
eyebrow: Trillan helps you
title: Reliably log all actions performed on your servers
description: Logging all actions in an immutable log discourages malicious behaviour by increasing the chance of discovery.
headers:
   - display: "Advantages"
     link: "advantages"
   - display: "How it works"
     link: "how-it-works"
   - display: "Limitations"
     link: "limitations"
   - display: "How to implement this"
     link: "how-to-implement-this"
   - display: "Other possible actions"
     link: "other-possible-kinds-of-actions"
   - display: "How to further strengthen"
     link: "how-to-further-strengthen-logging"
   - display: "Examples"
     link: "examples"
   - display: "Further resources"
     link: "further-resources"
topImage: top_log-all-commands.svg
---

## Advantages

<div class="font-google font-medium">

* Guarantee that an audit record is created for all actions performed on your servers.
* Configure servers to block and report actions that weren't already logged.
* Any malicious actions are permanently logged, increasing the likelihood of discovery.
* You can integrate additional code to monitor the log for potentially malicious actions.
* It simplifies incident response and forensic analysis as you've got a complete log you can rely on.
* You can prove to auditors exactly what actions were performed on each server.

</div>

## How it works

The user wants to run a command that modifies the server:

1. The user's client submits the command to the verifiable log
2. The user's computer sends the command to the agent running on the server
3. The agent server checks that the command has been added to the log, and simultaneously verifies the log
4. The agent runs the command on the server. By having the agent check the log before running a command, it is acting as an enforcer. In order for a command to run on a server, it must first appear in the log. This ensures a user cannot run a malicious command without that command being logged.

Each agent keeps a record of previously seen [tree heads]({{< relref "/verifiable-data-structures#tree-head-hash" >}}). If an agent finds an inconsistency with a previous tree head - implying the log has been tampered with - it stops working and raises alarms. Therefore all running agents act as a distributed network, continuously verifying the append-only nature of the log.

The verifiability of the log makes it extremely difficult to tamper with the log to cover up the malicious command.

## Limitations

**Users can still run malicious commands** - the log doesn't know whether a command is malicious or not, it simply stores everything. However:
* It's now possible to write software to continuously monitor the log for commands which look suspicious
* Users may be dissuaded from running malicious commands since they'll appear in the log and be very difficult to delete.

**The verifiable log can be tampered with**. However:
* The agents (and any other monitoring code) can detect when that has happened, and decline to run the command.
* To undetectably tamper with the log's history, an attacker would have to simultaneously tamper with the log and all monitors.

## How to implement this
You need to create four software components:

1. **Trillian personality** - to provide the external interface (API) for logging commands and querying the log with cryptographic proof. Together, Trillian and the personality make up the verifiable log in the diagram above.
2. **Submitting component** - for submitting commands to the log before they are sent to the agent.
3. **Agent component** - for the agent to verify that received commands are in the log.
4. **Monitor** - to regularly check the integrity of the verifiable log, and potentially inspect log entries for potentially malicious commands.

Consider integrating the submitting and agent components as Git hooks in an existing workflow.

## Other possible kinds of actions

This use case described running commands on servers, but the same principle can be applied to guard any kind of change to a system. Other possible actions include:

* **API calls to Kubernetes**, for example. A service sits in front of the API and clients communicate with that instead of calling the API directly. The service verifies that requests from clients exist in the log before calling the API. Alternatively, the service enters requests into the log itself.
* **Configuration diffs** for Puppet or other infrastructure-as-code solutions. An agent verifies the git commit exists in the log before applying the changes.

## How to further strengthen logging

* The verifiable log has a signed tree head which can be used to verify the entire data structure. The signed tree head could be regularly published online, encouraging others to store a copy of all the signed tree heads. These can be used to subsequently carry out [consistency proofs]({{< relref "/verifiable-data-structures#consistency-proof" >}}): confirming that the log was append-only since the tree head was stored.
* You could share the verifiable log's entire contents privately with a third party who could monitor for suspicious commands and continuously verify the integrity of the log.
* You could add multi-party authentication for high risk commands. The agent component would ensure that that log received separate additional approvals before a high-risk command would be executed.

## Examples
<strong>A payment service provider</strong> uses Trillian to log all configuration changes to hosts in their production environment. When a configuration change is received, an agent running on the host ensures that the request has been logged in their verifiable log before applying the configuration. The agents store a local copy of signed tree heads so they can cryptographically verify the integrity of the log each time they query it.

## Further resources

* [Puppet](https://puppet.com/), [Chef](https://www.chef.io/products/chef-infra/), [Ansible](https://www.ansible.com/) and [SaltStack](https://www.saltstack.com/) are well-known applications for automating provisioning of servers [(infrastructure as code)](https://en.wikipedia.org/wiki/Infrastructure_as_code)
* [Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) can be used to enforce rules before code changes are committed to version control.
* [Change management auditing (Wikipedia)](https://en.wikipedia.org/wiki/Change_management_auditing) - describes the broader practice of monitoring and auditing changes to systems. [Spiceworks Help Desk](https://www.spiceworks.com/free-help-desk-software/) is an example of traditional change-control software.
