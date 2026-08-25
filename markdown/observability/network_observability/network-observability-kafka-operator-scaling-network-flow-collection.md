---
title: Scaling network flow collection with Kafka
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Scaling network flow collection with Kafka {id="network-observability-kafka-operator-scaling-network-flow-collection"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "network-observability-kafka-operator-scaling-network-flow-collection" %}

Scale your network flow collection by using the Kafka Operator to manage high-volume telemetry. Configure compression to reduce network bandwidth while balancing CPU overhead in large-scale cluster environments.

{% leveloffset +1 %}{% include "./modules/network-observability-kafka-for-large-scale-environments.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-kafka-compression-benefits.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-configuring-kafka-compression.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-kafka-compression-codec-reference.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Red Hat AMQ Streams documentation](https://access.redhat.com/documentation/en-us/red_hat_amq_streams)
*   [Configuring the FlowCollector resource with Kafka](/observability/network_observability/configuring-operator#network-observability-flowcollector-kafka-config_network_observability)