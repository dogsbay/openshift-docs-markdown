{%- set _mod_docs_content_type = "CONCEPT" %}
# Set the Ingress Controller to private {id="set-the-ingress-controller-to-private-con_{{ context }}"}

You can keep application traffic on internal networks by changing the Ingress Controller endpoint publishing strategy to use an internal load balancer. Cluster routes are then unreachable from outside the cluster network.