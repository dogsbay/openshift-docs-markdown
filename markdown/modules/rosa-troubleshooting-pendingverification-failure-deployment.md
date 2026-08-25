{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting cluster creation with a PendingVerification error {id="rosa-troubleshooting-pendingverification-failure-deployment_{{ context }}"}

If a cluster creation action fails, you might receive the following error message. {._abstract}

The following example shows the output:

```terminal
Provisioning Error Code:    OCM3021
Provisioning Error Message: Account pending verification for region. Verify the account and try again.
```

When creating a cluster, the {{ product_title }} service creates small instances in all supported regions. This check ensures the AWS account being used can deploy to each supported region.

For AWS accounts that are not using all supported regions, AWS might send one or more emails confirming that "Your Request For Accessing AWS Resources Has Been Validated". Typically the sender of this email is aws-verification@amazon.com. This is expected behavior as the {{ product_title }} service is validating your AWS account configuration.

Normally, this validation gets completed within 15 minutes, but in some cases it can take up to 4 hours for AWS to validate. To attempt successful provisioning, Red&#160;Hat has configured our installer to reattempt installation if this issue occurs, but the installation can still fail if the validation continues to time out or if the validation itself fails.

**Procedure**

*   Reinstall the cluster or select a different AWS region or different availability zone(s).