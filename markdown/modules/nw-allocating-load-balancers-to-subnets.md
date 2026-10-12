{%- set _mod_docs_content_type = "CONCEPT" %}
# Allocating API and Ingress load balancers to specific subnets on AWS {id="nw-allocating-load-balancers-to-subnets_{{ context }}"}

You can control the network placement of {{ product_title }} load balancers on {{ aws_short }} by defining subnets from the virtual private cloud (VPC) and assigning them roles in the `platform.aws.vpc.subnets` section of `install-config.yaml`.