---
title: Managing symmetric routing with MetalLB
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing symmetric routing with MetalLB {id="metallb-configure-return-traffic"}
{%- set context = "metallb-configure-return-traffic" %}

As a cluster administrator, you can effectively manage traffic for pods behind a MetalLB load-balancer service with multiple host interfaces by implementing features from MetalLB, NMState, and OVN-Kubernetes. By combining these features in this context, you can provide symmetric routing, traffic segregation, and support clients on different networks with overlapping CIDR addresses. {._abstract}

To achieve this functionality, learn how to implement virtual routing and forwarding (VRF) instances with MetalLB, and configure egress services.

{%- set FeatureName = "Configuring symmetric traffic by using a VRF instance with MetalLB and an egress service" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/challenges-of-managing-symmetric-routing-with-metallb.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/overview-of-managing-symmetric-routing-using-vrf-based-networks-with-metallb.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-configure-return-traffic-proc.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About virtual routing and forwarding](/networking/multiple_networks/about-virtual-routing-and-forwarding#cnf-about-virtual-routing-and-forwarding_about-virtual-routing-and-forwarding)
*   [Exposing a service through a network VRF](/networking/ingress_load_balancing/metallb/metallb-configure-bgp-peers#nw-metallb-bgp-peer-vrf_configure-metallb-bgp-peers)
*   [Example: Network interface with a VRF instance node network configuration policy](/networking/k8s_nmstate/k8s-nmstate-updating-node-network-config#virt-example-host-vrf_k8s-nmstate-updating-node-network-config)
*   [Configuring an egress service](/networking/ovn_kubernetes_network_provider/configuring-egress-traffic-for-vrf-loadbalancer-services#configuring-egress-traffic-loadbalancer-services)