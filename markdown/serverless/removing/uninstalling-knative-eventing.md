{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Uninstalling {{ ServerlessProductName }} Knative Eventing {id="uninstalling-knative-eventing"}
{%- set context = "uninstalling-knative-eventing" %}

Before you can remove the {{ ServerlessOperatorName }}, you must remove Knative Eventing. To uninstall Knative Eventing, you must remove the `KnativeEventing` custom resource (CR) and delete the `knative-eventing` namespace.

{% leveloffset +1 %}{% include "./modules/serverless-uninstalling-knative-eventing.md" %}{% endleveloffset %}