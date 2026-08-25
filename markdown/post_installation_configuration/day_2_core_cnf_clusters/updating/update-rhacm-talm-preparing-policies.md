---
title: "Prepare {{ rh_rhacm }} policies and {{ cgu_operator }} for cluster updates"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Prepare {{ rh_rhacm }} policies and {{ cgu_operator }} for cluster updates {id="core-cluster-upgrades-preparing-policies"}
{%- set context = "core-cluster-upgrades-preparing-policies" %}

Before you can perform policy-based cluster updates, you must configure your hub cluster with the required {{ rh_rhacm_first }} policies, placement rules, and {{ cgu_operator_full }} ({{ cgu_operator }}) `ClusterGroupUpgrade` custom resources (CRs). {._abstract}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-talm-setup.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-cgu-configuration.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_core-cluster-upgrades-preparing-policies" ._additional-resources}

*   [Overview of cluster updates with {{ rh_rhacm }} and {{ cgu_operator }}](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-rhacm-talm-overview#core-cluster-upgrades-overview)
*   [Installing {{ cgu_operator_full }} by using the CLI](/edge_computing/cnf-talm-for-cluster-upgrades#installing-topology-aware-lifecycle-manager-using-cli_cnf-topology-aware-lifecycle-manager)
*   [{{ rh_rhacm }}](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes)
*   [`ClusterGroupUpgrade` samples on GitHub](https://github.com/openshift-kni/cluster-group-upgrades-operator/tree/main/samples)