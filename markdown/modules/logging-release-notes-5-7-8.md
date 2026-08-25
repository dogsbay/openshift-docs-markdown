{%- set _mod_docs_content_type = "REFERENCE" %}
# Logging 5.7.8 {id="logging-release-notes-5-7-8_{{ context }}"}
This release includes [OpenShift Logging Bug Fix Release 5.7.8](https://access.redhat.com/errata/RHBA-2023:6730).

## Bug fixes {id="logging-release-notes-5-7-8-bug-fixes"}
*   Before this update, there was a potential conflict when the same name was used for the `outputRefs` and `inputRefs` parameters in the `ClusterLogForwarder` custom resource (CR). As a result, the collector pods entered in a `CrashLoopBackOff` status. With this update, the output labels contain the `OUTPUT_` prefix to ensure a distinction between output labels and pipeline names. ([LOG-4383](https://issues.redhat.com/browse/LOG-4383))
*   Before this update, while configuring the JSON log parser, if you did not set the `structuredTypeKey` or `structuredTypeName` parameters for the Cluster Logging Operator, no alert would display about an invalid configuration. With this update, the Cluster Logging Operator informs you about the configuration issue. ([LOG-4441](https://issues.redhat.com/browse/LOG-4441))
*   Before this update, if the `hecToken` key was missing or incorrect in the secret specified for a Splunk output, the validation failed because the Vector forwarded logs to Splunk without a token. With this update, if the `hecToken` key is missing or incorrect, the validation fails with the `A non-empty hecToken entry is required` error message. ([LOG-4580](https://issues.redhat.com/browse/LOG-4580))
*   Before this update, selecting a date from the `Custom time range` for logs caused an error in the web console. With this update, you can select a date from the time range model in the web console successfully. ([LOG-4684](https://issues.redhat.com/browse/LOG-4684))

## CVEs {id="logging-release-notes-5-7-8-CVEs"}
*   [CVE-2023-40217](https://access.redhat.com/security/cve/CVE-2023-40217)
*   [CVE-2023-44487](https://access.redhat.com/security/cve/CVE-2023-44487)