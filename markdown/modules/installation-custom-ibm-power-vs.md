{% if context == "installing-ibm-power-vs-private-cluster" %}
{%- set private = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power-vs" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-ibm-powervs-vpc" %}
{%- set ibm_powervs_vpc = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" -%}
{% if not private %}
# About using a custom Virtual Private Cloud (VPC) {id="installation-custom-ibm-powervs-vpc_{{ context }}"}

{% if ibm_powervs_vpc %}
In {{ product_title }} {{ product_version }}, you can deploy a cluster using an existing {{ ibm_name }} Virtual Private Cloud (VPC). {._abstract}

Because the installation program cannot know what other components are in your existing subnets, it cannot choose subnet CIDRs and so forth. You must configure networking for the subnets to which you will install the cluster.
{% endif %}
{% if restricted %}
In {{ product_title }} {{ product_version }}, you can deploy a cluster into the subnets of an existing {{ ibm_name }} Virtual Private Cloud (VPC).
{% endif %}
{% endif %} {._abstract}

{%- if private %}
# Requirements for using your Virtual Private Cloud (VPC) {id="installation-custom-ibm-power-vs-requirements_{{ context }}"}

You must correctly configure the existing VPC and its subnets before you install the cluster. The installation program does not create a VPC or VPC subnet in this scenario. {._abstract}

{% endif %}
{% if ibm_powervs_vpc or restricted %}
## Requirements for using your Virtual Private Cloud (VPC) {id="_requirements_for_using_your_virtual_private_cloud_vpc"}
{% endif %}

You must correctly configure the existing VPC and its subnets before you install the cluster. The installation program does not create a VPC or VPC subnet in this scenario.

The installation program cannot:

*   Subdivide network ranges for the cluster to use
*   Set route tables for the subnets
*   Set VPC options such as DHCP

{% include "./snippets/custom-dns-server.md" %}

## Virtual Private Cloud (VPC) validation {id="installation-custom-ibm-power-vs-validation_{{ context }}"}

The VPC and all of the subnets must be in an existing resource group. The cluster is deployed to this resource group.

As part of the installation, specify the following in the `install-config.yaml` file:

*   The name of the resource group
*   The name of VPC
*   The name of the VPC subnet

To ensure that the subnets that you give are suitable, the installation program confirms that all of the subnets you specify exist.


:::note

Subnet IDs are not supported.

:::


## Isolation between clusters {id="installation-custom-ibm-power-vs-isolation_{{ context }}"}

If you deploy {{ product_title }} to an existing network, cluster service isolation decreases in the following ways:

*   ICMP Ingress is allowed to the entire network.
*   TCP port 22 Ingress (SSH) is allowed to the entire network.
*   Control plane TCP 6443 Ingress (Kubernetes API) is allowed to the entire network.
*   Control plane TCP 22623 Ingress (MCS) is allowed to the entire network.

{% if context == "installing-ibm-power-vs-private-cluster" %}
{%- set private = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power-vs" %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-ibm-powervs-vpc" %}
{%- set ibm_powervs_vpc = false -%}
{% endif %}