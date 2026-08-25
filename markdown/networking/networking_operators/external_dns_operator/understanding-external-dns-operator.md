---
title: Understanding the External DNS Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding the External DNS Operator {id="external-dns-operator"}
{%- set context = "external-dns-operator" %}

The External DNS Operator deploys and manages `ExternalDNS` to provide the name resolution for services and routes from the external DNS provider to {{ product_title }}. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-external-dns-operator-domain-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-external-dns-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-external-dns-operator-logs.md" %}{% endleveloffset %}