{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure storage credentials {id="configure-storage-credentials-con_{{ context }}"}

The Image Registry Operator reads the credentials for its storage backend from a secret in the `openshift-image-registry` namespace. Supply your own credentials in that secret when the registry must authenticate to storage that you manage.