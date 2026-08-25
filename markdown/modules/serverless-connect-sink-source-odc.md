{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connect an event source to a sink using the Developer perspective {id="serverless-connect-sink-source-odc_{{ context }}"}

**Prerequisites**

*   The {{ ServerlessOperatorName }}, Knative Serving, and Knative Eventing are installed on your {{ product_title }} cluster.
*   You have logged in to the web console and are in the **Developer** perspective.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.
*   You have created a sink, such as a Knative service, channel or broker.

**Procedure**

1.  Create an event source of any type, by navigating to **+Add** -> **Event Source** and selecting the event source type that you want to create.
1.  In the **Sink** section of the **Create Event Source** form view, select your sink in the **Resource** list.
1.  Click **Create**.

**Verification**

You can verify that the event source was created and is connected to the sink by viewing the **Topology** page.

1.  In the **Developer** perspective, navigate to **Topology**.
1.  View the event source and click the connected sink to see the sink details in the right panel.