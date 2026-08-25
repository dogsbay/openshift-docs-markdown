{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing pod details {id="getting-started-web-console-examining-pod_{{ context }}"}

Retrieve detailed pod information to confirm the running status and resource configuration of the applications in this tutorial. {._abstract}

{{ product_title }} uses the Kubernetes concept of a _pod_, which is one or more containers deployed together on one host, and the smallest compute unit that can be defined, deployed, and managed.
Pods are the rough equivalent of a machine instance, physical or virtual, to a container.

The **Overview** panel enables you to access many features of the `parksmap` deployment. The **Details** and **Resources** tabs enable you to scale application pods and check the status of builds, services, and routes.

**Prerequisites**

*   You have deployed the `parksmap` front-end application.

**Procedure**

1.  Navigate to **Workloads** -> **Topology**.
1.  Click the `parksmap` deployment in the `national-parks-app` application.
    **Figure 1. Parksmap deployment**

    ![Topology view of parksmap deployment](/_assets/images/getting-started-examine-pod.png)

    This opens an overview panel with the following tabs:
    *   **Details**: View details about your deployment, edit certain settings, and scale your deployment.
    *   **Resources**: View details for the pods, services, and routes associated with your deployment.
    *   **Observe**: View metrics and events for your deployment.
1.  To view the logs for a pod, select the **Resources** tab and click **View logs** next to the `parksmap` pod.