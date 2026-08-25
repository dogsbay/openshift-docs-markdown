{% if context == "installing-ibm-cloud-vpc" %}
{%- set ibm_cloud = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-restricted" %}
{%- set ibm_cloud = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-private" %}
{%- set ibm_cloud = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# About using a custom VPC {id="installation-custom-ibm-cloud-vpc_{{ context }}"}

You can deploy {{ product_title }} into the subnets of an existing {{ ibm_name }} Virtual Private Cloud (VPC) to avoid account limit constraints or comply with your company’s infrastructure guidelines. {._abstract}

Because the installation program cannot know what other components are in your existing subnets, it cannot choose subnet CIDRs and so forth. You must configure networking for the subnets to which you will install the cluster.

## Requirements for using your VPC {id="installation-custom-ibm-cloud-vpc-requirements_{{ context }}"}

You must correctly configure the existing VPC and its subnets before you install the cluster. The installation program does not create the following components:

*   NAT gateways
*   Subnets
*   Route tables
*   VPC network

The installation program cannot:

*   Subdivide network ranges for the cluster to use
*   Set route tables for the subnets
*   Set VPC options like DHCP

{% include "./snippets/custom-dns-server.md" %}

## VPC validation {id="installation-custom-ibm-cloud-vpc-validation_{{ context }}"}

The VPC and all of the subnets must be in an existing resource group. The cluster is deployed to the existing VPC.

As part of the installation, specify the following in the `install-config.yaml` file:

{% if not ibm_cloud %}
*   The name of the existing resource group that contains the VPC and subnets
{% endif %}
{% if ibm_cloud %}
*   The name of the existing resource group that contains the VPC and subnets (`networkResourceGroupName`)
{% endif %}
{% if not ibm_cloud %}
*   The name of the existing VPC
{% endif %}
{% if ibm_cloud %}
*   The name of the existing VPC (`vpcName`)
{% endif %}
{% if not ibm_cloud %}
*   The subnets that were created for control plane machines and compute machines
{% endif %}
{% if ibm_cloud %}
*   The subnets that were created for control plane machines and compute machines (`controlPlaneSubnets` and `computeSubnets`)
{% endif %}

{% if ibm_cloud %}

:::note

Additional installer-provisioned cluster resources are deployed to a separate resource group (`resourceGroupName`). You can specify this resource group before installing the cluster. If undefined, a new resource group is created for the cluster.

:::

{% endif %}

To ensure that the subnets that you provide are suitable, the installation program confirms the following:

*   All of the subnets that you specify exist.
*   For each availability zone in the region, you specify:
    *   One subnet for control plane machines.
    *   One subnet for compute machines.
*   The machine CIDR that you specified contains the subnets for the compute machines and control plane machines.


:::note

Subnet IDs are not supported.

:::


## Isolation between clusters {id="installation-custom-ibm-cloud-vpc-isolation_{{ context }}"}

If you deploy {{ product_title }} to an existing network, the isolation of cluster services is reduced in the following ways:

*   You can install multiple {{ product_title }} clusters in the same VPC.
*   ICMP ingress is allowed to the entire network.
*   TCP port 22 ingress (SSH) is allowed to the entire network.
*   Control plane TCP 6443 ingress (Kubernetes API) is allowed to the entire network.
*   Control plane TCP 22623 ingress (MCS) is allowed to the entire network.

{% if context == "installing-ibm-cloud-vpc" %}
{%- set ibm_cloud = false -%}
{% endif %}
{% if context == "installing-ibm-cloud-restricted" %}
{%- set ibm_cloud = false -%}
{% endif %}
{% if context == "installing-ibm-cloud-private" %}
{%- set ibm_cloud = false -%}
{% endif %}