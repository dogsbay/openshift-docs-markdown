{%- set _mod_docs_content_type = "CONCEPT" %}
# Installing Kafka (optional) {id="network-observability-kafka-option_{{ context }}"}

The Kafka Operator is supported for large-scale environments. Kafka provides high-throughput and low-latency data feeds for forwarding network flow data in a more resilient, scalable way. {._abstract}

You can install the Kafka Operator as Red Hat AMQ Streams from the Operator Hub, just as the {{ loki_op }} and Network Observability Operator were installed. Refer to "Configuring the FlowCollector resource with Kafka" to configure Kafka as a storage option.


:::note

To uninstall Kafka, refer to the uninstallation process that corresponds with the method you used to install.

:::