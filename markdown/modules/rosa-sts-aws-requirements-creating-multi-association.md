{%- set _mod_docs_content_type = "PROCEDURE" %}
# Associating multiple AWS accounts with your Red&#160;Hat organization {id="rosa-associating-multiple-account_{{ context }}"}

You can associate multiple AWS accounts with your Red&#160;Hat organization. Associating multiple accounts lets you create {{ product_title }} clusters on any of the associated AWS accounts from your Red&#160;Hat organization. {._abstract}

With this capability, you can create clusters on different AWS profiles according to characteristics that make sense for your business, for example, by using one AWS profile for each region to create region-bound environments.

**Prerequisites**

*   You have an AWS account.
*   You are using {{ cluster_manager_url }} to create clusters.
*   You have the permissions required to install AWS account-wide roles.
*   You have installed and configured the latest AWS CLI (`aws`) and {{ rosa_cli_first }} on your installation host.
*   You have created the `ocm-role` and `user-role` IAM roles for {{ product_title }}.

**Procedure**

*   To specify an AWS account profile when creating an {{ cluster_manager }} role:
    ```terminal
    $ rosa create --profile <aws_profile> ocm-role
    ```
*   To specify an AWS account profile when creating a user role:
    ```terminal
    $ rosa create --profile <aws_profile> user-role
    ```
*   To specify an AWS account profile when creating the account roles:
    ```terminal
    $ rosa create --profile <aws_profile> account-roles
    ```

    :::note

    If you do not specify a profile, the default AWS profile and its associated AWS region are used.
    
    :::