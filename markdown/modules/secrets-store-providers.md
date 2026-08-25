{%- set _mod_docs_content_type = "CONCEPT" %}
# Secrets store providers {id="secrets-store-providers_{{ context }}"}

You can store sensitive information needed by your applications in an external secret management system and use the {{ secrets_store_operator }} to mount the secret content as a pod volume. Using an external secret store protects information that you do not want developers to have and can be more secure than `secret` objects. {._abstract}

The {{ secrets_store_operator }} has been tested with the following secrets store providers:

*   AWS Secrets Manager
*   AWS Systems Manager Parameter Store
*   Azure Key Vault
*   Google Secret Manager
*   HashiCorp Vault


:::important

{{ ibm_z_title }} supports only HashiCorp Vault. 

:::



:::note

Red&#160;Hat does not test all factors associated with third-party secrets store provider functionality. For more information about third-party support, see the "Red&#160;Hat third-party support policy".

:::