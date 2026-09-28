{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure the node port service range {id="configure-the-node-port-service-range-con_{{ context }}"}

Services of type `NodePort` are allocated ports from a range that is reserved on every node. You can expand the default `30000-32768` range so that port assignments align with your firewall rules and network policies.