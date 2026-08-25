{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a cluster administrator user for quick cluster access {id="rosa-getting-started-create-cluster-admin-user_{{ context }}"}

{% if context == "rosa-getting-started" %}
{%- set getting_started = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}

Before configuring an identity provider, you can create a user with `cluster-admin` privileges for immediate access to your {{ product_title }} cluster. {._abstract}


:::note

The cluster administrator user is useful when you need quick access to a newly deployed cluster. However, consider configuring an identity provider and granting cluster administrator privileges to the identity provider users as required. For more information about setting up an identity provider for your {{ product_title }} cluster, see _Configuring an identity provider and granting cluster access_.

:::


{% if getting_started %}

**Prerequisites**

*   You have an AWS account.
*   You installed and configured the latest {{ rosa_cli }}, `rosa`, on your workstation.
*   You logged in to your Red&#160;Hat account using the {{ rosa_cli }}.
*   You created a {{ product_title }} cluster.
{% endif %}

**Procedure**

1.  Create a cluster administrator user, replacing `<cluster_name>` with the name of your cluster:
    ```terminal
    $ rosa create admin --cluster=<cluster_name>
    ```
    ```terminal title="Example output"
    W: It is recommended to add an identity provider to login to this cluster. See 'rosa create idp --help' for more information.
    I: Admin account has been added to cluster '<cluster_name>'.
    I: Please securely store this generated password. If you lose this password you can delete and recreate the cluster admin user.
    I: To login, run the following command:

       oc login https://api.example-cluster.wxyz.p1.openshiftapps.com:6443 --username cluster-admin --password d7Rca-Ba4jy-YeXhs-WU42J

    I: It may take up to a minute for the account to become active.
    ```

    :::note

    It might take approximately one minute for the `cluster-admin` user to become active.
    
    :::


{% if getting_started %}
1.  Log in to the cluster through the CLI by running the command provided in the output of the preceding step, replacing `<api_url>` and `<cluster_admin_password>` with the API URL and cluster administrator password for your environment:
    ```terminal
    $ oc login <api_url> --username cluster-admin --password <cluster_admin_password>
    ```
{% endif %}

{% if quickstart %}
1.  Log in to the cluster through the {{ cluster_manager }} {{ hybrid_console_second }}:
    1.  Navigate to {{ cluster_manager_url }} and select your cluster.
    1.  In your cluster, click **Open console**.
    1.  Under the _Log in with..._ prompt, click **Cluster-Admin**.
    1.  Enter your credentials.
    1.  Click **Log in**.
{% endif %}

**Verification**

{% if getting_started %}
*   Verify that you are logged in as the cluster administrator:
    ```terminal
    $ oc whoami
    ```
    ```terminal title="Example output"
    cluster-admin
    ```
{% endif %}

{% if quickstart %}
*   Verify that you can access the web console with the cluster administrator credentials.
{% endif %}

**Additional resources**
{._additional-resources}

*   [Understanding authentication](https://docs.redhat.com/en/documentation/openshift_container_platform/4.18/html/authentication_and_authorization/understanding-authentication)
*   [Understanding identity provider configuration](https://docs.redhat.com/en/documentation/openshift_container_platform/4.18/html/authentication_and_authorization/understanding-identity-provider)
*   [Cluster administration role](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html/introduction_to_rosa/policies-and-service-definition)

{% if context == "rosa-getting-started" %}
{%- set getting_started = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}