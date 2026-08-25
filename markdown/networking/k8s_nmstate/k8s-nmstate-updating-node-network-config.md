---
title: Observing and updating the node network state and configuration
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Observing and updating the node network state and configuration {id="k8s-nmstate-updating-node-network-config"}
{%- set VirtProductName = "OpenShift Container Platform" -%}
{%- set context = "k8s-nmstate-updating-node-network-config" %}

To observe and update the node network state and configuration in your cluster, you can use the Kubernetes NMState Operator. You can view network states, create and manage network configuration policies, and configure interfaces on cluster nodes. {._abstract}

For more information about how to install the NMState Operator, see [Kubernetes NMState Operator](/networking/networking_operators/k8s-nmstate-about-the-k8s-nmstate-operator#k8s-nmstate-about-the-k8s-nmstate-operator).


:::important

You cannot modify an existing `br-ex` bridge, an OVN-Kubernetes-managed Open vSwitch bridge, or any interfaces, bonds, VLANs, and so on that associate with the `br-ex` bridge. However, you can configure a customized br-ex bridge.

For more information, see "Creating a manifest object that includes a customized br-ex bridge" in the _Deploying installer-provisioned clusters on bare metal_ document or the _Installing a user-provisioned cluster on bare metal_ document.

:::


{% leveloffset +1 %}{% include "./modules/virt-viewing-network-state-of-node.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-viewing-graphical-representation-of-network-state-of-node-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-viewing-list-of-nodenetworkstate-resources-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/node-network-configuration-policy-file.md" %}{% endleveloffset %}

**Additional resources**

*   [Example policy configurations for different interfaces](/networking/k8s_nmstate/k8s-nmstate-updating-node-network-config#virt-nmstate-example-policy-configurations_{{ context }})
*   [Removing an interface from nodes](/networking/k8s_nmstate/k8s-nmstate-updating-node-network-config#virt-removing-interface-from-nodes_k8s-nmstate-updating-node-network-config)

{% leveloffset +1 %}{% include "./modules/virt-node-network-config-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-monitor-node-network-config-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-create-node-network-config-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-updating-node-network-configuration-policy-file.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-update-node-network-config-form.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-update-node-network-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-delete-node-network-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-manage-nncp-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-creating-interface-on-nodes.md" %}{% endleveloffset %}

**Additional resources**

*   [Example for creating multiple interfaces in the same policy](/networking/k8s_nmstate/k8s-nmstate-updating-node-network-config#virt-example-nmstate-multiple-interfaces_{{ context }})
*   [Examples of different IP management methods in policies](/networking/k8s_nmstate/k8s-nmstate-updating-node-network-config#virt-example-nmstate-IP-management_k8s-nmstate-updating-node-network-config)

{% leveloffset +2 %}{% include "./modules/virt-confirming-policy-updates-on-nodes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-removing-interface-from-nodes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/k8s-nmstate-about-alternative-names.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/k8s-nmstate-creating-alternative-interface-names.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/k8s-nmstate-creating-alternative-interface-names-by-identifier.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/k8s-nmstate-deleting-alternative-interface-names.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-nmstate-example-policy-configurations.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-example-ethernet-nncp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-example-bridge-nncp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-example-vlan-nncp.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring an SR-IOV network device](/networking/hardware_networks/configuring-sriov-device#configuring-sriov-device)
*   [Configuring hardware offloading](/networking/hardware_networks/configuring-hardware-offloading#configuring-hardware-offloading)

{% leveloffset +2 %}{% include "./modules/virt-example-bond-nncp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-example-nmstate-multiple-interfaces.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-example-vf-host-services.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-example-host-vrf.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-example-predictable-route-table-id.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About virtual routing and forwarding](/networking/multiple_networks/about-virtual-routing-and-forwarding#cnf-about-virtual-routing-and-forwarding_about-virtual-routing-and-forwarding)
*   [Exposing a service through a network VRF](/networking/ingress_load_balancing/metallb/metallb-configure-bgp-peers#nw-metallb-bgp-peer-vrf_configure-metallb-bgp-peers)

{% leveloffset +1 %}{% include "./modules/virt-creating-infiniband-interface-on-nodes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-example-dynamic-matching-templating.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-example-inherit-static-ip-from-nic.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [The NMPolicy project - Policy syntax](https://nmstate.io/nmpolicy/user-guide/102-policy-syntax.html)

{% leveloffset +1 %}{% include "./modules/virt-example-nmstate-IP-management.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-nmstate-enable-per-interface-ip-forwarding.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-routes-route-rules.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Creating a manifest object that includes a customized br-ex bridge (Installer-provisioned infrastructure)](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#creating-manifest-file-customized-br-ex-bridge_ipi-install-installation-workflow)
*   [Creating a manifest object that includes a customized br-ex bridge (User-provisioned infrastructure)](/installing/installing_bare_metal/upi/installing-bare-metal#creating-manifest-file-customized-br-ex-bridge_installing-bare-metal)
*   [Routes (nmstate documentation)](https://nmstate.io/devel/yaml_api.html#routes)
*   [Route Rules (nmstate documentation)](https://nmstate.io/devel/yaml_api.html#route-rules)