---
title: Creating DNS records on AWS
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating DNS records on AWS {id="creating-dns-records-on-aws"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "creating-dns-records-on-aws" %}

To create DNS records on AWS and AWS GovCloud, use the External DNS Operator. The Operator manages external name resolution for your cluster services directly through the Operator.


:::important

Usage of External DNS Operator on an STS-enabled cluster that runs in AWS Government (AWS GovCloud) regions is not supported.

:::


{% leveloffset +1 %}{% include "./modules/nw-control-dns-records-public-hosted-zone-aws.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-control-dns-records-public-aws-with-VPC.md" %}{% endleveloffset %}