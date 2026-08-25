{%- set _mod_docs_content_type = "CONCEPT" %}
# About non-default `OpenshiftEC2NodeClass` resources {id="rosa-nodes-autonode-managing-about-nodeclass_{{ context }}"}

When you enable the {{ autonode }}, a default `OpenshiftEC2NodeClass` resource is automatically created with the same {{ ocp_short }} version as the hosted control plane. This default resource is immutable and cannot be modified. {._abstract}

You can create non-default `OpenshiftEC2NodeClass` resources to customize how the {{ autonode }} provisions worker nodes. Create a non-default `OpenshiftEC2NodeClass` resource when you need any of the following customizations:

*   The worker nodes require a different {{ ocp_short }} version than the hosted control plane. By pinning the version, the worker nodes are not drained and upgraded during hosted control plane upgrades.
*   The worker nodes require Amazon EC2 Capacity Reservations.
*   The worker nodes must be placed in VPC subnets that are different from the cluster’s VPC subnets.
*   The worker nodes require Amazon EC2 Instance Metadata Service v1 (IMDSv1), which does not use HTTP tokens.
*   The worker nodes require additional AWS security groups for custom ingress or egress rules.
*   The worker nodes require additional AWS tags.

The `OpenshiftEC2NodeClass` resource is Red&#160;Hat’s Custom Resource (CR) that communicates with the upstream Karpenter `EC2NodeClass` resource. When you create an `OpenshiftEC2NodeClass`, a corresponding `EC2NodeClass` resource is automatically managed by the system. Node pools reference the `EC2NodeClass` through the `nodeClassRef` field.