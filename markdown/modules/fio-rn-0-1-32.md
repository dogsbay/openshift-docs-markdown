{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift File Integrity Operator 0.1.32 {id="file-integrity-operator-release-notes-0-1-32_{{ context }}"}

Release notes for OpenShift File Integrity Operator 0.1.32. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift File Integrity Operator 0.1.32:

*   [RHBA-2022:7095 OpenShift File Integrity Operator Bug Fix Update](https://access.redhat.com/errata/RHBA-2022:7095)

## Bug fixes {id="file-integrity-operator-0-1-32-bug-fixes_{{ context }}"}

*   Before this update, alerts issued by the File Integrity Operator did not set a namespace, making it difficult to understand from which namespace the alert originated. Now, the Operator sets the appropriate namespace, providing more information about the alert. ([**BZ#2112394**](https://bugzilla.redhat.com/show_bug.cgi?id=2112394))
*   Before this update, The File Integrity Operator did not update the metrics service on Operator startup, causing the metrics targets to be unreachable. With this release, the File Integrity Operator now ensures the metrics service is updated on Operator startup. ([**BZ#2115821**](https://bugzilla.redhat.com/show_bug.cgi?id=2115821))