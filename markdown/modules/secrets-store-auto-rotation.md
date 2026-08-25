{%- set _mod_docs_content_type = "CONCEPT" %}
# Automatic rotation {id="secrets-store-auto-rotation_{{ context }}"}

To maintain synchronization with your external secret provider, the {{ secrets_store_operator }} automatically rotates secret content in mounted volumes. The {{ secrets_store_operator }} uses this process to ensure that updates in the external store are automatically reflected in your pods and secrets. {._abstract}

If you enabled synchronization of mounted content as Kubernetes secrets, the Kubernetes secrets are also rotated.

Applications consuming the secret data must watch for updates to the secrets.