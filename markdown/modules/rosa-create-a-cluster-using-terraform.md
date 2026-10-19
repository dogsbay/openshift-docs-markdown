{%- set _mod_docs_content_type = "CONCEPT" %}
# Create a cluster using Terraform {id="rosa-hcp-create-a-cluster-using-terraform_{{ context }}"}

Create a {{ product_title }} cluster with a Terraform cluster template that is configured with the default cluster options. {._abstract}

After you prepare your AWS account, you can create a {{ product_title }} cluster by using Terraform. Terraform lets you define your cluster as code so that you can version, review, and reproduce the deployment.

Red&#160;Hat provides a Terraform cluster template that is configured with the default cluster options. Prepare your environment, create your Terraform files, and apply them to create the cluster.