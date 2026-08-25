---
title: About route advertisements
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About route advertisements {id="about-route-advertisements"}
{%- set context = "about-route-advertisements" %}

To simplify network management and improve failover visibility, you can use route advertisements to share pod and egress IP routes between your cluster and the provider network. This feature requires the OVN-Kubernetes plugin and a Border Gateway Protocol (BGP) provider. {._abstract}

For more information, see [About BGP routing](/networking/advanced_networking/bgp_routing/about-bgp-routing#about-bgp-routing).

{% leveloffset +1 %}{% include "./modules/nw-routeadvertisements-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-routeadvertisements-object.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-routeadvertisements-example.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_about-route-advertisements" ._additional-resources}

*   [Configuring the FRRConfiguration CRD](/networking/ingress_load_balancing/metallb/metallb-frr-k8s#nw-metallb-frrconfiguration-crd_configure-metallb-frr-k8s)
*   [Starting a service within an isolated VRF network](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/8/html/configuring_and_managing_networking/assembly_starting-a-service-within-an-isolated-vrf-network_configuring-and-managing-networking)
*   [FRRouting User Guide: BGP](https://docs.frrouting.org/en/latest/bgp.html)