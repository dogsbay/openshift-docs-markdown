{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connect an event source to a function using the Developer perspective {id="serverless-connect-func-source-odc_{{ context }}"}

Functions are deployed as Knative services on an {{ product_title }} cluster. When you create an event source by using the {{ product_title }} web console, you can specify a deployed function that events are sent to from that source.

**Prerequisites**

*   The {{ ServerlessOperatorName }}, Knative Serving, and Knative Eventing are installed on your {{ product_title }} cluster.
*   You have logged in to the web console and are in the **Developer** perspective.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.
*   You have created and deployed a function.

**Procedure**

1.  Create an event source of any type, by navigating to **+Add** → **Event Source** and selecting the event source type that you want to create.
1.  In the **Sink** section of the **Create Event Source** form view, select your function in the **Resource** list.
1.  Click **Create**.

**Verification**

You can verify that the event source was created and is connected to the function by viewing the **Topology** page.

1.  In the **Developer** perspective, navigate to **Topology**.
1.  View the event source and click the connected function to see the function details in the right panel.