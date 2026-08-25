{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a container source by using the web console {id="serverless-odc-create-containersource_{{ context }}"}

After Knative Eventing is installed on your cluster, you can create a container source by using the web console. Using the {{ product_title }} web console provides a streamlined and intuitive user interface to create an event source.

**Prerequisites**

*   You have logged in to the {{ product_title }} web console.
*   The {{ ServerlessOperatorName }}, Knative Serving, and Knative Eventing are installed on your {{ product_title }} cluster.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

**Procedure**

1.  In the **Developer** perspective, navigate to **+Add** → **Event Source**. The  **Event Sources** page is displayed.
1.  Select **Container Source** and then click **Create Event Source**. The  **Create Event Source** page is displayed.
1.  Configure the **Container Source** settings by using the **Form view** or **YAML view**:

    :::note

    You can switch between the **Form view** and **YAML view**. The data is persisted when switching between the views.
    
    :::

    1.  In the **Image** field, enter the URI of the image that you want to run in the container created by the container source.
    1.  In the **Name** field, enter the name of the image.
    1.  Optional: In the **Arguments** field, enter any arguments to be passed to the container.
    1.  Optional: In the **Environment variables** field, add any environment variables to set in the container.
    1.  In the **Sink** section, add a sink where events from the container source are routed to. If you are using the **Form** view, you can choose from the following options:
        1.  Select **Resource** to use a channel, broker, or service as a sink for the event source.
        1.  Select **URI** to specify where the events from the container source are routed to.
1.  After you have finished configuring the container source, click **Create**.