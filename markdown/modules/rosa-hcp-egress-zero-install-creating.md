{%- set _mod_docs_content_type = "CONCEPT" %}
# Creating a Virtual Private Cloud for your {{ product_title }} clusters {id="rosa-hcp-egress-zero-install-creating_{{ context }}"}

You must have a Virtual Private Cloud (VPC) to create a {{ product_title }} cluster. To pull images from the local ECR mirror over your VPC endpoint, you must configure a privatelink service connection and modify the default security groups with specific tags.  {._abstract}

You can create a VPC by using one of these methods:

*   Create a VPC by using the ROSA command-line interface (CLI)
*   Create a VPC by using a Terraform template
*   Create a VPC by using the AWS CLI
*   Create the VPC resources manually in the AWS console