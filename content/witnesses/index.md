This page contains information about the witnesses operated by the TrustFabric team at Google.
This is the same team which developed and maintains Google CT logs,
[Trillian](https://github.com/google/trillian), [Tessera](https://github.com/transparency-dev/tessera),
and [TesseraCT](https://github.com/transparency-dev/tesseract).

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
[open-source OmniGCP implementation](https://github.com/transparency-dev/witness/tree/main/cmd/omniwitness_gcp)
on Google Cloud.

|Little Garden          |                                                                                                    |
|-----------------------|----------------------------------------------------------------------------------------------------|
| **vkey**              | `transparency.dev/DEV:witness-little-garden+d8042a87+BCtusOxINQNUTN5Oj8HObRkh2yHf/MwYaGX4CPdiVEPM` |
| **url**               | https://api.transparency.dev/dev/witness/little-garden                                             |
| **configured lists**  | testing/log-list.1                                                                                 |
| **updated**           | Multiple times per day                                                                             |


## Staging witnesses

These witnesses are intended to be prod-like in most respects, but will be the first to be updated with new software versions
before rolling out to the prod instances.
They are operated on a best-effort basis, and consequently are monitored but are non-paging.
We intend to keep these witnesses stable and will not reset their data or rotate keys without a good reason.

These witnesses run the
[open-source OmniGCP implementation](https://github.com/transparency-dev/witness/tree/main/cmd/omniwitness_gcp), with multi-region
frontends backed by a regional Spanner instance.

Key material is stored encrypted-at-rest in Secret Manager.

|Ring any bells?        |                                                                                                          |
|-----------------------|----------------------------------------------------------------------------------------------------------|
| **vkey**              | `staging.witness.transparency.goog/ring-any-bells+2e1a8dc9+BG5JTpLc3FJtwzgh1Uv+Qelz9qeOH2bfWjS1s0s+y4rL` |
| **url**               | https://staging.witness.transparency.goog/ring-any-bells                                                 |
| **configured lists**  | testing/log-list.1 staging/log-list-10qps-4klogs.1                                                       |
| **updated**           | Multiple times per day                                                                                   |


## Production witnesses

We are in the process of productionising our production witness.

## SLA witnessing

Please get in touch with the team to discuss.

## How to request witnessing of a log
To have your log witnessed, please follow the instructions at https://witness-network.org/participate/

Direct requests may also be sent directly to the TrustFabric team via issues on the
https://github.com/transparency-dev/witness repo, or getting in touch with the team via
[slack](https://transparency.dev/slack).
