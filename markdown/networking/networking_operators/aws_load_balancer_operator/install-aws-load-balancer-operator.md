---
title: Installing the AWS Load Balancer Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing the AWS Load Balancer Operator {id="install-aws-load-balancer-operator"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "aws-load-balancer-operator" %}

The AWS Load Balancer Operator deploys and manages the AWS Load Balancer Controller. You can install the AWS Load Balancer Operator from the software catalog by using {{ product_title }} web console or CLI.

{% leveloffset +1 %}{% include "./modules/installing-aws-load-balancer-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-aws-load-balancer-operator-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/creating-instance-aws-load-balancer-controller.md" %}{% endleveloffset %}