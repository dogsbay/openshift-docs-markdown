{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connectivity issues on clusters with private network load balancers {id="rosa-troubleshooting-general-deployment-failure_{{ context }}"}

Private AWS NLBs preserve client IP addresses, which can drop connections when the source and destination are on the same host. Workloads on the same node as router pods might not reach the private NLB fronting the ingress controller. {._abstract}

{{ product_title }} clusters created with version {{ product_version }} deploy AWS Network Load Balancers (NLB) by default for the `default` ingress controller. See the AWS documentation about how to [Troubleshoot your Network Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-troubleshooting.html#loopback-timeout).

**Procedure**

*   To mitigate this impact, reschedule your workloads onto nodes separate from those where the router pods run. Or, rely on the internal pod and service networks for accessing other workloads co-located within the same cluster.