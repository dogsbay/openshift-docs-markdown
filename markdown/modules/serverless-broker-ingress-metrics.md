{%- set _mod_docs_content_type = "REFERENCE" %}
# Broker ingress metrics {id="serverless-broker-ingress-metrics_{{ context }}"}

You can use the following metrics to debug the broker ingress, see how it is performing, and see which events are being dispatched by the ingress component.

| Metric name | Description | Type | Tags | Unit |
| --- | --- | --- | --- | --- |
| `event_count` | Number of events received by a broker. | Counter | `broker_name`, `event_type`, `namespace_name`, `response_code`, `response_code_class`, `unique_name` | Integer (no units) |
| `event_dispatch_latencies` | The time taken to dispatch an event to a channel. | Histogram | `broker_name`, `event_type`, `namespace_name`, `response_code`, `response_code_class`, `unique_name` | Milliseconds |