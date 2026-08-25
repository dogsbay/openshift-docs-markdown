{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Event sources {id="knative-event-sources"}
{%- set context = "knative-event-sources" %}

A Knative _event source_ can be any Kubernetes object that generates or imports cloud events, and relays those events to another endpoint, known as a [_sink_](/serverless/eventing/event-sinks/serverless-event-sinks#serverless-event-sinks). Sourcing events is critical to developing a distributed system that reacts to events.

You can create and manage Knative event sources by using the **Developer** perspective in the {{ product_title }} web console, the Knative (`kn`) CLI, or by applying YAML files.

Currently, {{ ServerlessProductName }} supports the following event source types:


[API server source](/serverless/eventing/event-sources/serverless-apiserversource#serverless-apiserversource)
:   Brings Kubernetes API server events into Knative. The API server source sends a new event each time a Kubernetes resource is created, updated or deleted.


[Ping source](/serverless/eventing/event-sources/serverless-pingsource#serverless-pingsource)
:   Produces events with a fixed payload on a specified cron schedule.


[Kafka event source](/serverless/eventing/event-sources/serverless-kafka-developer-source#serverless-kafka-developer-source)
:   Connects an Apache Kafka cluster to a sink as an event source.

You can also create a [custom event source](/serverless/eventing/event-sources/serverless-custom-event-sources#serverless-custom-event-sources).