{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using Red Hat OpenShift distributed tracing {id="serverless-tracing-open-telemetry"}
{%- set context = "serverless-tracing-open-telemetry" %}

You can use {{ DTProductName }} with {{ ServerlessProductName }} to monitor and troubleshoot serverless applications.

{% if openshift_enterprise %}
{% leveloffset +1 %}{% include "./modules/serverless-open-telemetry.md" %}{% endleveloffset %}
{% endif %}