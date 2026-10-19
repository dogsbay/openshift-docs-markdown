{%- set _mod_docs_content_type = "CONCEPT" %}
# Prepare to create a cluster {id="rosa-hcp-prepare-to-create-a-cluster_{{ context }}"}

Before you create a {{ product_title }} cluster, you must prepare your AWS account so that the service has the identity, permissions, and network infrastructure it needs to deploy and operate the cluster.  {._abstract}

{{ product_title }} uses the AWS Security Token Service (STS) and OpenID Connect (OIDC) so that the service assumes short-lived, narrowly scoped roles instead of long-lived credentials. Create these IAM roles and policies, an OIDC configuration, and a virtual private cloud (VPC) that meets the networking requirements of the cluster.

Completing this preparation once means that you can then create a cluster using any method, such as the CLI, the {{ hybrid_console_second }}, or Terraform, without repeating these steps.