{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand network policy types {id="understand-network-policy-types-con_{{ context }}"}

{{ product_title }} defines network policy through both cluster-scoped and namespace-scoped APIs. Understanding how `NetworkPolicy`, `AdminNetworkPolicy`, and `BaselineAdminNetworkPolicy` differ helps you choose the right API for each isolation requirement.