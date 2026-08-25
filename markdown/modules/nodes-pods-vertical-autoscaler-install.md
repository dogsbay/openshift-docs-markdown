{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Vertical Pod Autoscaler Operator {id="nodes-pods-vertical-autoscaler-install_{{ context }}"}

You can install the Vertical Pod Autoscaler Operator (VPA) by using the {{ product_title }} web console. {._abstract}

{% if openshift_origin %}

**Prerequisites**

*   Ensure that you have downloaded the {{ cluster_manager_url_pull }} as shown in _Obtaining the installation program_ in the installation documentation for your platform.

    If you have the pull secret, add the `redhat-operators` catalog to the OperatorHub custom resource (CR) as shown in _Configuring {{ product_title }} to use Red Hat Operators_.
{% endif %}

**Procedure**

1.  In the {{ product_title }} web console, click **Ecosystem** -> **Software Catalog**.
1.  Choose  **VerticalPodAutoscaler** from the list of available Operators, and click **Install**.
1.  On the **Install Operator** page, ensure that the **Operator recommended namespace** option
is selected. This installs the Operator in the mandatory `openshift-vertical-pod-autoscaler` namespace, which
is automatically created if it does not exist.
1.  Click **Install**.

**Verification**

1.  Verify the installation by listing the VPA components:
    1.  Navigate to **Workloads** -> **Pods**.
    1.  Select the `openshift-vertical-pod-autoscaler` project from the drop-down menu and verify that there are four pods running.
    1.  Navigate to **Workloads** -> **Deployments** to verify that there are four deployments running.
1.  Optional: Verify the installation in the {{ product_title }} CLI using the following command:
    ```terminal
    $ oc get all -n openshift-vertical-pod-autoscaler
    ```

    The output shows four pods and four deployments:
    ```terminal title="Example output"
    NAME                                                    READY   STATUS    RESTARTS   AGE
    pod/vertical-pod-autoscaler-operator-85b4569c47-2gmhc   1/1     Running   0          3m13s
    pod/vpa-admission-plugin-default-67644fc87f-xq7k9       1/1     Running   0          2m56s
    pod/vpa-recommender-default-7c54764b59-8gckt            1/1     Running   0          2m56s
    pod/vpa-updater-default-7f6cc87858-47vw9                1/1     Running   0          2m56s

    NAME                  TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
    service/vpa-webhook   ClusterIP   172.30.53.206   <none>        443/TCP   2m56s

    NAME                                               READY   UP-TO-DATE   AVAILABLE   AGE
    deployment.apps/vertical-pod-autoscaler-operator   1/1     1            1           3m13s
    deployment.apps/vpa-admission-plugin-default       1/1     1            1           2m56s
    deployment.apps/vpa-recommender-default            1/1     1            1           2m56s
    deployment.apps/vpa-updater-default                1/1     1            1           2m56s

    NAME                                                          DESIRED   CURRENT   READY   AGE
    replicaset.apps/vertical-pod-autoscaler-operator-85b4569c47   1         1         1       3m13s
    replicaset.apps/vpa-admission-plugin-default-67644fc87f       1         1         1       2m56s
    replicaset.apps/vpa-recommender-default-7c54764b59            1         1         1       2m56s
    replicaset.apps/vpa-updater-default-7f6cc87858                1         1         1       2m56s
    ```