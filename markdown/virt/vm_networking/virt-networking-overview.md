---
title: Networking overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Networking overview {id="virt-networking"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-networking-overview" %}

To connect virtual machines (VMs) to cluster networks, configure default and user-defined networking options in {{ VirtProductName }}.

{% if not openshift_dedicated %}
{{ VirtProductName }} supports single-stack IPv6 clusters for VMs that are connected to an OVN-Kubernetes localnet network, Linux bridge Container Network Interface (CNI) plugin, and Single Root I/O Virtualization (SR-IOV) network devices.

The following figure illustrates the typical network setup of {{ VirtProductName }}. Other configurations are also possible.

**Figure 1. {{ VirtProductName }} networking overview**

![{{ VirtProductName }} networking architecture](/_assets/images/318_OpenShift_Virtualization_Networking_0423.png)

<img src="/_assets/images/darkcircle-1.png" alt="20" width="20"> Pods and VMs run on the same network infrastructure so you can easily connect your containerized and virtualized workloads.

<img src="/_assets/images/darkcircle-2.png" alt="20" width="20"> You can connect VMs to the default pod network and to any number of secondary networks.

<img src="/_assets/images/darkcircle-3.png" alt="20" width="20"> The default pod network provides connectivity between all its members, service abstraction, IP management, micro segmentation, and other functionality.


:::note

When deploying VM networks on public clouds, you can choose from the following solutions:

*   The default pod network: The standard out-of-the-box configuration.
*   Primary layer 2 user-defined network (UDN): This is the preferred approach. It provides a flat layer 2 network for VMs, sticky IP addresses, and direct east-west connectivity.
*   Secondary layer 2 network attachment definition (NAD): This approach provides an isolated layer 2 overlay network to connect VMs on different nodes, without configuring any additional physical networking infrastructure.

For the default pod network and the primary user-defined network, egress traffic relies on Network Address Translation (NAT). Ingress traffic requires load balancer services integrated with the cloud provider’s native load balancers. 

The layer 2 secondary network does not provide external ingress or egress routing.

:::


<img src="/_assets/images/darkcircle-4.png" alt="20" width="20"> Multus is a "meta" CNI plugin that enables a pod or virtual machine to connect to additional network interfaces by using other compatible CNI plugins.

<img src="/_assets/images/darkcircle-5.png" alt="20" width="20"> The default pod network is overlay-based, tunneled through the underlying machine network.

<img src="/_assets/images/darkcircle-6.png" alt="20" width="20"> You can define the machine network over a selected set of network interface controllers (NICs).

<img src="/_assets/images/darkcircle-7.png" alt="20" width="20"> Secondary VM networks are typically bridged directly to a physical network, with or without VLAN encapsulation. It is also possible to create virtual overlay networks for secondary networks.


:::important

The following features are not supported on {{ product_rosa }}, {{ azure_first }}, {{ product_dedicated }}, {{ gcp_first }}, and {{ oci_first }}:

*   Connecting VMs directly to the underlay network
*   Using Border Gateway Protocol (BGP) to allow direct routing to VMs
*   Using Ethernet Virtual Private Network (EVPN) with BGP to extend layer 2 connectivity for primary cluster-scoped UDNs

:::


<img src="/_assets/images/darkcircle-8.png" alt="20" width="20"> Secondary VM networks can be defined on dedicated set of NICs, as shown in figure 1, or they can use the machine network.
{% endif %}

{% leveloffset +1 %}{% include "./modules/virt-networking-glossary.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-nw-overview-manage-overlay-nw.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-nw-overview-connect-vm-to-physical-nw.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
{% leveloffset +2 %}{% include "./modules/virt-nw-overview-comparing-localnet-linuxbridge.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/virt-nw-overview-manage-vm-nw-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-nw-overview-vm-ssh-config.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Connect a virtual machine to the default pod network](/virt/vm_networking/virt-connecting-vm-to-default-pod-network#virt-connecting-vm-to-default-pod-network)
*   [Connect a virtual machine to a custom primary overlay network](/virt/vm_networking/virt-connecting-vm-to-primary-udn#virt-connecting-vm-to-primary-udn)
{%- if not openshift_dedicated %}
*   [Connect a VM to a custom secondary overlay network](/virt/vm_networking/virt-connecting-vm-to-ovn-secondary-network#virt-connecting-vm-to-ovn-secondary-network)
{%- endif %}
*   [Configure external ingress by exposing a VM as a service](/virt/vm_networking/virt-exposing-vm-with-service#virt-exposing-vm-with-service)
*   [Add a VM to a Service Mesh](/virt/vm_networking/virt-connecting-vm-to-service-mesh#virt-connecting-vm-to-service-mesh)
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Connect a VM to the physical network by using an Open vSwitch bridge](/virt/vm_networking/virt-connecting-vm-to-secondary-udn#virt-connecting-vm-to-secondary-udn)
*   [Access a virtual machine by using its internal FQDN](/virt/vm_networking/virt-accessing-vm-internal-fqdn#virt-accessing-vm-internal-fqdn)
*   [Installing the MetalLB Operator](/networking/networking_operators/metallb-operator/metallb-operator-install#metallb-operator-install)
*   [Connect a virtual machine to the physical network by using a Linux bridge](/virt/vm_networking/virt-connecting-vm-to-linux-bridge#virt-connecting-vm-to-linux-bridge)
*   [Install the Kubernetes NMState Operator](/networking/networking_operators/k8s-nmstate-about-the-k8s-nmstate-operator#k8s-nmstate-about-the-k8s-nmstate-operator)
*   [Connect a VM to the physical network by using an SR-IOV device](/virt/vm_networking/virt-connecting-vm-to-sriov#virt-connecting-vm-to-sriov)
*   [Install the SR-IOV Network Operator](/networking/networking_operators/sr-iov-operator/installing-sriov-operator#installing-sriov-operator)
*   [Connect a VM to the physical network by using DPDK drivers with SR-IOV hardware](/virt/vm_networking/virt-using-dpdk-with-sriov#virt-using-dpdk-with-sriov)
*   [Configure a dedicated network for live migration](/virt/vm_networking/virt-dedicated-network-live-migration#virt-dedicated-network-live-migration)
*   [Access a VM by using its external FQDN](/virt/vm_networking/virt-accessing-vm-secondary-network-fqdn#virt-accessing-vm-secondary-network-fqdn)
*   [Manage the link state of a virtual machine interface](/virt/vm_networking/virt-setting-interface-link-state#virt-setting-interface-link-state)
*   [Hot plugging secondary network interfaces](/virt/vm_networking/virt-hot-plugging-network-interfaces#virt-hot-plugging-network-interfaces)
*   [Configure and view VM IP address](/virt/vm_networking/virt-configuring-viewing-ips-for-vms#virt-configuring-viewing-ips-for-vms)
*   [Manage MAC address pools for network interfaces](/virt/vm_networking/virt-using-mac-address-pool-for-vms#virt-using-mac-address-pool-for-vms)
*   [SSH access for virtual machines](/virt/managing_vms/ssh/virt-accessing-vm-ssh#virt-accessing-vm-ssh)
{% endif %}