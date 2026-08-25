{%- set _mod_docs_content_type = "PROCEDURE" %}
# Examining metrics of a service in the dashboard {id="serverless-monitoring-services-examining-metrics-dashboard_{{ context }}"}

**Prerequisites**

*   You have logged in to the {{ product_title }} web console.
*   You have installed the {{ ServerlessOperatorName }} and Knative Serving.

**Procedure**

1.  In the web console, navigate to the **Observe** → **Metrics** interface.
1.  Select the `Knative User Services (Queue Proxy metrics)` dashboard.
1.  Select the **Namespace**, **Configuration**, and **Revision** that correspond to your application.
1.  Observe the visualized metrics:
    ![Observing metrics of a service using a dashboard](/_assets/images/serverless-monitoring-service-example-dashboard.png)