{%- set _mod_docs_content_type = "REFERENCE" %}
# Provided Operator metrics {id="nodes-cma-autoscaling-custom-metrics-provided_{{ context }}"}

The Custom Metrics Autoscaler Operator exposes the following metrics, which you can view by using the {{ product_title }} web console.

**Custom Metric Autoscaler Operator metrics**

| Metric name | Description |
| --- | --- |
| `keda_scaler_activity` | Whether the particular scaler is active or inactive. A value of `1` indicates the scaler is active; a value of `0` indicates the scaler is inactive. |
| `keda_scaler_metrics_value` | The current value for each scaler’s metric, which is used by the Horizontal Pod Autoscaler (HPA) in computing the target average. |
| `keda_scaler_metrics_latency` | The latency of retrieving the current metric from each scaler. |
| `keda_scaler_errors` | The number of errors that have occurred for each scaler. |
| `keda_scaler_errors_total` | The total number of errors encountered for all scalers. |
| `keda_scaled_object_errors` | The number of errors that have occurred for each scaled obejct. |
| `keda_resource_totals` | The total number of Custom Metrics Autoscaler custom resources in each namespace for each custom resource type. |
| `keda_trigger_totals` | The total number of triggers by trigger type. |

**Custom Metrics Autoscaler Admission webhook metrics**

The Custom Metrics Autoscaler Admission webhook also exposes the following Prometheus metrics.

|     |     |
| --- | --- |
| Metric name | Description |
| `keda_scaled_object_validation_total` | The number of scaled object validations. |
| `keda_scaled_object_validation_errors` | The number of validation errors. |