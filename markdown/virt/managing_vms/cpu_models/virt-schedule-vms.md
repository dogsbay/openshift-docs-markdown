---
title: Schedule virtual machines
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Schedule virtual machines {id="virt-schedule-vms"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-schedule-vms" %}

You can schedule a virtual machine (VM) on a node by ensuring that the VM’s CPU model and policy attribute are matched for compatibility with the CPU models and policy attributes supported by the node.

{% leveloffset +1 %}{% include "./modules/virt-schedule-cpu-host-model-vms.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-schedule-supported-cpu-model-vms.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-policy-attributes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-setting-policy-attributes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-vm-custom-scheduler.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
**Additional resources**

*   [Deploying a secondary scheduler](/nodes/scheduling/secondary_scheduler/nodes-secondary-scheduler-configuring#nodes-secondary-scheduler-configuring-console_secondary-scheduler-configuring)
{% endif %}