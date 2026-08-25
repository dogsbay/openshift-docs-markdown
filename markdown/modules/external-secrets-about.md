{%- set _mod_docs_content_type = "CONCEPT" %}
# About the {{ external_secrets_operator }} {id="external-secrets-about_{{ context }}"}

Use the {{ external_secrets_operator }} to integrate the `external-secrets` application with the {{ product_title }} cluster. The `external-secrets` application fetches secrets stored in external providers such as AWS Secrets Manager, HashiCorp Vault, Google Secret Manager, Azure Key Vault, {{ ibm_cloud_title }} Secrets Manager, and AWS Systems Manager Parameter Store, and integrates them with Kubernetes in a secure manner. {._abstract}

Using the {{ external_secrets_operator_short }} ensures the following:

*   Decouples applications from the secret-lifecycle management.
*   Centralizes secret storage to support compliance requirements.
*   Enables secure and automated secret rotation.
*   Supports multi-cloud secret sourcing with fine-grained access control.
*   Centralizes and audits access control.


:::important

Do not attempt to use more than one {{ external_secrets_operator_short }} in your cluster. If you have a community {{ external_secrets_operator_short }} installed in your cluster, you must uninstall it before installing the {{ external_secrets_operator }}.

:::


For more information about the `external-secrets` application, see "external-secrets application" in Additional resources.

Use the {{ external_secrets_operator_short }} to authenticate with the external secrets store, retrieve secrets, and inject the retrieved secrets into a native Kubernetes secret. This method removes the need for applications to directly access or manage external secrets.