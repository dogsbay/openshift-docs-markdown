{%- set _mod_docs_content_type = "PROCEDURE" %}
# Attaching the identity-based IAM policy {id="rosa-attaching-the-policy_{{ context }}"}

After you create an Identity and Access Management (IAM) policy, attach it to the relevant IAM users, groups, or roles in your AWS account. The policy prevents IP-based role assumption for these entities. {._abstract}

**Procedure**

1.  Navigate to the IAM console in the AWS Management Console.
1.  Select the default IAM `ManagedOpenShift-Support-Role` role to attach the policy.

    :::note

    You can change the default IAM `ManagedOpenShift-Support-Role` role. For more information about roles, see [Red&#160;Hat support access](https://docs.openshift.com/rosa/rosa_architecture/rosa_policy_service_definition/rosa-sre-access.html#rosa-policy-rh-access_rosa-sre-access).
    
    :::

1.  In the **Permissions** tab, select **Add Permissions** or **Create inline policy** from the **Add Permissions** drop-down list.
1.  Search for the policy you created earlier by:
    1.  Entering the policy name.
    1.  Filtering by the appropriate category.
1.  Select the policy and click **Attach policy**.

    :::important

    To prevent IP-based role assumption, keep the allowlisted IPs up-to-date. Outdated IPs can block Red&#160;Hat site reliability engineering (SRE) from accessing your account and affect your Service Level Agreement (SLA).
    
    :::