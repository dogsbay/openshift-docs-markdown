{%- set _mod_docs_content_type = "CONCEPT" %}
# Prepare to create the cluster {id="rosa-classic-prepare-to-create-the-cluster_{{ context }}"}

As a cluster administrator, prepare your environment before you create a {{ product_title }} cluster. When you complete the prerequisites in advance, your command-line tools, Amazon Web Services (AWS) account, network, and AWS Identity and Access Management (IAM) roles are ready for the cluster creation workflow. {._abstract}

Preparing before you create a cluster helps you to do the following:

*   Confirm that your AWS account meets the infrastructure and quota requirements.
*   Install the tools and configure the credentials that the cluster creation workflow requires.
*   Create the IAM and OpenID Connect (OIDC) resources that a Security Token Service (STS) cluster needs.