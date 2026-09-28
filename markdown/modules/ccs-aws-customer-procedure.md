{%- set _mod_docs_content_type = "PROCEDURE" %}
# Prepare your AWS account for Customer Cloud Subscription {id="ccs-aws-customer-procedure_{{ context }}"}

Complete several prerequisites that Red&#160;Hat requires to deploy and manage {{ product_title }} into your Amazon Web Services (AWS) account using the Customer Cloud Subscription (CCS) model. {._abstract}

**Procedure**

1.  If you use AWS Organizations, you must either use an AWS account within your organization or [create a new one](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html#orgs_manage_accounts_create-new).
1.  To ensure that Red Hat can perform necessary actions, you must either create a service control policy (SCP) or ensure that none is applied to the AWS account.
1.  [Attach](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html) the SCP to the AWS account.
1.  Within the AWS account, you must [create](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html) an `osdCcsAdmin` IAM user with the following requirements:
    *   This user needs at least **Programmatic access** enabled.
    *   This user must have the `AdministratorAccess` policy attached to it.
1.  Provide the IAM user credentials to Red&#160;Hat.
    *   You must provide the **access key ID** and **secret access key** in {{ cluster_manager_url }}.