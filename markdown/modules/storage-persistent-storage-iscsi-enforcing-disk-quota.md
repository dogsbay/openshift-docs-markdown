{%- set _mod_docs_content_type = "CONCEPT" %}
# Enforce disk quotas {id="enforcing-disk-quotas-iscsi_{{ context }}"}

You can use LUN partitions to enforce disk quotas and size constraints. Each LUN is one persistent volume. Kubernetes enforces unique names for persistent volumes. {._abstract}

Enforcing quotas in this way allows the user to request persistent storage by a specific amount (for example, `10Gi`) and be matched with a corresponding volume of equal or greater capacity.