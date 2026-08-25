{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Multi-container support for Serving {id="multi-container-support-for-serving"}
{%- set context = "multi-container-support-for-serving" %}

You can deploy a multi-container pod by using a single Knative service. This method is useful for separating application responsibilities into smaller, specialized parts.

{%- set FeatureName = "Multi-container support for Serving" %}
{% leveloffset +2 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/serverless-configuring-multi-container-service.md" %}{% endleveloffset %}