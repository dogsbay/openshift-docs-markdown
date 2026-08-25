{% if context == "installing-aws-localzone" %}
{%- set local_zone = true -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
{%- if local_zone %}
# Cluster limitations in AWS Local Zones {id="cluster-limitations-aws-zone_{{ context }}"}

Some limitations exist when you try to deploy a cluster with a default installation configuration in an Amazon Web Services (AWS) Local Zone.
{% endif %}
{% if wavelength_zone %}
= Cluster limitations in AWS Wavelength Zones {._abstract}

Some limitations exist when you try to deploy a cluster with a default installation configuration in an Amazon Web Services (AWS) Wavelength Zone.
{% endif %} {._abstract}


:::important

The following list details limitations when deploying a cluster in a pre-configured AWS zone:

*   The maximum transmission unit (MTU) between an Amazon EC2 instance in a zone and an Amazon EC2 instance in the Region is `1300`. This causes the cluster-wide network MTU to change according to the network plugin that is used with the deployment.
*   Network resources such as Network Load Balancer (NLB), Classic Load Balancer, and Network Address Translation (NAT) Gateways are not globally supported.
*   For an {{ product_title }} cluster on AWS, the AWS Elastic Block Storage (EBS) `gp3` type volume is the default for node volumes and the default for the storage class. This volume type is not globally available on zone locations. By default, the nodes running in zones are deployed with the `gp2` EBS volume. The `gp2-csi` `StorageClass` parameter must be set when creating workloads on zone nodes.

:::


{% if local_zone %}
If you want the installation program to automatically create Local Zone subnets for your {{ product_title }} cluster, specific configuration limitations apply with this method.
{% endif %}

{% if wavelength_zone %}
If you want the installation program to automatically create Wavelength Zone subnets for your {{ product_title }} cluster, specific configuration limitations apply with this method. The following note details some of these limitations. For other limitations, ensure that you read the "Quotas and considerations for Wavelength Zones" document that Red Hat provides in the "Infrastructure prerequisites" section.
{% endif %}


:::important

The following configuration limitation applies when you set the installation program to automatically create subnets for your {{ product_title }} cluster:

*   When the installation program creates private subnets in AWS {{ zone_type }}, the program associates each subnet with the route table of its parent zone. This operation ensures that each private subnet can route egress traffic to the internet by way of NAT Gateways in an AWS Region.
*   If the parent-zone route table does not exist during cluster installation, the installation program associates any private subnet with the first available private route table in the Amazon Virtual Private Cloud (VPC). This approach is valid only for AWS {{ zone_type }} subnets in an {{ product_title }} cluster.

:::


{% if context == "installing-aws-localzone" %}
{%- set local_zone = false -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = false -%}
{% endif %}