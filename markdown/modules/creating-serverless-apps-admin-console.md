{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating serverless applications using the Administrator perspective {id="creating-serverless-apps-admin-console_{{ context }}"}

{% include "./snippets/serverless-apps.md" %}

After the service is created and the application is deployed, Knative creates an immutable revision for this version of the application. Knative also performs network programming to create a route, ingress, service, and load balancer for your application and automatically scales your pods up and down based on traffic.

**Prerequisites**

To create serverless applications using the **Administrator** perspective, ensure that you have completed the following steps.

*   The {{ ServerlessOperatorName }} and Knative Serving are installed.
*   You have logged in to the web console and are in the **Administrator** perspective.

**Procedure**

1.  Navigate to the **Serverless** → **Serving** page.
1.  In the **Create** list, select **Service**.
1.  Manually enter YAML or JSON definitions, or by dragging and dropping a file into the editor.
1.  Click **Create**.