---
title: Connecting a virtual machine to an OVN-Kubernetes layer 2 secondary network
---

# Connecting a virtual machine to an OVN-Kubernetes layer 2 secondary network {#virt-connecting-vm-to-ovn-secondary-network}

You can connect a virtual machine (VM) to an OVN-Kubernetes custom secondary overlay network. You can use this overlay network to connect VMs on different nodes, without configuring any additional physical networking infrastructure.

> [!NOTE]
> An OVN-Kubernetes secondary network is compatible with the multi-network policy API which provides the `MultiNetworkPolicy` custom resource definition (CRD) to control traffic flow to and from VMs. You must use the `ipBlock` attribute to define network policy ingress and egress rules for specific CIDR blocks. You cannot use pod or namespace selectors for virtualization workloads.

A layer 2 topology connects workloads by a cluster-wide logical switch. The OVN-Kubernetes Container Network Interface (CNI) plugin uses the Geneve (Generic Network Virtualization Encapsulation) protocol to create an overlay network between nodes.

To configure an OVN-Kubernetes layer 2 secondary network and attach a VM to that network, perform the following steps:

1. Define the secondary network
2. Attach the VM to the secondary network

> [!NOTE]
> Configuring IP address management (IPAM) by specifying the `spec.config.ipam.subnet` attribute in a network attachment definition for virtual machines is not supported.

## Additional resources {#additional-resources_virt-connecting-vm-to-ovn-secondary-network}

- [Creating secondary networks on OVN-Kubernetes](/openshift-docs-markdown/networking/multiple_networks/secondary_networks/creating-secondary-nwt-ovnk#configuration-ovnk-additional-networks_configuring-additional-network-ovnk)
- [About the Kubernetes NMState Operator](/openshift-docs-markdown/networking/networking_operators/k8s-nmstate-about-the-k8s-nmstate-operator#k8s-nmstate-about-the-k8s-nmstate-operator)
- [Multi-network policy API](/openshift-docs-markdown/networking/multiple_networks/secondary_networks/configuring-multi-network-policy#configuring-multi-network-policy)
- [Creating primary networks by using a network attachment definition](/openshift-docs-markdown/networking/multiple_networks/primary_networks/about-primary-nwt-nad#about-primary-nwt-nad)
