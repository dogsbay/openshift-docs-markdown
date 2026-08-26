{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scaling up the application {id="getting-started-web-console-scaling-app_{{ context }}"}

Scale the application deployment up or down to meet workload demands. {._abstract}

In Kubernetes, a `Deployment` object defines how an application deploys. In most cases when you deploy an application, {{ product_title }} creates the `Pod`, `Service`, `ReplicaSet`, and `Deployment` resources for you.

When you deploy the `parksmap` image, a deployment resource is created. In this example, only one pod is deployed. You might want to scale up your application to keep up with user demand or to ensure that your application is always running even if one pod is down.

The following procedure scales the `parksmap` deployment to use two instances.

**Prerequisites**

*   You have deployed the `parksmap` front-end application.

**Procedure**

1.  Navigate to **Workloads** → **Topology** and click the `parksmap` deployment.
1.  Select the **Details** tab.
1.  Use the up arrow to scale the pod to two instances.

    **Figure 1. Scaling application**

    ![Scaling pod to two instances](/images/getting-started-scaling-pod.png)

    :::tip

    You can use the down arrow to scale your deployment back down to one pod instance.
    
    :::