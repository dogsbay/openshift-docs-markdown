{%- set _mod_docs_content_type = "CONCEPT" %}
# Event delivery behavior patterns for channels and brokers {id="serverless-event-delivery-component-behaviors_{{ context }}"}

Different channel and broker types have their own behavior patterns that are followed for event delivery.

## Knative channels and brokers for Apache Kafka {id="serverless-event-delivery-component-behaviors-kafka_{{ context }}"}

If an event is successfully delivered to a Kafka channel or broker receiver, the receiver responds with a `202` status code, which means that the event has been safely stored inside a Kafka topic and is not lost.

If the receiver responds with any other status code, the event is not safely stored, and steps must be taken by the user to resolve the issue.