{%- if context == "rosa-hcp-aws-private-creating-cluster" %}
{%- set rosa_hcp = true -%}
{% endif %}
{% if context == "rosa-aws-privatelink-creating-cluster" %}
{%- set rosa_standalone = true -%}
{% endif %}
{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding AWS PrivateLink {id="osd-aws-privatelink-about_{{ context }}"}

AWS PrivateLink enables private connectivity for {{ product_title }} clusters without requiring public networking infrastructure. {._abstract}

{% if rosa_hcp %}
All {{ hcp_title }} clusters are created with an AWS PrivateLink connection to expose the private Kubernetes API server to the customer’s virtual private cloud (VPC).
{% endif %}
{% if not rosa_hcp %}
A {{ product_title }} cluster can be created without any requirements on public subnets, internet gateways, or network address translation (NAT) gateways. In this configuration, Red&#160;Hat uses AWS PrivateLink to manage and monitor a cluster to avoid all public ingress network traffic. Without a public subnet, it is not possible to configure an application router as public. Configuring private application routers is the only option.
{% endif %}

For more information, see [AWS PrivateLink](https://aws.amazon.com/privatelink/) on the AWS website.


:::important

You can only make a PrivateLink cluster at installation time. You cannot change a cluster to PrivateLink after installation.

:::


{% if context == "rosa-hcp-aws-private-creating-cluster" %}
{%- set rosa_hcp = "" -%}
{% endif %}
{% if context == "rosa-aws-privatelink-creating-cluster" %}
{%- set rosa_standalone = "" -%}
{% endif %}