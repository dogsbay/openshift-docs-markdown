{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Uninstalling {{ ServerlessProductName }} Knative Serving {id="uninstalling-knative-serving"}
{%- set context = "uninstalling-knative-serving" %}

Before you can remove the {{ ServerlessOperatorName }}, you must remove Knative Serving. To uninstall Knative Serving, you must remove the `KnativeServing` custom resource (CR) and delete the `knative-serving` namespace.

{% leveloffset +1 %}{% include "./modules/serverless-uninstalling-knative-serving.md" %}{% endleveloffset %}