{%- set _mod_docs_content_type = "REFERENCE" %}
# Amazon VPC Requirements for non-PrivateLink ROSA clusters {id="osd-aws-vpc-required-resources_{{ context }}"}

To create an Amazon VPC, you must have the following: {._abstract}

*   An internet gateway,
*   An NAT gateway,
*   Private and public subnets that have internet connectivity provided to install required components.

You must have at least one single private and public subnet for Single-AZ clusters, and you need at least three private and public subnets for Multi-AZ clusters.