{%- set _mod_docs_content_type = "CONCEPT" %}
# Using the Knative broker for Apache Kafka {id="serverless-kafka-developer_{{ context }}"}

THe Knative broker implementation for Apache Kafka provides integration options for you to use supported versions of the Apache Kafka message streaming platform with {{ ServerlessProductName }}. Kafka provides options for event source, channel, broker, and event sink capabilities.

{%- if openshift_enterprise %}

:::note

The Knative broker implementation for Apache Kafka is not currently supported for {{ ibm_z_name }} and {{ ibm_power_name }}.

:::

{% endif %}

Knative broker for Apache Kafka provides additional options, such as:

*   Kafka source
*   Kafka channel
*   Kafka broker
*   Kafka sink