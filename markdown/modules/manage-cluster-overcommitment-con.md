{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage cluster overcommitment {id="manage-cluster-overcommitment-con_{{ context }}"}

You can let a cluster schedule more resources than its nodes physically provide by configuring overcommitment at the node and project level. Overcommit settings and the Cluster Resource Override Operator trade guaranteed capacity for higher workload density, so set them to a level that keeps the cluster stable.