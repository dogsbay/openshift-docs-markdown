{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure storage and flow collection for network observability {id="configure-storage-and-flow-collection-for-network-observability-con_{{ context }}"}

The Network Observability Operator is configured through the cluster-wide `FlowCollector` resource, which controls both which network flows are captured and where they are stored. Size those components and tune collection so that observability coverage stays within your storage budget.