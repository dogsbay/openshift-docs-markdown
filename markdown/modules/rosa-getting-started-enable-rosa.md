{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verify {{ product_title }} prerequisites {id="rosa-getting-started-verifying-rosa-prerequisites_{{ context }}"}

You can enable {{ product_title }} in your AWS account by verifying prerequisites in the AWS Management Console. {._abstract}

**Prerequisites**

*   You have a Red&#160;Hat account.
*   You have an AWS account.

    :::note

    Consider using a dedicated AWS account to run production clusters. If you are using AWS Organizations, you can use an AWS account within your organization or [create a new one](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html#orgs_manage_accounts_create-new).
    
    :::


**Procedure**

1.  Sign in to the [AWS Management Console](https://console.aws.amazon.com/rosa/home).
1.  Navigate to the [ROSA service](https://console.aws.amazon.com/rosa/home).
1.  Click **Get started**.

    The **Verify ROSA prerequisites** page opens.
1.  Under **ROSA enablement**, ensure that a checkmark and `You previously enabled ROSA` are displayed.

    If not, follow these steps:
    1.  Select the checkbox beside `I agree to share my contact information with Red&#160;Hat`.
    1.  Click **Enable ROSA**.

        After a short wait, a checkmark and `You enabled ROSA` message are displayed.
1.  Under **Service Quotas**, ensure that a checkmark and `Your quotas meet the requirements for ROSA` are displayed.

    If you see `Your quotas don’t meet the minimum requirements`, take note of the quota type and the minimum listed in the error message. See the Amazon documentation on [requesting a quota increase](https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html) for guidance. It might take several hours for Amazon to approve your quota request.
1.  Under **ELB service-linked role**, ensure that a checkmark and `AWSServiceRoleForElasticLoadBalancing already exists` are displayed.
1.  Click **Continue to Red&#160;Hat**.

    The **Get started with {{ product_title }} (ROSA)** page opens in a new tab. You have already completed Step 1 on this page, and can now continue with Step 2.

**Verification**

*   Go to the {{ cluster_manager_url }} to verify that your AWS account is associated with your Red&#160;Hat organization.

**Additional resources**
{._additional-resources}

*   [Troubleshoot Red&#160;Hat OpenShift Service on AWS enablement errors](https://docs.aws.amazon.com/ROSA/latest/userguide/troubleshoot-rosa-enablement.html#error-aws-orgs-scp-denies-permissions)