{% if context == "rosa-hcp-deleting-cluster" %}
{%- set hcp = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Unlinking and deleting the {{ cluster_manager }} and user IAM roles {id="rosa-unlinking-and-deleting-ocm-and-user-iam-roles_{{ context }}"}

When you install a {{ product_title }} cluster by using {{ cluster_manager_first }}, you also create {{ cluster_manager }} and user Identity and Access Management (IAM) roles linked to your Red&#160;Hat organization. After deleting your cluster, you can unlink and delete the roles by using the {{ rosa_cli_first }}. {._abstract}


:::important

The {{ cluster_manager }} and user IAM roles are required to install and manage other {{ product_title }} clusters in the same AWS account using {{ cluster_manager }}. Only remove the roles if you no longer need to use the {{ cluster_manager }} to install {{ product_title }} clusters.

:::


**Prerequisites**

*   You created {{ cluster_manager }} and user IAM roles and linked them to your Red&#160;Hat organization.
*   You have installed and configured the latest ROSA CLI (`rosa`) on your installation host.
*   You have organization administrator privileges in your Red&#160;Hat organization.

**Procedure**

1.  Unlink the {{ cluster_manager }} IAM role from your Red&#160;Hat organization and delete the role:
    1.  List the {{ cluster_manager }} IAM roles in your AWS account:
        ```terminal
        $ rosa list ocm-roles
        ```
{% if not hcp %}
        ```terminal title="Example output"
        I: Fetching ocm roles
        ROLE NAME                           ROLE ARN                                                                      LINKED  ADMIN
        ManagedOpenShift-OCM-Role-<red_hat_organization_external_id>  arn:aws:iam::<aws_account_id>:role/ManagedOpenShift-OCM-Role-<red_hat_organization_external_id>  Yes     Yes
        ```
{% endif %}
{% if hcp %}
        ```terminal title="Example output"
        I: Fetching ocm roles
        ROLE NAME                                                     ROLE ARN                                                                                         LINKED  ADMIN  AWS Managed
        ManagedOpenShift-OCM-Role-<red_hat_organization_external_id>  arn:aws:iam::<aws_account_id>:role/ManagedOpenShift-OCM-Role-<red_hat_organization_external_id>  Yes      Yes     Yes
        ```
{% endif %}
    1.  If your {{ cluster_manager }} IAM role is listed as linked, unlink it from your Red&#160;Hat organization by running the following command:
        ```terminal
        $ rosa unlink ocm-role --role-arn <arn>
        ```

        Replace `<arn>` with the Amazon Resource Name (ARN) for your {{ cluster_manager }} IAM role. The ARN is specified in the output of the preceding command. In the preceding example, the ARN is in the format `arn:aws:iam::<aws_account_id>:role/ManagedOpenShift-OCM-Role-<red_hat_organization_external_id>`.
        ```terminal title="Example output"
        I: Unlinking OCM role
        ? Unlink the 'arn:aws:iam::<aws_account_id>:role/ManagedOpenShift-OCM-Role-<red_hat_organization_external_id>' role from organization '<red_hat_organization_id>'? Yes
        I: Successfully unlinked role-arn 'arn:aws:iam::<aws_account_id>:role/ManagedOpenShift-OCM-Role-<red_hat_organization_external_id>' from organization account '<red_hat_organization_id>'
        ```
    1.  Delete the {{ cluster_manager }} IAM role and policies:
        ```terminal
        $ rosa delete ocm-role --role-arn <arn>
        ```
        ```terminal title="Example output"
        I: Deleting OCM role
        ? OCM Role ARN: arn:aws:iam::<aws_account_id>:role/ManagedOpenShift-OCM-Role-<red_hat_organization_external_id>
        ? Delete 'arn:aws:iam::<aws_account_id>:role/ManagedOpenShift-OCM-Role-<red_hat_organization_external_id>' ocm role? Yes
        ? OCM role deletion mode: auto
        I: Successfully deleted the OCM role
        ```

        The `OCM role deletion mode` field specifies the deletion mode. You can use `auto` mode to automatically delete the {{ cluster_manager }} IAM role and policies. In `manual` mode, the ROSA CLI generates the `aws` commands needed to delete the role and policies. `manual` mode enables you to review the details before running the `aws` commands manually.
1.  Unlink the user IAM role from your Red&#160;Hat organization and delete the role:
    1.  List the user IAM roles in your AWS account:
        ```terminal
        $ rosa list user-roles
        ```
        ```terminal title="Example output"
        I: Fetching user roles
        ROLE NAME                                  ROLE ARN                                                                  LINKED
        ManagedOpenShift-User-<ocm_user_name>-Role  arn:aws:iam::<aws_account_id>:role/ManagedOpenShift-User-<ocm_user_name>-Role  Yes
        ```
    1.  If your user IAM role is listed as linked in the output of the preceding command, unlink the role from your Red&#160;Hat organization:
        ```terminal
        $ rosa unlink user-role --role-arn <arn>
        ```

        Replace `<arn>` with the Amazon Resource Name (ARN) for your user IAM role. The ARN is specified in the output of the preceding command. In the preceding example, the ARN is in the format `arn:aws:iam::<aws_account_id>:role/ManagedOpenShift-User-<ocm_user_name>-Role`.
        ```terminal title="Example output"
        I: Unlinking user role
        ? Unlink the 'arn:aws:iam::<aws_account_id>:role/ManagedOpenShift-User-<ocm_user_name>-Role' role from the current account '<ocm_user_account_id>'? Yes
        I: Successfully unlinked role ARN 'arn:aws:iam::<aws_account_id>:role/ManagedOpenShift-User-<ocm_user_name>-Role' from account '<ocm_user_account_id>'
        ```
    1.  Delete the user IAM role:
        ```terminal
        $ rosa delete user-role --role-arn <arn>
        ```
        ```terminal title="Example output"
        I: Deleting user role
        ? User Role ARN: arn:aws:iam::<aws_account_id>:role/ManagedOpenShift-User-<ocm_user_name>-Role
        ? Delete the 'arn:aws:iam::<aws_account_id>:role/ManagedOpenShift-User-<ocm_user_name>-Role' role from the AWS account? Yes
        ? User role deletion mode: auto
        I: Successfully deleted the user role
        ```

        The `User role deletion mode` field specifies the deletion mode. You can use `auto` mode to automatically delete the user IAM role. In `manual` mode, the ROSA CLI generates the `aws` command needed to delete the role. `manual` mode enables you to review the details before running the `aws` command manually.