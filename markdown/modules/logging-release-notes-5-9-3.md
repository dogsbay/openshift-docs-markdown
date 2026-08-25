{%- set _mod_docs_content_type = "REFERENCE" %}
# Logging 5.9.3 {id="logging-release-notes-5-9-3_{{ context }}"}
This release includes [OpenShift Logging Bug Fix Release 5.9.3](https://access.redhat.com/errata/RHBA-2024:3736)

## Bug Fixes {id="logging-release-notes-5-9-3-bug-fixes"}

*   Before this update, there was a delay in restarting Ingesters when configuring `LokiStack`, because the {{ loki_op }} sets the write-ahead log `replay_memory_ceiling` to zero bytes for the `1x.demo` size. With this update, the minimum value used for the `replay_memory_ceiling` has been increased to avoid delays. ([LOG-5614](https://issues.redhat.com/browse/LOG-5614))
*   Before this update, monitoring the Vector collector output buffer state was not possible. With this update, monitoring and alerting the Vector collector output buffer size is possible that improves observability capabilities and helps keep the system running optimally. ([LOG-5586](https://issues.redhat.com/browse/LOG-5586))

## CVEs {id="logging-release-notes-5-9-3-CVEs"}
*   [CVE-2024-2961](https://access.redhat.com/security/cve/CVE-2024-2961)
*   [CVE-2024-28182](https://access.redhat.com/security/cve/CVE-2024-28182)
*   [CVE-2024-33599](https://access.redhat.com/security/cve/CVE-2024-33599)
*   [CVE-2024-33600](https://access.redhat.com/security/cve/CVE-2024-33600)
*   [CVE-2024-33601](https://access.redhat.com/security/cve/CVE-2024-33601)
*   [CVE-2024-33602](https://access.redhat.com/security/cve/CVE-2024-33602)