{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# HTTPS redirection per service {id="https-redirect-per-service"}
{%- set context = "https-redirect-per-service" %}

You can enable or disable HTTPS redirection for a service by configuring the `networking.knative.dev/http-option` annotation.

{% leveloffset +1 %}{% include "./modules/serverless-https-redirect-service.md" %}{% endleveloffset %}