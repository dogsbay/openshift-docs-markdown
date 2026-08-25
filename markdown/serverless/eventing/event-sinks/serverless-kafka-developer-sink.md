{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Sink for Apache Kafka {id="serverless-kafka-developer-sink"}
{%- set context = "serverless-kafka-developer-sink" %}

Apache Kafka sinks are a type of [event sink](/serverless/eventing/event-sinks/serverless-event-sinks#serverless-event-sinks) that are available if a cluster administrator has enabled Apache Kafka on your cluster. You can send events directly from an [event source](/serverless/eventing/event-sources/knative-event-sources#knative-event-sources) to a Kafka topic by using a Kafka sink.

{% leveloffset +1 %}{% include "./modules/serverless-kafka-sink.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/serverless-creating-a-kafka-event-sink.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/serverless-kafka-sink-security-config.md" %}{% endleveloffset %}