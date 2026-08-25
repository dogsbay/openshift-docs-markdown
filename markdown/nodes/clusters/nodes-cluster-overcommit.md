---
title: Configuring your cluster to place pods on overcommitted nodes
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-cluster-overcommit" %}
# Configuring your cluster to place pods on overcommitted nodes {id="nodes-cluster-overcommit"}
{% include "./_attributes/common-attributes.md" %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{{ product_title }} administrators can control the level of overcommit and manage container density on developer containers by using the ClusterResourceOverride Operator.


:::note

In {{ product_title }}, you must enable cluster-level overcommit. Node overcommitment is enabled by default.

:::

{% endif %}

{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
{{ product_title }} administrators can manage container density on nodes by configuring pod placement behavior and per-project resource limits that overcommit cannot exceed.

Alternatively, administrators can disable project-level resource overcommitment on customer-created namespaces that are not managed by Red&#160;Hat.

For more information about container resource management, see the __Additional resources__ section.
{% endif %}

In an _overcommitted_ state, the sum of the container compute resource requestsand limits exceeds the resources available on the system. For example, you might want to use overcommitment in development environments where a trade-off of guaranteed performance for capacity is acceptable.

Containers can specify compute resource requests and limits. Requests are used for scheduling your container and provide a minimum service guarantee. Limits constrain the amount of compute resource that can be consumed on your node.

The scheduler attempts to optimize the compute resource use across all nodes in your cluster. It places pods onto specific nodes, taking the pods' compute resource requests and nodes' available capacity into consideration.

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-overcommit-resource-requests.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-resource-override.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-resource-override-deploy-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-resource-override-deploy-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-resource-configure.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated) %}
{% leveloffset +2 %}{% include "./modules/nodes-cluster-resource-override-move-infra.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-node-overcommit.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-overcommit-resources-containers.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-overcommit-qos-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-qos-about-swap.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-overcommit-configure-nodes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-overcommit-node-enforcing.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-overcommit-node-resources.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-overcommit-node-disable.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-project-overcommit.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-overcommit-project-disable.md" %}{% endleveloffset %}

## Additional resources {id="nodes-cluster-overcommit-addtl-resources"}
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [Moving the Cluster Resource Override Operator pods](/machine_management/creating-infrastructure-machinesets#nodes-cluster-resource-override-move-infra_creating-infrastructure-machinesets)
*   [Creating infrastructure machine sets](/machine_management/creating-infrastructure-machinesets#creating-infrastructure-machinesets)
*   [Setting deployment resources](/applications/deployments/managing-deployment-processes#deployments-triggers_deployment-operations)
*   [Disabling or enforcing CPU limits using CPU CFS quotas](/nodes/clusters/nodes-cluster-overcommit#nodes-cluster-overcommit-node-enforcing_nodes-cluster-overcommit)
*   [Reserving resources for system processes](/nodes/clusters/nodes-cluster-overcommit#nodes-cluster-overcommit-node-resources_nodes-cluster-overcommit)
*   [Understanding how to reserve memory across quality of service tiers](/nodes/clusters/nodes-cluster-overcommit#qos-about-reserve_nodes-cluster-overcommit)
*   [Allocating resources for nodes](/nodes/nodes/nodes-nodes-resources-configuring#nodes-nodes-resources-configuring-setting_nodes-nodes-resources-configuring)
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   [Restrict resource consumption with limit ranges](/nodes/clusters/nodes-cluster-limit-ranges#nodes-cluster-limit-ranges)
{%- endif %}
{%- if not (openshift_rosa_hcp or openshift_enterprise or openshift_dedicated) %}
*   [Red Hat Managed resources](/rosa_architecture/rosa_policy_service_definition/rosa-policy-responsibility-matrix#sd-managed-resources-overview_sd-managed-resources)
{% endif %}