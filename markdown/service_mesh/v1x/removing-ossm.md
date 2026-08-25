{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Removing Service Mesh {id="removing-ossm-v1x"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "removing-ossm-v1x" %}

{% include "./snippets/ossm-out-of-support.md" %}

To remove {{ SMProductName }} from an existing {{ product_title }} instance, remove the control plane before removing the operators.

{% leveloffset +1 %}{% include "./modules/ossm-control-plane-remove.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-remove-operators.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-remove-cleanup-1x.md" %}{% endleveloffset %}