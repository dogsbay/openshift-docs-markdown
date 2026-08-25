---
title: "Prepare worker node pools before a cluster update with {{ cgu_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Prepare worker node pools before a cluster update with {{ cgu_operator }} {id="core-cluster-upgrades-worker-batching"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "core-cluster-upgrades-worker-batching" %}

You can configure worker node batching to control how many worker nodes update simultaneously and how workloads tolerate disruption during cluster updates by using `MachineConfigPool` and `PodDisruptionBudget` resources.

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-worker-batching-mcp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-worker-batching-pdb.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_core-cluster-upgrades-worker-batching"}

*   [Configuring application pods before updating your {{ product_title }} cluster](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-cnf-update-prep#update-cnf-update-prep)
*   [Kubernetes PodDisruptionBudget documentation](https://kubernetes.io/docs/tasks/run-application/configure-pdb/)
*   [Pod Topology Spread Constraints](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/)