---
title: "Specifying nodes for {{ VirtProductName }} components"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Specifying nodes for {{ VirtProductName }} components {id="virt-node-placement-virt-components"}
{%- set context = "virt-node-placement-virt-components" %}

You can configure node placement rules to specify where {{ VirtProductName }} Operators, workloads, and controllers are deployed. Custom placement rules allow you to isolate virtual machine (VM) traffic or dedicate specialized compute resources to critical workloads. {._abstract}


:::important

You can configure node placement rules for some components after installing {{ VirtProductName }}, but virtual machines cannot be present if you want to configure node placement rules for workloads.

:::


{% leveloffset +1 %}{% include "./modules/virt-about-node-placement-virt-components.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-applying-node-placement-rules.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-node-placement-rule-examples.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_virt-node-placement-virt-components" ._additional-resources}
*   [Specifying nodes for virtual machines](/virt/managing_vms/advanced_vm_management/virt-specifying-nodes-for-vms#virt-specifying-nodes-for-vms)
*   [Placing pods on specific nodes using node selectors](/nodes/scheduling/nodes-scheduler-node-selectors#nodes-scheduler-node-selectors)
*   [Controlling pod placement on nodes using node affinity rules](/nodes/scheduling/nodes-scheduler-node-affinity#nodes-scheduler-node-affinity)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Controlling pod placement using node taints](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations)
{%- endif %}