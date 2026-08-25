---
title: External DNS Operator release notes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# External DNS Operator release notes {id="external-dns-operator-release-notes"}
{%- set context = "external-dns-operator-release-notes" %}

The External DNS Operator deploys and manages `ExternalDNS` to provide name resolution for services and routes. This enables your external DNS provider to resolve hostnames directly to {{ product_title }} resources. {._abstract}


:::important

The External DNS Operator is only supported on the `x86_64` architecture.

:::


These release notes track the development of the External DNS Operator in {{ product_title }}.

{% leveloffset +1 %}{% include "./modules/external-dns-operator-release-notes-1.3.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-dns-operator-release-notes-1.2.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Creating DNS records in a different {{ aws_short }} Account using a shared VPC](/networking/networking_operators/external_dns_operator/nw-creating-dns-records-on-aws#nw-control-dns-records-public-aws-with-VPC_creating-dns-records-on-aws)

{% leveloffset +1 %}{% include "./modules/external-dns-operator-release-notes-1.1.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-dns-operator-release-notes-1.0.md" %}{% endleveloffset %}