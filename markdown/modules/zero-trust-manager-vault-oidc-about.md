{%- set _mod_docs_content_type = "CONCEPT" %}

# About Vault OpenID Connect {id="zero-trust-manager-vault-oidc-about_{{ context }}"}

Use Vault OpenID Connect (OIDC) with SPIRE to securely authenticate workloads. Vault uses SPIRE as a trusted OIDC provider to validate workload identities. This configuration enables workloads to receive short-lived tokens to access secrets and perform actions within Vault. {._abstract}