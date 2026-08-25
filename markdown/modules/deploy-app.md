{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploy an application from the Developer Catalog {id="deploy-app_{{ context }}"}

{% if context == "rosa-getting-started" %}
{%- set getting_started = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}

From the {{ product_title }} web console, you can deploy a test application from the Developer Catalog and expose it with a route. {._abstract}

{% if not quickstart %}

**Prerequisites**

*   You logged in to the {{ hybrid_console_url }}.
*   You created a {{ product_title }} cluster.
*   You configured an identity provider for your cluster.
*   You added your user account to the configured identity provider.
{% endif %}

**Procedure**

1.  Go to the **Cluster List** page in {{ cluster_manager_url }}, click the options icon (&#8942;) next to your cluster, and select **Open console**. Log in to your Red&#160;Hat account with your configured identity provider credentials.
1.  In the **Administrator** perspective, select **Home** → **Projects** → **Create Project**, enter a name for your project, and click **Create**. Optional: Add a **Display Name** and **Description**.
1.  Switch to the **Developer** perspective and select **+Add**. Verify that the selected **Project** is the one you created.
1.  In the **Developer Catalog** dialog, select **All services**, then select **Languages** → **JavaScript** from the menu and click **Node.js**.

    :::note

    You might need to click **Clear All Filters** to display the **Node.js** option.
    
    :::

1.  To open the **Create Source-to-Image application** page, click **Create**.
1.  In the **Git** section, click **Try sample**, add a unique name in the **Name** field, and confirm that **Deployment** and **Create a route** are selected.
1.  Click **Create** to deploy the application. It takes a few minutes for the pods to deploy.
1.  Optional: Monitor the deployment status in the **Topology** pane by selecting your **Node.js** app and reviewing its sidebar. Wait for the `nodejs` build to complete and for the `nodejs` pod to be in a **Running** state.
1.  Access the deployed application by clicking the route URL, which has a format similar to:
    ```
    https://nodejs-<project>.<cluster_name>.<hash>.<region>.openshiftapps.com/
    ```

    A new browser tab opens displaying a message similar to:
    ```
    Welcome to your Node.js application on OpenShift
    ```
1.  Optional: In the **Administrator** perspective, navigate to **Home** → **Projects**, click the action menu for your project, and select **Delete Project** to clean up resources.

**Verification**

*   Verify that the application is running:
    ```terminal
    $ oc get pods -n <project_name>
    ```
    ```terminal title="Example output"
    NAME                       READY   STATUS      RESTARTS   AGE
    nodejs-1-build             0/1     Completed   0          5m
    nodejs-5d9c6c7d9c-kghq2   1/1     Running     0          2m
    ```
*   Access the application route to verify it responds correctly.

**Additional resources**
{._additional-resources}

*   [Creating applications by using the CLI](https://docs.openshift.com/container-platform/latest/applications/creating_applications/creating-applications-using-cli.html)
*   [Creating applications by using the web console](https://docs.openshift.com/container-platform/latest/applications/creating_applications/creating-applications-using-web-console.html)
*   [Understanding deployments](https://docs.openshift.com/container-platform/latest/applications/deployments/what-deployments-are.html)

{% if context == "rosa-getting-started" %}
{%- set getting_started = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}