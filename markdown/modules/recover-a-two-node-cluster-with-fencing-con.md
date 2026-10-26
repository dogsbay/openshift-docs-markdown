{%- set _mod_docs_content_type = "CONCEPT" %}
# Recover a two-node cluster with fencing {id="recover-a-two-node-cluster-with-fencing-con_{{ context }}"}

You can recover a two-node {{ product_title }} cluster with fencing when automatic recovery is unavailable by manually recovering the cluster, replacing control plane nodes, and verifying etcd health.