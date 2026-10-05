{%- set _mod_docs_content_type = "CONCEPT" %}
# Create remote worker nodes {id="create-remote-worker-nodes-con_{{ context }}"}

Remote worker nodes run in a location that is far from the control plane, such as an edge site. The extra network latency and the possibility of losing the connection to the control plane change how you configure the node and how the cluster should react when the node becomes unreachable.