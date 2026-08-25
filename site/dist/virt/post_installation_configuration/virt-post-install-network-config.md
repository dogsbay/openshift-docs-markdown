---
title: Postinstallation network configuration
---

# Postinstallation network configuration {#virt-post-install-network-config}

By default, {{ VirtProductName }} uses a single internal pod network after installation.

After you install {{ VirtProductName }}, you can install networking Operators and configure additional networks.

- You must install the Kubernetes NMState Operator to configure a Linux bridge network for live migration or external access to virtual machines (VMs).
- You can install the SR-IOV Operator to manage SR-IOV network devices and network attachments.
- You can add the MetalLB Operator to manage the lifecycle for an instance of MetalLB on your cluster.

## Additional resources {#additional-resources_virt-post-install-network-config}

- [Kubernetes NMState Operator](/networking/networking_operators/k8s-nmstate-about-the-k8s-nmstate-operator#k8s-nmstate-about-the-k8s-nmstate-operator)
- [SR-IOV Operator](/networking/hardware_networks/about-sriov#about-sriov)
- [About MetalLB and the MetalLB Operator](/networking/networking_operators/metallb-operator/about-metallb#about-metallb)
- [Attaching a virtual machine (VM) to a Linux bridge network](/virt/vm_networking/virt-connecting-vm-to-linux-bridge#virt-attaching-vm-secondary-network-cli_virt-connecting-vm-to-linux-bridge)
- [Attaching a virtual machine (VM) to an SR-IOV network](/virt/vm_networking/virt-connecting-vm-to-sriov#virt-attaching-vm-to-sriov-network_virt-connecting-vm-to-sriov)
