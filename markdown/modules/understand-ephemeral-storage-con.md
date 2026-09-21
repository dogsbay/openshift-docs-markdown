{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand ephemeral storage {id="understand-ephemeral-storage-con_{{ context }}"}

Ephemeral storage provides temporary per-pod storage for scratch data, caches, and logs that do not persist beyond the lifetime of the pod. Understanding how it is requested, limited, and monitored helps you avoid exhausting node storage.