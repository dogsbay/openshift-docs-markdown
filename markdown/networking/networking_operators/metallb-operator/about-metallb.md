---
title: About MetalLB and the MetalLB Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About MetalLB and the MetalLB Operator {id="about-metallb"}
{%- set context = "about-metallb-and-metallb-operator" %}

In {{ product_title }} clusters running on bare metal or without a cloud load balancer, you can use the MetalLB Operator to assign external IP addresses to LoadBalancer services. These services receive external IPs on the host network. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-metallb-when-metallb.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-operator-custom-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-software-components.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-extern-traffic-pol.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-layer2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-bgp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-limitations-and-restrictions.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-metallb-infra-considerations.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-metallb-layer2-limitations.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-metallb-bgp-limitations.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Comparison: Fault tolerant access to external IP addresses](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/overview-traffic#overview-traffic-comparision_overview-traffic)
*   [Removing IP failover](/networking/configuring_network_settings/configuring-ipfailover#nw-ipfailover-remove_configuring-ipfailover)
*   [Deployment specifications for MetalLB](/networking/networking_operators/metallb-operator/metallb-operator-install#nw-metallb-operator-deployment-specifications-for-metallb_metallb-operator-install)