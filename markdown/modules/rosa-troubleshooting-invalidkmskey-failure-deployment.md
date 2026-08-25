{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting cluster creation with an invalidKMSKey error {id="rosa-troubleshooting-invalidkmskey-failure-deployment_{{ context }}"}

If a cluster creation action fails, you might receive the following error messages. {._abstract}

The following example shows the install logs output:

```terminal
Client.InvalidKMSKey.InvalidState: The KMS key provided is in an incorrect state
```

The following example shows the {{ cluster_manager }} output:

```terminal
Provisioning Error Code:    OCM3055
Provisioning Error Message: Invalid key.
```

This error indicates that the KMS key is invalid or the key is in an invalid state.

**Procedure**

1.  Start by checking if EBS encryption is enabled in the EC2 settings. You can check the status by following the steps in [AWS Check EBS Encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default).
1.  Check to see if the AWS specified key is enabled in there and not an `invalidKMSKey` that does not exist. This could happen when an old key was specified and deleted but EBS did not fall back to another key.
1.  If the previous two steps failed to fix the issue, disable EBS encryption entirely. If this is still a requirement you cannot disable, you can specify a customer-managed-key during ROSA install following the steps in [Creating a ROSA cluster in STS mode with custom KMS key](https://cloud.redhat.com/experts/rosa/kms/?extIdCarryOver=true&sc_cid=701f2000001Css5AAC).