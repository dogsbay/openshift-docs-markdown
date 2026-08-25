{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift File Integrity Operator 1.3.6 {id="file-integrity-operator-release-notes-1-3-6_{{ context }}"}

Release notes for OpenShift File Integrity Operator 1.3.6. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift File Integrity Operator 1.3.6:

*   [RHBA-2025:11535 OpenShift File Integrity Operator Bug Fix Update](https://access.redhat.com/errata/RHBA-2025:11535)

## Bug fixes {id="file-integrity-operator-1-3-6-bug-fixes_{{ context }}"}

*   Before this update, running the `oc annotate fileintegrities/<fileintegrity-name> file-integrity.openshift.io/re-init-on-failed=` command would trigger a reinitialization on all nodes. Now, it only reinitializes the nodes where failures occurred. ([**OCPBUGS-18933**](https://issues.redhat.com/browse/OCPBUGS-18933))
*   Before this update, resetting FIO cleared the `NodeHasIntegrityFailure` alert. This occurred because the `metric file_integrity_operator_node_failed` setting was also reset. With this release, restarting FIO does not affect the `NodeHasIntegrityFailure` alert. ([**OCPBUGS-42807**](https://issues.redhat.com/browse/OCPBUGS-42807))
*   Before this update, when a new node was added to a cluster by scaling up the `machineset` object, FIO marked the new node as `Failed` before the node was ready. With this release FIO waits until the new node is ready. ([**OCPBUGS-36483**](https://issues.redhat.com/browse/OCPBUGS-36483))
*   Before this update, the Advanced Intrusion Detection Environment (AIDE) daemonset pods would constantly force-initialize the AIDE database. With this release, FIO initializes the AIDE database only once. ([**OCPBUGS-37300**](https://issues.redhat.com/browse/OCPBUGS-37300))
*   Before this update, some link paths in the Machine Config Operator (MCO) configuration, such as `/hostroot/etc/ipsec.d/openshift.conf` and `hostroot/etc/mco/internal-registry-pull-secret.json`, changed during an MCO update. This led to failed file integrity checks on nodes after the update, which disrupted user experience. With this update, the File Integrity Operator (FIO) uses the updated file link paths in the MCO configuration. File integrity checks now pass after an update, helping to ensure a stable cluster. ([**OCPBUGS-41628**](https://issues.redhat.com/browse/OCPBUGS-41628))