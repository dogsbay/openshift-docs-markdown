---
title: Configuring the Network Observability Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring the Network Observability Operator {id="configuring-network-observability-operators"}
{%- set context = "network_observability" %}

Configure the Network Observability Operator by updating the cluster-wide `FlowCollector` API resource (cluster) to manage component configurations and flow collection settings. {._abstract}

The `FlowCollector` is explicitly created during installation. Since this resource operates cluster-wide, only a single `FlowCollector` is allowed, and it must be named `cluster`. For more information, see the "FlowCollector API reference".

{% leveloffset +1 %}{% include "./modules/network-observability-flowcollector-view.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-flowcollector-example.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [FlowCollector API reference](/observability/network_observability/flowcollector-api#network-observability-flowcollector-api-specifications_network_observability)
*   [Working with conversation tracking](/observability/network_observability/observing-network-traffic#network-observability-working-with-conversations_nw-observe-network-traffic)

{% leveloffset +1 %}{% include "./modules/network-observability-grant-permissions-custom-namespace-and-secret-access.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-create-cluster-role-bindings-custom-namespace.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-grant-access-kafka-secrets.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-grant-access-lokistack-secrets.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-flowcollector-kafka-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-enriched-flows.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Network flows format reference](/observability/network_observability/json-flows-format-reference#network-observability-flows-format_json_reference)

{% leveloffset +1 %}{% include "./modules/network-observability-configuring-FLP-sampling.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-filter-network-flows-at-ingestion.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Filtering eBPF flow data using multiple rules](/observability/network_observability/observing-network-traffic#network-observability-filtering-ebpf-rule_nw-observe-network-traffic)

{% leveloffset +1 %}{% include "./modules/network-observability-configuring-quickfilters-flowcollector.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-resource-recommendations.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-resources-table.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-total-resource-usage.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Observing the network traffic from the traffic flows view](/observability/network_observability/observing-network-traffic#network-observability-trafficflow_nw-observe-network-traffic)
*   [Network observability without Loki](/observability/network_observability/installing-operators#network-observability-without-loki_network_observability)
*   [Network Flows format reference](/observability/network_observability/json-flows-format-reference#network-observability-flows-format_json_reference)