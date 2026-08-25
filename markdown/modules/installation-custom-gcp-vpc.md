{%- set _mod_docs_content_type = "CONCEPT" %}
# About using a custom VPC {id="installation-custom-gcp-vpc_{{ context }}"}

In {{ product_title }} {{ product_version }}, you can deploy a cluster into existing subnets in an existing Virtual Private Cloud (VPC) in {{ gcp_first }}. By deploying {{ product_title }} into an existing {{ gcp_short }} VPC, you might be able to avoid limit constraints in new accounts or more easily abide by the operational constraints that your company’s guidelines set. If you cannot obtain the infrastructure creation permissions that are required to create the VPC yourself, use this installation option. You must configure networking for the subnets.

## Requirements for using your VPC {id="installation-custom-gcp-vpc-requirements_{{ context }}"}

The union of the VPC CIDR block and the machine network CIDR must be non-empty. The subnets must be within the machine network.

The installation program does not create the following components:

*   NAT gateways
*   Subnets
*   Route tables
*   VPC network

{% include "./snippets/custom-dns-server.md" %}

## VPC validation {id="installation-custom-gcp-vpc-validation_{{ context }}"}

To ensure that the subnets that you provide are suitable, the installation program confirms the following data:

*   All the subnets that you specify exist.
*   You provide one subnet for control-plane machines and one subnet for compute machines.
*   The subnet’s CIDRs belong to the machine CIDR that you specified.

## Division of permissions {id="installation-about-custom-gcp-permissions_{{ context }}"}

Some individuals can create different resource in your clouds than others. For example, you might be able to create application-specific items, like instances, buckets, and load balancers, but not networking-related components such as VPCs, subnets, or ingress rules.

## Isolation between clusters {id="installation-custom-gcp-vpc-isolation_{{ context }}"}

If you deploy {{ product_title }} to an existing network, the isolation of cluster services is reduced in the following ways:

*   You can install multiple {{ product_title }} clusters in the same VPC.
*   ICMP ingress is allowed to the entire network.
*   TCP 22 ingress (SSH) is allowed to the entire network.
*   Control plane TCP 6443 ingress (Kubernetes API) is allowed to the entire network.
*   Control plane TCP 22623 ingress (MCS) is allowed to the entire network.