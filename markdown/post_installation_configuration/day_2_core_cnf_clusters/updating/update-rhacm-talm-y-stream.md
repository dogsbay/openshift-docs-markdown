---
title: "Complete a y-stream cluster update with {{ cgu_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Complete a y-stream cluster update with {{ cgu_operator }} {id="core-cluster-upgrades-y-stream"}
{%- set context = "core-cluster-upgrades-y-stream" %}

Y-stream updates move clusters between minor versions.
You can update through a single y-stream release or chain multiple sequential updates to reach a target version that is more than one minor release away. {._abstract}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-y-stream.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-y-stream-sequential.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_core-cluster-upgrades-y-stream" ._additional-resources}

*   [Complete an EUS-to-EUS cluster update with {{ cgu_operator }}](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-rhacm-talm-eus#core-cluster-upgrades-eus)
*   [Prepare {{ rh_rhacm }} policies and {{ cgu_operator }} for cluster updates](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-rhacm-talm-preparing-policies#core-cluster-upgrades-preparing-policies)
*   [Perform health checks before a cluster update with {{ cgu_operator }}](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-rhacm-talm-health-checks#core-cluster-upgrades-health-checks)
*   [{{ product_title }} update documentation](https://docs.redhat.com/en/documentation/openshift_container_platform/)
*   [{{ product_title }} update lifecycle and support policy](https://access.redhat.com/support/policy/updates/openshift)