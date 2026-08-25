{%- set _mod_docs_content_type = "REFERENCE" %}
# Requirements for manually creating an AWS Virtual Private Cloud {id="rosa-hcp-vpc-manual_{{ context }}"}

If you do not use a managed infrastructure tool such as Terraform or AWS CloudFormation to create your Virtual Private Cloud (VPC), you can create it manually through the [AWS console](https://us-east-1.console.aws.amazon.com/vpc/). A manually created VPC must meet specific requirements for use with {{ product_title }}. {._abstract}

{% leveloffset +0 %}{% include "./snippets/snip_rosa-existing-vpc-requirements.md" %}{% endleveloffset %}