{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Global HTTPS redirection {id="https-redirect-global"}
{%- set context = "https-redirect-global" %}

HTTPS redirection provides redirection for incoming HTTP requests. These redirected HTTP requests are encrypted. You can enable HTTPS redirection for all services on the cluster by configuring the `httpProtocol` spec for the `KnativeServing` custom resource (CR).

{% leveloffset +1 %}{% include "./modules/serverless-https-redirect-global.md" %}{% endleveloffset %}