{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Broker types {id="serverless-broker-types"}
{%- set context = "serverless-broker-types" %}

Cluster administrators can set the default broker implementation for a cluster. When you create a broker, the default broker implementation is used, unless you provide set configurations in the `Broker` object.

## Default broker implementation for development purposes {id="serverless-broker-types-default_{{ context }}"}

Knative provides a default, channel-based broker implementation. This channel-based broker can be used for development and testing purposes, but does not provide adequate event delivery guarantees for production environments. The default broker is backed by the `InMemoryChannel` channel implementation by default.

If you want to use Apache Kafka to reduce network hops, use the Knative broker implementation for Apache Kafka. Do not configure the channel-based broker to be backed by the `KafkaChannel` channel implementation.

## Production-ready Knative broker implementation for Apache Kafka {id="serverless-broker-types-production_{{ context }}"}

{% include "./snippets/serverless-about-kafka-broker.md" %}