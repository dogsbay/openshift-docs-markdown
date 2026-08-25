{%- set _mod_docs_content_type = "PROCEDURE" %}
# Resolving issues with ocm-roles and user-role IAM resources {id="rosa-sts-ocm-roles-and-permissions-troubleshooting_{{ context }}"}

You might receive an error when trying to create a cluster by using the {{ rosa_cli_first }}. This error means that the `user-role` IAM role is not linked to your AWS account. The most likely cause of this error is that another user in your Red&#160;Hat organization created the `ocm-role` IAM role. Your `user-role` IAM role needs to be created. {._abstract}


:::note

After any user sets up an `ocm-role` IAM resource linked to a Red&#160;Hat account, any subsequent users wishing to create a cluster in that Red&#160;Hat organization must have a `user-role` IAM role to provision a cluster.

:::


**Procedure**

*   Assess the status of your `ocm-role` and `user-role` IAM roles with the following commands:
    ```terminal
    $ rosa list ocm-role
    ```
    ```terminal title="Example output"
    I: Fetching ocm roles
    ROLE NAME                           ROLE ARN                                          LINKED  ADMIN
    ManagedOpenShift-OCM-Role-1158  arn:aws:iam::2066:role/ManagedOpenShift-OCM-Role-1158   No      No
    ```
    ```terminal
    $ rosa list user-role
    ```
    ```terminal title="Example output"
    I: Fetching user roles
    ROLE NAME                                   ROLE ARN                                        LINKED
    ManagedOpenShift-User.osdocs-Role  arn:aws:iam::2066:role/ManagedOpenShift-User.osdocs-Role  Yes
    ```

    With the results of these commands, you can create and link the missing IAM resources.