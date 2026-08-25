{%- set _mod_docs_content_type = "CONCEPT" %}
# Allocating API and Ingress load balancers to specific subnets on AWS {id="nw-allocating-load-balancers-to-subnets_{{ context }}"}

You can control the network placement of {{ product_title }} load balancers on {{ aws_short }}, including load balancers for the Ingress Controller, by explicitly defining your subnets from the virtual private cloud (VPC). You can then assign the subnets specific roles directly within the `platform.aws.vpc.subnets` section of the `install-config.yaml` file.  {._abstract}

By using this method, you have granular control of subnets that are used for resources, such as the Ingress Controller and other cluster components.