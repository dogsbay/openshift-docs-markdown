{%- set _mod_docs_content_type = "CONCEPT" %}
# Private clusters {id="private-clusters-default_{{ context }}"}

{% if context == "installing-aws-specialized-region" %}
{%- set aws_specialized = true -%}
{% endif %}

{% if context == "installing-ibm-cloud-private" %}
{%- set ibm_cloud_private = true -%}
{% endif %}

{% if context == "installing-ibm-power-vs-private-cluster" %}
{%- set ibm_power_vs_private = true -%}
{% endif %}

You can deploy a private {{ product_title }} cluster that does not expose external endpoints. Private clusters are accessible from only an internal network and are not visible to the internet. {._abstract}

{% if aws_specialized %}

:::note

Public zones are not supported in Route 53 in {{ aws_short }} Government, Secret, and Top Secret regions. Therefore, clusters must be private if they are deployed to one of these regions.

:::

{% endif %}

By default, {{ product_title }} is provisioned to use publicly-accessible DNS and endpoints. A private cluster sets the DNS, Ingress Controller, and API server to private when you deploy your cluster. This means that the cluster resources are only accessible from your internal network and are not visible to the internet.

{% include "./snippets/snip-private-clusters-public-ingress.md" %}

To deploy a private cluster, you must:

{% if not ibm_power_vs_private %}
*   Use existing networking that meets your requirements. Your cluster resources might be shared between other clusters on the network.
{% endif %}
{% if ibm_power_vs_private %}
*   Use existing networking that meets your requirements.
{% endif %}
{% if ibm_cloud_private or ibm_power_vs_private %}
*   Create a DNS zone using {{ ibm_cloud_name }} DNS Services and specify it as the base domain of the cluster. For more information, see "Using {{ ibm_cloud_name }} DNS Services to configure DNS resolution".
{%- endif %}
*   Deploy from a machine that has access to:
    *   The API services for the cloud to which you provision.
    *   The hosts on the network that you provision.
    *   The internet to obtain installation media.

{% if aws_specialized %}
You can use any machine that meets these access requirements and follows your company’s guidelines. For example, this machine can be a bastion host on your cloud network.


:::note

AWS China does not support a VPN connection between the VPC and your network. For more information about the Amazon VPC service in the Beijing and Ningxia regions, see "Amazon Virtual Private Cloud" in the AWS China documentation.

:::


**Additional resources**

*   [Amazon Virtual Private Cloud](https://docs.amazonaws.cn/en_us/aws/latest/userguide/vpc.html)
{% endif %}

{% if context == "installing-aws-specialized-region" %}
{%- set aws_specialized = false -%}
{% endif %}

{% if context == "installing-ibm-cloud-private" %}
{%- set ibm_cloud_private = false -%}
{% endif %}

{% if context == "installing-ibm-power-vs-private-cluster" %}
{%- set ibm_power_vs_private = false -%}
{% endif %}