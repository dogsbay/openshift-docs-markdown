{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an API server source by using the web console {id="odc-creating-apiserversource_{{ context }}"}

After Knative Eventing is installed on your cluster, you can create an API server source by using the web console. Using the {{ product_title }} web console provides a streamlined and intuitive user interface to create an event source.

**Prerequisites**

*   You have logged in to the {{ product_title }} web console.
*   The {{ ServerlessOperatorName }} and Knative Eventing are installed on the cluster.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

{% include "./snippets/serverless-service-account-apiserversource.md" %}

1.  In the **Developer** perspective, navigate to **+Add** → **Event Source**. The  **Event Sources** page is displayed.
1.  Optional: If you have multiple providers for your event sources, select the required provider from the **Providers** list to filter the available event sources from the provider.
1.  Select **ApiServerSource** and then click **Create Event Source**. The  **Create Event Source** page is displayed.
1.  Configure the **ApiServerSource** settings by using the **Form view** or **YAML view**:

    :::note

    You can switch between the **Form view** and **YAML view**. The data is persisted when switching between the views.
    
    :::

    1.  Enter `v1` as the **APIVERSION** and `Event` as the **KIND**.
    1.  Select the **Service Account Name** for the service account that you created.
    1.  Select the **Sink** for the event source. A **Sink** can be either a **Resource**, such as a channel, broker, or service, or a **URI**.
1.  Click **Create**.

**Verification**

*   After you have created the API server source, you will see it connected to the service it is sinked to in the **Topology** view.
    ![ApiServerSource Topology view](/images/toplogy-odc-apiserver.png)


    :::note

    If a URI sink is used, modify the URI by right-clicking on **URI sink** → **Edit URI**.
    
    :::


**Deleting the API server source**

1.  Navigate to the **Topology** view.
1.  Right-click the API server source and select **Delete ApiServerSource**.
    ![Delete the ApiServerSource](/images/delete-apiserversource-odc.png)