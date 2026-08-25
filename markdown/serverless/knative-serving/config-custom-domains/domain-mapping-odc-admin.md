{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Domain mapping using the Administrator perspective {id="domain-mapping-odc-admin"}
{%- set context = "domain-mapping-odc-admin" %}

If you do not want to switch to the **Developer** perspective in the {{ product_title }} web console or use the Knative (`kn`) CLI or YAML files, you can use the **Administator** perspective of the {{ product_title }} web console.

{% leveloffset +1 %}{% include "./modules/serverless-domain-mapping-odc-admin.md" %}{% endleveloffset %}