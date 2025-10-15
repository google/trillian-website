This page contains information about the witnesses operated by the TrustFabric team at Google.
This is the same team which developed and maintains Google CT logs, Trillian, Tessera, and TesseraCT.

The witnesses listed below conform to the C2SP
[tlog-witness@v0.1.0](https://github.com/C2SP/C2SP/blob/tlog-witness/v0.1.0/tlog-witness.md)
and related specs.

## Dev witnesses

These witnesses are intended for testing and development purposes only, you are welcome to integrate
with them but they should not be relied upon for any reason.
They are operated on a best-effort basis, and, while we do not envisage it happening regularly, they
may be unavailable, withdrawn, reset, or have their keys rotated at any time and without prior notice.

### transparency.dev/DEV:witness-little-garden
This witness is running the
[open-source OmniGCP implementation](https://github.com/transparency-dev/witness/tree/main/cmd/gcp/omniwitness)
on Google Cloud.

|                       |                                                                                                    |
|-----------------------|----------------------------------------------------------------------------------------------------|
| **vkey**              | `transparency.dev/DEV:witness-little-garden+4b7fca75+AStusOxINQNUTN5Oj8HObRkh2yHf/MwYaGX4CPdiVEPM` |
| **url**               | https://api.transparency.dev/dev/witness/little-garden                                             |
| **configured lists**  | testing/log-list.1                                                                                 |
| **updated**           | Multiple times per day                                                                             |


## Staging witnesses

There are no staging witnesses, currently.
We are actively working on completing the internal processes necessary to launch a staging witness instance.

## Production witnesses
There are no production witnesses, currently.
We are actively working on completing the internal processes necessary to launch a production witness instance.

## How to request witnessing of a log
Requesting via the Public Witness Network configs stored in the
https://github.com/transparency-dev/witness-network repo is preferred, and is likely to be the fastest route
to being provisioned.

Direct requests may also be sent directly to the TrustFabric team via issues on the
https://github.com/transparency-dev/witness repo, or getting in touch with the team via
[slack](https://transparency-dev.slack.com/).
