---
title: About network observability
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About network observability {id="network-observability-overview"}
{%- set context = "network-observability-overview" %}

Use the Network Observability Operator to observe network traffic via `eBPF` technology, providing troubleshooting insights through Prometheus metrics and Loki logs. {._abstract}

You can view and analyze this stored information in the {{ product_title }} console for further insight and troubleshooting.

{% leveloffset +1 %}{% include "./modules/network-observability-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-dependency-network-observability-operator.md" %}{% endleveloffset %}

<a name="additional-resources-operator_{{ context }}"></a>**Additional resources**
{._additional-resources}

*   [Network observability without Loki](/observability/network_observability/installing-operators#network-observability-without-loki_network_observability)
*   [Red Hat AMQ Streams](https://docs.redhat.com/en/documentation/red_hat_streams_for_apache_kafka/2.2)

{% leveloffset +1 %}{% include "./modules/network-observability-openshift-console-integration.md" %}{% endleveloffset %}

<a name="additional-resources-console_{{ context }}"></a>**Additional resources**
{._additional-resources}

*   [Enabling multi-tenancy in network observability](/observability/network_observability/installing-operators#network-observability-multi-tenancy_network_observability)

{% leveloffset +2 %}{% include "./modules/network-observability-dashboards.md" %}{% endleveloffset %}

<a name="additional-resources-dashboards_{{ context }}"></a>**Additional resources**
{._additional-resources}

*   [Observing the network traffic from the Overview view](/observability/network_observability/observing-network-traffic#network-observability-network-traffic-overview-view_nw-observe-network-traffic)
*   [Network observability metrics](/observability/network_observability/metrics-alerts-dashboards#network-observability-metrics_metrics-dashboards-alerts)
*   [Health dashboards](/observability/network_observability/network-observability-operator-monitoring#network-observability-health-dashboard-overview_network_observability)

{% leveloffset +2 %}{% include "./modules/network-observability-topology-views.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-traffic-flow-tables.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-cli.md" %}{% endleveloffset %}