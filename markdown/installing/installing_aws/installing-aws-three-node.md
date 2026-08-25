---
title: "Installing a three-node cluster on {{ aws_short }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a three-node cluster on {{ aws_short }} {id="installing-aws-three-node"}
{%- set context = "installing-aws-three-node" %}

In {{ product_title }} version {{ product_version }}, you can install a three-node cluster on {{ aws_first }}. A three-node cluster consists of three control plane machines, which also act as compute machines. {._abstract}

This type of cluster provides a smaller, more resource efficient cluster, for cluster administrators and developers to use for testing, development, and production.

You can install a three-node cluster using either installer-provisioned or user-provisioned infrastructure.


:::note

Deploying a three-node cluster using an {{ aws_short }} Marketplace image is not supported.

:::


{% leveloffset +1 %}{% include "./modules/installation-three-node-cluster-cloud-provider.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}
*   [Installing a cluster on AWS with customizations](/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-customizations)
*   [Installing a cluster on user-provisioned infrastructure in AWS by using CloudFormation templates](/installing/installing_aws/upi/installing-aws-user-infra#installing-aws-user-infra)