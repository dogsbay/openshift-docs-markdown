{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage multi-network policy rules {id="manage-multi-network-policy-rules-con_{{ context }}"}

The `MultiNetworkPolicy` API manages traffic for pods attached to secondary networks, allowing or denying it based on ports, IP ranges, or labels. Creating, viewing, editing, and deleting these policies through a single lifecycle keeps secondary-network isolation maintainable as applications change.