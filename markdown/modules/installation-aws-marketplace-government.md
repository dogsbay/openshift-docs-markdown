{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installation requirements for government regions {id="installation-aws-marketplace-government_{{ context }}"}

If you are deploying an {{ product_title }} cluster using an AWS Marketplace image in a government region, you must first subscribe through {{ aws_short }}. Subscribing to the offer provides you with the AMI ID that the installation program uses to deploy compute nodes. {._abstract}

{%- set platform_abbreviation = "an AWS" -%}
{%- set platform_abbreviation_short = "AWS" %}

:::note

{% include "./snippets/installation-marketplace-note.md" %}

:::


**Prerequisites**

*   You have an {{ aws_short }} account to purchase the offer. This account does not have to be the same account that is used to install the cluster.

**Procedure**

1.  Complete the {{ product_title }} subscription from the [AWS Marketplace](https://aws.amazon.com/marketplace/fulfillment?productId=59ead7de-2540-4653-a8b0-fa7926d5c845).
1.  Record the AMI ID for your specific AWS Region. As part of the installation process, you must update the `install-config.yaml` file with this value before deploying the cluster.