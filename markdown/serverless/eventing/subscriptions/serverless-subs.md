{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating subscriptions {id="serverless-subs"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "serverless-subs" %}

After you have created a channel and an event sink, you can create a subscription to enable event delivery. Subscriptions are created by configuring a `Subscription` object, which specifies the channel and the sink (also known as a _subscriber_) to deliver events to.

{% leveloffset +1 %}{% include "./modules/serverless-creating-subscription-admin-web-console.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-creating-subscriptions-odc.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-creating-subscriptions-yaml.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-creating-subscriptions-kn.md" %}{% endleveloffset %}

## Next steps {id="next-steps_serverless-subs"}
*   Configure event delivery parameters that are applied in cases where an event fails to be delivered to an event sink. See [Examples of configuring event delivery parameters](/serverless/eventing/brokers/serverless-event-delivery#serverless-configuring-event-delivery-examples_serverless-event-delivery).