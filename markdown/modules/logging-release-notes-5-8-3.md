{%- set _mod_docs_content_type = "REFERENCE" %}
# Logging 5.8.3 {id="logging-release-notes-5-8-3_{{ context }}"}
This release includes [Logging Bug Fix 5.8.3](https://access.redhat.com/errata/RHBA-2024:0693) and
[Logging Security Fix 5.8.3](https://access.redhat.com/errata/RHSA-2024:0728)

## Bug fixes {id="logging-release-notes-5-8-3-bug-fixes"}
*   Before this update, when configured to read a custom S3 Certificate Authority the Loki Operator would not automatically update the configuration when the name of the ConfigMap or the contents changed. With this update, the Loki Operator is watching for changes to the ConfigMap and automatically updates the generated configuration. ([LOG-4969](https://issues.redhat.com/browse/LOG-4969))
*   Before this update, Loki outputs configured without a valid URL caused the collector pods to crash. With this update, outputs are subject to URL validation, resolving the issue. ([LOG-4822](https://issues.redhat.com/browse/LOG-4822))
*   Before this update the Cluster Logging Operator would generate collector configuration fields for outputs that did not specify a secret to use the service account bearer token. With this update, an output does not require authentication, resolving the issue. ([LOG-4962](https://issues.redhat.com/browse/LOG-4962))
*   Before this update, the `tls.insecureSkipVerify` field of an output was not set to a value of `true` without a secret defined. With this update, a secret is no longer required to set this value. ([LOG-4963](https://issues.redhat.com/browse/LOG-4963))
*   Before this update, output configurations allowed the combination of an insecure (HTTP) URL with TLS authentication. With this update, outputs configured for TLS authentication require a secure (HTTPS) URL. ([LOG-4893](https://issues.redhat.com/browse/LOG-4893))

## CVEs {id="logging-release-notes-5-8-3-CVEs"}
*   [CVE-2021-35937](https://access.redhat.com/security/cve/CVE-2021-35937)
*   [CVE-2021-35938](https://access.redhat.com/security/cve/CVE-2021-35938)
*   [CVE-2021-35939](https://access.redhat.com/security/cve/CVE-2021-35939)
*   [CVE-2023-7104](https://access.redhat.com/security/cve/CVE-2023-7104)
*   [CVE-2023-27043](https://access.redhat.com/security/cve/CVE-2023-27043)
*   [CVE-2023-48795](https://access.redhat.com/security/cve/CVE-2023-48795)
*   [CVE-2023-51385](https://access.redhat.com/security/cve/CVE-2023-51385)
*   [CVE-2024-0553](https://access.redhat.com/security/cve/CVE-2024-0553)