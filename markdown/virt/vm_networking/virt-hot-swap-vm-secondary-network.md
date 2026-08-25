---
title: Hot swapping a virtual machine secondary network
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Hot swapping a virtual machine secondary network {id="virt-hot-swap-vm-secondary-network"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-hot-swap-vm-secondary-network" %}

toc::[]    

You can change the secondary network of a virtual machine (VM) without rebooting your VM. The change is transparent to the guest operating system, preserving properties like the MAC address. 

By hot swapping the secondary network, you can move a running VM to a different network segment or VLAN and apply new network policies or reconfigure network topology without interrupting the workload. {{ VirtProductName }} supports hot swapping for VMs that are connected to an OVN-Kubernetes localnet and a Linux bridge secondary network.

To hot swap a VM secondary network, you must edit the network configuration of the running VM to refer to a new `NetworkAttachmentDefinition` or `ClusterUserDefinedNetwork` manifest. This action triggers a live migration, connecting the VM to the new network without a reboot.

{% leveloffset +1 %}{% include "./modules/virt-vm-nw-hot-swap-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-live-updating-vm-nad-udn.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [About live migration](/virt/live_migration/virt-about-live-migration#virt-about-live-migration-permissions_virt-about-live-migration)
*   [Connecting a virtual machine to a secondary localnet user-defined network](/virt/vm_networking/virt-connecting-vm-to-secondary-udn#virt-connecting-vm-to-secondary-udn)
*   [Creating a Linux bridge network attachment definition](/virt/vm_networking/virt-connecting-vm-to-linux-bridge#virt-connecting-vm-to-linux-bridge)
*   [Creating an SR-IOV network attachment definition](/virt/vm_networking/virt-connecting-vm-to-sriov#nw-sriov-additional-network_virt-connecting-vm-to-sriov)