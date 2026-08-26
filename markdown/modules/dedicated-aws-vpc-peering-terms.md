{%- set _mod_docs_content_type = "REFERENCE" %}
# VPC peering terms {id="dedicated-aws-vpc-peering-terms"}

When setting up a Virtual Private Cloud (VPC) peering connection between two VPCs on two separate AWS accounts, the following terms are used:


{{ product_title }} AWS Account
:   The AWS account that contains the {{ product_title }} cluster.

{{ product_title }} Cluster VPC
:   The VPC that contains the {{ product_title }} cluster.

Customer AWS Account
:   Your non-{{ product_title }} AWS Account that you want to peer with.

Customer VPC
:   The VPC in your AWS Account that you want to peer with.

Customer VPC Region
:   The region where the customer’s VPC resides.


:::note

As of July 2018, AWS supports inter-region VPC peering between all commercial regions [excluding China](https://aws.amazon.com/vpc/faqs/#Peering_Connections).

:::