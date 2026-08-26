{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a ping source by using the web console {id="serverless-pingsource-odc_{{ context }}"}

After Knative Eventing is installed on your cluster, you can create a ping source by using the web console. Using the {{ product_title }} web console provides a streamlined and intuitive user interface to create an event source.

**Prerequisites**

*   You have logged in to the {{ product_title }} web console.
*   The {{ ServerlessOperatorName }}, Knative Serving and Knative Eventing are installed on the cluster.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

**Procedure**

1.  To verify that the ping source is working, create a simple Knative
service that dumps incoming messages to the logs of the service.
    1.  In the **Developer** perspective, navigate to **+Add** → **YAML**.
    1.  Copy the example YAML:
        ```yaml
        apiVersion: serving.knative.dev/v1
        kind: Service
        metadata:
          name: event-display
        spec:
          template:
            spec:
              containers:
                - image: quay.io/openshift-knative/knative-eventing-sources-event-display:latest
        ```
    1.  Click **Create**.
1.  Create a ping source in the same namespace as the service created in the previous step, or any other sink that you want to send events to.
    1.  In the **Developer** perspective, navigate to **+Add** → **Event Source**. The  **Event Sources** page is displayed.
    1.  Optional: If you have multiple providers for your event sources, select the required provider from the **Providers** list to filter the available event sources from the provider.
    1.  Select **Ping Source** and then click **Create Event Source**. The **Create Event Source** page is displayed.

        :::note

        You can configure the **PingSource** settings by using the **Form view** or **YAML view** and can switch between the views. The data is persisted when switching between the views.
        
        :::

    1.  Enter a value for **Schedule**. In this example, the value is `*/2 * * * *`, which creates a PingSource that sends a message every two minutes.
    1.  Optional: You can enter a value for **Data**, which is the message payload.
    1.  Select a **Sink**. This can be either a **Resource** or a **URI**. In this example, the `event-display` service created in the previous step is used as the **Resource** sink.
    1.  Click **Create**.

**Verification**

You can verify that the ping source was created and is connected to the sink by viewing the **Topology** page.

1.  In the **Developer** perspective, navigate to **Topology**.
1.  View the ping source and sink.
    ![View the ping source and service in the Topology view](/images/verify-pingsource-ODC.png)

**Deleting the ping source**

1.  Navigate to the **Topology** view.
1.  Right-click the API server source and select **Delete Ping Source**.