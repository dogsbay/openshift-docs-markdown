{%- set _mod_docs_content_type = "CONCEPT" %}
# Recover an unhealthy etcd cluster for {{ hcp }} {id="recover-unhealthy-etcd-cluster-for-hosted-control-planes-con_{{ context }}"}

In a highly available control plane, three etcd pods run as a part of a stateful set in an etcd cluster. To recover an etcd cluster, identify unhealthy etcd pods by checking the etcd cluster health.