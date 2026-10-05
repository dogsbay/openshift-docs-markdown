{%- set _mod_docs_content_type = "CONCEPT" %}
# Install and delete cluster extensions {id="install-and-delete-cluster-extensions-con_{{ context }}"}

With Operator Lifecycle Manager (OLM) v1, you install a cluster extension by creating a `ClusterExtension` resource that references a package in a catalog, along with the service account and RBAC the extension needs. You delete the extension by removing that resource.