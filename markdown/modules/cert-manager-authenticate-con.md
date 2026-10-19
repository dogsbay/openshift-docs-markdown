{%- set _mod_docs_content_type = "CONCEPT" %}
# Authenticating the {{ cert_manager_operator }} {id="cert-manager-authenticate-con_{{ context }}"}

To enable the operator to manage components on your cloud provider, authenticate the {{ cert_manager_operator }} by configuring cloud credentials. You can grant the Operator access to external services required for certificate issuance, such as DNS providers.