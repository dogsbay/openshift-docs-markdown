{%- set _mod_docs_content_type = "CONCEPT" %}
# Isolating pods with network policies {id="security-network-policies_{{ context }}"}

Using _network policies_, you can isolate pods from each other in the same project. Network policies can deny all network access to a pod, only allow connections for the Ingress Controller, reject connections from pods in other projects, or set similar rules for how networks behave.