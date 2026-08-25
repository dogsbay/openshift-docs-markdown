{%- set _mod_docs_content_type = "REFERENCE" %}
# Cluster update phases {id="cluster-update-phases_{{ context }}"}

{{ product_title }} updates are done in multiple phases. {._abstract}

The cluster update happens in the following two phases:

*   Cluster Version Operator (CVO) target update payload deployment
*   Machine Config Operator (MCO) node updates