{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure BGP routing {id="configure-bgp-routing_{{ context }}"}

OVN-Kubernetes supports Border Gateway Protocol (BGP) routing, which lets cluster nodes advertise pod and service IP ranges to external BGP routers. You can enable or disable BGP routing for your cluster, and migrate existing FRRouting (FRR) configurations when upgrading from standalone FRR to the FRR-K8s integration.