---
title: Configuring the AWS Load Balancer Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring the AWS Load Balancer Operator {id="configuring-aws-load-balancer-operator"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "aws-load-balancer-operator" %}

To automate the provisioning of AWS Load Balancers for your applications, configure the AWS Load Balancer Operator. This setup ensures that the Operator correctly manages ingress resources and external access to your cluster.

{% leveloffset +1 %}{% include "./modules/configuring-egress-proxy.md" %}{% endleveloffset %}

**Additional resources**

*   [Certificate injection using Operators](/networking/configuring_network_settings/configuring-a-custom-pki#certificate-injection-using-operators_configuring-a-custom-pki)

{% leveloffset +1 %}{% include "./modules/adding-tls-termination.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/creating-multiple-ingress-through-single-alb.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-aws-load-balancer-logs.md" %}{% endleveloffset %}