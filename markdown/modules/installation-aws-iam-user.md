{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an IAM user {id="installation-aws-iam-user_{{ context }}"}

Before you install {{ product_title }}, you must create a secondary IAM administrative user and assign permissions to create the cluster. {._abstract}

Each {{ aws_first }} account contains a root user account that is based on the email address you used to create the account.


:::important

This is a highly-privileged account, and it is recommended to use it for only initial account and billing configuration, creating an initial set of users, and securing the account.

:::


As you complete the
[Creating an IAM User in Your AWS Account](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html)
procedure in the {{ aws_first }} documentation, set the following options:

**Procedure**

1.  Specify the IAM user name and select `Programmatic access`.
1.  Attach the `AdministratorAccess` policy to ensure that the account has sufficient permission to create the cluster. This policy provides the cluster with the ability to grant credentials to each {{ product_title }} component. The cluster grants the components only the credentials that they require.

    :::note

    While it is possible to create a policy that grants the all of the required AWS permissions and attach it to the user, this is not the preferred option. The cluster will not have the ability to grant additional credentials to individual components, so the same credentials are used by all components.
    
    :::

1.  Optional: Add metadata to the user by attaching tags.
1.  Confirm that the user name that you specified is granted the
`AdministratorAccess` policy.
1.  Record the access key ID and secret access key values. You must use these values when you configure your local machine to run the installation program.

    :::important

    You cannot use a temporary session token that you generated while using a multi-factor authentication device to authenticate to {{ aws_short }} when you deploy a cluster. The cluster continues to use your current {{ aws_short }} credentials to create {{ aws_short }} resources for the entire life of the cluster, so you must
    use key-based, long-term credentials.
    
    :::