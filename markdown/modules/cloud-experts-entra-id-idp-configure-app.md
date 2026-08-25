{%- set _mod_docs_content_type = "CONCEPT" %}
# Optional and group claims for Entra ID application registration {id="cloud-experts-entra-id-idp-configure-app_{{ context }}"}

The `email` and `preferred_username` Entra ID optional claims provide {{ product_title }} with the information it needs to create user accounts. Group claims enable group-based access control. {._abstract}

In addition to individual user authentication, {{ product_title }} provides group claim functionality. This functionality allows an OpenID Connect (OIDC) identity provider, such as Entra ID, to offer a user’s group membership for use within {{ product_title }}.

**Additional resources**
{._additional-resources}

*   [Configure and manage optional claims - Microsoft documentation](https://learn.microsoft.com/en-us/azure/active-directory/develop/optional-claims)