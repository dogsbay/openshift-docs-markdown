{%- set _mod_docs_content_type = "CONCEPT" %}

# Creating a Virtual Private Cloud for your {{ product_title }} clusters {id="rosa-hcp-quickstart-creating-vpc_{{ context }}"}

You must have an AWS Virtual Private Cloud (VPC) to create a {{ product_title }} cluster. You can create a VPC by using the {{ rosa_cli }}, or you can manually create the VPC resources in the AWS console. {._abstract}


:::note

The Terraform instructions are for testing and demonstration purposes. Your own installation requires some modifications to the VPC for your own use. You should also ensure that when you use this linked Terraform configuration, it is in the same region that you intend to install your cluster. In these examples, `us-east-2` is used.

:::