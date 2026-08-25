{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Triggers overview {id="serverless-triggers"}
{%- set context = "serverless-triggers" %}

{% include "./snippets/serverless-brokers-intro.md" %}

If you are using a Knative broker for Apache Kafka, you can configure the delivery order of events from triggers to event sinks. See [Configuring event delivery ordering for triggers](/serverless/eventing/triggers/serverless-triggers#trigger-event-delivery-config_serverless-triggers).

{% leveloffset +1 %}{% include "./modules/trigger-event-delivery-config.md" %}{% endleveloffset %}

## Next steps {id="next-steps_serverless-triggers"}
*   Configure event delivery parameters that are applied in cases where an event fails to be delivered to an event sink. See [Examples of configuring event delivery parameters](/serverless/eventing/brokers/serverless-event-delivery#serverless-configuring-event-delivery-examples_serverless-event-delivery).