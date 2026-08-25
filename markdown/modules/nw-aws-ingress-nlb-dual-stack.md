{%- set _mod_docs_content_type = "CONCEPT" %}
# Dual-stack networking for the Ingress Controller load balancer on AWS {id="nw-aws-ingress-nlb-dual-stack_{{ context }}"}

On {{ aws_full }}, an Ingress Controller must use a publishing `Service` type Network Load Balancer (NLB) to enable publishing over IPv4 and IPv6 when the cluster runs {{ aws_short }} dual-stack networking. A Classic Load Balancer (CLB) does not support the dual-stack publishing path. {._abstract}

{%- set FeatureName = "Dual-stack networking for {{ product_title }} on {{ aws_full }}" %}
{% include "./snippets/technology-preview.md" %}
{%- set FeatureName = false %}

If your Ingress Controller uses an NLB and the cluster-scoped `Infrastructure` resource named `cluster` contains `DualStackIPv4Primary` or `DualStackIPv6Primary` in the `status.platformStatus.aws.ipFamily` field, the Ingress Operator sets the Ingress Controller load balancer `Service` to dual-stack IP families.

The `Service` lists IPv4 first for `DualStackIPv4Primary` and IPv6 first for `DualStackIPv6Primary`.

If the Ingress Controller uses a CLB and the cluster runs {{ aws_short }} dual-stack networking, the publishing load balancer stays IPv4-only. To expose the Ingress Controller over IPv4 and IPv6, you must configure the Ingress Controller to use an NLB.