{%- set _mod_docs_content_type = "PROCEDURE" %}
# Monitoring your application metrics {id="odc-monitoring-your-application-metrics_{{ context }}"}

Inspect alerts, metric charts, and health check status for individual application workloads to troubleshoot performance issues and monitor health directly from the topology view. {._abstract}

**Procedure**

1.  In the **Developer** perspective, navigate to the **Topology** view.
1.  Click the workload node to open the side panel.
1.  Select the **Observe** tab to view workload-specific metrics:
    *   Review active critical and warning alerts associated with the workload.
    *   View CPU, memory, and bandwidth usage charts.
    *   Click **View monitoring dashboard** to open the full metrics dashboard for the workload.

        :::note

        Only critical and warning alerts in the **Firing** state are displayed in the **Topology** view. Alerts in the **Silenced**, **Pending** and **Not Firing** states are not displayed.
        
        :::