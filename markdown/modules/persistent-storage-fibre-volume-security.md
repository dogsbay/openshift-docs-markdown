{%- set _mod_docs_content_type = "CONCEPT" %}
# Fibre Channel volume security {id="fibre-volume-security_{{ context }}"}

You can request storage with a persistent volume claim. This claim only lives in the user’s namespace, and can only be referenced by a pod within that same namespace. Any attempt to access a persistent volume across a namespace causes the pod to fail. {._abstract}

Each Fibre Channel LUN must be accessible by all nodes in the cluster.