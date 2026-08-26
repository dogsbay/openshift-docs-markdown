{%- set _mod_docs_content_type = "CONCEPT" %}
# Interacting with applications and components {id="odc-interacting-with-applications-and-components_{{ context }}"}

In the **Topology** view in the **Developer** perspective of the web console, the **Graph view** provides the following options to interact with applications and components:

*   Click **Open URL** (![odc_open_url](/images/odc_open_url.png "Application Link")) to see your application exposed by the route on a public URL.
*   Click **Edit Source code** to access your source code and modify it.

    :::note

    This feature is available only when you create applications using the **From Git**, **From Catalog**, and the **From Dockerfile** options.
    
    :::

*   Hover your cursor over the lower left icon on the pod to see the name of the latest build and its status. The status of the application build is indicated as **New** (![odc_build_new](/images/odc_build_new.png "New Build")), **Pending** (![odc_build_pending](/images/odc_build_pending.png "Pending Build")), **Running** (![odc_build_running](/images/odc_build_running.png "Running Build")), **Completed** (![odc_build_completed](/images/odc_build_completed.png "Completed Build")), **Failed** (![odc_build_failed](/images/odc_build_failed.png "Failed Build")), and **Canceled** (![odc_build_canceled](/images/odc_build_canceled.png "Canceled Build")).
*   The status or phase of the pod is indicated by different colors and tooltips as:
    *   **Running** (![odc_pod_running](/images/odc_pod_running.png "Pod Running")): The pod is bound to a node and all of the containers are created. At least one container is still running or is in the process of starting or restarting.
    *   **Not Ready** (![odc_pod_not_ready](/images/odc_pod_not_ready.png "Pod Not Ready")): The pods which are running multiple containers, not all containers are ready.
    *   **Warning**(![odc_pod_warning](/images/odc_pod_warning.png "Pod Warning")): Containers in pods are being terminated, however termination did not succeed. Some containers may be other states.
    *   **Failed**(![odc_pod_failed](/images/odc_pod_failed.png "Pod Failed")): All containers in the pod terminated but least one container has terminated in failure. That is, the container either exited with non-zero status or was terminated by the system.
    *   **Pending**(![odc_pod_pending](/images/odc_pod_pending.png "Pod Pending")): The pod is accepted by the Kubernetes cluster, but one or more of the containers has not been set up and made ready to run. This includes time a pod spends waiting to be scheduled as well as the time spent downloading container images over the network.
    *   **Succeeded**(![odc_pod_succeeded](/images/odc_pod_succeeded.png "Pod Succeeded")): All containers in the pod terminated successfully and will not be restarted.
    *   **Terminating**(![odc_pod_terminating](/images/odc_pod_terminating.png "Pod Terminating")): When a pod is being deleted, it is shown as **Terminating** by some kubectl commands. **Terminating** status is not one of the pod phases. A pod is granted a graceful termination period, which defaults to 30 seconds.
    *   **Unknown**(![odc_pod_unknown](/images/odc_pod_unknown.png "Pod Unknown")): The state of the pod could not be obtained. This phase typically occurs due to an error in communicating with the node where the pod should be running.
*   After you create an application and an image is deployed, the status is shown as **Pending**. After the application is built, it is displayed as **Running**.

    **Figure 1. Application topology**

    ![odc_application_topology](/images/odc_application_topology.png)

    The application resource name is appended with indicators for the different types of resource objects as follows:
    *   **CJ**: `CronJob`
    *   **D**: `Deployment`
    *   **DC**: `DeploymentConfig`
    *   **DS**: `DaemonSet`
    *   **J**: `Job`
    *   **P**: `Pod`
    *   **SS**: `StatefulSet`
    *   ![odc_serverless_app](/images/odc_serverless_app.png "Serverless Application") (Knative): A serverless application

        :::note

        Serverless applications take some time to load and display on the **Graph view**. When you deploy a serverless application, it first creates a service resource and then a revision. After that, it is deployed and displayed on the **Graph view**. If it is the only workload, you might be redirected to the **Add** page. After the revision is deployed, the serverless application is displayed on the **Graph view**.
        
        :::