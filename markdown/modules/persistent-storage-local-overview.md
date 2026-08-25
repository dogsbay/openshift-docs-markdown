{%- set _mod_docs_content_type = "CONCEPT" %}
# Local Storage Operator overview {id="local-storage-overview_{{ context }}"}

Local volumes can be used without manually scheduling pods to nodes because the system is aware of the volume node constraints. However, local volumes are still subject to the availability of the underlying node and are not suitable for all applications. {._abstract}


:::note

Local volumes can only be used as a statically created persistent volume.

:::