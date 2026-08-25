---
title: Prepare {{ rh_rhacm }} policies and {{ cgu_operator }} for cluster updates
---

# Prepare {{ rh_rhacm }} policies and {{ cgu_operator }} for cluster updates {#core-cluster-upgrades-preparing-policies}

Before you can perform policy-based cluster updates, you must configure your hub cluster with the required {{ rh_rhacm_first }} policies, placement rules, and {{ cgu_operator_full }} ({{ cgu_operator }}) `ClusterGroupUpgrade` custom resources (CRs).

## Additional resources {#additional-resources_core-cluster-upgrades-preparing-policies}

- [Overview of cluster updates with {{ rh_rhacm }} and {{ cgu_operator }}](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-rhacm-talm-overview#core-cluster-upgrades-overview)
- [Installing {{ cgu_operator_full }} by using the CLI](/edge_computing/cnf-talm-for-cluster-upgrades#installing-topology-aware-lifecycle-manager-using-cli_cnf-topology-aware-lifecycle-manager)
- [{{ rh_rhacm }}](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes)
- [`ClusterGroupUpgrade` samples on GitHub](https://github.com/openshift-kni/cluster-group-upgrades-operator/tree/main/samples)
