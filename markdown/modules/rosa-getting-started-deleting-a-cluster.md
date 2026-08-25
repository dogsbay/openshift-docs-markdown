{% if context == "rosa-getting-started" %}
{%- set getting_started = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}
{%- set _mod_docs_content_type = "PROCEDURE" %}

# Delete a {{ product_title }} cluster and the AWS IAM STS resources {id="rosa-getting-started-deleting-a-cluster_{{ context }}"}

{%- if openshift_rosa_hcp %}
You can use the {{ rosa_cli }} to delete a {{ product_title }} cluster, the AWS Identity and Access Management (IAM) account-wide roles, the cluster-specific Operator roles, and the OpenID Connect (OIDC) provider. To delete the account-wide and Operator policies, use the AWS IAM Console or the AWS CLI.
{% endif %}
{% if openshift_rosa %}
You can use the {{ rosa_cli }} to delete a {{ product_title }} cluster that uses AWS Security Token Service (STS), the AWS Identity and Access Management (IAM) account-wide roles, cluster-specific Operator roles, and the OpenID Connect (OIDC) provider. To delete account-wide inline and Operator policies, use the AWS IAM Console or AWS CLI.
{% endif %} {._abstract}


:::important

Account-wide IAM roles and policies might be used by other {{ product_title }} clusters in the same AWS account. You must only remove the resources if they are not required by other clusters.

:::


{% if getting_started %}

**Prerequisites**

*   You installed and configured the latest {{ rosa_cli }} on your workstation.
*   You logged in to your Red&#160;Hat account using the {{ rosa_cli }}.
*   You created a {{ product_title }} cluster.
{% endif %}

**Procedure**

1.  Delete a cluster and watch the logs, replacing `<cluster_name>` with the name or ID of your cluster:
    ```terminal
    $ rosa delete cluster --cluster=<cluster_name> --watch
    ```

    :::important

    You must wait for the cluster deletion to complete before you remove the IAM roles, policies, and OIDC provider. The account-wide roles are required to delete the resources created by the installation program. The cluster-specific Operator roles are required to clean-up the resources created by the OpenShift Operators. The Operators use the OIDC provider to authenticate with AWS APIs.
    
    :::

1.  After the cluster is deleted, delete the OIDC provider that the cluster Operators use to authenticate:
    ```terminal
    $ rosa delete oidc-provider -c <cluster_id> --mode auto
    ```

    :::note

    You can use the `-y` option to automatically answer yes to the prompts.
    
    :::

1.  Delete the cluster-specific Operator IAM roles:
    ```terminal
    $ rosa delete operator-roles -c <cluster_id> --mode auto
    ```
1.  Delete the account-wide roles:

    :::important

    Account-wide IAM roles and policies might be used by other {{ product_title }} clusters in the same AWS account. You must only remove the resources if they are not required by other clusters.
    
    :::

    ```terminal
    $ rosa delete account-roles --prefix <prefix> --mode auto
    ```

    Replace `<prefix>` with the prefix of the account-wide roles to delete. If you did not specify a custom prefix when you created the account-wide roles, specify the default prefix, depending on how they were created, `HCP-ROSA` or `ManagedOpenShift`.

{% if openshift_rosa_hcp %}
1.  Delete the account-wide and Operator IAM policies that you created for {{ product_title }} deployments:
{% endif %}
{% if openshift_rosa %}
1.  Delete the account-wide and Operator IAM policies that you created for {{ product_title }} deployments that use STS:
    {%- endif %}
    1.  Log in to the [AWS IAM Console](https://console.aws.amazon.com/iamv2/home#/home).
    1.  Go to **Access management** -> **Policies** and select the checkbox for one of the account-wide policies.
    1.  With the policy selected, click **Actions** -> **Delete** to open the delete policy dialog.
    1.  Enter the policy name to confirm the deletion and select **Delete** to delete the policy.
    1.  Repeat this step to delete each of the account-wide and Operator policies for the cluster.

**Verification**

*   Verify that the cluster has been deleted:
    ```terminal
    $ rosa list clusters
    ```

    The deleted cluster should not appear in the output.

**Additional resources**
{._additional-resources}

*   [About IAM resources for ROSA clusters that use STS](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html/introduction_to_rosa/rosa-sts-about-iam-resources)
*   [Deleting a ROSA cluster](https://docs.openshift.com/rosa/rosa_install_access_delete_clusters/rosa-sts-deleting-cluster.html)

{% if context == "rosa-getting-started" %}
{%- set getting_started = false -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = false -%}
{% endif %}