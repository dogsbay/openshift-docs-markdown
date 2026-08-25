{%- set _mod_docs_content_type = "PROCEDURE" %}
# Revoke user access to a cluster {id="rosa-getting-started-revoke-user-access_{{ context }}"}

{% if context == "rosa-getting-started" %}
{%- set getting_started = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}

You can revoke cluster access for an identity provider user by removing them from your configured identity provider. {._abstract}

You can configure different types of identity providers for your {{ product_title }} cluster. The following example procedure revokes cluster access for a member of a GitHub organization that is configured for identity provision to the cluster.

{% if getting_started %}

**Prerequisites**

*   You have a {{ product_title }} cluster.
*   You have a GitHub user account.
*   You have configured a GitHub identity provider for your cluster and added an identity provider user.
{% endif %}

**Procedure**

1.  Go to [github.com](https://github.com) and log in to your GitHub account.
1.  Remove the user from your GitHub organization. Follow the steps in [Removing a member from your organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization) in the GitHub documentation.

**Verification**

*   Verify that the user no longer appears in the cluster users list:
    ```terminal
    $ rosa list users --cluster=<cluster_name>
    ```

    The revoked user should not be displayed in the output.

**Additional resources**
{._additional-resources}

*   [Revoking access to a cluster](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html/install_rosa_classic_clusters/rosa-sts-deleting-access-cluster)
*   [Managing membership in your GitHub organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization)

{% if context == "rosa-getting-started" %}
{%- set getting_started = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}