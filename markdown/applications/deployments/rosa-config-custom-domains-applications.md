{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Custom domains for applications {id="rosa-config-custom-domains-applications"}
{%- set context = "rosa-config-custom-domains-applications" %}

You can configure a custom domain for your applications. Custom domains are specific wildcard domains that can be used with {{ product_title }} applications. {._abstract}


:::warning

Starting with {{ product_title }} 4.14, the Custom Domain Operator is deprecated. To manage Ingress in {{ product_title }} 4.14, use the Ingress Operator. The functionality is unchanged for {{ product_title }} 4.13 and earlier versions.

:::


{% leveloffset +1 %}{% include "./modules/rosa-applications-config-custom-domains.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-applications-renew-custom-domains.md" %}{% endleveloffset %}