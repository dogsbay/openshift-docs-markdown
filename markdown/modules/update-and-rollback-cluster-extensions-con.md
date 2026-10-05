{%- set _mod_docs_content_type = "CONCEPT" %}
# Update and roll back cluster extensions {id="update-and-rollback-cluster-extensions-con_{{ context }}"}

Operator Lifecycle Manager (OLM) v1 updates a cluster extension when a new version that satisfies the version range in its `ClusterExtension` resource becomes available. You can pin a target version, widen or narrow the accepted range, or force an update or rollback when the automatic resolution is not what you want.