{%- set _mod_docs_content_type = "CONCEPT" %}
# AWS account {id="mos-checklist-aws-account_{{ context }}"}

You must have an AWS account with certain permissions before creating your cluster. {._abstract}

*   Create an AWS account if you do not already have one.
*   Gather the credentials required to log in to your AWS account.
*   Ensure that your AWS account has sufficient permissions to use the {{ rosa_cli }}.
*   Enable {{ product_title }} for your AWS account on the [AWS console](https://console.aws.amazon.com/rosa/).
    *   If your account is the management account for your organization (used for AWS billing purposes), you must have `aws-marketplace:Subscribe` permissions available on your account. See _Service control policy (SCP) prerequisites_ for more information, or see the AWS documentation for troubleshooting: [AWS Organizations service control policy denies required AWS Marketplace permissions](https://docs.aws.amazon.com/rosa/latest/userguide/security-iam-troubleshoot.html#error-aws-orgs-scp-denies-permissions).
*   Ensure you have not enabled restrictive tag policies. For more information, see [Tag policies](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html) in the AWS documentation.