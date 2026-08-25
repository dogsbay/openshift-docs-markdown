---
title: About advertising for the IP address pools
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# About advertising for the IP address pools {id="about-advertise-for-ipaddress-pools"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "about-advertising-ip-address-pool" %}

You can configure MetalLB so that the IP address is advertised with layer 2 protocols, the BGP protocol, or both.

With layer 2, MetalLB provides a fault-tolerant external IP address. With BGP, MetalLB provides fault-tolerance for the external IP address and load balancing.

MetalLB supports advertising by using Layer 2 and BGP for the same set of IP addresses.

MetalLB provides the flexibility to assign address pools to specific BGP peers, effectively limiting advertising to a subset of nodes on the network. This allows for more complex configurations, such as facilitating the isolation of nodes or the segmentation of the network.

{% leveloffset +1 %}{% include "./modules/nw-metallb-bgpadvertisement-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-configure-bgp-advertisement.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-metallb-advertise-address-pool-with-bgp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-configure-bgp-advertisement-advanced.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-metallb-advertise-address-pool-with-bgp-advanced.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-metallb-service-selectors-shared-pool-bgp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-advertise-ip-pools-from-node-subset.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-l2padvertisement-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-configure-l2-advertisement.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-configure-l2-advertisement-label.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-service-selectors-shared-pool-l2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-configure-l2-advertisement-interface.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-configure-secondary-interface.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_about-advertiseipaddress"}

*   [Configuring a community alias](/networking/ingress_load_balancing/metallb/metallb-configure-community-alias#metallb-configure-community-alias)
*   [Enable IP forwarding on specific interfaces](/networking/k8s_nmstate/k8s-nmstate-updating-node-network-config#nw-nmstate-enable-per-interface-ip-forwarding_k8s-nmstate-updating-node-network-config)