---
title: "Complete an EUS-to-EUS cluster update with {{ cgu_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Complete an EUS-to-EUS cluster update with {{ cgu_operator }} {id="core-cluster-upgrades-eus"}
{%- set context = "core-cluster-upgrades-eus" %}

You can partially skip intermediate odd-numbered releases by using control-plane-only EUS-to-EUS updates with {{ rh_rhacm }} policies and {{ cgu_operator_full }} ({{ cgu_operator }}).
With this approach, you can manage control plane and worker version skew during staged rollouts. {._abstract}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-eus-control-plane-only.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_core-cluster-upgrades-eus" ._additional-resources}

*   [Prepare {{ rh_rhacm }} policies and {{ cgu_operator }} for cluster updates](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-rhacm-talm-preparing-policies#core-cluster-upgrades-preparing-policies)
*   [Manage worker nodes during a cluster update with {{ cgu_operator }}](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-rhacm-talm-worker-management#core-cluster-upgrades-worker-management)
*   [Perform health checks before a cluster update with {{ cgu_operator }}](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-rhacm-talm-health-checks#core-cluster-upgrades-health-checks)
*   [{{ product_title }} update documentation](https://docs.redhat.com/en/documentation/openshift_container_platform/)
*   [{{ product_title }} update lifecycle and support policy](https://access.redhat.com/support/policy/updates/openshift)