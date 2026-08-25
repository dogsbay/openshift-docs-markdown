{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift File Integrity Operator 1.2.0 {id="file-integrity-operator-release-notes-1-2-0_{{ context }}"}

Release notes for OpenShift File Integrity Operator 1.2.0. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift File Integrity Operator 1.2.0:

*   [RHBA-2023:1273 OpenShift File Integrity Operator Enhancement Update](https://access.redhat.com/errata/RHBA-2023:1273)

## New features and enhancements {id="file-integrity-operator-1-2-0-new-features-and-enhancements_{{ context }}"}

*   The File Integrity Operator Custom Resource (CR) now contains an `initialDelay` feature that specifies the number of seconds to wait before starting the first AIDE integrity check. For more information, see [Creating the FileIntegrity custom resource](/security/file_integrity_operator/file-integrity-operator-understanding#understanding-file-integrity-custom-resource_file-integrity-operator).
*   The File Integrity Operator is now stable and the release channel is upgraded to `stable`. Future releases will follow [Semantic Versioning](https://semver.org/). To access the latest release, see [Updating the File Integrity Operator](/security/file_integrity_operator/file-integrity-operator-updating#olm-preparing-upgrade_file-integrity-operator-updating).