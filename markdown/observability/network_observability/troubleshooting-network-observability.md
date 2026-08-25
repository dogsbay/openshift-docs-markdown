---
title: Troubleshooting network observability
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Troubleshooting network observability {id="installing-troubleshooting"}
{%- set context = "network-observability-troubleshooting" %}

Perform diagnostic actions to troubleshoot common issues related to the Network Observability Operator and its components. {._abstract}

{% leveloffset +1 %}{% include "./modules/troubleshooting-network-observability-must-gather.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/troubleshooting-network-observability-after-installation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/troubleshooting-network-observability-flowlogs-pipeline-kafka.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/troubleshooting-network-observability-network-flow.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/troubleshooting-network-observability-controller-manager-pod-out-of-memory.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/troubleshooting-network-observability-query-loki-manually.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Resource considerations](/observability/network_observability/configuring-operator#network-observability-resources-table_network_observability)

{% leveloffset +1 %}{% include "./modules/troubleshooting-network-observability-loki-resource-exhausted.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/troubleshooting-network-observability-loki-empty-ring.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/troubleshooting-network-observability-loki-tenant-rate-limit.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/troubleshooting-network-observability-loki-large-query-timeout.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Network flows format reference](/observability/network_observability/json-flows-format-reference#network-observability-flows-format_json_reference)
*   [FlowMetric API reference](/observability/network_observability/flowmetric-api#flowmetric-flows-netobserv-io-v1alpha1)
*   [Configuring custom metrics by using FlowMetric API](/observability/network_observability/metrics-alerts-dashboards#network-observability-configuring-custom-metrics_metrics-dashboards-alerts)