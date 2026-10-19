{%- set _mod_docs_content_type = "CONCEPT" %}
# Create a cluster using Terraform {id="rosa-classic-create-a-cluster-using-terraform_{{ context }}"}

As a cluster administrator, create a {{ product_title }} cluster by using Terraform, an infrastructure-as-code tool. Terraform provisions the cluster and its supporting resources from configuration files that you can version, review, and reuse. {._abstract}

Creating a cluster by using Terraform helps you to do the following:

*   Define your cluster and its supporting resources as version-controlled code.
*   Reproduce consistent cluster deployments across environments.
*   Automate both the creation and the removal of cluster resources.