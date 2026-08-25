{%- set _mod_docs_content_type = "PROCEDURE" %}
# Required customer procedure {id="ccs-aws-customer-procedure_{{ context }}"}

The Customer Cloud Subscription (CCS) model allows Red Hat to deploy and manage {{ product_title }} into a customer’s Amazon Web Services (AWS) account. Red Hat requires several prerequisites in order to provide these services. {._abstract}

**Procedure**

1.  If the customer is using AWS Organizations, you must either use an AWS account within your organization or [create a new one](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html#orgs_manage_accounts_create-new).
1.  To ensure that Red Hat can perform necessary actions, you must either create a service control policy (SCP) or ensure that none is applied to the AWS account.
1.  [Attach](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html) the SCP to the AWS account.
1.  Within the AWS account, you must [create](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html) an `osdCcsAdmin` IAM user with the following requirements:
    *   This user needs at least **Programmatic access** enabled.
    *   This user must have the `AdministratorAccess` policy attached to it.
1.  Provide the IAM user credentials to Red Hat.
    *   You must provide the **access key ID** and **secret access key** in {{ cluster_manager_url }}.