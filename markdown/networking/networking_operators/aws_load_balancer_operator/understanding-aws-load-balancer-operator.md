---
title: AWS Load Balancer Operator in OpenShift Container Platform
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# AWS Load Balancer Operator in {{ product_title }} {id="aws-load-balancer-operator"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "aws-load-balancer-operator" %}

To deploy and manage the AWS Load Balancer Controller, install the AWS Load Balancer Operator from the software catalog by using the {{ product_title }} web console or CLI. You can use the Operator to integrate AWS load balancers directly into your cluster infrastructure.

{% leveloffset +1 %}{% include "./modules/nw-aws-load-balancer-operator-considerations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-aws-load-balancer-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-aws-load-balancer-with-outposts.md" %}{% endleveloffset %}