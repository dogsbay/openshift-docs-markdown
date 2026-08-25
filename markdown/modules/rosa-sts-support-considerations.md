{%- set _mod_docs_content_type = "CONCEPT" %}
# Support considerations for ROSA clusters with STS {id="rosa-sts-support-considerations_{{ context }}"}

The supported way of creating a {{ product_title }} cluster that uses the AWS Security Token Service (STS) is by using the steps described in this product documentation. {._abstract}


:::important

You can use `manual` mode with the {{ rosa_cli_first }} to generate the AWS Identity and Access Management (IAM) policy files and `aws` commands that are required to install the STS resources.

The files and `aws` commands are generated for review purposes only and must not be modified in any way. Red&#160;Hat cannot provide support for {{ product_title }} clusters that have been deployed by using modified versions of the policy files or `aws` commands.

:::