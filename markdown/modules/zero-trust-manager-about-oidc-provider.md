{%- set _mod_docs_content_type = "CONCEPT" %}
# SPIRE OpenID Connect Discovery Provider {id="zero-trust-manager-about-oidc-provider_{{ context }}"}

Use the SPIRE OpenID Connect (OIDC) Discovery Provider to integrate SPIRE workload identities with OIDC-compliant systems. This component exposes endpoints for token verification. It helps ensure compatibility between SPIRE-issued credentials and external APIs requiring standard OIDC tokens. {._abstract}

While SPIRE primarily issues identities for workloads, additional workload-related claims can be embedded into JWT-SVIDs through the configuration of SPIRE, which these claims to be included in the token and verified by OIDC-compliant clients.