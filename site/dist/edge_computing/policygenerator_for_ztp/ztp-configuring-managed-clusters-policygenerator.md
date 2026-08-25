---
title: Configuring managed cluster policies by using PolicyGenerator resources
---

# Configuring managed cluster policies by using PolicyGenerator resources {#ztp-configuring-managed-clusters-policygenerator}

You can customize how {{ rh_rhacm_first }} uses `{{ policy_gen_cr }}` CRs to generate `Policy` CRs that configure the managed clusters that you provision.

Using {{ rh_rhacm }} and `{{ policy_gen_cr }}` CRs is the recommended approach for managing policies and deploying them to managed clusters. This replaces the use of `PolicyGenTemplate` CRs for this purpose. For more information about `{{ policy_gen_cr }}` resources, see the {{ rh_rhacm }} \[Policy Generator\](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/{{ rh_rhacm_version }}/html/governance/policy-deployment#integrate-policy-generator) documentation.

**Additional resources**

- For recommendations about scaling clusters with {{ rh_rhacm }}, see [Performance and scalability](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/2.6/html/install/installing#performance-and-scalability).

> [!NOTE]
> When managing large numbers of spoke clusters on the hub cluster, minimize the number of policies to reduce resource consumption.
>
> Grouping multiple configuration CRs into a single or limited number of policies is one way to reduce the overall number of policies on the hub cluster. When using the common, group, and site hierarchy of policies for managing site configuration, it is especially important to combine site-specific configuration into a single policy.

**Additional resources**

- [Preparing the {{ ztp }} site configuration repository](/edge_computing/ztp-preparing-the-hub-cluster#ztp-preparing-the-ztp-git-repository_ztp-preparing-the-hub-cluster)

**Additional resources**

- [Signalling {{ ztp }} cluster deployment completion with validator inform policies](/edge_computing/policygenerator_for_ztp/ztp-advanced-policygenerator-config#ztp-creating-a-validator-inform-policy_ztp-advanced-policy-config)

**Additional resources**

- [Customizing a managed cluster with PolicyGenerator CRs](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-customizing-a-managed-site-using-pgt_ztp-configuring-managed-clusters-policygenerator)

**Additional resources**

- For information about using {{ cgu_operator_first }} to construct your own `ClusterGroupUpgrade` CR, see [About the ClusterGroupUpgrade CR](/edge_computing/cnf-talm-for-cluster-upgrades#talo-about-cgu-crs_cnf-topology-aware-lifecycle-manager).
