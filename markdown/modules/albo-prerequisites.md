{%- set _mod_docs_content_type = "CONCEPT" %}
# Prepare to install the AWS Load Balancer Operator {id="aws-load-balancer-operator-prerequisites_{{ context }}"}

Before you install the AWS Load Balancer Operator, ensure that your cluster fulfills requirements and that your AWS Virtual Private Cloud (VPC) resources are appropriately tagged. You also have the option to configure some helpful environment variables. {._abstract}


Cluster requirements

:   Your cluster must deploy across three availability zones and use a pre-existing VPC that has three public subnets.


:::important

These requirements mean that the AWS Load Balancer Operator might not be suitable for some PrivateLink clusters. AWS Network Load Balancers (NLBs) might be a better choice for such clusters.

:::