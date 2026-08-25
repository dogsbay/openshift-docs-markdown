{%- set _mod_docs_content_type = "CONCEPT" %}
# Amazon Spot Instance support for node pools {id="hcp-aws-spot-instance_{{ context }}"}

To reduce cloud infrastructure costs for non-critical and fault-tolerant workloads, you can use Amazon Spot Instances for your compute nodes in hosted clusters. {._abstract}

Spot Instances use spare Amazon Elastic Compute Cloud (Amazon EC2) capacity at reduced prices compared to on-demand instances. When Amazon EC2 needs the capacity block, it can interrupt a Spot Instance with a 2-minute warning. You can use Spot Instances for node pools in hosted clusters on {{ aws_short }}. However, you cannot combine Spot Instances with Amazon EC2 Capacity Reservations.


:::important

Spot Instances are suitable for fault-tolerant, stateless, and flexible workloads. Do not use Spot Instances for workloads that cannot tolerate interruptions. Spot Instances require default tenancy. Dedicated tenancy is not supported.

:::