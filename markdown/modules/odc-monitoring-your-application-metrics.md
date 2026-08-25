{%- set _mod_docs_content_type = "PROCEDURE" %}
# Monitoring your application metrics {id="odc-monitoring-your-application-metrics_{{ context }}"}

After you create applications in your project and deploy them, you can use the **Topology** view in the **Developer** perspective to see the alerts and metrics for your application. Critical and warning alerts for your application are indicated on the workload node in the **Topology** view.

**Procedure**

To see the alerts for your workload:

1.  In the **Topology** view, click the workload to see the workload details in the right panel.
1.  Click the **Observe** tab to see the critical and warning alerts for the application; graphs for metrics, such as CPU, memory, and bandwidth usage; and all the events for the application.

    :::note

    Only critical and warning alerts in the **Firing** state are displayed in the **Topology** view. Alerts in the **Silenced**, **Pending** and **Not Firing** states are not displayed.
    
    :::


    **Figure 1. Monitoring application metrics**

    ![odc_app_metrics](/_assets/images/odc_app_metrics.png)
    1.  Click the alert listed in the right panel to see the alert details in the **Alert Details** page.
    1.  Click any of the charts to go to the **Metrics** tab to see the detailed metrics for the application.
    1.  Click **View monitoring dashboard** to see the monitoring dashboard for that application.