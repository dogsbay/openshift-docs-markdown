{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# URL scheme for external routes {id="url-scheme-external-routes"}
{%- set context = "url-scheme-external-routes" %}

The URL scheme of external routes defaults to HTTPS for enhanced security. This scheme is determined by the `default-external-scheme` key in the `KnativeServing` custom resource (CR) spec.

{% leveloffset +1 %}{% include "./modules/serverless-url-scheme-external-routes.md" %}{% endleveloffset %}