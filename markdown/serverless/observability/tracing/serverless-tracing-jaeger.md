{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using Jaeger distributed tracing {id="serverless-tracing-jaeger"}
{%- set context = "serverless-tracing-jaeger" %}

If you do not want to install all of the components of {{ DTProductName }}, you can still use distributed tracing on {{ product_title }} with {{ ServerlessProductName }}.

{% leveloffset +1 %}{% include "./modules/serverless-jaeger-config.md" %}{% endleveloffset %}