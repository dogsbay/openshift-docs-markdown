---
title: Advanced managed cluster configuration with PolicyGenTemplate resources
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Advanced managed cluster configuration with PolicyGenTemplate resources {id="ztp-advanced-policy-config"}
{%- set context = "ztp-advanced-policy-config" -%}
{%- set policy_gen_cr = "PolicyGenTemplate" -%}
{%- set policy_prefix = true -%}
{%- set rangen_yaml_path = "spec.sourceFiles" -%}
{%- set argocd_folder = "out/argocd/example/policygentemplates/" -%}
{%- set path_prefix = "policygentemplates" %}

You can use `{{ policy_gen_cr }}`{minja} CRs to deploy custom functionality in your managed clusters.

:::important

Using {{ rh_rhacm }} and `{{ policy_gen_cr }}`{minja} CRs is the recommended approach for managing policies and deploying them to managed clusters.
This replaces the use of `PolicyGenTemplate` CRs for this purpose.
For more information about `{{ policy_gen_cr }}`{minja} resources, see the {{ rh_rhacm }} [Policy Generator](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/{{ rh_rhacm_version }}/html/governance/policy-deployment#integrate-policy-generator) documentation.

:::


{% include "./snippets/pgt-deprecation-notice.md" %}

**Additional resources**
{._additional-resources}

*   [Configuring managed cluster policies by using PolicyGenerator resources](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-configuring-managed-clusters-policygenerator)
*   [Comparing {{ rh_rhacm }} PolicyGenerator and PolicyGenTemplate resource patching](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-comparing-pgt-and-rhacm-pg-patching-strategies_ztp-configuring-managed-clusters-policygenerator)

{% leveloffset +1 %}{% include "./modules/ztp-deploying-additional-changes-to-clusters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-using-pgt-to-update-source-crs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-adding-new-content-to-gitops-ztp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-configuring-pgt-compliance-eval-timeouts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-creating-a-validator-inform-policy.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Upgrading {{ ztp }}](/edge_computing/ztp-updating-gitops#ztp-updating-gitops)

{% leveloffset +1 %}{% include "./modules/ztp-using-pgt-to-configure-power-states.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring node power consumption and realtime processing with workload hints](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#configuring-workload-hints_cnf-tuning-low-latency-nodes-with-perf-profile)

{% leveloffset +2 %}{% include "./modules/ztp-using-pgt-to-configure-performance-mode.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-using-pgt-to-configure-high-performance-mode.md" %}{% endleveloffset %}
*   [Configuring host firmware for low latency and high performance](/edge_computing/ztp-reference-cluster-configuration-for-vdu#ztp-du-configuring-host-firmware-requirements_sno-configure-for-vdu)

{% leveloffset +2 %}{% include "./modules/ztp-using-pgt-to-configure-power-saving-mode.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring power saving for nodes that run colocated high and low priority workloads](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#cnf-configuring-power-saving-for-nodes_cnf-tuning-low-latency-nodes-with-perf-profile)
*   [Configuring host firmware for low latency and high performance](/edge_computing/ztp-reference-cluster-configuration-for-vdu#ztp-du-configuring-host-firmware-requirements_sno-configure-for-vdu)
*   [Preparing the {{ ztp }} site configuration repository](/edge_computing/ztp-preparing-the-hub-cluster#ztp-preparing-the-ztp-git-repository_ztp-preparing-the-hub-cluster)

{% leveloffset +2 %}{% include "./modules/ztp-using-pgt-to-maximize-power-saving-mode.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-provisioning-lvm-storage.md" %}{% endleveloffset %}

## Configuring PTP events with PolicyGenTemplate CRs {id="ztp-advanced-policy-config-ptp_{{ context }}" ._additional-resources}

You can use the {{ ztp }} pipeline to configure PTP events that use HTTP transport.

{% leveloffset +2 %}{% include "./modules/ztp-configuring-ptp-fast-events.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Using PolicyGenTemplate CRs to override source CRs content](/edge_computing/policygentemplate_for_ztp/ztp-advanced-policy-config#ztp-using-pgt-to-update-source-crs_ztp-advanced-policy-config)

**Additional resources**
{._additional-resources}

*   [{{ product_registry }} overview](/registry/index#registry-overview)

{% leveloffset +1 %}{% include "./modules/ztp-add-local-reg-for-sno-duprofile.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ product_title }} registry overview](/registry/index#registry-overview)

{% leveloffset +2 %}{% include "./modules/ztp-configuring-disk-partitioning.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-configuring-pgt-image-registry.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Accessing the registry](/registry/accessing-the-registry#accessing-the-registry)

{%- set policy_gen_cr = "" -%}
{%- set policy_prefix = "" -%}
{%- set rangen_yaml_path = "" -%}
{%- set argocd_folder = "" -%}
{%- set path_prefix = "" -%}