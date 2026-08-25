{%- set _mod_docs_content_type = "REFERENCE" %}
# Customer Requirements {id="rosa-customer-requirements_{{ context }}"}

You must complete several prerequisites before deploying a {{ product_title }} cluster. {._abstract}


:::note

In order to create the cluster, you must be logged in as an IAM user and not an assumed role or STS user.

:::


## Account {id="rosa-account_{{ context }}"}
*   The customer ensures that the [AWS limits](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) are sufficient to support {{ product_title }} provisioned within the customer’s AWS account.
*   The customer’s AWS account should be in the customer’s AWS Organizations with the applicable service control policy (SCP) applied.

    :::note

    It is not a requirement that the customer’s account be within the AWS Organizations or for the SCP to be applied, however Red&#160;Hat must be able to perform all the actions listed in the SCP without restriction.
    
    :::

*   The customer’s AWS account should not be transferable to Red&#160;Hat.
*   The customer may not impose AWS usage restrictions on Red&#160;Hat activities. Imposing restrictions will severely hinder Red&#160;Hat’s ability to respond to incidents.
*   The customer may deploy native AWS services within the same AWS account.

    :::note

    Customers are encouraged, but not mandated, to deploy resources in a Virtual Private Cloud (VPC) separate from the VPC hosting {{ product_title }} and other Red&#160;Hat supported services.
    
    :::


## Access requirements {id="rosa-access-requirements_{{ context }}"}
*   To appropriately manage the {{ product_title }} service, Red&#160;Hat must have the `AdministratorAccess` policy applied to the administrator role at all times. This requirement does **not** apply if you are using AWS Security Token Service (STS).

    :::note

    This policy only provides Red&#160;Hat with permissions and capabilities to change resources in the customer-provided AWS account.
    
    :::

*   Red&#160;Hat must have AWS console access to the customer-provided AWS account. This access is protected and managed by Red&#160;Hat.
*   The customer must not utilize the AWS account to elevate their permissions within the {{ product_title }} cluster.
*   Actions available in the {{ product_title }} (ROSA) CLI, `rosa`, or {{ cluster_manager_url }} console must not be directly performed in the customer’s AWS account.

## Support requirements {id="rosa-support-requirements_{{ context }}"}
*   Red&#160;Hat recommends that the customer have at least [Business Support](https://aws.amazon.com/premiumsupport/plans/) from AWS.
*   Red&#160;Hat has authority from the customer to request AWS support on their behalf.
*   Red&#160;Hat has authority from the customer to request AWS resource limit increases on the customer’s account.
*   Red&#160;Hat manages the restrictions, limitations, expectations, and defaults for all {{ product_title }} clusters in the same manner, unless otherwise specified in this requirements section.

## Security requirements {id="rosa-security-requirements_{{ context }}"}
*   Volume snapshots will remain within the customer’s AWS account and customer-specified region.
*   Red&#160;Hat must have ingress access to EC2 hosts and the API server from allow-listed IP addresses.
*   Red&#160;Hat must have egress allowed to forward system and audit logs to a Red&#160;Hat managed central logging stack.