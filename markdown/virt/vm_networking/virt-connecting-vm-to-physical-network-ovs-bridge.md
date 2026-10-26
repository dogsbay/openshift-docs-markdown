---
title: Connect a virtual machine to a physical network by using an Open vSwitch bridge
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Connect a virtual machine to a physical network by using an Open vSwitch bridge {id="virt-connecting-vm-to-physical-network-ovs-bridge"}
{%- set context = "virt-connecting-vm-to-physical-network-ovs-bridge" %}

You can connect a virtual machine (VM) to the physical network infrastructure by configuring an OVN-Kubernetes secondary user-defined network (UDN) with the localnet topology. {._abstract}

By configuring the `ClusterUserDefinedNetwork` custom resource (CR), you can select the projects that have access to the physical network and assign VLANs to projects.

{% leveloffset +1 %}{% include "./modules/virt-about-localnet-topology.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-node-network-considerations-localnet.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-recommended-bonding-modes-ovs-bridge.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-ovs-bridge-mapping-localnet.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-localnet-cudn-considerations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-defining-localnet-cudn.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-attaching-vm-to-localnet-network.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-localnet-configuration-examples.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-localnet-additional-network-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-localnet-limitations-and-alternatives.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [About the Kubernetes NMState Operator](/networking/networking_operators/k8s-nmstate-about-the-k8s-nmstate-operator#k8s-nmstate-about-the-k8s-nmstate-operator)
*   [About the ClusterUserDefinedNetwork CR](/networking/multiple_networks/primary_networks/about-user-defined-networks#about-cudn_about-user-defined-networks)
*   [Configuring multi-network policy](/networking/multiple_networks/secondary_networks/configuring-multi-network-policy#configuring-multi-network-policy)
*   [Managing MAC address pools for network interfaces](/virt/vm_networking/virt-using-mac-address-pool-for-vms#virt-using-mac-address-pool-for-vms)
*   [Postinstallation configuration](/installing/installing_bare_metal/bare-metal-postinstallation-configuration#bare-metal-post-installation-configuration)
*   [Which bonding modes work when used with a bridge that virtual machine guests or containers connect to?](https://access.redhat.com/solutions/67546)
*   [Connecting a virtual machine to a Linux bridge network](/virt/vm_networking/virt-connecting-vm-to-linux-bridge#virt-connecting-vm-to-linux-bridge)
*   [Connecting a virtual machine to an SR-IOV network](/virt/vm_networking/virt-connecting-vm-to-sriov#virt-connecting-vm-to-sriov)
*   [Connecting a virtual machine to a primary user-defined network](/virt/vm_networking/virt-connecting-vm-to-primary-udn#virt-connecting-vm-to-primary-udn)
*   [Connecting a virtual machine to an OVN-Kubernetes layer 2 secondary network](/virt/vm_networking/virt-connecting-vm-to-ovn-secondary-network#virt-connecting-vm-to-ovn-secondary-network)