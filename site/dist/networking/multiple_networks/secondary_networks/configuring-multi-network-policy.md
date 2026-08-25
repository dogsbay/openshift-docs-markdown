---
title: Configuring multi-network policy
---

# Configuring multi-network policy {#configuring-multi-network-policy}

As an administrator, you can use the `MultiNetworkPolicy` API to create multiple network policies that manage traffic for pods that are attached to secondary networks. For example, you can create policies that allow or deny traffic based on specific ports, IPs and ranges, or labels.

Multi-network policies can be used to manage traffic on secondary networks in the cluster. These policies cannot manage the default cluster network or primary network of user-defined networks.

As a cluster administrator, you can configure a multi-network policy for any of the following network types:

- Single-Root I/O Virtualization (SR-IOV)
- MAC Virtual Local Area Network (MacVLAN)
- IP Virtual Local Area Network (IPVLAN)
- Bond Container Network Interface (CNI) over SR-IOV
- OVN-Kubernetes secondary networks

> [!NOTE]
> Support for configuring multi-network policies for SR-IOV secondary networks is only supported with kernel network interface controllers (NICs). SR-IOV is not supported for Data Plane Development Kit (DPDK) applications.

> [!IMPORTANT]
> In OpenShift Container Platform 4.22 and later, the multi-network policy backend uses `nftables`. The `iptables` backend has been removed and there is no option to revert to it. The `MultiNetworkPolicy` API and user-facing configuration are unchanged.

## Additional resources {#configuring-multi-network-policy_additional-resources}

- [About network policy](/openshift-docs-markdown/networking/network_security/network_policy/about-network-policy#about-network-policy)
- [Understanding multiple networks](/openshift-docs-markdown/networking/multiple_networks/understanding-multiple-networks#understanding-multiple-networks)
- [Configuring a macvlan network](/openshift-docs-markdown/networking/multiple_networks/secondary_networks/creating-secondary-nwt-other-cni#nw-multus-macvlan-object_configuring-additional-network-cni)
- [Configuring an SR-IOV network device](/openshift-docs-markdown/networking/hardware_networks/configuring-sriov-device#configuring-sriov-device)
