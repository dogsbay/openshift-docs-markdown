{%- set _mod_docs_content_type = "CONCEPT" %}
# Customer requirements {id="ccs-aws-customer-requirements_{{ context }}"}

{{ product_title }} clusters using a Customer Cloud Subscription (CCS) model on Amazon Web Services (AWS) must meet several prerequisites before they can be deployed. {._abstract}

## Account {id="ccs-requirements-account_{{ context }}"}

*   The customer ensures that [AWS limits](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) are sufficient to support {{ product_title }} provisioned within the customer-provided AWS account.
*   The customer-provided AWS account should be in the customer’s AWS Organization with the applicable service control policy (SCP) applied.

    :::note

    It is not a requirement that the customer-provided account be within an AWS Organization or for the SCP to be applied, however Red Hat must be able to perform all the actions listed in the SCP without restriction.
    
    :::

*   The customer-provided AWS account must not be transferable to Red Hat.
*   The customer may not impose AWS usage restrictions on Red Hat activities. Imposing restrictions severely hinders Red Hat’s ability to respond to incidents.
*   Red Hat deploys monitoring into AWS to alert Red Hat when a highly privileged account, such as a root account, logs into the customer-provided AWS account.
*   The customer can deploy native AWS services within the same customer-provided AWS account.

    :::note

    Customers are encouraged, but not mandated, to deploy resources in a Virtual Private Cloud (VPC) separate from the VPC hosting {{ product_title }} and other Red Hat supported services.
    
    :::


## Access requirements {id="ccs-requirements-access_{{ context }}"}

*   To appropriately manage the {{ product_title }} service, Red Hat must have the `AdministratorAccess` policy applied to the administrator role at all times.

    :::note

    This policy only provides Red Hat with permissions and capabilities to change resources in the customer-provided AWS account.
    
    :::

*   Red Hat must have AWS console access to the customer-provided AWS account. This access is protected and managed by Red Hat.
*   The customer must not utilize the AWS account to elevate their permissions within the {{ product_title }} cluster.
*   Actions available in {{ cluster_manager_url }} must not be directly performed in the customer-provided AWS account.

## Support requirements {id="ccs-requirements-support_{{ context }}"}

*   Red Hat recommends that the customer have at least [Business Support](https://aws.amazon.com/premiumsupport/plans/) from AWS.
*   Red Hat has authority from the customer to request AWS support on their behalf.
*   Red Hat has authority from the customer to request AWS resource limit increases on the customer-provided account.
*   Red Hat manages the restrictions, limitations, expectations, and defaults for all {{ product_title }} clusters in the same manner, unless otherwise specified in this requirements section.

## Security requirements {id="ccs-requirements-security_{{ context }}"}

*   The customer-provided IAM credentials must be unique to the customer-provided AWS account and must not be stored anywhere in the customer-provided AWS account.
*   Volume snapshots will remain within the customer-provided AWS account and customer-specified region.
*   Red Hat must have ingress access to EC2 hosts and the API server through white-listed Red Hat machines.
*   Red Hat must have egress allowed to forward system and audit logs to a Red Hat managed central logging stack.