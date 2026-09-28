{%- set _mod_docs_content_type = "CONCEPT" %}
# Detect and investigate Network Observability issues {id="detect-and-investigate-network-observability-issues-con_{{ context }}"}

When the Network Observability Operator stops collecting or displaying flows, the cause is usually in the eBPF agent, the flowlogs pipeline, or Loki. Work through the symptoms to isolate which component failed.