{%- set _mod_docs_content_type = "CONCEPT" %}
# Separate creation of the hosted cluster and its resources {id="hcp-managed-aws-infra-iam-separate_{{ context }}"}

By default, the `hcp create cluster aws` command creates the cloud infrastructure with the hosted cluster and applies it. However, you can create the cloud infrastructure separately so that you can use the command to create only the cluster, or render it to modify it before you apply it. {._abstract}

The process to create the hosted cluster and its resources separately involves creating the cloud infrastructure, creating the {{ aws_short }} Identity and Access (IAM) resources, and then creating the cluster.