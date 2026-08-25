---
title: Advanced managed cluster configuration with PolicyGenTemplate resources
---

# Advanced managed cluster configuration with PolicyGenTemplate resources {#ztp-advanced-policy-config}

You can use `{{ policy_gen_cr }}` CRs to deploy custom functionality in your managed clusters.

> [!IMPORTANT]
> Using {{ rh_rhacm }} and `{{ policy_gen_cr }}` CRs is the recommended approach for managing policies and deploying them to managed clusters. This replaces the use of `PolicyGenTemplate` CRs for this purpose. For more information about `{{ policy_gen_cr }}` resources, see the {{ rh_rhacm }} \[Policy Generator\](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/{{ rh_rhacm_version }}/html/governance/policy-deployment#integrate-policy-generator) documentation.

**Additional resources**

- [Configuring managed cluster policies by using PolicyGenerator resources](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-configuring-managed-clusters-policygenerator)
- [Comparing {{ rh_rhacm }} PolicyGenerator and PolicyGenTemplate resource patching](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-comparing-pgt-and-rhacm-pg-patching-strategies_ztp-configuring-managed-clusters-policygenerator)

**Additional resources**

- [Upgrading {{ ztp }}](/edge_computing/ztp-updating-gitops#ztp-updating-gitops)

**Additional resources**

- [Configuring node power consumption and realtime processing with workload hints](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#configuring-workload-hints_cnf-tuning-low-latency-nodes-with-perf-profile)

- [Configuring host firmware for low latency and high performance](/edge_computing/ztp-reference-cluster-configuration-for-vdu#ztp-du-configuring-host-firmware-requirements_sno-configure-for-vdu)

**Additional resources**

- [Configuring power saving for nodes that run colocated high and low priority workloads](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#cnf-configuring-power-saving-for-nodes_cnf-tuning-low-latency-nodes-with-perf-profile)
- [Configuring host firmware for low latency and high performance](/edge_computing/ztp-reference-cluster-configuration-for-vdu#ztp-du-configuring-host-firmware-requirements_sno-configure-for-vdu)
- [Preparing the {{ ztp }} site configuration repository](/edge_computing/ztp-preparing-the-hub-cluster#ztp-preparing-the-ztp-git-repository_ztp-preparing-the-hub-cluster)

## Configuring PTP events with PolicyGenTemplate CRs {#ztp-advanced-policy-config-ptp_ztp-advanced-policy-config}

You can use the {{ ztp }} pipeline to configure PTP events that use HTTP transport.

**Additional resources**

- [Using PolicyGenTemplate CRs to override source CRs content](/edge_computing/policygentemplate_for_ztp/ztp-advanced-policy-config#ztp-using-pgt-to-update-source-crs_ztp-advanced-policy-config)

**Additional resources**

- [{{ product_registry }} overview](/registry/index#registry-overview)

**Additional resources**

- [OpenShift Container Platform registry overview](/registry/index#registry-overview)

**Additional resources**

- [Accessing the registry](/registry/accessing-the-registry#accessing-the-registry)
