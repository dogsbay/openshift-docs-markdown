{%- set _mod_docs_content_type = "CONCEPT" %}
# Isolate routing domains for advanced workloads {id="isolate-routing-domains-for-advanced-workloads-con_{{ context }}"}

Virtual routing and forwarding (VRF) gives a workload its own routing table rather than sharing the host’s. Combined with CNI plugin chaining, VRF supports telecommunications and network function workloads that need separate routing contexts on the same node.