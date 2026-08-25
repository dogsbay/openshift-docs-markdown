{%- set _mod_docs_content_type = "CONCEPT" %}
# About advanced direct authentication fields {id="structured-auth-config-about_{{ context }}"}

Advanced direct authentication fields provide flexibility and security for OIDC-based authentication in {{ product_title }}. You can configure advanced OIDC settings, implement custom token validation logic, and enforce security policies on usernames and groups. {._abstract}

The following capabilities are available:


Custom OIDC discovery URL
:   Specify a custom OIDC discovery endpoint when your identity provider does not use the standard discovery URL format. Useful for complex networking setups or non-standard identity providers.


CEL-based claim mapping
:   Use Common Expression Language (CEL) expressions to construct usernames and groups from JWT token claims with fallback logic. This addresses scenarios where different user types require varying claim mappings.


Claim validation rules
:   Use CEL expressions to implement advanced token validation logic, such as enforcing maximum token lifetimes, validating multiple claims, or implementing custom security policies.


User validation rules
:   Enforce security policies on usernames and groups extracted from tokens to prevent privilege escalation by blocking reserved system usernames and group prefixes.

These fields extend the base OIDC authentication configuration introduced in {{ product_title }} 4.14. You must first configure an external OIDC identity provider before using these advanced fields.

These fields require the `TechPreviewNoUpgrade` feature set to be enabled. They are available on standalone {{ product_title }} clusters and hosted control plane (HCP) environments.


:::important

These advanced authentication fields are available as a Technology Preview feature. Ensure you have a backup authentication method, such as a certificate-based kubeconfig file, before configuring these fields.

:::