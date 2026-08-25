{%- set _mod_docs_content_type = "CONCEPT" %}
# Custom metrics {id="network-observability-custom-metrics_{{ context }}"}

Define custom metrics from flowlog data using the `FlowMetric` API, leveraging log fields as Prometheus labels to customize dashboard information and monitor specific cluster data. {._abstract}

In every flowlogs data that is collected, there are several fields labeled per log, such as source name and destination name. These fields can be leveraged as Prometheus labels to enable the customization of cluster information on your dashboard.