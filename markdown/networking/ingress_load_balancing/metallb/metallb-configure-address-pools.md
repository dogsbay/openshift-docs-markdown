---
title: Configuring MetalLB address pools
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring MetalLB address pools {id="metallb-configure-address-pools"}
{%- set context = "configure-metallb-address-pools" %}

To allocate and manage the IP addresses assigned to load balancer services, configure MetalLB address pool custom resources. Defining these pools ensures that application workloads remain reachable through designated network ranges for consistent external access. {._abstract}

The namespaces used in the examples show `metallb-system` as the namespace.

For more information about how to install the MetalLB Operator, see [About MetalLB and the MetalLB Operator](/networking/networking_operators/metallb-operator/about-metallb#about-metallb).

{% leveloffset +1 %}{% include "./modules/nw-metallb-addresspool-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-configure-address-pool.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-configure-address-pool-vlan.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-example-addresspool.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_metallb-configure-address-pools" ._additional-resources}

*   [Configuring MetalLB with an L2 advertisement and label](/networking/ingress_load_balancing/metallb/about-advertising-ipaddresspool#nw-metallb-configure-with-L2-advertisement-label_about-advertising-ip-address-pool)
*   [Configuring MetalLB BGP peers](/networking/ingress_load_balancing/metallb/metallb-configure-bgp-peers#metallb-configure-bgp-peers)
*   [Configuring services to use MetalLB](/networking/ingress_load_balancing/metallb/metallb-configure-services#metallb-configure-services)