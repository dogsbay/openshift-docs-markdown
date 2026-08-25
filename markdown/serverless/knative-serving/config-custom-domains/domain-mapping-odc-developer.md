{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Domain mapping using the Developer perspective {id="domain-mapping-odc-developer"}
{%- set context = "domain-mapping-odc-developer" %}

You can customize the domain for your Knative service by mapping a custom domain name that you own to a Knative service. You can use the **Developer** perspective of the {{ product_title }} web console to map a `DomainMapping` custom resource (CR) to a Knative service.

{% leveloffset +1 %}{% include "./modules/serverless-domain-mapping-odc-developer.md" %}{% endleveloffset %}