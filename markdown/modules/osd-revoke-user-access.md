{%- set _mod_docs_content_type = "PROCEDURE" %}
# Revoke user access to a cluster {id="osd-revoke-user-access_{{ context }}"}

You can revoke cluster access from an identity provider user by removing them from your configured identity provider. {._abstract}

You can configure different types of identity providers for your {{ product_title }} cluster. The following example procedure revokes cluster access for a member of a GitHub organization or team that is configured for identity provision to the cluster.

**Prerequisites**

*   You have an {{ product_title }} cluster.
*   You have a GitHub user account.
*   You have configured a GitHub identity provider for your cluster and added an identity provider user.

**Procedure**

1.  Navigate to [github.com](https://github.com) and log in to your GitHub account.
1.  Remove the user from your GitHub organization or team:
    *   If your identity provider configuration uses a GitHub organization, follow the steps in [Removing a member from your organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization) in the GitHub documentation.
    *   If your identity provider configuration uses a team within a GitHub organization, follow the steps in [Removing organization members from a team](https://docs.github.com/en/organizations/organizing-members-into-teams/removing-organization-members-from-a-team) in the GitHub documentation.

**Verification**

*   After removing the user from your identity provider, the user cannot authenticate to the cluster.