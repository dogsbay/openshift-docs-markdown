{%- set _mod_docs_content_type = "PROCEDURE" %}
# Revoke administrator privileges from a user {id="rosa-getting-started-revoke-admin-privileges_{{ context }}"}

{% if context == "rosa-getting-started" %}
{%- set getting_started = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}

You can revoke `cluster-admin` or `dedicated-admin` privileges from a user by using the {{ rosa_cli_first }}. {._abstract}

{% if getting_started %}

**Prerequisites**

*   You installed and configured the latest {{ rosa_cli }}, `rosa`, on your workstation.
*   You logged in to your Red&#160;Hat account using the {{ rosa_cli }}.
*   You created a {{ product_title }} cluster.
*   You have configured a GitHub identity provider for your cluster and added an identity provider user.
*   You granted `cluster-admin` or `dedicated-admin` privileges to a user.
{% endif %}

**Procedure**

*   To revoke `cluster-admin` privileges from an identity provider user, revoke the `cluster-admin` privilege:
    ```terminal
    $ rosa revoke user cluster-admin --user=<idp_user_name> --cluster=<cluster_name>
    ```
    ```terminal title="Example output"
    ? Are you sure you want to revoke role cluster-admins from user <idp_user_name> in cluster <cluster_name>? Yes
    I: Revoked role 'cluster-admins' from user '<idp_user_name>' on cluster '<cluster_name>'
    ```
*   To revoke `dedicated-admin` privileges from an identity provider user, revoke the `dedicated-admin` privilege:
    ```terminal
    $ rosa revoke user dedicated-admin --user=<idp_user_name> --cluster=<cluster_name>
    ```
    ```terminal title="Example output"
    ? Are you sure you want to revoke role dedicated-admins from user <idp_user_name> in cluster <cluster_name>? Yes
    I: Revoked role 'dedicated-admins' from user '<idp_user_name>' on cluster '<cluster_name>'
    ```

**Verification**

*   Verify that the user is not listed as a member of the group:
    ```terminal
    $ rosa list users --cluster=<cluster_name>
    ```
    ```terminal title="Example output"
    W: There are no users configured for cluster '<cluster_name>'
    ```

**Additional resources**
{._additional-resources}

*   [Cluster administration role](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html/introduction_to_rosa/policies-and-service-definition)
*   [Using RBAC to define and apply permissions](https://docs.redhat.com/en/documentation/openshift_container_platform/4.18/html/authentication_and_authorization/using-rbac)

{% if context == "rosa-getting-started" %}
{%- set getting_started = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}