{%- set _mod_docs_content_type = "CONCEPT" %}
# Monitor control plane nodes {id="monitor-control-plane-nodes-con_{{ context }}"}

etcd consensus latency, inter-node network jitter, and the Kubernetes API transaction rate together indicate whether the control plane is keeping up. Track them to find bottlenecks before they affect cluster operations.