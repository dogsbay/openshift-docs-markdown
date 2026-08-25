{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Connecting channels to sinks {id="connecting-channels-sinks"}
{%- set context = "connecting-channels-sinks" %}

Events that have been sent to a channel from an event source or producer can be forwarded to one or more sinks by using _subscriptions_.
You can create subscriptions by configuring a `Subscription` object, which specifies the channel and the sink (also known as a _subscriber_) that consumes the events sent to that channel.

{% leveloffset +1 %}{% include "./modules/serverless-creating-subscriptions-odc.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-creating-subscriptions-yaml.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-creating-subscriptions-kn.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-creating-subscription-admin-web-console.md" %}{% endleveloffset %}

## Next steps {id="next-steps_connecting-channels-sinks"}
*   Configure event delivery parameters that are applied in cases where an event fails to be delivered to an event sink. See [Examples of configuring event delivery parameters](/serverless/eventing/brokers/serverless-event-delivery#serverless-configuring-event-delivery-examples_serverless-event-delivery).