{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift File Integrity Operator 1.4.1 {id="file-integrity-operator-release-notes-1-4-1_{{ context }}"}

OpenShift File Integrity Operator 1.4.1 is now available. The `stable` update channel tracks and receives updates for the File Integrity Operator. For more information, see [Updating the File Integrity Operator](/security/file_integrity_operator/file-integrity-operator-updating#file-integrity-operator-updating). The following Red Hat Security Advisory (RHSA) is available: {._abstract}

*   [RHSA-2026:54288 - OpenShift File Integrity Operator 1.4.1 bug fix and enhancement update](https://access.redhat.com/errata/RHSA-2026:54288)

This update includes upgraded golang dependencies in the underlying base images.

## New features and enhancements {id="file-integrity-operator-1-4-1-new-features-and-enhancements_{{ context }}"}
*   With this release, the File Integrity Operator can manage `NetworkPolicy` resources with `create`, `delete`, `get`, and `update` commands. The `file-integrity-operator` service account now has matching namespace-scoped permissions. ([CMP-4497](https://issues.redhat.com/browse/CMP-4497))