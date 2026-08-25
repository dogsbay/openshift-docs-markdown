---
title: "Manage worker nodes during a cluster update with {{ cgu_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Manage worker nodes during a cluster update with {{ cgu_operator }} {id="core-cluster-upgrades-worker-management"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "core-cluster-upgrades-worker-management" %}

You can pause and unpause worker nodes during cluster updates to stage control plane and worker node updates separately, minimizing workload disruption.

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-worker-node-management.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-worker-node-management-manual.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_core-cluster-upgrades-worker-management"}

*   [Complete an EUS-to-EUS cluster update with {{ cgu_operator }}](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-rhacm-talm-eus#core-cluster-upgrades-eus)
*   [Prepare worker node pools before a cluster update with {{ cgu_operator }}](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-rhacm-talm-worker-batching#core-cluster-upgrades-worker-batching)
*   [Using the {{ cgu_operator_full }} for cluster updates](/edge_computing/cnf-talm-for-cluster-upgrades#cnf-talm-for-cluster-updates)