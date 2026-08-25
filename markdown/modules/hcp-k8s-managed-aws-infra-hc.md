{%- set _mod_docs_content_type = "CONCEPT" %}
# Kubernetes-managed infrastructure in a hosted cluster {{ aws_short }} account {id="hcp-k8s-managed-aws-infra-hc_{{ context }}"}

When Kubernetes manages your infrastructure in a hosted cluster {{ aws_first }} account, ensure that you meet the infrastructure requirements. {._abstract}

The infrastructure requirements are as follows:

*   A network load balancer for default Ingress
*   An S3 bucket for registry