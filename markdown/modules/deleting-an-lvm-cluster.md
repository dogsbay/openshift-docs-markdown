{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting an LVMCluster {id="deleting-an-lvm-cluster_{{ context }}"}

When you delete an `LVMCluster` custom resource (CR), the Operator enforces deletion gates to prevent data loss. The gates that apply depend on the reclaim policy that is configured for the storage class. {._abstract}

**Prerequisites**

*   You have administrative access to the cluster.
*   You have identified the reclaim policy in use: `Delete` or `Retain`.

**Procedure**

1.  Delete all Persistent Volume Claims (PVCs) that reference LVM `StorageClass` resources.

    If PVCs that reference LVM StorageClasses still exist, the Operator blocks `LVMCluster` deletion and generates a `DeletionPending` event:
    ```terminal
    found PVCs provisioned by LVMS, waiting 10s for their deletion
    ```
1.  Back up any data before deleting PVCs.
    1.  List the PVCs that use the LVM StorageClass by running the following command:
        ```terminal
        $ oc get pvc -A -o custom-columns='NAMESPACE:.metadata.namespace,NAME:.metadata.name,SC:.spec.storageClassName' | grep lvms-vg1
        ```
    1.  Delete the PVCs by running the following command:
        ```terminal
        $ oc delete pvc <pvc_name> -n <namespace>
        ```

        With the `Delete` reclaim policy, deleting the PVCs automatically removes the persistent volumes (PVs) and on-disk logical volumes. After all PVCs are removed, `LVMCluster` deletion completes automatically. No further action is required.
1.  If you use the `Retain` reclaim policy, delete the retained PVs.

    After you delete PVCs, if the reclaim policy is `Retain`, the Operator blocks `LVMCluster` deletion and generates a `DeletionPending` event:
    ```terminal
    found PVs with Retain policy from LVMS, waiting 10s for manual cleanup
    ```
    1.  List the retained PVs by running the following command:
        ```terminal
        $ oc get pv -o custom-columns='NAME:.metadata.name,SC:.spec.storageClassName' | grep lvms-vg1
        ```
    1.  Delete the PVs by running the following command:
        ```terminal
        $ oc delete pv <pv_name>
        ```
1.  If you are using the `Retain` reclaim policy, delete the TopoLVM `LogicalVolume` custom resources.

    After you delete PV objects from Kubernetes, the underlying logical volumes remain on disk because the `Retain` policy preserved them. The VG Manager detects this and generates a `ManualCleanupRequired` event:
    ```terminal
    Warning  ManualCleanupRequired  volume group vg1 has retained logical volumes [pvc-abc123]; manual cleanup required before deletion can proceed
    ```
1.  Deleting the `LogicalVolume` custom resources triggers on-disk logical volume cleanup.
    1.  List the `LogicalVolume` custom resources by running the following command:
        ```terminal
        $ oc get logicalvolumes
        ```
    1.  Delete the `LogicalVolume` custom resources for your device class by running the following command:
        ```terminal
        $ oc delete logicalvolume <lv_name>
        ```

**Verification**

*   Verify that the `LVMCluster` deletion completed by confirming the resource no longer exists by running the following command:
    ```terminal
    $ oc get lvmcluster -A
    ```