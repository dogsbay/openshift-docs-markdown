{%- set _mod_docs_content_type = "PROCEDURE" %}
# Grant user access to a cluster {id="rosa-getting-started-grant-user-access_{{ context }}"}

{% if context == "rosa-getting-started" %}
{%- set getting_started = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}

You can grant a user access to your {{ product_title }} cluster by adding them to your configured identity provider. {._abstract}

You can configure different types of identity providers for your {{ product_title }} cluster. The following example procedure adds a user to a GitHub organization that is configured for identity provision to the cluster.

{% if getting_started %}

**Prerequisites**

*   You have an AWS account.
*   You installed and configured the latest {{ rosa_cli }} on your workstation.
*   You logged in to your Red&#160;Hat account using the {{ rosa_cli }}.
*   You created a {{ product_title }} cluster.
*   You have a GitHub user account.
*   You have configured a GitHub identity provider for your cluster.
{% endif %}

**Procedure**

1.  Go to [github.com](https://github.com) and log in to your GitHub account.
1.  Invite users that require access to the {{ product_title }} cluster to your GitHub organization. Follow the steps in [Inviting users to join your organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization) in the GitHub documentation.

**Verification**

*   Verify that the user was granted access:
    ```terminal
    $ rosa list users --cluster=<cluster_name>
    ```

**Additional resources**
{._additional-resources}

*   [Customer administrator user](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html/introduction_to_rosa/policies-and-service-definition)
*   [Using RBAC to define and apply permissions](https://docs.redhat.com/en/documentation/openshift_container_platform/4.18/html/authentication_and_authorization/using-rbac)

{% if context == "rosa-getting-started" %}
{%- set getting_started = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}