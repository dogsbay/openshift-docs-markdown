---
title: "Configuring certificates for {{ hcp }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring certificates for {{ hcp }} {id="hcp-certificates"}
{%- set context = "hcp-certificates" %}

To establish secure and encrypted communication between your clients and the hosted control plane, you must configure a server certificate for your hosted cluster. 

With {{ hcp }}, the steps to configure certificates differ from those of standalone {{ product_title }}.

{% leveloffset +1 %}{% include "./modules/hcp-custom-cert.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-kube-api-server-cert.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-oauth-server-cert-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-oauth-server-cert.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-ts-custom-dns.md" %}{% endleveloffset %}