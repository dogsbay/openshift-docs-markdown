{%- set _mod_docs_content_type = "PROCEDURE" %}
# Required customer procedure {id="rosa-required-procedure_{{ context }}"}

Complete these steps before deploying {{ product_title }}. {._abstract}

**Procedure**

1.  If you, as the customer, are utilizing AWS Organizations, then you must use an AWS account within your organization or [create a new one](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html#orgs_manage_accounts_create-new).
1.  To ensure that Red&#160;Hat can perform necessary actions, you must either create a service control policy (SCP) or ensure that none is applied to the AWS account.
1.  [Attach](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html) the SCP to the AWS account.
1.  Follow the ROSA procedures for setting up the environment.