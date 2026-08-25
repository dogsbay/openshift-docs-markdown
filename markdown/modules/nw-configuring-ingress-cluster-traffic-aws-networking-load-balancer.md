{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring ingress cluster traffic on AWS using a Network Load Balancer {id="nw-configuring-ingress-cluster-traffic-aws-network-load-balancer_{{ context }}"}

To enable high-performance communication between external services and your {{ product_title }} cluster, configure an {{ aws_full }} Network Load Balancer (NLB). You can set up an NLB on a new or existing {{ aws_short }} cluster to manage ingress traffic with low latency. {._abstract}