{%- set _mod_docs_content_type = "REFERENCE" %}
# Logging 5.9.2 {id="logging-release-notes-5-9-2_{{ context }}"}
This release includes [OpenShift Logging Bug Fix Release 5.9.2](https://access.redhat.com/errata/RHSA-2024:2933)

## Bug Fixes {id="logging-release-notes-5-9-2-bug-fixes"}

*   Before this update, changes to the Logging Operator caused an error due to an incorrect configuration in the `ClusterLogForwarder` CR. As a result, upgrades to {{ logging }} deleted the daemonset collector. With this update, the Logging Operator re-creates collector daemonsets except when a `Not authorized to collect` error occurs. ([LOG-4910](https://issues.redhat.com/browse/LOG-4910))
*   Before this update, the rotated infrastructure log files were sent to the application index in some scenarios due to an incorrect configuration in the Vector log collector. With this update, the Vector log collector configuration avoids collecting any rotated infrastructure log files. ([LOG-5156](https://issues.redhat.com/browse/LOG-5156))
*   Before this update, the Logging Operator did not monitor changes to the `grafana-dashboard-cluster-logging` config map. With this update, the Logging Operator monitors changes in the `ConfigMap` objects, ensuring the system stays synchronized and responds effectively to config map modifications. ([LOG-5308](https://issues.redhat.com/browse/LOG-5308))
*   Before this update, an issue in the metrics collection code of the Logging Operator caused it to report stale telemetry metrics. With this update, the Logging Operator does not report stale telemetry metrics. ([LOG-5426](https://issues.redhat.com/browse/LOG-5426))
*   Before this change, the Fluentd `out_http` plugin ignored the `no_proxy` environment variable. With this update, the Fluentd patches the `HTTP#start` method of ruby to honor the `no_proxy` environment variable. ([LOG-5466](https://issues.redhat.com/browse/LOG-5466))

## CVEs {id="logging-release-notes-5-9-2-CVEs"}

*   [CVE-2022-48554](https://access.redhat.com/security/cve/CVE-2022-48554)
*   [CVE-2023-2975](https://access.redhat.com/security/cve/CVE-2023-2975)
*   [CVE-2023-3446](https://access.redhat.com/security/cve/CVE-2023-3446)
*   [CVE-2023-3817](https://access.redhat.com/security/cve/CVE-2023-3817)
*   [CVE-2023-5678](https://access.redhat.com/security/cve/CVE-2023-5678)
*   [CVE-2023-6129](https://access.redhat.com/security/cve/CVE-2023-6129)
*   [CVE-2023-6237](https://access.redhat.com/security/cve/CVE-2023-6237)
*   [CVE-2023-7008](https://access.redhat.com/security/cve/CVE-2023-7008)
*   [CVE-2023-45288](https://access.redhat.com/security/cve/CVE-2023-45288)
*   [CVE-2024-0727](https://access.redhat.com/security/cve/CVE-2024-0727)
*   [CVE-2024-22365](https://access.redhat.com/security/cve/CVE-2024-22365)
*   [CVE-2024-25062](https://access.redhat.com/security/cve/CVE-2024-25062)
*   [CVE-2024-28834](https://access.redhat.com/security/cve/CVE-2024-28834)
*   [CVE-2024-28835](https://access.redhat.com/security/cve/CVE-2024-28835)