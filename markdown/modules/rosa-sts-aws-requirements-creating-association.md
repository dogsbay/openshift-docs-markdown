{%- set _mod_docs_content_type = "PROCEDURE" %}
# Associating your AWS account with IAM roles {id="rosa-associating-account_{{ context }}"}

You can associate or link your AWS account with existing IAM roles by using the {{ rosa_cli_first }}. {._abstract}

**Prerequisites**

*   You have an AWS account.
*   You have the permissions required to install AWS account-wide roles. See the "Additional resources" of this section for more information.
*   You have installed and configured the latest AWS CLI (`aws`) and {{ rosa_cli }} on your installation host.
*   You have created the `ocm-role` and `user-role` IAM roles, but have not yet linked them to your AWS account. You can check whether your IAM roles are already linked by running the following commands:
    ```terminal
    $ rosa list ocm-role
    ```
    ```terminal
    $ rosa list user-role
    ```

    If `Yes` is displayed in the `Linked` column for both roles, you have already linked the roles to an AWS account.

**Procedure**

1.  In the ROSA CLI, link your `ocm-role` resource to your Red&#160;Hat organization by using your Amazon Resource Name (ARN):

    :::note

    You must have Red&#160;Hat Organization Administrator privileges to run the `rosa link` command. After you link the `ocm-role` resource with your AWS account, it takes effect and is visible to all users in the organization.
    
    :::

    ```terminal
    $ rosa link ocm-role --role-arn <arn>
    ```

    For example:
    ```terminal
    I: Linking OCM role
    ? Link the '<AWS ACCOUNT ID>` role with organization '<ORG ID>'? Yes
    I: Successfully linked role-arn '<AWS ACCOUNT ID>' with organization account '<ORG ID>'
    ```
1.  In the ROSA CLI, link your `user-role` resource to your Red&#160;Hat user account by using your Amazon Resource Name (ARN):
    ```terminal
    $ rosa link user-role --role-arn <arn>
    ```

    For example:
    ```terminal
    I: Linking User role
    ? Link the 'arn:aws:iam::<ARN>:role/ManagedOpenShift-User-Role-125' role with organization '<AWS ID>'? Yes
    I: Successfully linked role-arn 'arn:aws:iam::<ARN>:role/ManagedOpenShift-User-Role-125' with organization account '<AWS ID>'
    ```