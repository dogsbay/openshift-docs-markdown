{%- set _mod_docs_content_type = "CONCEPT" %}
# The {{ microshift_short }} LoadBalancer service for workloads {id="microshift-about-load-balancer-service_{{ context }}"}

{{ microshift_short }} has a built-in implementation of network load balancers that you can use for your workloads and applications within the node. You can create a `LoadBalancer` service by configuring a pod to interpret ingress rules and serve as an ingress controller.