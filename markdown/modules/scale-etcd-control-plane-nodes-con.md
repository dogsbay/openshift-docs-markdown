{%- set _mod_docs_content_type = "CONCEPT" %}
# Scale etcd control plane nodes {id="scale-etcd-control-plane-nodes-con_{{ context }}"}

The size of the etcd cluster is tied to the number of control plane nodes. Adding control plane nodes adds etcd members, which changes the quorum requirement and the write latency the cluster can tolerate.