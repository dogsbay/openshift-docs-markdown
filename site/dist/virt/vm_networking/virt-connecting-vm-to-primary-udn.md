---
title: Connecting a virtual machine to a primary user-defined network
---

# Connecting a virtual machine to a primary user-defined network {#virt-connecting-vm-to-primary-udn}

You can connect a virtual machine (VM) to a user-defined network (UDN) on the VM’s primary interface. The primary UDN replaces the default pod network in your specified namespace. You can define the primary UDN per project, where each project can use its specific subnet and topology.

{{ VirtProductName }} supports the namespace-scoped `UserDefinedNetwork` and the cluster-scoped `ClusterUserDefinedNetwork` custom resource definitions (CRD).

> [!NOTE]
> You must add the `k8s.ovn.org/primary-user-defined-network` label when you create a namespace that is to be used with user-defined networks.

Cluster administrators can configure a primary `UserDefinedNetwork` CRD to create a tenant network that isolates the tenant namespace from other namespaces without requiring network policies. Additionally, cluster administrators can use the `ClusterUserDefinedNetwork` CRD to create a shared OVN network across multiple namespaces.

With the layer 2 topology, OVN-Kubernetes creates an overlay network between nodes. You can use this overlay network to connect VMs on different nodes without having to configure any additional physical networking infrastructure.

The layer 2 topology enables seamless migration of VMs without the need for Network Address Translation (NAT) because persistent IP addresses are preserved across cluster nodes during live migration.

> [!NOTE]
> You can use the Ethernet Virtual Private Network’s (EVPN) Border Gateway Protocol (BGP) control plane to extend layer 2 connectivity between VMs running on different OpenShift Container Platform clusters. BGP EVPN support for primary cluster-scoped UDNs enables deeper integration with data center networks for your virtualized workloads. For more information, see "About BGP EVPN for primary cluster user-defined networks" in the Additional resources section.

You must consider the following limitations before implementing a primary UDN:

- You cannot use the `virtctl ssh` command to configure SSH access to a VM.
- You cannot use the `oc port-forward` command to forward ports to a VM.
- You cannot use headless services to access a VM.

## Additional resources {#additional-resources_virt-connecting-vm-to-primary-udn}

- [About user-defined networks](/networking/multiple_networks/primary_networks/about-user-defined-networks#about-user-defined-networks)
- [About BGP EVPN for primary cluster user-defined networks](/networking/advanced_networking/bgp_evpn_udn/about-bgp-evpn-user-defined-networks#about-bgp-evpn-user-defined-networks)
