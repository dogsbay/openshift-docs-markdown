---
title: Configuring MetalLB BGP peers
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring MetalLB BGP peers {id="metallb-configure-bgp-peers"}
{%- set context = "configure-metallb-bgp-peers" %}

As a cluster administrator, you can add, modify, and delete Border Gateway Protocol (BGP) peers. The MetalLB Operator uses the BGP peer custom resources to identify which peers that MetalLB `speaker` pods contact to start BGP sessions.  {._abstract}

The peers receive the route advertisements for the load-balancer IP addresses that MetalLB assigns to services.

{% leveloffset +1 %}{% include "./modules/nw-metallb-bgppeer-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-configure-bgppeer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-configure-specificpools-to-bgppeer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-configure-vrf-bgppeer.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [About virtual routing and forwarding](/networking/multiple_networks/about-virtual-routing-and-forwarding#cnf-about-virtual-routing-and-forwarding_about-virtual-routing-and-forwarding)
*   [Example: Network interface with a VRF instance node network configuration policy](/networking/k8s_nmstate/k8s-nmstate-updating-node-network-config#virt-example-host-vrf_k8s-nmstate-updating-node-network-config)
*   [Configuring an egress service](/networking/ovn_kubernetes_network_provider/configuring-egress-traffic-for-vrf-loadbalancer-services#configuring-egress-traffic-loadbalancer-services)
*   [Managing symmetric routing with MetalLB](/networking/ingress_load_balancing/metallb/metallb-configure-return-traffic#metallb-configure-return-traffic)

{% leveloffset +1 %}{% include "./modules/nw-metallb-example-bgppeer.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [Configuring services to use MetalLB](/networking/ingress_load_balancing/metallb/metallb-configure-services#metallb-configure-services)