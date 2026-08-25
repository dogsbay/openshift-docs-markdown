---
title: Observing and updating the node network state and configuration
---

# Observing and updating the node network state and configuration {#k8s-nmstate-updating-node-network-config}

To observe and update the node network state and configuration in your cluster, you can use the Kubernetes NMState Operator. You can view network states, create and manage network configuration policies, and configure interfaces on cluster nodes.

For more information about how to install the NMState Operator, see [Kubernetes NMState Operator](/openshift-docs-markdown/networking/networking_operators/k8s-nmstate-about-the-k8s-nmstate-operator#k8s-nmstate-about-the-k8s-nmstate-operator).

> [!IMPORTANT]
> You cannot modify an existing `br-ex` bridge, an OVN-Kubernetes-managed Open vSwitch bridge, or any interfaces, bonds, VLANs, and so on that associate with the `br-ex` bridge. However, you can configure a customized br-ex bridge.
>
> For more information, see "Creating a manifest object that includes a customized br-ex bridge" in the *Deploying installer-provisioned clusters on bare metal* document or the *Installing a user-provisioned cluster on bare metal* document.

**Additional resources**

- [Example policy configurations for different interfaces](/openshift-docs-markdown/networking/k8s_nmstate/k8s-nmstate-updating-node-network-config#virt-nmstate-example-policy-configurations_k8s-nmstate-updating-node-network-config)
- [Removing an interface from nodes](/openshift-docs-markdown/networking/k8s_nmstate/k8s-nmstate-updating-node-network-config#virt-removing-interface-from-nodes_k8s-nmstate-updating-node-network-config)

**Additional resources**

- [Example for creating multiple interfaces in the same policy](/openshift-docs-markdown/networking/k8s_nmstate/k8s-nmstate-updating-node-network-config#virt-example-nmstate-multiple-interfaces_k8s-nmstate-updating-node-network-config)
- [Examples of different IP management methods in policies](/openshift-docs-markdown/networking/k8s_nmstate/k8s-nmstate-updating-node-network-config#virt-example-nmstate-IP-management_k8s-nmstate-updating-node-network-config)

**Additional resources**

- [Configuring an SR-IOV network device](/openshift-docs-markdown/networking/hardware_networks/configuring-sriov-device#configuring-sriov-device)
- [Configuring hardware offloading](/openshift-docs-markdown/networking/hardware_networks/configuring-hardware-offloading#configuring-hardware-offloading)

**Additional resources**

- [About virtual routing and forwarding](/openshift-docs-markdown/networking/multiple_networks/about-virtual-routing-and-forwarding#cnf-about-virtual-routing-and-forwarding_about-virtual-routing-and-forwarding)
- [Exposing a service through a network VRF](/openshift-docs-markdown/networking/ingress_load_balancing/metallb/metallb-configure-bgp-peers#nw-metallb-bgp-peer-vrf_configure-metallb-bgp-peers)

**Additional resources**

- [The NMPolicy project - Policy syntax](https://nmstate.io/nmpolicy/user-guide/102-policy-syntax.html)

**Additional resources**

- [Creating a manifest object that includes a customized br-ex bridge (Installer-provisioned infrastructure)](/openshift-docs-markdown/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#creating-manifest-file-customized-br-ex-bridge_ipi-install-installation-workflow)
- [Creating a manifest object that includes a customized br-ex bridge (User-provisioned infrastructure)](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-bare-metal#creating-manifest-file-customized-br-ex-bridge_installing-bare-metal)
- [Routes (nmstate documentation)](https://nmstate.io/devel/yaml_api.html#routes)
- [Route Rules (nmstate documentation)](https://nmstate.io/devel/yaml_api.html#route-rules)
