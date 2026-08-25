{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{% include "./_attributes/common-attributes.md" %}
# Specifying the TLS for your cluster {id="rosa-specifying-tls-for-cluster"}

{%- set context = "rosa-adding-additional-constraints-for-ip-based-aws-role-assumption" %}

{{ product_title }} supports the Modern Transport Layer Security (TLS) 1.3 security profile, allowing you to use TLS 1.3 for enhanced security of your client-facing ingress endpoint. {._abstract}

{% leveloffset +1 %}{% include "./modules/rosa-tls-support.md" %}{% endleveloffset %}