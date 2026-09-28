{%- set _mod_docs_content_type = "SNIPPET" %}


:::important

To ensure nodes reach the control plane, all subnets added to a {{ product_title }} cluster must have https access to the Virtual Private Cloud (VPC) endpoint for that availability zone. Routing and firewalls, which include network access control lists (NACLs) and security groups, must allow traffic between each subnet and the VPC endpoint at all times. To ensure availability, it is highly recommended to allow all https traffic between all subnets of the cluster.

:::