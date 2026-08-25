{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the ClusterPodPlacementConfig object by using the web console {id="multi-architecture-creating-podplacement-config-using-web-console_{{ context }}"}

To deploy the pod placement operand that enables architecture-aware workload scheduling, you can create the `ClusterPodPlacementConfig` object by using the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.
*   You have installed the Multiarch Tuning Operator.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Go to **Ecosystem** → **Installed Operators**.
1.  On the **Installed Operators** page, click **Multiarch Tuning Operator**.
1.  Click the **Cluster Pod Placement Config** tab.
1.  Select either **Form view** or **YAML view**.
1.  Configure the `ClusterPodPlacementConfig` object parameters.
1.  Click **Create**.
1.  Optional: If you want to edit the `ClusterPodPlacementConfig` object, perform the following actions:
    1.  Click the **Cluster Pod Placement Config** tab.
    1.  Select **Edit ClusterPodPlacementConfig** from the options menu.
    1.  Click **YAML** and edit the `ClusterPodPlacementConfig` object parameters.
    1.  Click **Save**.

**Verification**

*   On the **Cluster Pod Placement Config** page, check that the `ClusterPodPlacementConfig` object is in the `Ready` state.