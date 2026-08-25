{%- set _mod_docs_content_type = "CONCEPT" %}
# Release notes for Red Hat Windows Machine Config Operator 10.22.0 {id="windows-containers-release-notes-10-22-0_{{ context }}"}

Issued: 20 May 2026

You can review the following release notes to learn about the new features and bug fixes in the Windows Machine Config Operator (WMCO) version 10.22.0. {._abstract}

The components of the WMCO version 10.22.0 were released in [RHBA-2026:19710](https://access.redhat.com/errata/RHBA-2026:19710).

## New features and improvements {id="wmco-10-22-0-new-features_{{ context }}"}


Windows Server 2025 support
:   The WMCO now supports Windows Server 2025, OS Build [10.0.26100](https://support.microsoft.com/en-us/topic/may-12-2026-kb5087539-os-build-26100-32860-fe3fd635-23fc-41bd-b7a7-00e57c1c4f91) or later for all supported platforms.


Kubernetes upgrade
:   The WMCO now uses Kubernetes version 1.35.

## Bug fixes {id="wmco-10-22-0-bug-fixes_{{ context }}"}

*   Before this update, if you enabled the `ClusterAPIMachineManagement` feature gate by enabling the `TechPreviewNoUpgrade` feature set, {{ product_title }} provisioned the `openshift-cluster-api` namespace. However, the WMCO was not adding the `windows-user-data` secret to that namespace, which is required by Cluster API compute machine sets. Because of the missing secret, CAPI-provisioned Windows machines would not bootstrap, remaining stuck in the `Pending` phase, and never joining the cluster. With this release, the {{ product_title }} now detects whether the `openshift-cluster-api` namespace exists and mirrors the `windows-user-data` secret into that namespace. CAPI-provisioned Windows machines successfully receive the bootstrap secret, are no longer getting stuck in `Pending` state, and join the cluster as expected. ([OCPBUGS-38401](https://issues.redhat.com/browse/OCPBUGS-38401))