{%- set _mod_docs_content_type = "CONCEPT" %}
# Infrastructure requirements for a management {{ aws_short }} account {id="hcp-managed-aws-infra-mgmt_{{ context }}"}

When your infrastructure is managed by {{ hcp }} in a management AWS account, the infrastructure requirements differ depending on whether your clusters are public, private, or a combination. {._abstract}

For accounts with public clusters, the infrastructure requirements are as follows:

*   Network load balancer: a load balancer Kube API server
    *   Kubernetes creates a security group
*   Volumes
    *   For etcd (one or three depending on high availability)
    *   For OVN-Kube

For accounts with private clusters, the infrastructure requirements are as follows:

*   Network load balancer: a load balancer private router
*   Endpoint service (private link)

For accounts with public and private clusters, the infrastructure requirements are as follows:

*   Network load balancer: a load balancer public router
*   Network load balancer: a load balancer private router
*   Endpoint service (private link)
*   Volumes
    *   For etcd (one or three depending on high availability)
    *   For OVN-Kube