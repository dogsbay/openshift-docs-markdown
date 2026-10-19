{%- set _mod_docs_content_type = "CONCEPT" %}
# Update and roll back cluster extensions with {{ olmv1 }} {id="update-and-rollback-cluster-extensions-with-olmv1-con_{{ context }}"}

Operator Lifecycle Manager (OLM) v1 updates a cluster extension when a new version satisfying the `ClusterExtension` version range becomes available. You can pin a version, adjust the range, or force an update or rollback.