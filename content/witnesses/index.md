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
| **url**               | https://api.transparency.dev/dev/witness/little-garden                                             |
| **configured lists**  | testing/log-list.1                                                                                 |
| **updated**           | Multiple times per day                                                                             |
| **vkey ed25519**      | `transparency.dev/DEV:witness-little-garden+d8042a87+BCtusOxINQNUTN5Oj8HObRkh2yHf/MwYaGX4CPdiVEPM` |


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
| **url**               | https://staging.witness.transparency.goog/ring-any-bells                                                 |
| **configured lists**  | testing/log-list.1 staging/log-list-10qps-4klogs.1                                                       |
| **updated**           | Multiple times per day                                                                                   |
| **vkey ed25519**      | `staging.witness.transparency.goog/ring-any-bells+2e1a8dc9+BG5JTpLc3FJtwzgh1Uv+Qelz9qeOH2bfWjS1s0s+y4rL` |
| **vkey MLDSA-44**     | `staging.witness.transparency.goog/ring-any-bells+5774b075+Bi1GzCU2/5mxwhCBcfEpKliaoIg171qCFP3r3svllk/XlYj7hzNl9yVqfL2EBUdbC1vbnyCF6gD5XOFjsK4n64/mKMFIsWnuwoCVpqfUvHiM3sf48LMvFvWkQhHGEizw7FLiX+nmyM/EhzoNJ+98AKfLOjTvOFCqnb0RC9lLI+MlWGalc4fgNXYwcSBmShYfMBcaZzUt77SOHXORybbdeaGtRBU93KvBl03A9zipY5Hmn1E18ZtWtflwSV/tqgWs1Od1Hs+jHMGigKHKDaE4zYdRwkHFdf8VsTx4LJv2Ok0/4dfLxAZDEXAhpAbCbluBW5cf2Q6owZRa9obSEbjYXKCzSYySNh01rRf6K9o0VeFEK/6+CM45GvD/pMu++J1xGInxAjCoNqK3j3Rmx93WpIRmiwUhL+if1rPzrZO2m3Skek8QQx0Ke+HiaGcRYPUHqQ3Y/zJrJyXapg9lx9CgVXfOUWO89bocspztYABz43m5jqGaltjgOGUtYeoNvbtzzkJOugLLH43PwNPll064+oG4kmCAdVVS2VZHTm20l5qZ7jBumsrauD/S6dBpmZzua0hJlxf94I9gd8zmLsKLvjc9IAKkY26rMuAzl6Hu9NfXMM+8ZAtuJ6q2EKxy47dDn01AjrjZ/qYXiJbXDFTcHlUWF3fCujYgo8nCcoDYFbjby99TL++sHmivsz5kO2cR6xeJphlGt4Di5qxUaf9K70keUqr22R1rcLyGU5dPzWE0cAp+Z6dmvq4rM6QsTLfOjvZlydj/zfRs6BOBzlPEoqEWCN+A2MPCTm6NBV7L/24z0fUoGBh/08BGY37FU3nWwuldLKC+9nr1ItMhOKWKx8pkHnSllJEY0XVxpzE3eV08sCQyuRdVi++2K8Xnb3nUA7uQBr90IBCWzPzY/NWaBhVwqr+S1XzxHcHogWbVfdDxYgmj1tGWQaampa1ZwIBfjlHfn3ji2wSG8Mzd3jGTIX/4TlhN/rAlscnqnABEo24mzrQpOz7Dhc8hKhvAOXvS9b6GN6dml+O68UQg/qXNqBQep8UxOtmxmTMs5t/wBDNzkYwWONKwf682AaZfKaAOurHpkuGHlgCAtylWY/o4PDCyZ3e7wQfNRZK6asOUaq1CthaxRrLcemyvZYcydvw2ZFH/SF8J1RoeXtFRy4adRjPqNrzNk0um/cvxX8QB1Qf00sHXLOY7IfYdl6xUnsMsGrE5XkXWKxl8eN+VJhMpONQgB9MqgxLcQquesFpfeeo8k3MsX4+weJ8il/UNq7r6JWc+5/0E9bFDUTp30tSiwCEPEXBlQR8LbbBSTU7/cRru62D8L0/QvVnT4stFDouJpNPP5V7BbqPC36hQi7yVPXRyCUzsroDquICtaKqqnk90Ej0smXodBBXm4BHodXT1eXND5jR8N1AqzZcpucSmA6G5b33oXL3dlX+GP3q4JslJHRlQWFvp8Qbv6GYbnYGnvv4tIGxslibfdx1mKzuXczNeYlrlWJrddIXrFKgiwFBFTXG0HlIgeAMlF99g9Efyd4g/aJpmNLa8Qx7PV3+SZE3nrum37tyVVKfK9q7eXDYztOgIOKFNb3iS2CXCjrf3CsKGbXX+PvjqfBAH1cTc/lrDb2Rg2beH5mQam4zTPv2ndkPjEC0c5q92y+VNzBlKSnnBNlRg5fKIwbH3s8lOP51mdCYAdpwd8M6rYxs/jy37jWb9Utmh80HA3yR8KBDZYxEKkghO0PAFaC5kQIjUeYs=` |


## Production witnesses

We are in the process of productionising our production witness.

## SLA witnessing

Please get in touch with the team to discuss.

## How to request witnessing of a log
To have your log witnessed, please follow the instructions at https://witness-network.org/participate/

Direct requests may also be sent directly to the TrustFabric team via issues on the
https://github.com/transparency-dev/witness repo, or getting in touch with the team via
[slack](https://transparency.dev/slack).
