---
title: Manually installing a {{ sno }} cluster with {{ ztp }}
---

# Manually installing a {{ sno }} cluster with {{ ztp }} {#ztp-manual-install}

You can deploy a managed {{ sno }} cluster by using {{ rh_rhacm_first }} and the assisted service.

> [!NOTE]
> If you are creating multiple managed clusters, use the `ClusterInstance` method described in [Deploying far edge sites with ZTP](/edge_computing/ztp-deploying-far-edge-sites#ztp-deploying-far-edge-sites).

> [!IMPORTANT]
> The target bare-metal host must meet the networking, firmware, and hardware requirements listed in [Recommended cluster configuration for vDU application workloads](/edge_computing/ztp-reference-cluster-configuration-for-vdu#sno-configure-for-vdu).

**Additional resources**

- [BMC addressing](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#bmc-addressing_ipi-install-installation-workflow)
- [About root device hints](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#root-device-hints_preparing-to-install-with-agent-based-installer)
- [{{ sno_caps }} ClusterInstance CR installation reference](/edge_computing/ztp-deploying-far-edge-sites#ztp-clusterinstance-config-reference_ztp-deploying-far-edge-sites)
- [Connectivity prerequisites for managed cluster networks](/edge_computing/ztp-reference-cluster-configuration-for-vdu#ztp-managed-cluster-network-prereqs_sno-configure-for-vdu)
- [Deploying {{ lvms }} on {{ sno }} clusters](/storage/persistent_storage_local/persistent-storage-using-lvms#lvms-preface-sno-ran_logical-volume-manager-storage)
- [Configuring {{ lvms }} using PolicyGenerator CRs](/edge_computing/policygenerator_for_ztp/ztp-advanced-policygenerator-config#ztp-provisioning-lvm-storage_ztp-advanced-policy-config)
- [Configuring managed cluster policies by using PolicyGenerator resources](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-configuring-managed-clusters-policygenerator)

**Additional resources**

- [Bind bare-metal hosts to clusters using the cluster-reference annotation in {{ ztp }} deployments](/edge_computing/ztp-manual-install#ztp-binding-bmh-to-cluster-using-annotation_ztp-manual-install)
- [`BareMetalHost` cluster-reference annotation reference](/edge_computing/ztp-manual-install#ztp-bmh-cluster-reference-annotation-ref_ztp-manual-install)
- [Binding and unbinding hosts in the {{ rh_rhacm }} documentation](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.17/html/clusters/cluster_mce_overview#bind-unbind-hosts)

**Additional resources**

- [Late binding for bare-metal host pools in {{ ztp }} deployments](/edge_computing/ztp-manual-install#ztp-late-binding-bare-metal-host-pools_ztp-manual-install)
- [`BareMetalHost` cluster-reference annotation reference](/edge_computing/ztp-manual-install#ztp-bmh-cluster-reference-annotation-ref_ztp-manual-install)
- [Binding and unbinding hosts in the {{ rh_rhacm }} documentation](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.16/html/clusters/cluster_mce_overview#binding-and-unbinding-hosts)
