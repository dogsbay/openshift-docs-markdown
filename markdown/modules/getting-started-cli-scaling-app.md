{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scaling up the deployment {id="getting-started-cli-scaling-app_{{ context }}"}

Scale the application deployment up or down to meet workload demands. {._abstract}

In Kubernetes, a `Deployment` object defines how an application deploys. In most cases when you deploy an application, {{ product_title }} creates the `Pod`, `Service`, `ReplicaSet`, and `Deployment` resources for you.

When you deploy the `parksmap` image, a deployment resource is created. In this example, only one pod is deployed. You might want to scale up your application to keep up with user demand or to ensure that your application is always running even if one pod is down.

The following procedure scales the `parksmap` deployment to use two instances.

**Prerequisites**

*   You have deployed the `parksmap` front-end application.

**Procedure**

*   Scale your deployment from one pod instance to two pod instances by running the following command:
    ```terminal
    $ oc scale --replicas=2 deployment/parksmap
    ```
    ```text title="Example output"
    deployment.apps/parksmap scaled
    ```

**Verification**

*   Verify that your deployment scaled up properly by running the following command:
    ```terminal
    $ oc get pods
    ```
    ```terminal title="Example output"
    NAME                       READY   STATUS    RESTARTS   AGE
    parksmap-5f9579955-6sng8   1/1     Running   0          7m39s
    parksmap-5f9579955-8tgft   1/1     Running   0          24s
    ```

    Verify that two `parksmap` pods are listed.

    :::tip

    To scale your deployment back down to one pod instance, pass in `1` to the `--replicas` option:

    ```terminal
    $ oc scale --replicas=1 deployment/parksmap
    ```
    
    :::