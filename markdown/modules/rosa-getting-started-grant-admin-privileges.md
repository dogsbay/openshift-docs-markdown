{%- set _mod_docs_content_type = "PROCEDURE" %}
# Grant administrator privileges to a user {id="rosa-getting-started-grant-admin-privileges_{{ context }}"}

{% if context == "rosa-getting-started" %}
{%- set getting_started = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}

After you have added a user to your configured identity provider, you can grant the user `cluster-admin` or `dedicated-admin` privileges for your {{ product_title }} cluster. {._abstract}

{% if getting_started %}

**Prerequisites**

*   You have an AWS account.
*   You installed and configured the latest {{ rosa_cli }}, `rosa`, on your workstation.
*   You logged in to your Red&#160;Hat account using the {{ rosa_cli }}.
*   You created a {{ product_title }} cluster.
*   You have configured a GitHub identity provider for your cluster and added identity provider users.
{% endif %}

**Procedure**

*   To configure `cluster-admin` privileges for an identity provider user, grant the user `cluster-admin` privileges:
    ```terminal
    $ rosa grant user cluster-admin --user=<idp_user_name> --cluster=<cluster_name>
    ```
    ```terminal title="Example output"
    I: Granted role 'cluster-admins' to user '<idp_user_name>' on cluster '<cluster_name>'
    ```
*   To configure `dedicated-admin` privileges for an identity provider user, grant the user `dedicated-admin` privileges:
    ```terminal
    $ rosa grant user dedicated-admin --user=<idp_user_name> --cluster=<cluster_name>
    ```
    ```terminal title="Example output"
    I: Granted role 'dedicated-admins' to user '<idp_user_name>' on cluster '<cluster_name>'
    ```

**Verification**

*   Verify that the user is listed as a member of the appropriate group:
    ```terminal
    $ rosa list users --cluster=<cluster_name>
    ```
    ```terminal title="Example output"
    ID                 GROUPS
    <idp_user_name>    cluster-admins
    ```

    Or for `dedicated-admin`:
    ```terminal
    ID                 GROUPS
    <idp_user_name>    dedicated-admins
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