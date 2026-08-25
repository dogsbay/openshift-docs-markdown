{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring custom charts using FlowMetric API {id="network-observability-custom-charts-flowmetrics_{{ context }}"}

Generate custom charts for {{ product_title }} web console dashboards by defining the charts section of the `FlowMetric` custom resource. {._abstract}

You can view custom charts as an administrator in the **Dashboard** menu.

**Procedure**

1.  In the web console, navigate to **Ecosystem** -> **Installed Operators**.
1.  In the **Provided APIs** heading for the **NetObserv Operator**, select **FlowMetric**.
1.  In the **Project:**  dropdown list, select the project of the Network Observability Operator instance.
1.  Click **Create FlowMetric**.
1.  Configure the `FlowMetric` resource. See "Flowmetric chart configuration examples".

**Verification**

1.  Once the pods refresh, navigate to **Observe** -> **Dashboards**.
1.  Search for the **NetObserv / Main** dashboard. View two panels under the **NetObserv / Main** dashboard, or optionally a dashboard name that you create:
    *   A textual single statistic showing the global external ingress rate summed across all dimensions
    *   A timeseries graph showing the same metric per destination workload

For more information about the query language, refer to the [Prometheus documentation](https://prometheus.io/docs/prometheus/latest/querying/basics/).