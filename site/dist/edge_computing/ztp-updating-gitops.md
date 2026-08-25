---
title: Updating {{ ztp }}
---

# Updating {{ ztp }} {#ztp-updating-gitops}

You can update the {{ ztp_first }} infrastructure independently from the hub cluster, {{ rh_rhacm_first }}, and the managed OpenShift Container Platform clusters.

> [!NOTE]
> You can update the {{ gitops_title }} Operator when new versions become available. When updating the {{ ztp }} plugin, review the updated files in the reference configuration and ensure that the changes meet your requirements.

**Additional resources**

- [Configuring managed cluster policies by using PolicyGenerator resources](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-configuring-managed-clusters-policygenerator)
- [Comparing {{ rh_rhacm }} PolicyGenerator and PolicyGenTemplate resource patching](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-comparing-pgt-and-rhacm-pg-patching-strategies_ztp-configuring-managed-clusters-policygenerator)

**Additional resources**

- [Enabling the assisted service](/edge_computing/ztp-preparing-the-hub-cluster#enabling-assisted-installer-service-on-bare-metal_ztp-preparing-the-hub-cluster)

**Additional resources**

- [About the {{ cgu_operator_full }} configuration](/edge_computing/cnf-talm-for-cluster-upgrades#cnf-about-topology-aware-lifecycle-manager-config_cnf-topology-aware-lifecycle-manager)
- [About the auto-created ClusterGroupUpgrade CR for {{ ztp }}](/edge_computing/policygentemplate_for_ztp/ztp-talm-updating-managed-policies#talo-precache-autocreated-cgu-for-ztp_ztp-talm)
