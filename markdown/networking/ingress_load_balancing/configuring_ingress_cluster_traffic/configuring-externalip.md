---
title: Configuring ExternalIPs for services
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring ExternalIPs for services {id="configuring-externalip"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-externalip" %}

As a cluster administrator, you can select an IP address block that is external to the cluster and can send traffic to services in the cluster. This functionality is generally most useful for clusters installed on bare-metal hardware.


:::important

Before you configure ExternalIPs for services, your network infrastructure must route traffic for the external IP addresses to your cluster.

:::


{% leveloffset +1 %}{% include "./modules/nw-externalip-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configuration-externalip.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/restrictions-on-ip-assignment.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/example-policy-objects.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-externalip-object.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-externalip-configuring.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [Configuring IP failover](/networking/configuring_network_settings/configuring-ipfailover#configuring-ipfailover)
*   [About MetalLB and the MetalLB Operator](/networking/networking_operators/metallb-operator/about-metallb#about-metallb)

## Next steps {id="configuring-externalip-next-steps"}

*   [Configuring ingress cluster traffic for a service external IP](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-service-external-ip#configuring-ingress-cluster-traffic-service-external-ip)