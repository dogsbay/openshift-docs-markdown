{%- set _mod_docs_content_type = "REFERENCE" %}
# Logging 5.7.0 {id="logging-release-notes-5-7-0_{{ context }}"}

This release includes [OpenShift Logging Bug Fix Release 5.7.0](https://access.redhat.com/errata/RHBA-2023:2133).

## Enhancements {id="logging-5-7-enhancements"}
With this update, you can enable logging to detect multi-line exceptions and reassemble them into a single log entry.

To enable logging to detect multi-line exceptions and reassemble them into a single log entry, ensure that the `ClusterLogForwarder` Custom Resource (CR) contains a `detectMultilineErrors` field, with a value of `true`.

## Known Issues {id="logging-5-7-known-issues"}
None.

## Bug fixes {id="logging-5-7-0-bug-fixes"}
*   Before this update, the `nodeSelector` attribute for the Gateway component of the LokiStack did not impact node scheduling. With this update, the `nodeSelector` attribute works as expected. ([LOG-3713](https://issues.redhat.com/browse/LOG-3713))

## CVEs {id="logging-5-7-0-CVEs"}
*   [CVE-2023-1999](https://access.redhat.com/security/cve/CVE-2023-1999)
*   [CVE-2023-28617](https://access.redhat.com/security/cve/CVE-2023-28617)