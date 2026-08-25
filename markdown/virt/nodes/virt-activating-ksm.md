---
title: Activating kernel samepage merging (KSM)
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Activating kernel samepage merging (KSM) {id="virt-activating-ksm"}
{%- set context = "virt-activating-ksm" %}

{{ VirtProductName }} can activate kernel samepage merging (KSM) when nodes are overloaded. KSM deduplicates identical data found in the memory pages of virtual machines (VMs). If you have very similar VMs, KSM can make it possible to schedule more VMs on a single node. {._abstract}


:::important

You must only use KSM with trusted workloads.

:::


## Prerequisites {id="prerequisites_{{ context }}" ._prerequisites}
*   Ensure that an administrator has configured KSM support on any nodes where you want {{ VirtProductName }} to activate KSM.

{% leveloffset +1 %}{% include "./modules/virt-about-ksm.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-configure-ksm-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-configure-ksm-cli.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Specifying nodes for virtual machines](/virt/managing_vms/advanced_vm_management/virt-specifying-nodes-for-vms#virt-specifying-nodes-for-vms)
*   [Placing pods on specific nodes using node selectors](/nodes/scheduling/nodes-scheduler-node-selectors#nodes-scheduler-node-selectors)
*   [Managing kernel samepage merging](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/configuring_and_managing_virtualization/index#proc_managing-ksm_optimizing-virtual-machine-cpu-performance)