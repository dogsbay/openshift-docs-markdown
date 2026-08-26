{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure AWS Virtual Private Cloud peering {id="aws-vpc_{{ context }}"}

Configure an {{ AWS }} Virtual Private Cloud (VPC) peering connection to route traffic between two VPCs using private IPv4 or IPv6 addresses. {._abstract}


:::important

Before you attempt to uninstall a cluster, you must remove any VPC peering connections from the cluster’s VPC. Failure to do so might result in a cluster not completing the uninstall process.

:::



:::note

AWS supports inter-region VPC peering between all commercial regions excluding China. For more information, see [AWS VPC FAQs](https://aws.amazon.com/vpc/faqs/#Peering_Connections).

:::


**Prerequisites**

*   Gather the following information about the Customer VPC that is required to initiate the peering request:
    *   Customer AWS account number
    *   Customer VPC ID
    *   Customer VPC Region
    *   Customer VPC Classless Inter-Domain Routing (CIDR)
*   The CIDR block of the {{ product_title }} Cluster VPC does not overlap or match the Customer VPC CIDR block. See the Amazon VPC [Unsupported VPC peering configurations](https://docs.aws.amazon.com/vpc/latest/peering/invalid-peering-configurations.html) documentation for details on invalid configurations.

**Procedure**

1.  [Initiate the VPC peering request](https://docs.aws.amazon.com/vpc/latest/peering/create-vpc-peering-connection.html#create-vpc-peering-connection-local).
1.  [Accept the VPC peering request](https://docs.aws.amazon.com/vpc/latest/peering/create-vpc-peering-connection.html#accept-vpc-peering-connection).
1.  [Update your Route tables for the VPC peering connection](https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-routing.html).