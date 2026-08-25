{%- set _mod_docs_content_type = "CONCEPT" %}
# Removing cloud provider credentials {id="post-install-remove-cloud-creds_{{ context }}"}

After installing {{ product_title }}, some organizations require the removal of the cloud provider credentials that were used during the initial installation. To allow the cluster to use the new credentials, you must update the secrets that the Cloud Credential Operator (CCO) uses to manage cloud provider credentials.