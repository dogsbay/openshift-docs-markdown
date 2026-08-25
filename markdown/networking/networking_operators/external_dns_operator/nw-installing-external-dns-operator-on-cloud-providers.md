---
title: Installing the External DNS Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing the External DNS Operator {id="installing-external-dns-on-cloud-providers"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-external-dns-on-cloud-providers" %}

To manage DNS records on your cloud infrastructure, install the External DNS Operator. This Operator supports deployment on major cloud providers, including {{ aws_first }}, {{ azure_first }}, and {{ gcp_first }}.

{% leveloffset +1 %}{% include "./modules/nw-installing-external-dns-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-installing-external-dns-operator-cli.md" %}{% endleveloffset %}