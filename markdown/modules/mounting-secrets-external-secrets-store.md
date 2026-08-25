{%- set _mod_docs_content_type = "REFERENCE" %}
# Mounting secrets from an external secrets store to a CSI volume {id="mounting-secrets-external-secrets-store_{{ context }}"}

After installing the {{ secrets_store_operator }}, you can mount secrets from your external secret store. Using an external secret store protects information that you do not want developers to have and can be more secure than secret objects. {._abstract}

The {{ secrets_store_operator }} has been tested with the following secrets store providers:

*   AWS Secrets Manager
*   AWS Systems Manager Parameter Store
*   Azure Key Vault
*   Google Secret Manager
*   HashiCorp Vault