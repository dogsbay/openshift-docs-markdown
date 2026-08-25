{%- set _mod_docs_content_type = "CONCEPT" %}
# Supported OIDC providers {id="identity-provider-oidc-supported_{{ context }}"}

Red Hat tests and supports specific OpenID Connect (OIDC) providers with {{ product_title }}. The following OpenID Connect (OIDC) providers are tested and supported with {{ product_title }}. Using an OIDC provider that is not on the following list might work with {{ product_title }}, but the provider was not tested by Red Hat and therefore is not supported by Red Hat.

*   Active Directory Federation Services for Windows Server

    :::note

    Currently, it is not supported to use Active Directory Federation Services for Windows Server with {{ product_title }} when custom claims are used.
    
    :::

*   GitLab
*   Google
*   Keycloak
*   Microsoft Entra ID

    :::note

    Currently, it is not supported to use Microsoft Entra ID when group names are required to be synced.
    
    :::

*   Okta
*   Ping Identity
*   Red Hat Single Sign-On