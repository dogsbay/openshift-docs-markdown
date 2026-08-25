{%- set _mod_docs_content_type = "CONCEPT" %}
# Indication of done for {{ ztp }} installations {id="ztp-definition-of-done-for-ztp-installations_{{ context }}"}

{{ ztp_first }} simplifies the process of checking the {{ ztp }} installation status for a cluster. The {{ ztp }} status moves through three phases: cluster installation, cluster configuration, and {{ ztp }} done. {._abstract}


Cluster installation phase
:   The cluster installation phase is shown by the `ManagedClusterJoined` and  `ManagedClusterAvailable` conditions in the `ManagedCluster` CR . If the `ManagedCluster` CR does not have these conditions, or the condition is set to `False`, the cluster is still in the installation phase. Additional details about installation are available from the `AgentClusterInstall` and `ClusterDeployment` CRs. For more information, see "Troubleshooting {{ ztp }}".


Cluster configuration phase
:   The cluster configuration phase is shown by a `ztp-running` label applied the `ManagedCluster` CR for the cluster.


{{ ztp }} done
:   Cluster installation and configuration is complete in the {{ ztp }} done phase. This is shown by the removal of the `ztp-running` label and addition of the `ztp-done` label to the `ManagedCluster` CR. The `ztp-done` label shows that the configuration has been applied and the baseline DU configuration has completed cluster tuning.

    The change to the {{ ztp }} done state is conditional on the compliant state of a {{ rh_rhacm_first }} validator inform policy. This policy captures the existing criteria for a completed installation and validates that it moves to a compliant state only when {{ ztp }} provisioning of the managed cluster is complete.

    The validator inform policy ensures the configuration of the cluster is fully applied and Operators have completed their initialization. The policy validates the following:
    *   The target `MachineConfigPool` contains the expected entries and has finished updating. All nodes are available and not degraded.
*   The SR-IOV Operator has completed initialization as indicated by at least one `SriovNetworkNodeState` with `syncStatus: Succeeded`.
*   The PTP Operator daemon set exists.