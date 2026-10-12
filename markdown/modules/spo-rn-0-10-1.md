{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift Security Profiles Operator 0.10.1 {id="spo-release-notes-0-10-1_{{ context }}"}

OpenShift Security Profiles Operator 0.10.1 is now available. The `stable` update channel tracks and receives updates for the Security Profiles Operator. The following Red Hat Bug Fix Advisory (RHBA) is available: {._abstract}

*   [RHSA-2026:76752 - OpenShift Security Profiles Operator 0.10.1 bug fix and enhancement update](https://access.redhat.com/errata/RHSA-2026:76752)

## New features and enhancements {id="spo-0-10-1-new-features-and-enhancements_{{ context }}"}

*   With this release, the Security Profiles Operator uses the `ubi9/ubi-minimal-pqc` as a base image. This change enables Post-Quantum Cryptography (PQC) support through OpenSSL and helps TLS endpoints offer ML-KEM during key exchange. ([CMP-4572](https://issues.redhat.com/browse/CMP-4572))
*   This update includes upgraded dependencies in the underlying base images.