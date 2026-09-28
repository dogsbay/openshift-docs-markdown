{%- set _mod_docs_content_type = "CONCEPT" %}
# Enforce non-negotiable platform security baselines {id="enforce-non-negotiable-platform-security-baselines-con_{{ context }}"}

Cluster-scoped network policy APIs let an administrator set rules that tenants cannot weaken from inside their own namespaces. Combining `AdminNetworkPolicy` and `BaselineAdminNetworkPolicy` with namespace-scoped `NetworkPolicy` keeps organizational policy in force as namespaces and applications change.