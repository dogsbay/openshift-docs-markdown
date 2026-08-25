---
title: Connecting a virtual machine to the default pod network
---

# Connecting a virtual machine to the default pod network {#virt-connecting-vm-to-default-pod-network}

You can connect a virtual machine to the default internal pod network by configuring its network interface to use the `masquerade` binding mode.

> [!NOTE]
> Traffic passing through network interfaces to the default pod network is interrupted during live migration.

## Additional resources {#additional-resources_virt-connecting-vm-to-default-pod-network}

- [Changing the MTU for the cluster network](/networking/advanced_networking/changing-cluster-network-mtu#changing-cluster-network-mtu)
- [Optimizing the MTU for your network](/scalability_and_performance/optimization/optimizing-networking#optimizing-mtu_optimizing-networking)
