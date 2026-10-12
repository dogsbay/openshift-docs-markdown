{%- set _mod_docs_content_type = "CONCEPT" %}
# Update and roll back cluster extensions {id="update-and-rollback-cluster-extensions-con_{{ context }}"}

Operator Lifecycle Manager (OLM) v1 updates a cluster extension when a new version satisfying the `ClusterExtension` version range becomes available. You can pin a version, adjust the range, or force an update or rollback.