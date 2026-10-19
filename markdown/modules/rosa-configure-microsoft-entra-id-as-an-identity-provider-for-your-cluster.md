{%- set _mod_docs_content_type = "CONCEPT" %}
# Tutorial: Configure Microsoft Entra ID as an identity provider for your cluster {id="rosa-hcp-configure-microsoft-entra-id-as-an-identity-provider-for-your-cluster_{{ context }}"}

Configure Microsoft Entra ID (formerly Azure Active Directory) as the cluster identity provider to enable user authentication and group-based access control for your {{ product_title }} cluster by using OpenID Connect (OIDC). {._abstract}

This tutorial guides you to complete the following tasks:

1.  Register a new application in Entra ID for authentication.
1.  Configure the application registration in Entra ID to include optional and group claims in tokens.
1.  Configure the {{ product_title }} cluster to use Entra ID as the identity provider.
1.  Grant additional permissions to individual groups.

**Additional resources**
{._additional-resources}

*   [Using RBAC to define and apply permissions](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html/authentication_and_authorization/using-rbac)