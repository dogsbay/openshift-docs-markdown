---
title: Preparing the environment for virtualized control planes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Preparing the environment for virtualized control planes {id="vcp-preparing-environment"}
{%- set context = "vcp-preparing-environment" %}

Prepare your hosting cluster environment before deploying a virtualized control plane cluster.
This includes installing and configuring KubeVirt Redfish and creating the control plane VMs. {._abstract}

{%- set FeatureName = "KubeVirt Redfish" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/proc_virt-installing-kubevirt-redfish.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/proc_virt-creating-vcp-vms.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Recommended resources for topologies](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#agent-based-installer-recommended-resources_preparing-to-install-with-agent-based-installer)
*   [Connecting a virtual machine to a secondary localnet user-defined network](/virt/vm_networking/virt-connecting-vm-to-secondary-udn#virt-connecting-vm-to-secondary-udn)