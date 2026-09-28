{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand authorization in {{ product_title }} {id="understand-authorization-in-openshift-container-platform-con_{{ context }}"}

Authorization determines which actions a request is allowed to perform after the user has been authenticated. Default cluster roles, project and namespace boundaries, token scopes, and admission plugins all contribute to the decision, so understanding how they combine is the basis of a sound multi-tenant design.