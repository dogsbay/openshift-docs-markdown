{%- set _mod_docs_content_type = "CONCEPT" %}
# Considerations when using Terraform {id="rosa-sts-terraform-considerations_{{ context }}"}

In general, using Terraform to manage cloud resources should be done with the expectation that any changes should be done using the Terraform methodology. Use caution when using tools outside of Terraform, such as the AWS console or Red&#160;Hat console, to modify cloud resources created by Terraform. Using tools outside Terraform to manage cloud resources that are already managed by Terraform introduces configuration drift from your declared Terraform configuration. {._abstract}

For example, if you upgrade your Terraform-created cluster by using the {{ hybrid_console_url }}, you need to reconcile your Terraform state before applying any forthcoming configuration changes.