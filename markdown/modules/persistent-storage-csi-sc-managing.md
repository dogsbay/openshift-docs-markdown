{%- set _mod_docs_content_type = "PROCEDURE" %}
# Managing the default storage class using the web console {id="persistent-storage-csi-sc-managing_{{ context }}"}

Manage storage class behavior using the web console by configuring the `ClusterCSIDriver` object’s `storageClassState` field. Set the state to Managed for operator control, Unmanaged for manual control, or Removed to delete the storage class, determining how default storage classes are handled. {._abstract}

**Prerequisites**

*   Access to the {{ product_title }} web console.
*   Access to the cluster with cluster-admin privileges.

**Procedure**

1.  Log in to the web console.
1.  Click **Administration** > **CustomResourceDefinitions**.
1.  On the **CustomResourceDefinitions** page, type `clustercsidriver` to find the `ClusterCSIDriver` object.
1.  Click **ClusterCSIDriver**, and then click the **Instances** tab.
1.  Click the name of the desired instance, and then click the **YAML** tab.
1.  Add the `spec.storageClassState` field with a value of `Managed`, `Unmanaged`, or `Removed`.
    ```yaml title="Example"
    ...
    spec:
      driverConfig:
        driverType: ''
      logLevel: Normal
      managementState: Managed
      observedConfig: null
      operatorLogLevel: Normal
      storageClassState: Unmanaged
    ...
    ```

    For this example, `spec.storageClassState` field is set to "Unmanaged".
1.  Click **Save**.