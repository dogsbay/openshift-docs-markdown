{%- set _mod_docs_content_type = "REFERENCE" %}
# Logging 5.7.6 {id="cluster-logging-release-notes-5-7-6_{{ context }}"}
This release includes [OpenShift Logging Bug Fix Release 5.7.6](https://access.redhat.com/errata/RHSA-2023:4933).

## Bug fixes {id="openshift-logging-5-7-6-bug-fixes_{{ context }}"}
*   Before this update, the collector relied on the default configuration settings for reading the container log lines. As a result, the collector did not read the rotated files efficiently. With this update, there is an increase in the number of bytes read, which allows the collector to efficiently process rotated files. ([LOG-4501](https://issues.redhat.com/browse/LOG-4501))
*   Before this update, when users pasted a URL with predefined filters, some filters did not reflect. With this update, the UI reflects all the filters in the URL. ([LOG-4459](https://issues.redhat.com/browse/LOG-4459))
*   Before this update, forwarding to Loki using custom labels generated an error when switching from Fluentd to Vector. With this update, the Vector configuration sanitizes labels in the same way as Fluentd to ensure the collector starts and correctly processes labels. ([LOG-4460](https://issues.redhat.com/browse/LOG-4460))
*   Before this update, the Observability Logs console search field did not accept special characters that it should escape. With this update, it is escaping special characters properly in the query. ([LOG-4456](https://issues.redhat.com/browse/LOG-4456))
*   Before this update, the following warning message appeared while sending logs to Splunk: `Timestamp was not found.` With this update, the change overrides the name of the log field used to retrieve the Timestamp and sends it to Splunk without warning. ([LOG-4413](https://issues.redhat.com/browse/LOG-4413))
*   Before this update, the CPU and memory usage of Vector was increasing over time. With this update, the Vector configuration now contains the `expire_metrics_secs=60` setting to limit the lifetime of the metrics and cap the associated CPU usage and memory footprint. ([LOG-4171](https://issues.redhat.com/browse/LOG-4171))
*   Before this update, the LokiStack gateway cached authorized requests very broadly. As a result, this caused wrong authorization results. With this update, LokiStack gateway caches on a more fine-grained basis which resolves this issue. ([LOG-4393](https://issues.redhat.com/browse/LOG-4393))
*   Before this update, the Fluentd runtime image included builder tools which were unnecessary at runtime. With this update, the builder tools are removed, resolving the issue. ([LOG-4467](https://issues.redhat.com/browse/LOG-4467))

## CVEs {id="openshift-logging-5-7-6-CVEs_{{ context }}"}
*   [CVE-2023-3899](https://access.redhat.com/security/cve/CVE-2023-3899)
*   [CVE-2023-4456](https://access.redhat.com/security/cve/CVE-2023-4456)
*   [CVE-2023-32360](https://access.redhat.com/security/cve/CVE-2023-32360)
*   [CVE-2023-34969](https://access.redhat.com/security/cve/CVE-2023-34969)