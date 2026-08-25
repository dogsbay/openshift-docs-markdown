{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Securing a mapped service using a TLS certificate {id="domain-mapping-custom-tls-cert"}
{%- set context = "domain-mapping-custom-tls-cert" %}

{% leveloffset +1 %}{% include "./modules/serverless-domain-mapping-custom-tls-cert.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-ossm-secret-filtering-net-kourier.md" %}{% endleveloffset %}