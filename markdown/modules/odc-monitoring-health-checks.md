{%- set _mod_docs_content_type = "PROCEDURE" %}
# Monitoring health check failures using the Developer perspective {id="odc-monitoring-health-checks"}

In case an application health check fails, you can use the **Topology** view to monitor these health check violations.

**Prerequisites**

*   You have switched to the **Developer** perspective in the web console.
*   You have created and deployed an application on {{ product_title }} using the **Developer** perspective.
*   You have added health checks to your application.

**Procedure**

1.  In the **Topology** view, click on the application node to see the side panel.
1.  Click the **Observe** tab to see the health check failures in the **Events (Warning)** section.
1.  Click the down arrow adjoining **Events (Warning)** to see the details of the health check failure.