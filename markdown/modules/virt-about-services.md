{%- set _mod_docs_content_type = "CONCEPT" %}
# About services {id="virt-about-services_{{ context }}"}

A Kubernetes service exposes network access for clients to an application running on a set of pods. Services offer abstraction, load balancing, and, in the case of the `NodePort` and `LoadBalancer` types, exposure to the outside world. {._abstract}


`ClusterIP`
:   Exposes the service on an internal IP address and as a DNS name to other applications within the cluster. A single service can map to multiple virtual machines. When a client tries to connect to the service, the client’s request is load balanced among available backends. `ClusterIP` is the default service type.


`NodePort`
:   Exposes the service on the same port of each selected node in the cluster. `NodePort` makes a port accessible from outside the cluster, provided that the node itself is externally accessible to the client.


`LoadBalancer`
:   Creates an external load balancer in the current cloud (if supported) and assigns a fixed, external IP address to the service.

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}

:::note

For on-premise clusters, you can configure a load balancing service by deploying the MetalLB Operator.

:::

{% endif %}

{% if openshift_rosa or openshift_rosa_hcp %}

:::note

For {{ product_rosa }}, you must use `externalTrafficPolicy: Cluster` when configuring a load balancing service, to minimize the network downtime during live migration.

:::

{% endif %}