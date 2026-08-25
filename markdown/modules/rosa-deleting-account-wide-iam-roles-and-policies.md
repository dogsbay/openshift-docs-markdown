{% if context == "rosa-hcp-deleting-cluster" %}
{%- set hcp = true -%}
{% endif %}

{% if context == "rosa-sts-deleting-cluster" %}
{%- set sts = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting the account-wide IAM roles and policies {id="rosa-deleting-account-wide-iam-roles-and-policies_{{ context }}"}

You can delete the account-wide IAM roles and policies that you created for {{ product_title }} deployments, along with the account-wide Operator policies. You can delete the account-wide IAM roles and policies only after deleting all {{ product_title }} clusters that depend on them. {._abstract}


:::important

The account-wide IAM roles and policies might be used by other {{ product_title }} clusters in the same AWS account. Only remove the roles if they are not required by other clusters.

:::


**Prerequisites**

*   You have account-wide IAM roles that you want to delete.
*   You have installed and configured the latest ROSA CLI (`rosa`) on your installation host.

**Procedure**

1.  Delete the account-wide roles:
    1.  List the account-wide roles in your AWS account by using the ROSA CLI (`rosa`):
        ```terminal
        $ rosa list account-roles
        ```

        **Example output**

{%- if sts %}
        ```terminal
        I: Fetching account roles
        ROLE NAME                           ROLE TYPE      ROLE ARN                                                           OPENSHIFT VERSION
        ManagedOpenShift-ControlPlane-Role  Control plane  arn:aws:iam::<aws_account_id>:role/ManagedOpenShift-ControlPlane-Role  4.22
        ManagedOpenShift-Installer-Role     Installer      arn:aws:iam::<aws_account_id>:role/ManagedOpenShift-Installer-Role     4.22
        ManagedOpenShift-Support-Role       Support        arn:aws:iam::<aws_account_id>:role/ManagedOpenShift-Support-Role       4.22
        ManagedOpenShift-Worker-Role        Worker         arn:aws:iam::<aws_account_id>:role/ManagedOpenShift-Worker-Role        4.22
        ```
{%- endif %}
{%- if hcp %}
        ```terminal
        I: Fetching account roles
        ROLE NAME                                 ROLE TYPE      ROLE ARN                                                                 OPENSHIFT VERSION  AWS Managed
        ManagedOpenShift-HCP-ROSA-Installer-Role  Installer      arn:aws:iam::<aws_account_id>:role/ManagedOpenShift-HCP-ROSA-Installer-Role  4.22               Yes
        ManagedOpenShift-HCP-ROSA-Support-Role    Support        arn:aws:iam::<aws_account_id>:role/ManagedOpenShift-HCP-ROSA-Support-Role    4.22               Yes
        ManagedOpenShift-HCP-ROSA-Worker-Role     Worker         arn:aws:iam::<aws_account_id>:role/ManagedOpenShift-HCP-ROSA-Worker-Role     4.22               Yes
        ```
{%- endif %}
    1.  Delete the account-wide roles by running one of the following commands:
        *   For clusters without a shared Virtual Private Cloud (VPC):
            ```terminal
            $ rosa delete account-roles --prefix <prefix> --mode auto
            ```

            You must include the `--<prefix>` argument. Replace `<prefix>` with the prefix of the account-wide roles to delete. If you did not specify a custom prefix when you created the account-wide roles, specify the default prefix, `ManagedOpenShift`.
        *   For clusters with a shared VPC:
            ```terminal
            $ rosa delete account-roles --prefix <prefix> --delete-hosted-shared-vpc-policies --mode auto
            ```

            You must include the `--<prefix>` argument. Replace `<prefix>` with the prefix of the account-wide roles to delete. If you did not specify a custom prefix when you created the account-wide roles, specify the default prefix, `ManagedOpenShift`.

            :::important

            The account-wide IAM roles might be used by other {{ product_title }} clusters in the same AWS account. Only remove the roles if they are not required by other clusters.
            
            :::

{% if hcp %}
            ```terminal title="Example output"
            W: There are no classic account roles to be deleted
            I: Deleting hosted CP account roles
            ? Delete the account role 'delete-rosa-HCP-ROSA-Installer-Role'? Yes
            I: Deleting account role 'delete-rosa-HCP-ROSA-Installer-Role'
            ? Delete the account role 'delete-rosa-HCP-ROSA-Support-Role'? Yes
            I: Deleting account role 'delete-rosa-HCP-ROSA-Support-Role'
            ? Delete the account role 'delete-rosa-HCP-ROSA-Worker-Role'? Yes
            I: Deleting account role 'delete-rosa-HCP-ROSA-Worker-Role'
            I: Successfully deleted the hosted CP account roles
            ```
{% endif %}
1.  Delete the account-wide in-line and Operator policies:
    1.  Under the **Policies** page in the [AWS IAM Console](https://console.aws.amazon.com/iamv2/home#/policies), filter the list of policies by the prefix that you specified when you created the account-wide roles and policies.

        :::note

        If you did not specify a custom prefix when you created the account-wide roles, search for the default prefix, `ManagedOpenShift`.
        
        :::

    1.  Delete the account-wide policies and Operator policies by using the [AWS IAM Console](https://console.aws.amazon.com/iamv2/home#/policies). For more information about deleting IAM policies by using the AWS IAM Console, see [Deleting IAM policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-delete.html) in the AWS documentation.

        :::important

        The account-wide and Operator IAM policies might be used by other {{ product_title }} clusters in the same AWS account. Only remove the roles if they are not required by other clusters.
        
        :::