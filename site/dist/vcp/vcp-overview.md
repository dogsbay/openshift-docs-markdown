---
title: Understanding virtualized control planes
---

# Understanding virtualized control planes {#vcp-overview}

A virtualized control plane deployment is an OpenShift Container Platform cluster whose control plane nodes run as virtual machines (VMs) on a hosting cluster with {{ VirtProductName }}.

This architecture is useful in the following example scenarios:

- Regulatory requirements mandate VM-level isolation for control plane components.
- You want to reduce hardware costs by consolidating multiple cluster control planes on shared infrastructure.
- You need faster provisioning of new clusters compared to physical bare metal.

In a virtualized control plane deployment, you have two clusters:

Hosting cluster
:   An existing OpenShift Container Platform cluster running {{ VirtProductName }} that hosts the control plane VMs.

Target cluster
:   The OpenShift Container Platform cluster with control planes running on the VMs.

KubeVirt Redfish runs on the hosting cluster and exposes the VMs through the standard Redfish API endpoints.

With this approach, you can use installation workflows such as Agent-based Installer or {{ ztp_first }}, to deploy virtualized control planes exactly like physical servers with baseboard management controllers (BMCs).

> [!NOTE]
> Virtualized control planes differ from {{ hcp_capital }}. With virtualized control planes, the control plane runs as VMs with hypervisor-level isolation. With {{ hcp_capital }}, the control plane runs as pods with container-level isolation.

## Additional resources {#additional-resources_vcp-overview}

- [Prerequisites for virtualized control planes](/vcp/vcp-prerequisites#vcp-prerequisites)
- [Installing KubeVirt Redfish](/virt/post_installation_configuration/virt-kubevirt-redfish#proc_virt-installing-kubevirt-redfish_virt-kubevirt-redfish)
- [Configuring KubeVirt Redfish for VM management](/virt/post_installation_configuration/virt-kubevirt-redfish#virt-kubevirt-redfish)
- [BMC addressing for installer-provisioned infrastructure](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#bmc-addressing_ipi-install-installation-workflow)
- [Deploying far edge sites with ZTP](/edge_computing/ztp-deploying-far-edge-sites#ztp-deploying-far-edge-sites)
