{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating channels {id="serverless-creating-channels"}
{%- set context = "serverless-creating-channels" %}

{% include "./snippets/serverless-channels-intro.md" %}

{% leveloffset +1 %}{% include "./modules/serverless-creating-channel-admin-web-console.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-create-channel-odc.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-create-channel-kn.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-create-default-channel-yaml.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-create-kafka-channel-yaml.md" %}{% endleveloffset %}

## Next steps {id="next-steps_serverless-creating-channels"}

*   After you have created a channel, you can [connect the channel to a sink](/serverless/eventing/channels/connecting-channels-sinks#connecting-channels-sinks) so that the sink can receive events.
*   Configure event delivery parameters that are applied in cases where an event fails to be delivered to an event sink. See [Examples of configuring event delivery parameters](/serverless/eventing/brokers/serverless-event-delivery#serverless-configuring-event-delivery-examples_serverless-event-delivery).