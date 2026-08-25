---
title: Preparing a bare-metal cluster for platform update
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Preparing a bare-metal cluster for platform update {id="update-ocp-update-prep"}
{%- set context = "ocp-update-prep" %}

On bare-metal hardware, you often must update the firmware to take on important security fixes, take on new functionality, or maintain compatibility with the new release of {{ product_title }}. {._abstract}

## Disconnected environment considerations {id="update-environment-considerations_{{ context }}"}

To update clusters in disconnected environments, you must update your offline image repository.

**Additional resources**
{._additional-resources}

*   [API compatibility guidelines](/rest_api/overview/understanding-compatibility-guidelines#api-compatibility-guidelines_compatibility-guidelines)
*   [Mirroring images for a disconnected installation by using the oc-mirror plugin v2](/disconnected/about-installing-oc-mirror-v2#about-installing-oc-mirror-v2)

{% leveloffset +1 %}{% include "./modules/update-ensuring-the-host-firmware-is-compatible.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/update-ensuring-that-layered-products-are-compatible.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Updating the worker nodes](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-completing-the-control-plane-only-update#update-updating-the-worker-nodes_completing-the-update)
*   [Updating all the OLM Operators](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-completing-the-control-plane-only-update#update-updating-all-the-olm-operators_completing-the-update)

{% leveloffset +1 %}{% include "./modules/update-applying-mcp-labels-to-nodes-before-the-update.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Node configuration management with machine config pools](/machine_configuration/index#architecture-machine-config-pools_machine-config-overview)

{% leveloffset +2 %}{% include "./modules/update-reviewing-configured-cluster-mcp-roles.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/update-creating-mcp-groups-for-the-cluster.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Performing a Control Plane Only update](/updating/updating_a_cluster/control-plane-only-update#control-plane-only-update)
*   [Factors affecting update duration](/updating/understanding_updates/understanding-openshift-update-duration#factors-affecting-update-duration_openshift-update-duration)
*   [Ensuring that CNF workloads run uninterrupted with pod disruption budgets](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-cnf-update-prep#update-pdb_update-cnf-update-prep)
*   [Ensuring that pods do not run on the same cluster node](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-cnf-update-prep#update-pod-anti-affinity_update-cnf-update-prep)

{% leveloffset +1 %}{% include "./modules/update-preparing-the-platform-for-update.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Investigating pod issues](/support/troubleshooting/investigating-pod-issues#investigating-pod-issues)