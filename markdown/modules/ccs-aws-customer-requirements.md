{%- set _mod_docs_content_type = "CONCEPT" %}
# Requirements for Customer Cloud Subscription on AWS {id="ccs-aws-customer-requirements_{{ context }}"}

{{ product_title }} clusters that use a Customer Cloud Subscription (CCS) model on Amazon Web Services (AWS) must meet several prerequisites before they can be deployed. {._abstract}

## Account {id="ccs-requirements-account_{{ context }}"}

*   You must ensure that AWS service quotas are sufficient to support {{ product_title }} provisioned within your AWS account. For more information, see "AWS service quotas" in the __Additional resources__.
*   Your AWS account should be in your AWS Organization with the applicable service control policy (SCP) applied.

    :::note

    It is not a requirement that your account is within an AWS Organization or for the SCP to be applied, however Red&#160;Hat must be able to perform all the actions listed in the SCP without restriction.
    
    :::

*   Your AWS account must not be transferable to Red&#160;Hat.
*   Do not impose AWS usage restrictions on Red&#160;Hat activities. Imposing restrictions severely hinders Red&#160;Hat’s ability to respond to incidents.
*   Red&#160;Hat deploys monitoring into AWS to alert Red&#160;Hat when a highly privileged account, such as a root account, logs into your AWS account.
*   You can deploy native AWS services within the same AWS account.

    :::note

    You are encouraged, but not mandated, to deploy resources in a Virtual Private Cloud (VPC) separate from the VPC hosting {{ product_title }} and other Red&#160;Hat supported services.
    
    :::


## Access requirements {id="ccs-requirements-access_{{ context }}"}

*   To appropriately manage the {{ product_title }} service, Red&#160;Hat must have the `AdministratorAccess` policy applied to the administrator role at all times.

    :::note

    This policy only provides Red&#160;Hat with permissions and capabilities to change resources in your AWS account.
    
    :::

*   Red&#160;Hat must have AWS console access to your AWS account. This access is protected and managed by Red&#160;Hat.
*   You must not use the AWS account to elevate your permissions within the {{ product_title }} cluster.
*   Actions available in {{ cluster_manager_url }} must not be directly performed in your AWS account.

## Support requirements {id="ccs-requirements-support_{{ context }}"}

*   Red&#160;Hat recommends that you have at least the Business Support plan from AWS. For more information, see the __Additional resources__.
*   Red&#160;Hat has authority to request AWS support on your behalf.
*   Red&#160;Hat has authority to request AWS resource limit increases on your account.
*   Red&#160;Hat manages the restrictions, limitations, expectations, and defaults for all {{ product_title }} clusters in the same manner, unless otherwise specified in this requirements section.

## Security requirements {id="ccs-requirements-security_{{ context }}"}

*   Your IAM credentials must be unique to your AWS account and must not be stored anywhere in your AWS account.
*   Volume snapshots will remain within your AWS account and a region you specified.
*   Red&#160;Hat must have ingress access to EC2 hosts and the API server through allowlisted Red&#160;Hat machines.
*   Red&#160;Hat must have egress allowed to forward system and audit logs to a Red&#160;Hat managed central logging stack.

**Additional resources**
{._additional-resources}

*   [AWS service quotas](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html)
*   [Business Support plan](https://aws.amazon.com/premiumsupport/plans/)