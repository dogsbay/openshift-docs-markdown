---
title: "Coordinate OLM-managed Operator updates with {{ cgu_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Coordinate OLM-managed Operator updates with {{ cgu_operator }} {id="core-cluster-upgrades-operator-coordination"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "core-cluster-upgrades-operator-coordination" %}

OLM-managed Operators must be compatible with the target {{ product_title }} version before you begin a cluster update.
Planning Operator updates alongside cluster updates prevents compatibility issues that can block or degrade the update process.

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-operator-coordination.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_core-cluster-upgrades-operator-coordination"}

*   [Prepare {{ rh_rhacm }} policies and {{ cgu_operator }} for cluster updates](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-rhacm-talm-preparing-policies#core-cluster-upgrades-preparing-policies)
*   [{{ product_title }} update documentation](https://docs.redhat.com/en/documentation/openshift_container_platform/)