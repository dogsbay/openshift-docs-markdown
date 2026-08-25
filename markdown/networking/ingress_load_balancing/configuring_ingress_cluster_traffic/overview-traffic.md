---
title: Configuring ingress cluster traffic overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring ingress cluster traffic overview {id="overview-traffic"}
{%- set context = "overview-traffic" %}

To enable communication between external networks and services in {{ product_title }}, configure ingress cluster traffic.  {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-ingresscontroller-communication-service-methods.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Use an Ingress Controller](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-ingress-controller#configuring-ingress-cluster-traffic-ingress-controller)
*   [Automatically assign an external IP using a load balancer service](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-load-balancer#configuring-ingress-cluster-traffic-load-balancer)
*   [About MetalLB and the MetalLB Operator](/networking/networking_operators/metallb-operator/about-metallb#about-metallb)
*   [Manually assign an external IP to a service](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-service-external-ip#configuring-ingress-cluster-traffic-service-external-ip)
*   [Configure a `NodePort`](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-nodeport#configuring-ingress-cluster-traffic-nodeport)

{% leveloffset +1 %}{% include "./modules/nw-ingresscontroller-overview-traffic-comparision.md" %}{% endleveloffset %}