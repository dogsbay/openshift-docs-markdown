{%- set _mod_docs_content_type = "REFERENCE" %}
# Logging 5.7.3 {id="cluster-logging-release-notes-5-7-3_{{ context }}"}
This release includes [OpenShift Logging Bug Fix Release 5.7.3](https://access.redhat.com/errata/RHSA-2023:3998).

## Bug fixes {id="openshift-logging-5-7-3-bug-fixes_{{ context }}"}
*   Before this update, when viewing logs within the {{ product_title }} web console, cached files caused the data to not refresh. With this update the bootstrap files are not cached, resolving the issue. ([LOG-4100](https://issues.redhat.com/browse/LOG-4100))
*   Before this update, the {{ loki_op }} reset errors in a way that made identifying configuration problems difficult to troubleshoot. With this update, errors persist until the configuration error is resolved. ([LOG-4156](https://issues.redhat.com/browse/LOG-4156))
*   Before this update, the LokiStack ruler did not restart after changes were made to the `RulerConfig` custom resource (CR). With this update, the {{ loki_op }} restarts the ruler pods after the `RulerConfig` CR is updated. ([LOG-4161](https://issues.redhat.com/browse/LOG-4161))
*   Before this update, the vector collector terminated unexpectedly when input match label values contained a `/` character within the `ClusterLogForwarder`. This update resolves the issue by quoting the match label, enabling the collector to start and collect logs. ([LOG-4176](https://issues.redhat.com/browse/LOG-4176))
*   Before this update, the {{ loki_op }} terminated unexpectedly when a `LokiStack` CR defined tenant limits, but not global limits. With this update, the {{ loki_op }} can process `LokiStack` CRs without global limits, resolving the issue. ([LOG-4198](https://issues.redhat.com/browse/LOG-4198))
*   Before this update, Fluentd did not send logs to an Elasticsearch cluster when the private key provided was passphrase-protected. With this update, Fluentd properly handles passphrase-protected private keys when establishing a connection with Elasticsearch. ([LOG-4258](https://issues.redhat.com/browse/LOG-4258))
*   Before this update, clusters with more than 8,000 namespaces caused Elasticsearch to reject queries because the list of namespaces was larger than the `http.max_header_size` setting. With this update, the default value for header size has been increased, resolving the issue. ([LOG-4277](https://issues.redhat.com/browse/LOG-4277))
*   Before this update, label values containing a `/` character within the `ClusterLogForwarder` CR would cause the collector to terminate unexpectedly.
With this update, slashes are replaced with underscores, resolving the issue. ([LOG-4095](https://issues.redhat.com/browse/LOG-4095))
*   Before this update, the Cluster Logging Operator terminated unexpectedly when set to an unmanaged state. With this update, a check to ensure that the `ClusterLogging` resource is in the correct Management state before initiating the reconciliation of the `ClusterLogForwarder` CR, resolving the issue. ([LOG-4177](https://issues.redhat.com/browse/LOG-4177))
*   Before this update, when viewing logs within the {{ product_title }} web console, selecting a time range by dragging over the histogram did not work on the aggregated logs view inside the pod detail. With this update, the time range can be selected by dragging on the histogram in this view. ([LOG-4108](https://issues.redhat.com/browse/LOG-4108))
*   Before this update, when viewing logs within the {{ product_title }} web console, queries longer than 30 seconds timed out. With this update, the timeout value can be configured in the configmap/logging-view-plugin. ([LOG-3498](https://issues.redhat.com/browse/LOG-3498))
*   Before this update, when viewing logs within the {{ product_title }} web console, clicking the **more data available** option loaded more log entries only the first time it was clicked. With this update, more entries are loaded with each click. ([OU-188](https://issues.redhat.com/browse/OU-188))
*   Before this update, when viewing logs within the {{ product_title }} web console, clicking the **streaming** option would only display the **streaming logs** message without showing the actual logs. With this update, both the message and the log stream are displayed correctly. ([OU-166](https://issues.redhat.com/browse/OU-166))

## CVEs {id="openshift-logging-5-7-3-CVEs_{{ context }}"}
*   [CVE-2020-24736](https://access.redhat.com/security/cve/CVE-2020-24736)
*   [CVE-2022-48281](https://access.redhat.com/security/cve/CVE-2022-48281)
*   [CVE-2023-1667](https://access.redhat.com/security/cve/CVE-2023-1667)
*   [CVE-2023-2283](https://access.redhat.com/security/cve/CVE-2023-2283)
*   [CVE-2023-24329](https://access.redhat.com/security/cve/CVE-2023-24329)
*   [CVE-2023-26115](https://access.redhat.com/security/cve/CVE-2023-26115)
*   [CVE-2023-26136](https://access.redhat.com/security/cve/CVE-2023-26136)
*   [CVE-2023-26604](https://access.redhat.com/security/cve/CVE-2023-26604)
*   [CVE-2023-28466](https://access.redhat.com/security/cve/CVE-2023-28466)