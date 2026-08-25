{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating an API server source {id="serverless-apiserversource"}
{%- set context = "serverless-apiserversource" %}

The API server source is an event source that can be used to connect an event sink, such as a Knative service, to the Kubernetes API server. The API server source watches for Kubernetes events and forwards them to the Knative Eventing broker.

{% leveloffset +1 %}{% include "./modules/odc-creating-apiserversource.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/apiserversource-kn.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/specifying-sink-flag-kn.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/apiserversource-yaml.md" %}{% endleveloffset %}