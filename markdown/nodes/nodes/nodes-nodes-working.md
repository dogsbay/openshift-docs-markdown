---
title: Working with nodes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Working with nodes {id="nodes-nodes-working"}
{% include "./_attributes/common-attributes.md" %}

{%- set context = "nodes-nodes-working" %}

As an administrator, you can perform several tasks to make your clusters more efficient.
{%- if openshift_rosa or openshift_rosa_hcp %}
You can use the `oc adm` command to cordon, uncordon, and drain a specific node.


:::note

Cordoning and draining are only allowed on worker nodes that are part of {{ cluster_manager_first }} machine pools.

:::

{% endif %}

{% if openshift_enterprise or openshift_rosa or openshift_rosa_hcp %}
{% leveloffset +1 %}{% include "./modules/nodes-nodes-working-evacuating.md" %}{% endleveloffset %}

{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp) %}
{% leveloffset +1 %}{% include "./modules/nodes-nodes-working-updating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-working-marking.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sno-clusters-reboot-without-drain.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-working-deleting.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-nodes-working-deleting-bare-metal.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Evacuating pods on nodes](/nodes/nodes/nodes-nodes-working#nodes-nodes-working-evacuating_nodes-nodes-working)
*   [Manually scaling a compute machine set](/machine_management/manually-scaling-machineset#machineset-manually-scaling-manually-scaling-machineset)

{% endif %}