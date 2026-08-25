{%- set _mod_docs_content_type = "REFERENCE" %}
# Logging 5.7.7 {id="cluster-logging-release-notes-5-7-7_{{ context }}"}
This release includes [OpenShift Logging Bug Fix Release 5.7.7](https://access.redhat.com/errata/RHSA-2023:5530).

## Bug fixes {id="openshift-logging-5-7-7-bug-fixes_{{ context }}"}
*   Before this update, FluentD normalized the logs emitted by the EventRouter differently from Vector. With this update, the Vector produces log records in a consistent format. ([LOG-4178](https://issues.redhat.com/browse/LOG-4178))
*   Before this update, there was an error in the query used for the **FluentD Buffer Availability** graph in the metrics dashboard created by the Cluster Logging Operator as it showed the minimum buffer usage. With this update, the graph shows the maximum buffer usage and is now renamed to **FluentD Buffer Usage**. ([LOG-4555](https://issues.redhat.com/browse/LOG-4555))
*   Before this update, deploying a LokiStack on IPv6-only or dual-stack {{ product_title }} clusters caused the LokiStack memberlist registration to fail. As a result, the distributor pods went into a crash loop. With this update, an administrator can enable IPv6 by setting the `lokistack.spec.hashRing.memberlist.enableIPv6:` value to `true`, which resolves the issue. ([LOG-4569](https://issues.redhat.com/browse/LOG-4569))
*   Before this update, the log collector relied on the default configuration settings for reading the container log lines. As a result, the log collector did not read the rotated files efficiently. With this update, there is an increase in the number of bytes read, which allows the log collector to efficiently process rotated files. ([LOG-4575](https://issues.redhat.com/browse/LOG-4575))
*   Before this update, the unused metrics in the Event Router caused the container to fail due to excessive memory usage. With this update, there is reduction in the memory usage of the Event Router by removing the unused metrics. ([LOG-4686](https://issues.redhat.com/browse/LOG-4686))

## CVEs {id="openshift-logging-5-7-7-CVEs_{{ context }}"}
*   [CVE-2023-0800](https://access.redhat.com/security/cve/CVE-2023-0800)
*   [CVE-2023-0801](https://access.redhat.com/security/cve/CVE-2023-0801)
*   [CVE-2023-0802](https://access.redhat.com/security/cve/CVE-2023-0802)
*   [CVE-2023-0803](https://access.redhat.com/security/cve/CVE-2023-0803)
*   [CVE-2023-0804](https://access.redhat.com/security/cve/CVE-2023-0804)
*   [CVE-2023-2002](https://access.redhat.com/security/cve/CVE-2023-2002)
*   [CVE-2023-3090](https://access.redhat.com/security/cve/CVE-2023-3090)
*   [CVE-2023-3390](https://access.redhat.com/security/cve/CVE-2023-3390)
*   [CVE-2023-3776](https://access.redhat.com/security/cve/CVE-2023-3776)
*   [CVE-2023-4004](https://access.redhat.com/security/cve/CVE-2023-4004)
*   [CVE-2023-4527](https://access.redhat.com/security/cve/CVE-2023-4527)
*   [CVE-2023-4806](https://access.redhat.com/security/cve/CVE-2023-4806)
*   [CVE-2023-4813](https://access.redhat.com/security/cve/CVE-2023-4813)
*   [CVE-2023-4863](https://access.redhat.com/security/cve/CVE-2023-4863)
*   [CVE-2023-4911](https://access.redhat.com/security/cve/CVE-2023-4911)
*   [CVE-2023-5129](https://access.redhat.com/security/cve/CVE-2023-5129)
*   [CVE-2023-20593](https://access.redhat.com/security/cve/CVE-2023-20593)
*   [CVE-2023-29491](https://access.redhat.com/security/cve/CVE-2023-29491)
*   [CVE-2023-30630](https://access.redhat.com/security/cve/CVE-2023-30630)
*   [CVE-2023-35001](https://access.redhat.com/security/cve/CVE-2023-35001)
*   [CVE-2023-35788](https://access.redhat.com/security/cve/CVE-2023-35788)