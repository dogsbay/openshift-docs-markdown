{%- set _mod_docs_content_type = "REFERENCE" %}
# Security considerations {id="external-secrets-operator-proxy-considerations_{{ context }}"}

When using the {{ external_secrets_operator }}, there are some security concerns you should consider: {._abstract}

*   The `external-secrets` operand fetches the secrets from the configured external providers and stores it in a Kubernetes native `Secrets` resource. This results in a secret zero problem. It is recommended to secure the secret objects using additional encryption. For more information, see [Data encryption options](https://docs.redhat.com/en/documentation/red_hat_openshift_data_foundation/4.9/html/planning_your_deployment/security-considerations_rhodf#data-encryption-options_rhodf).
*   When configuring `SecretStore` and `ClusterSecretStore` resources, consider using short-term credential-based authorization. This approach enhances security by limiting the window of opportunity for unauthorized access, even if credentials are compromised.
*   To enhance the security of the {{ external_secrets_operator }}, it is crucial to implement role-based access controls (RBACs). These RBACs should define and limit access to the custom resources provided by the {{ external_secrets_operator_short }}.