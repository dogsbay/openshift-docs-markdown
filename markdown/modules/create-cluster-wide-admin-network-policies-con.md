{%- set _mod_docs_content_type = "CONCEPT" %}
# Create cluster-wide admin network policies {id="create-cluster-wide-admin-network-policies-con_{{ context }}"}

`AdminNetworkPolicy` and `BaselineAdminNetworkPolicy` apply traffic rules across the whole cluster that namespace owners cannot override. Use them to enforce guardrails such as the egress that pods are permitted to cluster nodes, the API, and external networks.