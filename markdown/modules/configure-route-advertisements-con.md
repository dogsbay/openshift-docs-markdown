{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure route advertisements {id="configure-route-advertisements-con_{{ context }}"}

You can use route advertisements to share pod and egress IP routes between your cluster and the provider network, which simplifies network management and improves failover visibility. Route advertisements require the OVN-Kubernetes plug-in and a Border Gateway Protocol (BGP) provider.