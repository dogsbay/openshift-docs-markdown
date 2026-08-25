{%- set _mod_docs_content_type = "CONCEPT" %}
# Rotating cloud provider credentials {id="post-install-rotate-cloud-creds_{{ context }}"}

Some organizations require the rotation of the cloud provider credentials. To allow the cluster to use the new credentials, you must update the secrets that the Cloud Credential Operator (CCO) uses to manage cloud provider credentials.