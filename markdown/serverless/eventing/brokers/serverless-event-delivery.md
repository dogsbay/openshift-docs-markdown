{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Event delivery {id="serverless-event-delivery"}
{%- set context = "serverless-event-delivery" %}

You can configure event delivery parameters that are applied in cases where an event fails to be delivered to an event sink. Configuring event delivery parameters, including a dead letter sink, ensures that any events that fail to be delivered to an event sink are retried. Otherwise, undelivered events are dropped.

{% leveloffset +1 %}{% include "./modules/serverless-event-delivery-component-behaviors.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/serverless-event-delivery-parameters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/serverless-configuring-event-delivery-examples.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/trigger-event-delivery-config.md" %}{% endleveloffset %}