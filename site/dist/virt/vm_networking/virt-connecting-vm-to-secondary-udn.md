---
title: Connecting a virtual machine to a secondary localnet user-defined network
---

# Connecting a virtual machine to a secondary localnet user-defined network {#virt-connecting-vm-to-secondary-udn}

You can connect a virtual machine (VM) to an OVN-Kubernetes localnet secondary network by using the CLI. Cluster administrators can use the `ClusterUserDefinedNetwork` (CUDN) custom resource definition (CRD) to create a shared OVN-Kubernetes network across multiple namespaces.

An OVN-Kubernetes secondary network is compatible with the multi-network policy API which provides the `MultiNetworkPolicy` custom resource definition (CRD) to control traffic flow to and from VMs. For more information, see "Additional resources".

> [!IMPORTANT]
> You must use the `ipBlock` attribute to define network policy ingress and egress rules for specific CIDR blocks. Using pod or namespace selector policy peers is not supported.

A localnet topology connects the secondary network to the physical underlay. This enables both east-west cluster traffic and access to services running outside the cluster, but it requires additional configuration of the underlying Open vSwitch (OVS) system on cluster nodes.

## Additional resources {#additional-resources_virt-connecting-vm-to-secondary-udn}

- [About the `ClusterUserDefinedNetwork` CR](/openshift-docs-markdown/networking/multiple_networks/primary_networks/about-user-defined-networks#about-cudn_about-user-defined-networks)
- [Multi-network policy API](/openshift-docs-markdown/networking/multiple_networks/secondary_networks/configuring-multi-network-policy#configuring-multi-network-policy)
