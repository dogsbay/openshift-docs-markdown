{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift File Integrity Operator 1.3.1 {id="file-integrity-operator-release-notes-1-3-1_{{ context }}"}

Release notes for OpenShift File Integrity Operator 1.3.1. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift File Integrity Operator 1.3.1:

*   [RHBA-2023:3600 OpenShift File Integrity Operator Bug Fix Update](https://access.redhat.com/errata/RHBA-2023:3600)

## New features and enhancements {id="file-integrity-operator-1-3-1-new-features-and-enhancements_{{ context }}"}

*   FIO now includes kubelet certificates as default files, excluding them from issuing warnings when they’re managed by {{ product_title }}. ([**OCPBUGS-14348**](https://issues.redhat.com/browse/OCPBUGS-14348))
*   FIO now correctly directs email to the address for Red Hat Technical Support. ([**OCPBUGS-5023**](https://issues.redhat.com/browse/OCPBUGS-5023))

## Bug fixes {id="file-integrity-operator-1-3-1-bug-fixes_{{ context }}"}

*   Before this update, the File Integrity Operator (FIO) would not clean up `FileIntegrityNodeStatus` CRDs when nodes are removed from the cluster. FIO now correctly cleans up node status CRDs on node removal.  ([**OCPBUGS-4321**](https://issues.redhat.com/browse/OCPBUGS-4321))
*   Before this update, FIO would also erroneously indicate that new nodes failed integrity checks. FIO now correctly shows node status CRDs when adding new nodes to the cluster. This provides correct node status notifications. ([**OCPBUGS-8502**](https://issues.redhat.com/browse/OCPBUGS-8502))
*   Before this update, when FIO was reconciling `FileIntegrity` CRDs, it would pause scanning until the reconciliation was done. This caused an overly aggressive re-initiatization process on nodes not impacted by the reconciliation. This problem also resulted in unnecessary daemonsets for machine config pools which are unrelated to the `FileIntegrity` being changed. FIO correctly handles these cases and only pauses AIDE scanning for nodes that are affected by file integrity changes. ([**CMP-1097**](https://issues.redhat.com/browse/CMP-1097))

## Known Issues {id="file-integrity-operator-1-3-1-known-issues_{{ context }}"}

In FIO 1.3.1, increasing nodes in {{ ibm_z_name }} clusters might result in `Failed` File Integrity node status. For more information, see [Adding nodes in {{ ibm_power_name }} clusters can result in failed File Integrity node status](https://access.redhat.com/solutions/7028861).