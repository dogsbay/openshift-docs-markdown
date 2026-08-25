{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Custom domains for applications {id="osd-config-custom-domains-applications"}
{%- set context = "osd-config-custom-domains-applications" %}


:::warning

Starting with {{ product_title }} 4.14, the Custom Domain Operator is deprecated. To manage Ingress in {{ product_title }} 4.14, use the Ingress Operator. The functionality is unchanged for {{ product_title }} 4.13 and earlier versions.

:::


You can configure a custom domain for your applications. Custom domains are specific wildcard domains that can be used with {{ product_title }} applications. 

{% leveloffset +1 %}{% include "./modules/osd-applications-config-custom-domains.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/osd-applications-renew-custom-domains.md" %}{% endleveloffset %}