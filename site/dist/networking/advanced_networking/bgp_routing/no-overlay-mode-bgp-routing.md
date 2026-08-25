---
title: Improve east-west performance by routing pods on the underlay with BGP
---

# Improve east-west performance by routing pods on the underlay with BGP {#no-overlay-mode-bgp-routing}

To improve east-west performance on bare-metal clusters, configure no-overlay mode with Border Gateway Protocol (BGP) so pod traffic uses underlay routing instead of Geneve encapsulation.

**Additional resources**

- [About BGP routing](/openshift-docs-markdown/networking/advanced_networking/bgp_routing/about-bgp-routing#about-bgp-routing)
- [Enabling BGP routing](/openshift-docs-markdown/networking/advanced_networking/bgp_routing/enabling-bgp-routing#enabling-bgp-routing)

## Additional resources {#additional-resources_no-overlay-mode-bgp-routing}

- [About BGP routing](/openshift-docs-markdown/networking/advanced_networking/bgp_routing/about-bgp-routing#about-bgp-routing)
- [About route advertisements](/openshift-docs-markdown/networking/advanced_networking/route_advertisements/about-route-advertisements#about-route-advertisements)
- [About user-defined networks](/openshift-docs-markdown/networking/multiple_networks/primary_networks/about-user-defined-networks#about-user-defined-networks)
- [Best practices for ClusterUserDefinedNetwork CRs](/openshift-docs-markdown/networking/multiple_networks/primary_networks/about-user-defined-networks#considerations-for-cudn_user-defined-networks)
