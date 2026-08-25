{%- set _mod_docs_content_type = "CONCEPT" %}
# Support for disconnected environments {id="persistent-storage-csi-secrets-store-disconnect-environment_{{ context }}"}

You can use certain secrets store providers in disconnected {{ product_title }} clusters by configuring VPC endpoints or equivalent connectivity to enable communication between the driver and external secret management systems. {._abstract}

The following secrets store providers support using the {{ secrets_store_driver }} in disconnected clusters:

*   AWS Secrets Manager
*   Azure Key Vault
*   Google Secret Manager
*   HashiCorp Vault

To enable communication between {{ secrets_store_driver }} and the secrets store provider, configure Virtual Private Cloud (VPC) endpoints or equivalent connectivity to the corresponding secrets store provider, the OpenID Connect (OIDC) issuer, and the Secure Token Service (STS). The exact configuration depends on the secrets store provider, the authentication method, and the type of disconnected cluster.


:::note

For more information about disconnected environments, see "About disconnected environments".

:::