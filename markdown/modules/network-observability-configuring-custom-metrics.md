{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring custom metrics by using FlowMetric API {id="network-observability-configuring-custom-metrics_{{ context }}"}

Configure the `FlowMetric` API to create custom Prometheus metrics by mapping flow log fields as labels to meet specific monitoring needs. {._abstract}

**Procedure**

1.  In the web console, navigate to **Ecosystem** -> **Installed Operators**.
1.  In the **Provided APIs** heading for the **NetObserv Operator**, select **FlowMetric**.
1.  In the **Project:**  dropdown list, select the project of the Network Observability Operator instance.
1.  Click **Create FlowMetric**.
1.  Configure the `FlowMetric` resource. See "Custom metrics configuration examples".

**Verification**

1.  Once the pods refresh, navigate to **Observe** -> **Metrics**.
1.  In the **Expression** field, type the metric name to view the corresponding result. You can also enter an expression, such as `topk(5, sum(rate(netobserv_cluster_external_ingress_bytes_total{DstK8S_Namespace="my-namespace"}[2m])) by (DstK8S_HostName, DstK8S_OwnerName, DstK8S_OwnerType))`