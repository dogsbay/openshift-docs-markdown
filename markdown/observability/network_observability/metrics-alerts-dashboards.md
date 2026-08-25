---
title: Using metrics with dashboards and alerts
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using metrics with dashboards and alerts {id="metrics-dashboards-alerts"}
{%- set context = "metrics-dashboards-alerts" %}

The Network Observability Operator uses the `flowlogs-pipeline` component to generate metrics from flow logs. Use these metrics to set custom alerts and view dashboards for network activity analysis. {._abstract}

{% leveloffset +1 %}{% include "./modules/network-observability-viewing-dashboards.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-metrics-names.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-includelist-example.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-custom-metrics.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-configuring-custom-metrics.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-configuring-custom-metrics-examples.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-creating-metrics-network-events.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Network Flows format reference](/observability/network_observability/json-flows-format-reference#network-observability-flows-format_json_reference)

{% leveloffset +1 %}{% include "./modules/network-observability-flowmetrics-charts.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-flowmetrics-charts-examples.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-tcp-flag-syn-flood.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Filtering eBPF flow data using a global rule](/observability/network_observability/observing-network-traffic#network-observability-filtering-ebpf-rule_nw-observe-network-traffic)
*   [Creating alerting rules for user-defined projects](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/managing_alerts/managing-alerts-as-a-developer#creating-alerting-rules-for-user-defined-projects_managing-alerts-as-a-developer)
*   [Troubleshooting high cardinality metrics- Determining why Prometheus is consuming a lot of disk space](/support/troubleshooting/investigating-monitoring-issues#determining-why-prometheus-is-consuming-disk-space_investigating-monitoring-issues)