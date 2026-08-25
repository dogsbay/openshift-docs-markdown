{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand gateway address assignment and types {id="understand-gateway-address-assignment_{{ context }}"}

[role="_abstract"] 
{{ product_title }} automatically handles address assignment by provisioning a `LoadBalancer` service when you create a `Gateway` resource. The network address assigned to your gateway corresponds to the IP address or hostname of this underlying load balancer.


:::important

Do not define the `spec.addresses` field. Manually requesting specific network addresses is not currently supported in {{ product_title }}. If you attempt to request a specific address manually, the gateway enters an error state.

The `status.addresses` field is populated automatically by the gateway controller. This field lists the actual, active network address assigned to your gateway by the load balancing infrastructure.

:::


## Address types {id="_address_types"}

When the controller dynamically assigns an address to your gateway and populates the `status.addresses` field, it uses one of the following primary types to reflect the underlying load balancer:


`Hostname`
:   Represents a DNS-based ingress point. This concept is typically used for cloud load balancers where a DNS name exposes the load balancer.


`IPAddress`
:   A textual representation of a numeric IP address (IPv4 or IPv6) assigned by the load balancing infrastructure.