{%- set _mod_docs_content_type = "REFERENCE" %}
# Logging 5.8.2 {id="logging-release-notes-5-8-2"}

This release includes [OpenShift Logging Bug Fix Release 5.8.2](https://access.redhat.com/errata/RHSA-2024:0271).

## Bug fixes {id="logging-release-notes-5-8-2-bug-fixes"}
*   Before this update, the LokiStack ruler pods would not format the IPv6 pod IP in HTTP URLs used for cross pod communication, causing querying rules and alerts through the Prometheus-compatible API to fail. With this update, the LokiStack ruler pods encapsulate the IPv6 pod IP in square brackets, resolving the issue. ([LOG-4890](https://issues.redhat.com/browse/LOG-4890))
*   Before this update, the developer console logs did not account for the current namespace, resulting in query rejection for users without cluster-wide log access. With this update, namespace inclusion has been corrected, resolving the issue. ([LOG-4947](https://issues.redhat.com/browse/LOG-4947))
*   Before this update, the logging view plugin of the {{ Product_Title }} web console did not allow for custom node placement and tolerations. With this update, defining custom node placements and tolerations has been added to the logging view plugin of the {{ Product_Title }} web console. ([LOG-4912](https://issues.redhat.com/browse/LOG-4912))

## CVEs {id="logging-release-notes-5-8-2-CVEs"}
*   [CVE-2022-44638](https://access.redhat.com/security/cve/CVE-2022-44638)
*   [CVE-2023-1192](https://access.redhat.com/security/cve/CVE-2023-1192)
*   [CVE-2023-5345](https://access.redhat.com/security/cve/CVE-2023-5345)
*   [CVE-2023-20569](https://access.redhat.com/security/cve/CVE-2023-20569)
*   [CVE-2023-26159](https://access.redhat.com/security/cve/CVE-2023-26159)
*   [CVE-2023-39615](https://access.redhat.com/security/cve/CVE-2023-39615)
*   [CVE-2023-45871](https://access.redhat.com/security/cve/CVE-2023-45871)