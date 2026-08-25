{%- set _mod_docs_content_type = "CONCEPT" %}
# Interacting with applications and components {id="odc-interacting-with-applications-and-components_{{ context }}"}

In the **Topology** view in the **Developer** perspective of the web console, the **Graph view** provides the following options to interact with applications and components:

*   Click **Open URL** (![title="Application Link"](/_assets/images/odc_open_url.png)) to see your application exposed by the route on a public URL.
*   Click **Edit Source code** to access your source code and modify it.

    :::note

    This feature is available only when you create applications using the **From Git**, **From Catalog**, and the **From Dockerfile** options.
    
    :::

*   Hover your cursor over the lower left icon on the pod to see the name of the latest build and its status. The status of the application build is indicated as **New** (![title="New Build"](/_assets/images/odc_build_new.png)), **Pending** (![title="Pending Build"](/_assets/images/odc_build_pending.png)), **Running** (![title="Running Build"](/_assets/images/odc_build_running.png)), **Completed** (![title="Completed Build"](/_assets/images/odc_build_completed.png)), **Failed** (![title="Failed Build"](/_assets/images/odc_build_failed.png)), and **Canceled** (![title="Canceled Build"](/_assets/images/odc_build_canceled.png)).
*   The status or phase of the pod is indicated by different colors and tooltips as:
    *   **Running** (![title="Pod Running"](/_assets/images/odc_pod_running.png)): The pod is bound to a node and all of the containers are created. At least one container is still running or is in the process of starting or restarting.
    *   **Not Ready** (![title="Pod Not Ready"](/_assets/images/odc_pod_not_ready.png)): The pods which are running multiple containers, not all containers are ready.
    *   **Warning**(![title="Pod Warning"](/_assets/images/odc_pod_warning.png)): Containers in pods are being terminated, however termination did not succeed. Some containers may be other states.
    *   **Failed**(![title="Pod Failed"](/_assets/images/odc_pod_failed.png)): All containers in the pod terminated but least one container has terminated in failure. That is, the container either exited with non-zero status or was terminated by the system.
    *   **Pending**(![title="Pod Pending"](/_assets/images/odc_pod_pending.png)): The pod is accepted by the Kubernetes cluster, but one or more of the containers has not been set up and made ready to run. This includes time a pod spends waiting to be scheduled as well as the time spent downloading container images over the network.
    *   **Succeeded**(![title="Pod Succeeded"](/_assets/images/odc_pod_succeeded.png)): All containers in the pod terminated successfully and will not be restarted.
    *   **Terminating**(![title="Pod Terminating"](/_assets/images/odc_pod_terminating.png)): When a pod is being deleted, it is shown as **Terminating** by some kubectl commands. **Terminating** status is not one of the pod phases. A pod is granted a graceful termination period, which defaults to 30 seconds.
    *   **Unknown**(![title="Pod Unknown"](/_assets/images/odc_pod_unknown.png)): The state of the pod could not be obtained. This phase typically occurs due to an error in communicating with the node where the pod should be running.
*   After you create an application and an image is deployed, the status is shown as **Pending**. After the application is built, it is displayed as **Running**.

    **Figure 1. Application topology**

    ![odc_application_topology](/_assets/images/odc_application_topology.png)

    The application resource name is appended with indicators for the different types of resource objects as follows:
    *   **CJ**: `CronJob`
    *   **D**: `Deployment`
    *   **DC**: `DeploymentConfig`
    *   **DS**: `DaemonSet`
    *   **J**: `Job`
    *   **P**: `Pod`
    *   **SS**: `StatefulSet`
    *   ![title="Serverless Application"](/_assets/images/odc_serverless_app.png) (Knative): A serverless application

        :::note

        Serverless applications take some time to load and display on the **Graph view**. When you deploy a serverless application, it first creates a service resource and then a revision. After that, it is deployed and displayed on the **Graph view**. If it is the only workload, you might be redirected to the **Add** page. After the revision is deployed, the serverless application is displayed on the **Graph view**.
        
        :::