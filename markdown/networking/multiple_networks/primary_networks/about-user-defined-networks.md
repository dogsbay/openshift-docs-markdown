---
title: About-user-defined networks
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About-user-defined networks {id="about-user-defined-networks"}
{%- set context = "user-defined-networks" %}

User-defined networks (UDNs) extend OVN-Kubernetes to enable custom layer 2 and layer 3 network segments with default isolation, providing enhanced network flexibility, security, and segmentation capabilities for multi-tenant deployments and custom network architectures. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-udn-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-udn-benefits.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-udn-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-udn-l2-l3.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-cudn-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cudn-transport-considerations.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About route advertisements](/networking/advanced_networking/route_advertisements/about-route-advertisements#about-route-advertisements)
*   [About BGP EVPN for primary cluster user-defined networks](/networking/advanced_networking/bgp_evpn_udn/about-bgp-evpn-user-defined-networks#about-bgp-evpn-user-defined-networks)
*   [Improve east-west performance by routing pods on the underlay with BGP](/networking/advanced_networking/bgp_routing/no-overlay-mode-bgp-routing#no-overlay-mode-bgp-routing)

{% leveloffset +2 %}{% include "./modules/nw-cudn-best-practices.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-cudn-cr.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-cudn-localnet.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuration for a localnet switched topology](/networking/multiple_networks/secondary_networks/creating-secondary-nwt-ovnk#configuration-localnet-switched-topology_configuring-additional-network-ovnk)

{% leveloffset +2 %}{% include "./modules/nw-cudn-cr-ui.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring pods with a static IP address](/networking/multiple_networks/secondary_networks/creating-secondary-nwt-ovnk#configuring-pods-static-ip_configuring-additional-network-ovnk)

{% leveloffset +1 %}{% include "./modules/nw-udn-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-udn-best-practices.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-udn-cr.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Default cluster roles](/authentication/using-rbac#authorization-overview_using-rbac)

{% leveloffset +2 %}{% include "./modules/nw-udn-cr-ui.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-udn-additional-config-details.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cudn-status-conditions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/opening-default-network-ports-udn.md" %}{% endleveloffset %}

## Additional resources {id="user-defined-networks-additional-resources_{{ context }}" ._additional-resources}

*   [About BGP EVPN for primary cluster user-defined networks](/networking/advanced_networking/bgp_evpn_udn/about-bgp-evpn-user-defined-networks#about-bgp-evpn-user-defined-networks)
*   [Improve east-west performance by routing pods on the underlay with BGP](/networking/advanced_networking/bgp_routing/no-overlay-mode-bgp-routing#no-overlay-mode-bgp-routing)