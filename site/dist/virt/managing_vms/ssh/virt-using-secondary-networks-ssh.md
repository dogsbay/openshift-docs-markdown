---
title: Use a secondary network for SSH access
---

# Use a secondary network for SSH access {#virt-using-secondary-networks-ssh}

You can configure a secondary network, attach a virtual machine (VM) to the secondary network interface, and connect to the DHCP-allocated IP address by using SSH.

> [!IMPORTANT]
> Secondary networks provide excellent performance because the traffic is not handled by the cluster network stack. However, the VMs are exposed directly to the secondary network and are not protected by firewalls. If a VM is compromised, an intruder could gain access to the secondary network. You must configure appropriate security within the operating system of the VM if you use this method.

For additional information about networking options, see the Multus and SR-IOV documentation in the "{{ VirtProductName }} Tuning & Scaling Guide".

> [!NOTE]
> You can also access a VM attached to a secondary network interface by using the cluster FQDN.

## Prerequisites {#prerequisites_virt-using-secondary-networks-ssh}

- You configured a secondary network such as Linux bridge or SR-IOV.
- You created a network attachment definition for a Linux bridge network or the SR-IOV Network Operator created a network attachment definition when you created an `SriovNetwork` object.
