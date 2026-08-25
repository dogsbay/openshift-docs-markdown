{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating brokers {id="serverless-using-brokers"}
{%- set context = "serverless-using-brokers" %}

Knative provides a default, channel-based broker implementation. This channel-based broker can be used for development and testing purposes, but does not provide adequate event delivery guarantees for production environments.

If a cluster administrator has configured your {{ ServerlessProductName }} deployment to use Apache Kafka as the default broker type, creating a broker by using the default settings creates a Knative broker for Apache Kafka.

If your {{ ServerlessProductName }} deployment is not configured to use the Knative broker for Apache Kafka as the default broker type, the channel-based broker is created when you use the default settings in the following procedures.

{% leveloffset +1 %}{% include "./modules/serverless-create-broker-kn.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-creating-broker-annotation.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-creating-broker-labeling.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-deleting-broker-injection.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-creating-a-broker-odc.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-creating-broker-admin-web-console.md" %}{% endleveloffset %}

## Next steps {id="next-steps_serverless-using-brokers"}
*   Configure event delivery parameters that are applied in cases where an event fails to be delivered to an event sink. See [Examples of configuring event delivery parameters](/serverless/eventing/brokers/serverless-event-delivery#serverless-configuring-event-delivery-examples_serverless-event-delivery).

## Additional resources {id="additional-resources_serverless-using-brokers" ._additional-resources}
*   [Configuring the default broker class](/serverless/eventing/brokers/serverless-global-config-broker-class-default#serverless-global-config-broker-class-default)
*   [Triggers](/serverless/eventing/triggers/serverless-triggers#serverless-triggers)
[Event sources](/serverless/eventing/event-sources/knative-event-sources#knative-event-sources)
*   [Event delivery](/serverless/eventing/brokers/serverless-event-delivery#serverless-event-delivery)