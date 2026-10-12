{%- set _mod_docs_content_type = "CONCEPT" %}
# Zero Trust Workload Identity Manager OIDC federation {id="zero-trust-manager-oidc-federation-con_{{ context }}"}

Ensure that your workloads can receive verifiable JSON Web Tokens (JWT-SVIDs) and allow external systems, such as cloud providers, to retrieve public keys from the discovery endpoint. Configure {{ zero_trust_full }} to act as an OpenID Connect (OIDC) provider through the SPIRE server. {._abstract}

The following providers are verified to work with SPIRE OIDC federation:

*   Azure Entra ID
*   Vault