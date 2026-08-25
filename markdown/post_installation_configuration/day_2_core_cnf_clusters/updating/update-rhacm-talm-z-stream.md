---
title: "Complete a z-stream cluster update with {{ cgu_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Complete a z-stream cluster update with {{ cgu_operator }} {id="core-cluster-upgrades-z-stream"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "core-cluster-upgrades-z-stream" %}

You can update clusters to z-stream patch releases by using {{ rh_rhacm }} policies and {{ cgu_operator_full }} ({{ cgu_operator }}).

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-z-stream.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_core-cluster-upgrades-z-stream"}

*   [Prepare {{ rh_rhacm }} policies and {{ cgu_operator }} for cluster updates](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-rhacm-talm-preparing-policies#core-cluster-upgrades-preparing-policies)
*   [Perform health checks before a cluster update with {{ cgu_operator }}](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-rhacm-talm-health-checks#core-cluster-upgrades-health-checks)
*   [Troubleshoot cluster updates with {{ cgu_operator }}](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-rhacm-talm-troubleshooting#core-cluster-upgrades-troubleshooting)
*   [{{ product_title }} update documentation](https://docs.redhat.com/en/documentation/openshift_container_platform/)
*   [{{ product_title }} update lifecycle and support policy](https://access.redhat.com/support/policy/updates/openshift)