{% if context == "installing-aws-customizations" %}
{%- set ipi = true -%}
{% endif %}
{% if context == "installing-aws-government-region" %}
{%- set ipi = true -%}
{% endif %}
{% if context == "installing-aws-localzone" %}
{%- set ipi = true -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set ipi = true -%}
{% endif %}
{% if context == "installing-aws-user-infra" %}
{%- set upi = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Obtaining an AWS Marketplace image {id="installation-aws-marketplace-subscribe_{{ context }}"}

If you are deploying an {{ product_title }} cluster by using an {{ aws_first }} Marketplace image, you must first subscribe through {{ aws_short }}. Subscribing to the offer provides you with the Amazon Machine Image (AMI) ID that the installation program uses to deploy compute nodes. {._abstract}

{%- set platform_abbreviation = "an AWS" -%}
{%- set platform_abbreviation_short = "AWS" %}

:::note

{% include "./snippets/installation-marketplace-note.md" %}

:::


**Prerequisites**

*   You have an {{ aws_short }} account to buy the offer. This account does not have to be the same account that you use to install the cluster.

**Procedure**

1.  Complete the {{ product_title }} subscription from the [{{ aws_short }} Marketplace](https://aws.amazon.com/marketplace/fulfillment?productId=59ead7de-2540-4653-a8b0-fa7926d5c845).
{%- if ipi %}
1.  Record the AMI ID for your specific {{ aws_short }} region. As part of the installation process, you must update the `install-config.yaml` file with this value before deploying the cluster.
{%- endif %}
{%- if upi %}
1.  Record the AMI ID for your specific {{ aws_short }} region. If you use the CloudFormation template to deploy your compute nodes, you must update the `worker0.type.properties.ImageID` parameter with the AMI ID value.
{%- endif %}
{% if ipi %}

    ```yaml title="Sample install-config.yaml file with {{ aws_short }} Marketplace compute nodes"
    apiVersion: v1
    baseDomain: example.com
    compute:
    - hyperthreading: Enabled
      name: worker
      platform:
        aws:
          amiID: ami-06c4d345f7c207239
          type: m5.4xlarge
      replicas: 3
    metadata:
      name: test-cluster
    platform:
      aws:
        region: us-east-2
    sshKey: ssh-ed25519 AAAA...
    pullSecret: '{"auths": ...}'
    ```

    where:

    `compute.platform.aws.amiID`
    :   Specifies the AMI ID from your {{ aws_short }} Marketplace subscription.

    `platform.aws.region`
    :   Specifies the `platform.aws.region` parameter. Your AMI ID is associated with a specific {{ aws_short }} region. When creating the installation configuration file, ensure that you select the same {{ aws_short }} region that you specified when configuring your subscription.
{% endif %}

{%- set platform_abbreviation = "" -%}
{%- set platform_abbreviation_short = "" -%}

{% if context == "installing-aws-customizations" %}
{%- set ipi = "" -%}
{% endif %}
{% if context == "installing-aws-government-region" %}
{%- set ipi = "" -%}
{% endif %}
{% if context == "installing-aws-localzone" %}
{%- set ipi = "" -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set ipi = "" -%}
{% endif %}
{% if context == "installing-aws-user-infra" %}
{%- set upi = "" -%}
{% endif %}