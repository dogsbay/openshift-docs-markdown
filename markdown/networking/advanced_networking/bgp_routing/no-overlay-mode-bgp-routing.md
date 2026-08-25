---
title: Improve east-west performance by routing pods on the underlay with BGP
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Improve east-west performance by routing pods on the underlay with BGP {id="no-overlay-mode-bgp-routing"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "no-overlay-mode-bgp-routing" %}

To improve east-west performance on bare-metal clusters, configure no-overlay mode with Border Gateway Protocol (BGP) so pod traffic uses underlay routing instead of Geneve encapsulation.

{%- set FeatureName = "No-overlay mode with BGP" %}
{% leveloffset +1 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-no-overlay-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-no-overlay-planning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-no-overlay-enable-default-network.md" %}{% endleveloffset %}

**Additional resources**

*   [About BGP routing](/networking/advanced_networking/bgp_routing/about-bgp-routing#about-bgp-routing)
*   [Enabling BGP routing](/networking/advanced_networking/bgp_routing/enabling-bgp-routing#enabling-bgp-routing)

{% leveloffset +1 %}{% include "./modules/nw-no-overlay-enable-cudn.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-no-overlay-default-network-config-ref.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-no-overlay-cudn-config-ref.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-no-overlay-troubleshooting.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [About BGP routing](/networking/advanced_networking/bgp_routing/about-bgp-routing#about-bgp-routing)
*   [About route advertisements](/networking/advanced_networking/route_advertisements/about-route-advertisements#about-route-advertisements)
*   [About user-defined networks](/networking/multiple_networks/primary_networks/about-user-defined-networks#about-user-defined-networks)
*   [Best practices for ClusterUserDefinedNetwork CRs](/networking/multiple_networks/primary_networks/about-user-defined-networks#considerations-for-cudn_user-defined-networks)