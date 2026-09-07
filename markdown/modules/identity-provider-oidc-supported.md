{%- set _mod_docs_content_type = "CONCEPT" %}
# Supported OpenID Connect providers {id="identity-provider-oidc-supported_{{ context }}"}

Review the OpenID Connect (OIDC) providers that Red&#160;Hat tests and supports with {{ product_title }}. Choose a provider from this list if you need a Red&#160;Hat-tested OIDC integration with {{ product_title }}. {._abstract}

The following OIDC providers are tested and supported with {{ product_title }}. Using an OIDC provider that is not on the following list might work with {{ product_title }}, but the provider was not tested by Red&#160;Hat and therefore is not supported by Red&#160;Hat.

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