{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift File Integrity Operator 1.5.0 {id="file-integrity-operator-release-notes-1-5-0_{{ context }}"}

OpenShift File Integrity Operator 1.5.0 is now available. The `stable` update channel tracks and receives updates for the File Integrity Operator. For more information, see [Updating the File Integrity Operator](/security/file_integrity_operator/file-integrity-operator-updating#file-integrity-operator-updating). The following Red Hat Security Advisory (RHSA) is available: {._abstract}

*   [RHSA-2026:74025 - OpenShift File Integrity Operator 1.5.0 bug fix and enhancement update](https://access.redhat.com/errata/RHSA-2026:74025)

## New features and enhancements {id="file-integrity-operator-1-5-0-new-features-and-enhancements_{{ context }}"}

*   With this release, the File Integrity Operator uses the `ubi9/ubi-minimal-pqc` as a base image. This change enables Post-Quantum Cryptography (PQC) support through OpenSSL and helps TLS endpoints offer ML-KEM during key exchange. ([CMP-4573](https://issues.redhat.com/browse/CMP-4573), [CMP-4504](https://issues.redhat.com/browse/CMP-4504))
*   With this release, you can set labels and annotations in the `FileIntegrity` custom resource (CR) so the Operator applies them to the DaemonSet pod template. As a result, you can customize how file integrity pods are identified and selected in your environment. ([CMP-4728](https://issues.redhat.com/browse/CMP-4728))
*   With this release, the File Integrity Operator uses the {{ product_title }} API server as the source of truth for TLS configuration. As a result, the Operator applies the same TLS settings as the cluster API. ([CMP-4638](https://issues.redhat.com/browse/CMP-4638))
*   With this release, the File Integrity Operator creates label-scoped `NetworkPolicy` resources for AIDE scanner and re-init operand pods during `FileIntegrity` CR reconciliation. As a result, those operand pods meet required network policy controls. ([CMP-4714](https://issues.redhat.com/browse/CMP-4714))
*   This update includes upgraded dependencies in the underlying base images.