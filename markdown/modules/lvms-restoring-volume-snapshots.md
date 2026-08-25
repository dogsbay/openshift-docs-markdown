{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restoring volume snapshots {id="lvms-restoring-volume-snapshots_{{ context }}"}

To restore a volume snapshot, you must create a persistent volume claim (PVC) with the `dataSource.name` field set to the name of the volume snapshot.

The restored PVC is independent of the volume snapshot and the source PVC.

**Prerequisites**

*   You have access to {{ product_title }} as a user with `cluster-admin` permissions.
*   You have created a volume snapshot.

**Procedure**

1.  Log in to the OpenShift CLI (`oc`).
1.  Create a `PersistentVolumeClaim` object with the configuration to restore the volume snapshot:
    ```yaml title="Example PersistentVolumeClaim object to restore a volume snapshot"
    kind: PersistentVolumeClaim
    apiVersion: v1
    metadata:
      name: lvm-block-1-restore
    spec:
      accessModes:
      - ReadWriteOnce
      volumeMode: Block
      Resources:
        Requests:
          storage: 2Gi (1)
      storageClassName: lvms-vg1 (2)
      dataSource:
        name: lvm-block-1-snap (3)
        kind: VolumeSnapshot
        apiGroup: snapshot.storage.k8s.io
    ```
    1.  Specify the storage size of the restored PVC. The storage size of the requested PVC must be greater than or equal to the stoage size of the volume snapshot that you want to restore. If a larger PVC is required, you can also resize the PVC after restoring the volume snapshot.
    1.  Set this field to the value of the `storageClassName` field in the source PVC of the volume snapshot that you want to restore.
    1.  Set this field to the name of the volume snapshot that you want to restore.
1.  Create the PVC in the namespace where you created the volume snapshot by running the following command:
    ```terminal
    $ oc create -f <file_name> -n <namespace>
    ```

**Verification**

*   To verify that the volume snapshot is restored, run the following command:
    ```terminal
    $ oc get pvc -n <namespace>
    ```
    ```terminal title="Example output"
    NAME                  STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
    lvm-block-1-restore   Bound    pvc-e90169a8-fd71-4eea-93b8-817155f60e47   1Gi        RWO            lvms-vg1       5s
    ```