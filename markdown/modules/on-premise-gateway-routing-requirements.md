{%- set _mod_docs_content_type = "CONCEPT" %}
# On-premise gateway routing requirements {id="on-premise-gateway-routing-requirements_{{ context }}"}

Understand the specific routing and load balancing requirements for on-premise Gateway API deployments to ensure your gateway functions correctly. {._abstract}

Unlike cloud environments where load balancers are dynamically provisioned, on-premise clusters require a preconfigured load balancer controller. Red Hat tests and certifies Gateway API on on-premise platforms specifically with MetalLB.


:::warning

If you attempt to use Gateway API on an on-premise cluster without a functional load balancer controller, the gateway service will remain in a "pending" state indefinitely.

:::


Additionally, be aware of the following topology and load balancer limitations for on-premise environments:

*   Third-party load balancers: Red Hat does not currently test Gateway API with third-party load balancers such as F5 or Avi Kubernetes Operator (AKO). If you use an untested load balancer, the cluster administrator is responsible for ensuring it is configured and working properly.
*   Unsupported topologies: Environments without a load balancer controller are not supported. For example, you cannot use annotations to enforce a `NodePort` service type in place of a load balancer.