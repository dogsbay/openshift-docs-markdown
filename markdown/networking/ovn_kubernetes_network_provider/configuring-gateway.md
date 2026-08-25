---
title: Configuring a gateway
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring a gateway {id="configuring-gateway"}
{%- set context = "configuring-gateway-mode" %}

As a cluster administrator you can configure the `gatewayConfig` object to manage how external traffic leaves the cluster. You do so by setting the `routingViaHost` parameter to one of the following values: {._abstract}

*   `true` means that egress traffic routes through a specific local gateway on the node that hosts the pod. Egress traffic routes through the host and this traffic applies to the routing table of the host.
*   `false` means that egress traffic routes through a dedicated node but a group of nodes share the same gateway. Egress traffic does not route through the host. The Open vSwitch (OVS) outputs traffic directly to the node IP interface.

{% leveloffset +1 %}{% include "./modules/nwt-configure-egress-routing-policies.md" %}{% endleveloffset %}