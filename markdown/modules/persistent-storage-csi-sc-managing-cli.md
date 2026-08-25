{%- set _mod_docs_content_type = "PROCEDURE" %}
# Managing the default storage class using the CLI {id="persistent-storage-csi-sc-managing-cli_{{ context }}"}

Manage storage class behavior using the CLI by configuring the `ClusterCSIDriver` object’s `storageClassState` field. Set the state to Managed for operator control, Unmanaged for manual control, or Removed to delete the storage class, determining how default storage classes are handled. {._abstract}

**Prerequisites**

*   Access to the cluster with cluster-admin privileges.

**Procedure**

*   To manage the storage class using the CLI, run the following command:
    ```terminal
    $ oc patch clustercsidriver $DRIVERNAME --type=merge -p "{\"spec\":{\"storageClassState\":\"${STATE}\"}}"
    ```
    *   Where `${{ STATE }}` is "Removed" or "Managed" or "Unmanaged".
    *   Where `$DRIVERNAME` is the provisioner name. You can find the provisioner name by running the command `oc get sc`.