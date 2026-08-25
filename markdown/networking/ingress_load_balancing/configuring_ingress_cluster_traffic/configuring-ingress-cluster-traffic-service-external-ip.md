---
title: Configuring ingress cluster traffic for a service external IP
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring ingress cluster traffic for a service external IP {id="configuring-ingress-cluster-traffic-service-external-ip"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-ingress-cluster-traffic-service-external-ip" %}

You can use either a MetalLB implementation or an IP failover deployment to attach an ExternalIP resource to a service so that the service is available to traffic outside your {{ product_title }} cluster. 

Hosting an external IP address in this way is only applicable for a cluster installed on bare-metal hardware.

You must ensure that you correctly configure the external network infrastructure to route traffic to the service.

Before you begin the procedure, ensure that you meet the following prerequisite:

*   You configured your cluster with ExternalIPs enabled. For more information, see "Configuring ExternalIPs for services" in the _Additional resources_ section.


:::note

Do not use the same ExternalIP for the egress IP.

:::


{% leveloffset +1 %}{% include "./modules/nw-service-externalip-create.md" %}{% endleveloffset %}

## Additional resources {id="configuring-ingress-cluster-traffic-service-external-ip-additional-resources"}

[Configuring ExternalIPs for services](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-externalip#configuring-externalip)

*   [About MetalLB and the MetalLB Operator](/networking/networking_operators/metallb-operator/about-metallb#about-metallb)
*   [Configuring IP failover](/networking/configuring_network_settings/configuring-ipfailover#configuring-ipfailover)
*   [Configuring ExternalIPs for services](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-externalip#configuring-externalip)