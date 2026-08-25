{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Assigning network addresses to gateways {id="assigning-network-addresses-gateways"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "assigning-network-addresses-gateways" %}

You can configure network addresses for your gateway to provide a predictable entry point for external traffic. This ensures that clients can reliably resolve and route requests to your load balancers. {._abstract}

The Gateway API uses addresses to define the specific network locations that are assigned to your `Gateway` resource. In {{ product_title }}, you rely on the Gateway controller to automatically provision and bind the necessary network addresses, such as an external load balancer IP, to your gateway. The controller then populates the `status.addresses` field of the `Gateway` resource with the assigned addresses once they are available.

To successfully assign network addresses to your gateway, complete the following tasks:

*   Understand gateway address assignment and types to plan your DNS and load balancer configuration.
*   Configure automatic address assignment for a gateway to successfully deploy it without violating manual address constraints.

{% leveloffset +1 %}{% include "./modules/understand-gateway-address-assignment.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configuring-automatic-address-assignment-gateway.md" %}{% endleveloffset %}