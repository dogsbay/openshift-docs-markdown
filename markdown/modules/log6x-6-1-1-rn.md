{%- set _mod_docs_content_type = "REFERENCE" %}
# Logging 6.1.1 Release Notes {id="logging-release-notes-6-1-1_{{ context }}"}

This release includes [{{ logging_uc }} {{ for }} Bug Fix Release 6.1.1](https://access.redhat.com/errata/RHBA-2024:10992).

## New Features and Enhancements {id="logging-release-notes-6-1-1-enhancements_{{ context }}"}

*   With this update, the {{ loki_op }} supports configuring the workload identity federation on the {{ gcp_first }} by using the Cluster Credential Operator (CCO) in {{ product_title }} 4.17 or later. ([LOG-6420](https://issues.redhat.com/browse/LOG-6420))

## Bug Fixes {id="logging-release-notes-6-1-1-bug-fixes_{{ context }}"}

*   Before this update, the collector was discarding longer audit log messages with the following error message: **Internal log [Found line that exceeds max_line_bytes; discarding.]**. With this update, the discarding of longer audit messages is avoided by increasing the audit configuration thresholds: The maximum line size, `max_line_bytes`, is `3145728` bytes. The maximum number of bytes read during a read cycle, `max_read_bytes`, is `262144` bytes. ([LOG-6379](https://issues.redhat.com/browse/LOG-6379))
*   Before this update, an input receiver service was repeatedly created and deleted, causing issues with mounting the TLS secrets. With this update, the service is created once and only deleted if it is not defined in the `ClusterLogForwarder` custom resource. ([LOG-6383](https://issues.redhat.com/browse/LOG-6383))
*   Before this update, pipeline validation might have entered an infinite loop if a name was a substring of another name. With this update, stricter name equality checks prevent the infinite loop. ([LOG-6405](https://issues.redhat.com/browse/LOG-6405))
*   Before this update, the collector alerting rules included the summary and message fields. With this update, the collector alerting rules include the summary and description fields. ([LOG-6407](https://issues.redhat.com/browse/LOG-6407))
*   Before this update, setting up the custom audit inputs in the `ClusterLogForwarder` custom resource with configured `LokiStack` output caused errors due to the nil pointer dereference. With this update, the Operator performs the nil checks, preventing such errors. ([LOG-6449](https://issues.redhat.com/browse/LOG-6449))
*   Before this update, the `ValidLokistackOTLPOutputs` condition appeared in the status of the `ClusterLogForwarder` custom resource even when the output type is not `LokiStack`. With this update, the `ValidLokistackOTLPOutputs` condition is removed, and the validation messages for the existing output conditions are corrected. ([LOG-6469](https://issues.redhat.com/browse/LOG-6469))
*   Before this update, the collector did not correctly mount the `/var/log/oauth-server/` path, which prevented the collection of the audit logs. With this update, the volume mount is added, and the audit logs are collected as expected. ([LOG-6484](https://issues.redhat.com/browse/LOG-6484))
*   Before this update, the `must-gather` script of the {{ clo }} might have failed to gather the LokiStack data. With this update, the `must-gather` script is fixed, and the LokiStack data is gathered reliably. ([LOG-6498](https://issues.redhat.com/browse/LOG-6498))
*   Before this update, the collector did not correctly mount the `oauth-apiserver` audit log file. As a result, such audit logs were not collected. With this update, the volume mount is correctly mounted, and the logs are collected as expected. ([LOG-6533](https://issues.redhat.com/browse/LOG-6533))

## CVEs {id="logging-release-notes-6-1-1-CVEs_{{ context }}"}

*   [CVE-2019-12900](https://access.redhat.com/security/cve/CVE-2019-12900)
*   [CVE-2024-2511](https://access.redhat.com/security/cve/CVE-2024-2511)
*   [CVE-2024-3596](https://access.redhat.com/security/cve/CVE-2024-3596)
*   [CVE-2024-4603](https://access.redhat.com/security/cve/CVE-2024-4603)
*   [CVE-2024-4741](https://access.redhat.com/security/cve/CVE-2024-4741)
*   [CVE-2024-5535](https://access.redhat.com/security/cve/CVE-2024-5535)
*   [CVE-2024-10963](https://access.redhat.com/security/cve/CVE-2024-10963)
*   [CVE-2024-50602](https://access.redhat.com/security/cve/CVE-2024-50602)