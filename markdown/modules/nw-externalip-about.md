{%- set _mod_docs_content_type = "CONCEPT" %}
# About ExternalIP {id="nw-externalip-about_{{ context }}"}

To load balance traffic in non-cloud environments, use the ExternalIP facility to specify external IP addresses in the `spec.externalIPs[]` parameter of the `Service` object. This configuration directs traffic to a local node, providing functionality similar to a `type=NodePort` service. {._abstract}


:::important

For cloud environments, use the load balancer services for automatic deployment of a cloud load balancer to target the endpoints of a service.

:::


After you specify a value for the parameter, {{ product_title }} assigns an additional virtual IP address to the service. The IP address can exist outside of the service network that you defined for your cluster.


:::warning

Because ExternalIP is disabled by default, enabling the ExternalIP functionality might introduce security risks for the service, because in-cluster traffic to an external IP address is directed to that service. This configuration means that cluster users could intercept sensitive traffic destined for external resources.

:::


You can use either a MetalLB implementation or an IP failover deployment to attach an ExternalIP resource to a service in the following ways:


Automatic assignment of an external IP
:   {{ product_title }} automatically assigns an IP address from the `autoAssignCIDRs` CIDR block to the `spec.externalIPs[]` array when you create a `Service` object with `spec.type=LoadBalancer` set. For this configuration, {{ product_title }} implements a cloud version of the load balancer service type and assigns IP addresses to the services. Automatic assignment is disabled by default and must be configured by a cluster administrator as described in the "Configuration for ExternalIP" section.


Manual assignment of an external IP
:   {{ product_title }} uses the IP addresses assigned to the `spec.externalIPs[]` array when you create a `Service` object. You cannot specify an IP address that is already in use by another service.

After using either the MetalLB implementation or an IP failover deployment to host external IP address blocks, you must configure your networking infrastructure to ensure that the external IP address blocks are routed to your cluster. This configuration means that the IP address is not configured in the network interfaces from nodes. To handle the traffic, you must configure the routing and access to the external IP by using a method, such as static Address Resolution Protocol (ARP) entries.

{{ product_title }} extends the ExternalIP functionality in Kubernetes by adding the following capabilities:

*   Restrictions on the use of external IP addresses by users through a configurable policy
*   Allocation of an external IP address automatically to a service upon request