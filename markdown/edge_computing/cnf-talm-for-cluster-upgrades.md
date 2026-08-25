---
title: "Updating managed clusters with the {{ cgu_operator_full }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Updating managed clusters with the {{ cgu_operator_full }} {id="cnf-talm-for-cluster-updates"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cnf-topology-aware-lifecycle-manager" -%}
{%- set policy_gen_cr = "PolicyGenerator" %}

You can use the {{ cgu_operator_first }} to manage the software lifecycle of multiple clusters. {{ cgu_operator }} uses {{ rh_rhacm_first }} policies to perform changes on the target clusters.

Using {{ rh_rhacm }} and `{{ policy_gen_cr }}` CRs is the recommended approach for managing policies and deploying them to managed clusters.
This replaces the use of `PolicyGenTemplate` CRs for this purpose.
For more information about `{{ policy_gen_cr }}` resources, see the {{ rh_rhacm }} [Policy Generator](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/{{ rh_rhacm_version }}/html/governance/policy-deployment#integrate-policy-generator) documentation.

{% leveloffset +1 %}{% include "./modules/cnf-about-topology-aware-lifecycle-manager-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-about-topology-aware-lifecycle-manager-policies.md" %}{% endleveloffset %}

**Additional resources**

*   [About the PolicyGenerator CRD](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-the-policygentemplate_ztp-configuring-managed-clusters-policygenerator)

{% leveloffset +1 %}{% include "./modules/cnf-topology-aware-lifecycle-manager-installation-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-topology-aware-lifecycle-manager-installation-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-topology-aware-lifecycle-manager-about-cgu-crs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-about-topology-aware-lifecycle-manager-blocking-crs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-topology-aware-lifecycle-manager-policies-concept.md" %}{% endleveloffset %}

**Additional resources**

*   [About the PolicyGenerator CRD](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-the-policygentemplate_ztp-configuring-managed-clusters-policygenerator)

{% leveloffset +2 %}{% include "./modules/cnf-topology-aware-lifecycle-manager-about-subscription-crs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-topology-aware-lifecycle-manager-apply-policies.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-topology-aware-lifecycle-manager-precache-concept.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-topology-aware-lifecycle-manager-precache-image-filter.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-topology-aware-lifecycle-manager-precache-feature.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-topology-aware-lifecycle-manager-troubleshooting.md" %}{% endleveloffset %}

**Additional resources**

*   [{{ product_title }} Troubleshooting Operator Issues](/support/troubleshooting/troubleshooting-operator-issues#troubleshooting-operator-issues)
*   [Updating managed policies with {{ cgu_operator_full }}](/edge_computing/policygenerator_for_ztp/ztp-talm-updating-managed-policies-pg#ztp-topology-aware-lifecycle-manager)
*   [About the PolicyGenerator CRD](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-the-policygentemplate_ztp-configuring-managed-clusters-policygenerator)

{%- set policy_gen_cr = false -%}