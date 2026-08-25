---
title: Configuring managed cluster policies by using PolicyGenerator resources
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring managed cluster policies by using PolicyGenerator resources {id="ztp-configuring-managed-clusters-policygenerator"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ztp-configuring-managed-clusters-policygenerator" -%}
{%- set policy_gen_cr = "PolicyGenerator" -%}
{%- set policy_prefix = "acm-" -%}
{%- set argocd_folder = "out/argocd/example/acmpolicygenerator/" -%}
{%- set placement_rule_cr = "Placement" -%}
{%- set binding_field = "policyDefaults.placement.labelSelector" %}

You can customize how {{ rh_rhacm_first }} uses `{{ policy_gen_cr }}` CRs to generate `Policy` CRs that configure the managed clusters that you provision.

Using {{ rh_rhacm }} and `{{ policy_gen_cr }}` CRs is the recommended approach for managing policies and deploying them to managed clusters.
This replaces the use of `PolicyGenTemplate` CRs for this purpose.
For more information about `{{ policy_gen_cr }}` resources, see the {{ rh_rhacm }} [Policy Generator](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/{{ rh_rhacm_version }}/html/governance/policy-deployment#integrate-policy-generator) documentation.

{% leveloffset +1 %}{% include "./modules/ztp-comparing-pgt-and-rhacm-pg-patching-strategies.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-the-policygentemplate.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-pgt-config-best-practices.md" %}{% endleveloffset %}

**Additional resources**

*   For recommendations about scaling clusters with {{ rh_rhacm }}, see [Performance and scalability](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/2.6/html/install/installing#performance-and-scalability).


:::note

When managing large numbers of spoke clusters on the hub cluster, minimize the number of policies to reduce resource consumption.

Grouping multiple configuration CRs into a single or limited number of policies is one way to reduce the overall number of policies on the hub cluster. When using the common, group, and site hierarchy of policies for managing site configuration, it is especially important to combine site-specific configuration into a single policy.

:::


{% leveloffset +1 %}{% include "./modules/ztp-policygentemplates-for-ran.md" %}{% endleveloffset %}

**Additional resources**

*   [Preparing the {{ ztp }} site configuration repository](/edge_computing/ztp-preparing-the-hub-cluster#ztp-preparing-the-ztp-git-repository_ztp-preparing-the-hub-cluster)

{% leveloffset +1 %}{% include "./modules/ztp-customizing-a-managed-site-using-pgt.md" %}{% endleveloffset %}

**Additional resources**

*   [Signalling {{ ztp }} cluster deployment completion with validator inform policies](/edge_computing/policygenerator_for_ztp/ztp-advanced-policygenerator-config#ztp-creating-a-validator-inform-policy_ztp-advanced-policy-config)

{% leveloffset +1 %}{% include "./modules/ztp-monitoring-policy-deployment-progress.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-coordinating-reboots-for-config-changes.md" %}{% endleveloffset %}

**Additional resources**

*   [Customizing a managed cluster with PolicyGenerator CRs](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-customizing-a-managed-site-using-pgt_ztp-configuring-managed-clusters-policygenerator)

{% leveloffset +1 %}{% include "./modules/ztp-validating-the-generation-of-configuration-policy-crs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-restarting-policies-reconciliation.md" %}{% endleveloffset %}

**Additional resources**

*   For information about using {{ cgu_operator_first }} to construct your own `ClusterGroupUpgrade` CR, see [About the ClusterGroupUpgrade CR](/edge_computing/cnf-talm-for-cluster-upgrades#talo-about-cgu-crs_cnf-topology-aware-lifecycle-manager).

{% leveloffset +1 %}{% include "./modules/ztp-removing-content-from-managed-clusters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-definition-of-done-for-ztp-installations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-configuring-open-api-schema-for-patching.md" %}{% endleveloffset %}

{%- set policy_gen_cr = false -%}
{%- set policy_prefix = false -%}
{%- set argocd_folder = false -%}
{%- set placement_rule_cr = false -%}
{%- set binding_field = false -%}