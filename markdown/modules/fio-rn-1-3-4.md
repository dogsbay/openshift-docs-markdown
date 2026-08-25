{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift File Integrity Operator 1.3.4 {id="file-integrity-operator-release-notes-1-3-4_{{ context }}"}

Release notes for OpenShift File Integrity Operator 1.3.4. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift File Integrity Operator 1.3.4:

*   [RHBA-2024:2946 OpenShift File Integrity Operator Bug Fix and Enhancement Update](https://access.redhat.com/errata/RHBA-2024:2946)

## Bug fixes {id="file-integrity-operator-1-3-4-bug-fixes_{{ context }}"}

*   Before this update, File Integrity Operator would issue a `NodeHasIntegrityFailure` alert due to multus certificate rotation. With this release, the alert and failing status are now correctly triggered. ([**OCPBUGS-31257**](https://issues.redhat.com/browse/OCPBUGS-31257))