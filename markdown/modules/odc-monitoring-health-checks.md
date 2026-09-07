{%- set _mod_docs_content_type = "PROCEDURE" %}
# Monitoring health check failures using the Developer perspective {id="odc-monitoring-health-checks_{{ context }}"}

You can monitor health check failures for a deployed application from the **Topology** view in the **Developer** perspective. Use the **Observe** tab to view events that report probe failures and show when containers need attention before users are affected. {._abstract}

**Prerequisites**

*   You have switched to the **Developer** perspective in the web console.
*   You have created and deployed an application on {{ product_title }} using the **Developer** perspective.
*   You have added health checks to your application.

**Procedure**

1.  In the **Topology** view, click the application node to see the side panel.
1.  Click the **Observe** tab to see health check failure events in the **Events (Warning)** section.
1.  Click the down arrow adjoining **Events (Warning)** to see the details of the health check failure.