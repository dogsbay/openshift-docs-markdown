---
title: Understanding virtualized control planes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding virtualized control planes {id="vcp-overview"}
{%- set context = "vcp-overview" %}

A virtualized control plane deployment is an {{ product_title }} cluster whose control plane nodes run as virtual machines (VMs) on a hosting cluster with {{ VirtProductName }}.

{%- set FeatureName = "KubeVirt Redfish" %}
{% include "./snippets/technology-preview.md" %}

This architecture is useful in the following example scenarios:

*   Regulatory requirements mandate VM-level isolation for control plane components.
*   You want to reduce hardware costs by consolidating multiple cluster control planes on shared infrastructure.
*   You need faster provisioning of new clusters compared to physical bare metal.

In a virtualized control plane deployment, you have two clusters:


Hosting cluster
:   An existing {{ product_title }} cluster running {{ VirtProductName }} that hosts the control plane VMs.

Target cluster
:   The {{ product_title }} cluster with control planes running on the VMs.

KubeVirt Redfish runs on the hosting cluster and exposes the VMs through the standard Redfish API endpoints.

With this approach, you can use installation workflows such as Agent-based Installer or {{ ztp_first }}, to deploy virtualized control planes exactly like physical servers with baseboard management controllers (BMCs).


:::note

Virtualized control planes differ from {{ hcp_capital }}.
With virtualized control planes, the control plane runs as VMs with hypervisor-level isolation.
With {{ hcp_capital }}, the control plane runs as pods with container-level isolation.

:::


{% leveloffset +1 %}{% include "./modules/con_virt-vcp-architecture.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/proc_virt-vcp-deployment-workflow.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Prerequisites for virtualized control planes](/vcp/vcp-prerequisites#vcp-prerequisites)
*   [Installing KubeVirt Redfish](/virt/post_installation_configuration/virt-kubevirt-redfish#proc_virt-installing-kubevirt-redfish_virt-kubevirt-redfish)
*   [Configuring KubeVirt Redfish for VM management](/virt/post_installation_configuration/virt-kubevirt-redfish#virt-kubevirt-redfish)
*   [BMC addressing for installer-provisioned infrastructure](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#bmc-addressing_ipi-install-installation-workflow)
*   [Deploying far edge sites with ZTP](/edge_computing/ztp-deploying-far-edge-sites#ztp-deploying-far-edge-sites)