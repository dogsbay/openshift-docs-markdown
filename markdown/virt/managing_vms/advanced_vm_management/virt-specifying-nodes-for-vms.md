---
title: Specifying nodes for virtual machines
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Specifying nodes for virtual machines {id="virt-specifying-nodes-for-vms"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-specifying-nodes-for-vms" %}

You can place virtual machines (VMs) on specific nodes by using node placement rules.

{% leveloffset +1 %}{% include "./modules/virt-about-node-placement-vms.md" %}{% endleveloffset %}

## Node placement examples {id="node-placement-examples_{{ context }}"}

The following example YAML file snippets use `nodePlacement`, `affinity`, and `tolerations` fields to customize node placement for virtual machines.

{% leveloffset +2 %}{% include "./modules/virt-example-vm-node-placement-node-selector.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/virt-example-vm-node-placement-pod-affinity.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/virt-example-vm-node-placement-node-affinity.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/virt-example-vm-node-placement-tolerations.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Specifying nodes for virtualization components](/virt/post_installation_configuration/virt-node-placement-virt-components#virt-node-placement-virt-components)
*   [Placing pods on specific nodes using node selectors](/nodes/scheduling/nodes-scheduler-node-selectors#nodes-scheduler-node-selectors)
*   [Controlling pod placement on nodes using node affinity rules](/nodes/scheduling/nodes-scheduler-node-affinity#nodes-scheduler-node-affinity)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Controlling pod placement using node taints](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations)
{% endif %}