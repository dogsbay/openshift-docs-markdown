---
title: Configuring multi-network policy
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring multi-network policy {id="configuring-multi-network-policy"}
{%- set context = "configuring-multi-network-policy" %}

As an administrator, you can use the `MultiNetworkPolicy` API to create multiple network policies that manage traffic for pods that are attached to secondary networks. For example, you can create policies that allow or deny traffic based on specific ports, IPs and ranges, or labels. {._abstract}

Multi-network policies can be used to manage traffic on secondary networks in the cluster. These policies cannot manage the default cluster network or primary network of user-defined networks.

As a cluster administrator, you can configure a multi-network policy for any of the following network types:

*   Single-Root I/O Virtualization (SR-IOV)
*   MAC Virtual Local Area Network (MacVLAN)
*   IP Virtual Local Area Network (IPVLAN)
*   Bond Container Network Interface (CNI) over SR-IOV
*   OVN-Kubernetes secondary networks


:::note

Support for configuring multi-network policies for SR-IOV secondary networks is only supported with kernel network interface controllers (NICs). SR-IOV is not supported for Data Plane Development Kit (DPDK) applications.

:::



:::important

In {{ product_title }} 4.22 and later, the multi-network policy backend uses `nftables`.
The `iptables` backend has been removed and there is no option to revert to it.
The `MultiNetworkPolicy` API and user-facing configuration are unchanged.

:::


{% leveloffset +1 %}{% include "./modules/nw-multi-network-policy-differences.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-multi-network-policy-enable.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-multi-network-policy-ipv6-suppport.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/working-with-multi-network-policy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-networkpolicy-create-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-networkpolicy-edit.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-networkpolicy-view-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-networkpolicy-delete-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-networkpolicy-deny-all-allowed.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-networkpolicy-allow-external-clients.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-networkpolicy-allow-application-all-namespaces.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-networkpolicy-allow-application-particular-namespace.md" %}{% endleveloffset %}

## Additional resources {id="{{ context }}_additional-resources" ._additional-resources}

*   [About network policy](/networking/network_security/network_policy/about-network-policy#about-network-policy)
*   [Understanding multiple networks](/networking/multiple_networks/understanding-multiple-networks#understanding-multiple-networks)
*   [Configuring a macvlan network](/networking/multiple_networks/secondary_networks/creating-secondary-nwt-other-cni#nw-multus-macvlan-object_configuring-additional-network-cni)
*   [Configuring an SR-IOV network device](/networking/hardware_networks/configuring-sriov-device#configuring-sriov-device)