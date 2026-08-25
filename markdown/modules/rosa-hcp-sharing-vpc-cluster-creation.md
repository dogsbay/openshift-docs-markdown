{%- set _mod_docs_content_type = "PROCEDURE" %}
# Step Four - Cluster Creator: Creating your cluster in a shared VPC {id="rosa-hcp-sharing-vpc-cluster-creation_{{ context }}"}

You can create a {{ product_title }} cluster in a shared VPC by using the {{ rosa_cli_first }}. {._abstract}


:::note

Installing a cluster in a shared VPC is supported only for OpenShift 4.17.9 and later.

:::


![Step four of the shared VPC persona workflow showing Cluster Creator actions.](/_assets/images/372_OpenShift_on_AWS_persona_worflows_0923_4.png)

**Prerequisites**

*   You have the hosted zone IDs from the **VPC Owner**.
*   You have the AWS region from the **VPC Owner**.
*   You have the subnet IDs from the **VPC Owner**.
*   You have the `Route 53 role` ARN from the **VPC Owner**.
*   You have the `VPC endpoint role` ARN from the **VPC Owner**.

**Procedure**

*   In a terminal, enter the following command to create the shared VPC:
    ```terminal
    $ rosa create cluster --cluster-name <cluster_name> --sts --operator-roles-prefix <prefix> --oidc-config-id <oidc_config_id> --region us-east-1 --subnet-ids <subnet_ids> --hcp-internal-communication-hosted-zone-id <local_hosted_zone_ID> --ingress-private-hosted-zone-id <private_hosted_zone_ID> --route53-role-arn <route_53_role_arn> vpc-endpoint-role-arn <vpc_endpoint_role_arn> --base-domain <dns-domain> --additional-allowed-principals <route53-role-arn>,<vpc-endpoint-role-arn> --hosted-cp
    ```