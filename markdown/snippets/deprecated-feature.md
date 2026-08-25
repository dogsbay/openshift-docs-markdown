{%- set _mod_docs_content_type = "SNIPPET" %}


:::important

{{ FeatureName }} is a deprecated feature. Deprecated functionality is still included in {{ product_title }} and continues to be supported; however, it will be removed in a future release of this product and is not recommended for new deployments.

{% if not (openshift_rosa or openshift_dedicated) %}
For the most recent list of major functionality that has been deprecated or removed within {{ product_title }}, refer to the _Deprecated and removed features_ section of the {{ product_title }} release notes.
{%- endif %}

:::

{%- set FeatureName = false -%}