---
title: Assign network addresses to gateways
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Assign network addresses to gateways {id="assigning-network-addresses-gateways"}
{%- set context = "assigning-network-addresses-gateways" %}

You can configure network addresses for your gateway to provide a predictable entry point for external and internal traffic. This ensures that clients can reliably resolve and route requests to your load balancers. {._abstract}

Gateway API uses addresses to define the specific network locations that are assigned to your `Gateway` resource. In {{ product_title }}, you rely on the gateway controller to automatically provision and bind the necessary network addresses, such as an external or internal load balancer IP, to your gateway. On on-premise environments, this automatic provisioning requires a configured load balancer controller.

To successfully assign network addresses to your gateway, complete the following tasks:

*   Understand gateway address assignment and types to plan your DNS and load balancer configuration.
*   Understand on-premise gateway routing requirements to ensure your infrastructure can support Gateway API.
*   Configure automatic address assignment for a gateway to successfully deploy it without violating manual address constraints.
*   Configure an internal load balancer to restrict your gateway traffic to your private network.
*   Review cloud provider annotations to ensure your internal load balancer provisions correctly on your specific infrastructure.
*   Configure DNS for on-premise gateways to ensure clients can reliably resolve your gateway.

{% leveloffset +1 %}{% include "./modules/understand-gateway-address-assignment.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/on-premise-gateway-routing-requirements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configuring-automatic-address-assignment-gateway.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configuring-internal-lb-gateway.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/internal-lb-annotations-reference.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configuring-dns-on-premise-gateways.md" %}{% endleveloffset %}