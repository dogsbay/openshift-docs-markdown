{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Custom event sources {id="serverless-custom-event-sources"}
{%- set context = "serverless-custom-event-sources" %}

If you need to ingress events from an event producer that is not included in Knative, or from a producer that emits events which are not in the `CloudEvent` format, you can do this by creating a custom event source. You can create a custom event source by using one of the following methods:

*   Use a `PodSpecable` object as an event source, by creating a sink binding.
*   Use a container as an event source, by creating a container source.

{% leveloffset +1 %}{% include "./modules/serverless-sinkbinding-intro.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/serverless-sinkbinding-yaml.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/serverless-sinkbinding-kn.md" %}{% endleveloffset %}
{% leveloffset +3 %}{% include "./modules/specifying-sink-flag-kn.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/serverless-sinkbinding-odc.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/serverless-sinkbinding-reference.md" %}{% endleveloffset %}

## Container source {id="serverless-custom-event-sources-containersource"}

Container sources create a container image that generates events and sends events to a sink. You can use a container source to create a custom event source, by creating a container image and a `ContainerSource` object that uses your image URI.

{% leveloffset +2 %}{% include "./modules/serverless-containersource-guidelines.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/serverless-kn-containersource.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/serverless-odc-create-containersource.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/serverless-containersource-reference.md" %}{% endleveloffset %}