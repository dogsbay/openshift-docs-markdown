---
title: Zero Trust Workload Identity Manager OIDC federation
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Zero Trust Workload Identity Manager OIDC federation {id="zero-trust-manager-oidc-federation"}

{% include "./_attributes/common-attributes.md" %}

{%- set context = "zero-trust-manager-oidc-federation" %}

Ensure that your workloads can receive verifiable JSON Web Tokens (JWT-SVIDs) and allow external systems, such as cloud providers, to retrieve public keys from the discovery endpoint. Configure {{ zero_trust_full }} to act as an OpenID Connect (OIDC) provider through the SPIRE server. 

The following providers are verified to work with SPIRE OIDC federation:

*   Azure Entra ID
*   Vault

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-entraid-oidc-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/zero-trust-manager-create-route-oidc.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/zero-trust-manager-disabling-route.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/zero-trust-manager-configure-azure.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/zero-trust-manager-config-azure-blob.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/zero-trust-manager-config-azure-identity.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/zero-trust-manager-create-demo-app.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/zero-trust-manager-deploy-app.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/zero-trust-manager-spiffe-identity-federation.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/zero-trust-manager-verify-blob-access.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-vault-oidc-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/zero-trust-manager-install-vault-oidc.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/zero-trust-manager-initialize-vault-oidc.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/zero-trust-manager-vault-enable-kv.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/zero-trust-manager-vault-authenticate-jwt.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/zero-trust-manager-vault-deploy-demo.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/zero-trust-manager-vault-authenticate-secret.md" %}{% endleveloffset %}