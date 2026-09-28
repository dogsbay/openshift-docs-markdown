{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand network policies and administrative network policies {id="understand-network-policies-and-administrative-network-policies-con_{{ context }}"}

Network policy in {{ product_title }} is defined through both namespace-scoped and cluster-scoped APIs. Understanding how `NetworkPolicy`, `AdminNetworkPolicy`, and `BaselineAdminNetworkPolicy` differ in scope, precedence, and available actions lets you decide which one enforces a given connectivity requirement.