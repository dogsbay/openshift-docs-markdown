{%- set _mod_docs_content_type = "CONCEPT" %}
# Performance optimization with recording rules {id="network-observability-recording-rules-performance-optimization_{{ context }}"}

In large-scale clusters, recording rules optimize how Prometheus handles network data. Recording rules improve dashboard responsiveness and reduce the computational overhead of complex queries. {._abstract}

## Optimization benefits {id="network-observability-recording-rules-benefits_{{ context }}"}
Recording rules pre-compute complex Prometheus Query Language (PromQL) expressions and save the results as new time series. Unlike alerting rules, recording rules do not monitor thresholds.

Using recording rules provides the following advantages:


Improved performance
:   Pre-computing Prometheus queries allows dashboards to load faster by avoiding on-demand calculations for long-term trends.

Resource efficiency
:   Calculating data at fixed intervals reduces CPU load on the Prometheus server compared to recalculating data on every dashboard refresh.

Simplified queries
:   Using short metric names, such as `cluster:network_traffic:rate_5m`, simplifies complex aggregate calculations in custom dashboards.

## Comparison of rule modes {id="network-observability-alert-vs-recording-comparison_{{ context }}"}
The following table compares rule modes based on the expected outcome:

| Feature | Alerting rules | Recording rules |
| --- | --- | --- |
| Primary goal | Issue notification. | Persistent metric history. |
| Data output | Alerting state. | New time series metric. |
| UI visibility | **Alerting** and **Network Health** views. | **Metrics Explorer** and **Network Health** views. |
| Notifications | Triggers `Alertmanager` notifications. | Does not trigger notifications. |

## Integrating recording rules with the health dashboard {id="network-observability-integrating-recording-rules-with-health-dashboard_{{ context }}"}

Custom recording rules that contribute to the **Network Health** dashboard must meet specific metadata requirements.


Label requirements
:   Include the `netobserv: "true"` label in the `labels` field of the rule and the `PrometheusRule` metadata. The Network Observability Operator identifies `PrometheusRule` resources cluster-wide by using this label.


Annotation requirements
:   Include the `netobserv.io/network-health` annotation in the `PrometheusRule` metadata. This annotation is required for recording rules to appear in the **Network Health** dashboard. The value is a JSON object where keys are the metric names (the `record` field of each rule). Each value consists of the following fields:
    *   `summary`: An optional short title. This field supports Prometheus template syntax, such as `{{ $labels.namespace }}`.
    *   `description`: An optional description. This field supports Prometheus template syntax.
    *   `netobserv_io_network_health`: A required JSON string. For recording rules, use the `recordingThresholds` field instead of `threshold`. This field determines the health score and UI coloring, such as `{"info":"10","warning":"25","critical":"50"}`.