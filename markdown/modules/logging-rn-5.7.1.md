{%- set _mod_docs_content_type = "REFERENCE" %}
# Logging 5.7.1 {id="logging-release-notes-5-7-1_{{ context }}"}
This release includes: [OpenShift Logging Bug Fix Release 5.7.1](https://access.redhat.com/errata/RHBA-2023:3197).

## Bug fixes {id="logging-5-7-1-bug-fixes_{{ context }}"}
*   Before this update, the presence of numerous noisy messages within the Cluster Logging Operator pod logs caused reduced log readability, and increased difficulty in identifying important system events. With this update, the issue is resolved by significantly reducing the noisy messages within Cluster Logging Operator pod logs. ([LOG-3482](https://issues.redhat.com/browse/LOG-3482))
*   Before this update, the API server would reset the value for the `CollectorSpec.Type` field to `vector`, even when the custom resource used a different value. This update removes the default for the `CollectorSpec.Type` field to restore the previous behavior. ([LOG-4086](https://issues.redhat.com/browse/LOG-4086))
*   Before this update, a time range could not be selected in the {{ Product_Title }} web console by clicking and dragging over the logs histogram. With this update, clicking and dragging can be used to successfully select a time range. ([LOG-4501](https://issues.redhat.com/browse/LOG-4501))
*   Before this update, clicking on the **Show Resources** link in the {{ Product_Title }} web console did not produce any effect. With this update, the issue is resolved by fixing the functionality of the "Show Resources" link to toggle the display of resources for each log entry. ([LOG-3218](https://issues.redhat.com/browse/LOG-3218))

## CVEs {id="logging-5-7-1-CVEs_{{ context }}"}
*   [CVE-2023-21930](https://access.redhat.com/security/cve/CVE-2023-21930)
*   [CVE-2023-21937](https://access.redhat.com/security/cve/CVE-2023-21937)
*   [CVE-2023-21938](https://access.redhat.com/security/cve/CVE-2023-21938)
*   [CVE-2023-21939](https://access.redhat.com/security/cve/CVE-2023-21939)
*   [CVE-2023-21954](https://access.redhat.com/security/cve/CVE-2023-21954)
*   [CVE-2023-21967](https://access.redhat.com/security/cve/CVE-2023-21967)
*   [CVE-2023-21968](https://access.redhat.com/security/cve/CVE-2023-21968)
*   [CVE-2023-28617](https://access.redhat.com/security/cve/CVE-2023-28617)