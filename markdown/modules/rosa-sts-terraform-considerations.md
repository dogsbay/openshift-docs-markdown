{%- set _mod_docs_content_type = "CONCEPT" %}
# Considerations when using Terraform {id="rosa-sts-terraform-considerations_{{ context }}"}

Manage cloud resources created by Terraform only through Terraform. Using other tools, such as the AWS console or Red&#160;Hat console, introduces configuration drift from your declared Terraform configuration. {._abstract}

For example, if you upgrade your Terraform-created cluster by using the {{ hybrid_console_url }}, you need to reconcile your Terraform state before applying any forthcoming configuration changes.