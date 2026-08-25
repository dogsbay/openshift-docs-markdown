{%- set _mod_docs_content_type = "REFERENCE" %}
# Flowmetric chart configuration examples {id="network-observability-flowmetrics-charts-examples_{{ context }}"}

These `FlowMetric` custom resource examples demonstrate how to define charts in the {{ product_title }} web console for tracking external ingress traffic and round-trip time (RTT) latency. {._abstract}

## Ingress bytes chart for cluster external sources {id="chart-tracking-ingress-bytes-cluster-external-sources_{{ context }}"}

Use the following configuration to track the rate of ingress traffic from cluster external sources. These charts help identify bandwidth usage per workload.

```yaml
apiVersion: flows.netobserv.io/v1alpha1
kind: FlowMetric
metadata:
  name: flowmetric-cluster-external-ingress-traffic
  namespace: netobserv
# ...
  charts:
  - dashboardName: Main
    title: External ingress traffic
    unit: Bps
    type: SingleStat
    queries:
    - promQL: "sum(rate($METRIC[2m]))"
      legend: ""
  - dashboardName: Main
    sectionName: External
    title: Top external ingress traffic per workload
    unit: Bps
    type: StackArea
    queries:
    - promQL: "sum(rate($METRIC{DstK8S_Namespace!=\"\"}[2m])) by (DstK8S_Namespace, DstK8S_OwnerName)"
      legend: "{{DstK8S_Namespace}} / {{DstK8S_OwnerName}}"
# ...
```

where:


`metadata.namespace`
:   Specifies the namespace where the `FlowMetric` resources are created. This must match the namespace defined in the `FlowCollector` `spec.namespace`, which is `netobserv` by default.

`spec.charts.dashboardName`
:   Specifies the name of the dashboard. Using a different `dashboardName` creates a new dashboard that is prefixed with `Netobserv`. For example, **Netobserv / &lt;dashboard_name>**.

## RTT latency chart for cluster external ingress traffic {id="chart-rtt-latency-cluster-external-ingress-traffic_{{ context }}"}

Use the following configuration to monitor round-trip time (RTT) for cluster external ingress traffic. These examples use the `histogram_quantile` function to display the 50th and 99th percentiles (p50 and p99).

```yaml
apiVersion: flows.netobserv.io/v1alpha1
kind: FlowMetric
metadata:
  name: flowmetric-cluster-external-ingress-traffic
  namespace: netobserv
# ...
  charts:
  - dashboardName: Main
    title: External ingress TCP latency
    unit: seconds
    type: SingleStat
    queries:
    - promQL: "histogram_quantile(0.99, sum(rate($METRIC_bucket[2m])) by (le)) > 0"
      legend: "p99"
  - dashboardName: Main
    sectionName: External
    title: "Top external ingress sRTT per workload, p50 (ms)"
    unit: seconds
    type: Line
    queries:
    - promQL: "histogram_quantile(0.5, sum(rate($METRIC_bucket{DstK8S_Namespace!=\"\"}[2m])) by (le,DstK8S_Namespace,DstK8S_OwnerName))*1000 > 0"
      legend: "{{DstK8S_Namespace}} / {{DstK8S_OwnerName}}"
  - dashboardName: Main
    sectionName: External
    title: "Top external ingress sRTT per workload, p99 (ms)"
    unit: seconds
    type: Line
    queries:
    - promQL: "histogram_quantile(0.99, sum(rate($METRIC_bucket{DstK8S_Namespace!=\"\"}[2m])) by (le,DstK8S_Namespace,DstK8S_OwnerName))*1000 > 0"
      legend: "{{DstK8S_Namespace}} / {{DstK8S_OwnerName}}"
# ...
```

where:


`metadata.namespace`
:   Specifies the namespace where the `FlowMetric` resources are created. This must match the namespace defined in the `FlowCollector` `spec.namespace`, which is `netobserv` by default.

`spec.charts.dashboardName`
:   Specifies the name of the dashboard. Using a different `dashboardName` creates a new dashboard that is prefixed with `Netobserv`. For example, **Netobserv / &lt;dashboard_name>**.

## Calculate histogram averages {id="calculate-histogram-averages_{{ context }}"}

You can show averages of histograms by dividing the metric, `$METRIC_sum`, by the metric, `$METRIC_count`, which are automatically generated when you create a histogram. With the preceding example, the Prometheus query to do this is as follows:

```yaml
promQL: "(sum(rate($METRIC_sum{DstK8S_Namespace!=\"\"}[2m])) by (DstK8S_Namespace,DstK8S_OwnerName) / sum(rate($METRIC_count{DstK8S_Namespace!=\"\"}[2m])) by (DstK8S_Namespace,DstK8S_OwnerName))*1000"
```