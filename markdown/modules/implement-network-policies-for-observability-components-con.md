{%- set _mod_docs_content_type = "CONCEPT" %}
# Implement network policies for observability components {id="implement-network-policies-for-observability-components-con_{{ context }}"}

The Network Observability Operator runs in its own namespace and communicates with the API server, its storage backend, and the agents on each node. Configuring network policy through the `FlowCollector` custom resource secures inbound and outbound access to those components.