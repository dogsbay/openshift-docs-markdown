---
title: About BGP EVPN for primary cluster user-defined networks
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About BGP EVPN for primary cluster user-defined networks {id="about-bgp-evpn-user-defined-networks"}
{%- set context = "about-bgp-evpn-user-defined-networks" %}

Ethernet Virtual Private Network (EVPN) extends OVN-Kubernetes Border Gateway Protocol (BGP) support to transport primary cluster user-defined network (CUDN) traffic across VXLAN overlays, providing seamless, isolated layer 2 and layer 3 connectivity to the data center network. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-bgp-evpn-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/procedure-enabling-bgp-evpn-primary-cudn.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_about-bgp-evpn-user-defined-networks" ._additional-resources}

*   [About BGP routing](/networking/advanced_networking/bgp_routing/about-bgp-routing#about-bgp-routing)
*   [About route advertisements](/networking/advanced_networking/route_advertisements/about-route-advertisements#about-route-advertisements)
*   [Enabling route advertisements](/networking/advanced_networking/route_advertisements/enabling-route-advertisements#nw-route-advertisements-enable_enabling-route-advertisements)
*   [Configuring a gateway](/networking/ovn_kubernetes_network_provider/configuring-gateway#configuring-gateway)
*   [Managing the NodeNetworkConfigurationPolicy manifest file](/networking/k8s_nmstate/k8s-nmstate-updating-node-network-config#virt-manage-nncp-cli_k8s-nmstate-updating-node-network-config)
*   [About user-defined networks](/networking/multiple_networks/primary_networks/about-user-defined-networks#about-user-defined-networks)
*   [ClusterUserDefinedNetwork k8s.ovn.org/v1](/rest_api/network_apis/clusteruserdefinednetwork-k8s-ovn-org-v1#specifications)

*   [FRRouting User Guide: BGP](https://docs.frrouting.org/en/latest/bgp.html)
*   [FRRouting User Guide: EVPN](https://docs.frrouting.org/en/latest/evpn.html)