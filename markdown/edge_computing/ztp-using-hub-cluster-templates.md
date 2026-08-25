---
title: Using hub templates in PolicyGenerator or PolicyGenTemplate CRs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Using hub templates in PolicyGenerator or PolicyGenTemplate CRs {id="ztp-using-hub-cluster-templates-pgt"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "hub-cluster-templates-pgt" %}

{{ cgu_operator_full }} supports {{ rh_rhacm_first }} hub cluster template functions in configuration policies used with {{ ztp_first }}.

Hub-side cluster templates allow you to define configuration policies that can be dynamically customized to the target clusters.
This reduces the need to create separate policies for many clusters with similar configurations but with different values.


:::important

Policy templates are restricted to the same namespace as the namespace where the policy is defined.
This means you must create the objects referenced in the hub template in the same namespace where the policy is created.

:::


{% include "./snippets/pgt-deprecation-notice.md" %}

**Additional resources**

*   [Configuring managed cluster policies by using PolicyGenerator resources](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-configuring-managed-clusters-policygenerator)
*   [Comparing {{ rh_rhacm }} PolicyGenerator and PolicyGenTemplate resource patching](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-comparing-pgt-and-rhacm-pg-patching-strategies_ztp-configuring-managed-clusters-policygenerator)
*   [{{ rh_rhacm }} support for template processing in configuration policies](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/{{ rh_rhacm_version }}/html-single/governance/index#template-processing)

{% leveloffset +1 %}{% include "./modules/ztp-specifying-nics-in-pgt-crs-with-hub-cluster-templates.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-syncing-new-configmap-changes-to-existing-pgt-crs.md" %}{% endleveloffset %}