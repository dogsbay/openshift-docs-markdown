{%- set _mod_docs_content_type = "CONCEPT" %}
# Enforcing disk quotas {id="enforcing-disk-quota_{{ context }}"}

You can use LUN partitions to enforce disk quotas and size constraints. Each LUN is mapped to a single persistent volume, and unique
names must be used for persistent volumes. {._abstract}

Enforcing quotas in this way allows the user to request persistent storage by a specific amount, such as 10Gi, and be matched with a corresponding volume of equal or greater capacity.