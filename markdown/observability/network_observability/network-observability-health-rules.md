---
title: Network observability health rules
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Network observability health rules {id="network-observability-health-rules"}
{%- set context = "network-observability-health-rules" -%}
{%- set toc = true %}
{% include "./_attributes/common-attributes.md" %}

The Network Observability Operator provides alerts by using built-in metrics and the {{ product_title }} monitoring stack to report cluster network health.


:::important

Network observability health alerts require {{ product_title }} 4.16 or later.

:::


{% leveloffset +1 %}{% include "./modules/network-observability-health-rules-and-performance.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-health-rules-monitoring-and-alerting.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-health-rule-structure-customization.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-health-rules-promql-expressions-metadata.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-custom-health-rule-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-health-rules-recording-rules-performance-optimization.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-recording-rule-custom-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-disable-predefined-rules.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}
*   [List of default rules](/observability/network_observability/network-observability-health-rules#network-observability-default-rules_network-observability-health-rules)
*   [Viewing network observability metrics dashboards](/observability/network_observability/metrics-alerts-dashboards#network-observability-viewing-dashboards_metrics-dashboards-alerts)
*   [Creating alerts](/observability/network_observability/metrics-alerts-dashboards#network-observability-netobserv-dashboard-high-traffic-alert_metrics-dashboards-alerts)
*   [Monitoring stack architecture](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/about_monitoring/monitoring-stack-architecture)
*   [Network Observability Operator runbooks](https://github.com/openshift/runbooks/tree/master/alerts/network-observability-operator)