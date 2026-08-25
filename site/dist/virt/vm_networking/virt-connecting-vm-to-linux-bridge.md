---
title: Connecting a virtual machine to a Linux bridge network
---

# Connecting a virtual machine to a Linux bridge network {#virt-connecting-vm-to-linux-bridge}

By default, {{ VirtProductName }} is installed with a single, internal pod network. You can connect a virtual machine (VM) to the physical network by using a Linux bridge.

To create a Linux bridge network and attach a VM to the network, perform the following steps:

1. Prepare the node network by creating a Linux bridge node network configuration policy (NNCP).
2. Define the secondary Linux bridge network by creating a network attachment definition (NAD).
3. Attach the VM to the Linux bridge network.

> [!NOTE]
> {{ VirtProductName }} does not support Linux bridge bonding modes 0, 5, and 6. For more information, see "Additional resources".

## Additional resources {#additional-resources_virt-connecting-vm-to-linux-bridge}

- [Configuring IP addresses for virtual machines](/virt/vm_networking/virt-configuring-viewing-ips-for-vms#virt-configuring-viewing-ips-for-vms)
- [Which bonding modes work when used with a bridge that virtual machine guests or containers connect to?](https://access.redhat.com/solutions/67546)
