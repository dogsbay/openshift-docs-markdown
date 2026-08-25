{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the custom metrics autoscaler {id="sd-nodes-cma-autoscaling-custom-install_{{ context }}"}

Install the Custom Metrics Autoscaler Operator to enable autoscaling of your workloads based on custom metrics from external sources such as Kafka or Prometheus. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
{%- if openshift_dedicated %}

    If your {{ product_title }} cluster is in a cloud account that is owned by Red&#160;Hat (non-CCS), you must request `cluster-admin` privileges.
{% endif %}
*   Any previously installed Technology Preview versions of the Cluster Metrics Autoscaler Operator are removed.
*   Any versions of the community-based KEDA are removed, including the KEDA 1.x custom resource definitions (CRDs). To learn how to delete CRDs, see step 5 in
{%- if openshift_rosa_hcp %}
[Uninstalling the Custom Metrics Autoscaler Operator](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/nodes/index#nodes-cma-autoscaling-custom-uninstalling_nodes-cma-autoscaling-custom-removing).
{% endif %}
{% if openshift_rosa %}
[Uninstalling the Custom Metrics Autoscaler Operator](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/nodes/index#nodes-cma-autoscaling-custom-uninstalling_nodes-cma-autoscaling-custom-removing).
{% endif %}
{% if openshift_dedicated %}
[Uninstalling the Custom Metrics Autoscaler Operator](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html-single/nodes/index#nodes-cma-autoscaling-custom-uninstalling_nodes-cma-autoscaling-custom-removing).
{% endif %}
*   The `keda` namespace exists. If the namespace does not exist, you must create it manually.
*   Optional: If you need the Custom Metrics Autoscaler Operator to connect to off-cluster services, such as an external Kafka cluster or an external Prometheus service, put any required service CA certificates into a config map. The config map must exist in the same namespace where the Operator is installed. For more information, see
{%- if openshift_rosa_hcp %}
[Creating a config map from a file](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/nodes/index#nodes-pods-configmap-creating-from-files_configmaps).
{% endif %}
{% if openshift_rosa %}
[Creating a config map from a file](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/nodes/index#nodes-pods-configmap-creating-from-files_configmaps).
{% endif %}
{% if openshift_dedicated %}
[Creating a config map from a file](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html-single/nodes/index#nodes-pods-configmap-creating-from-files_configmaps).
{% endif %}

**Procedure**

1.  In the {{ product_title }} web console, click **Ecosystem** -> **Software Catalog**.
1.  From the list of available Operators, choose **Custom Metrics Autoscaler**, and click **Install**.
1.  On the **Install Operator** page, ensure that the **A specific namespace on the cluster** option is selected for **Installation Mode**.
1.  For **Installed Namespace**, click **Select a namespace**.
1.  Click **Select Project**:
    *   If the `keda` namespace exists, select **keda** from the list.
    *   If the `keda` namespace does not exist:
        1.  Select **Create Project** to open the **Create Project** window.
        1.  In the **Name** field, enter `keda`.
        1.  In the **Display Name** field, enter a descriptive name, such as `keda`.
        1.  Optional: In the **Display Name** field, add a description for the namespace.
        1.  Click **Create**.
1.  Click **Install**.
1.  Verify the installation by listing the Custom Metrics Autoscaler Operator components:
    1.  Navigate to **Workloads** -> **Pods**.
    1.  Select the `keda` project from the drop-down menu and verify that the `custom-metrics-autoscaler-operator-*` pod is running.
    1.  Navigate to **Workloads** -> **Deployments** to verify that the `custom-metrics-autoscaler-operator` deployment is running.
1.  Optional: Verify the installation in the {{ oc_first }} using the following command:
    ```terminal
    $ oc get all -n keda
    ```

    **Example output**
    ```text
    NAME                                                      READY   STATUS    RESTARTS   AGE
    pod/custom-metrics-autoscaler-operator-5fd8d9ffd8-xt4xp   1/1     Running   0          18m

    NAME                                                 READY   UP-TO-DATE   AVAILABLE   AGE
    deployment.apps/custom-metrics-autoscaler-operator   1/1     1            1           18m

    NAME                                                            DESIRED   CURRENT   READY   AGE
    replicaset.apps/custom-metrics-autoscaler-operator-5fd8d9ffd8   1         1         1       18m
    ```