{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restoring a volume snapshot {id="persistent-storage-csi-snapshots-restore_{{ context }}"}

To recover previous data or reuse snapshot data, create a new persistent volume claim (PVC) that is pre-populated with content from an existing volume snapshot. {._abstract}

The `VolumeSnapshot` CRD content can be used to restore the existing volume to a previous state. After your `VolumeSnapshot` CRD is bound and the `readyToUse` value is set to `true`, you can use that resource to provision a new volume that is pre-populated with data from the snapshot.

**Prerequisites**

*   Logged in to a running {{ product_title }} cluster.
*   A persistent volume claim (PVC) created using a Container Storage Interface (CSI) driver that supports volume snapshots.
*   A storage class to provision the storage back end.
*   A volume snapshot has been created and is ready to use.

**Procedure**

1.  Specify a `VolumeSnapshot` data source on a PVC as shown in the following:
    ```yaml title="pvc-restore.yaml"
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: myclaim-restore
    spec:
      storageClassName: csi-hostpath-sc
      dataSource:
        name: mysnap
        kind: VolumeSnapshot
        apiGroup: snapshot.storage.k8s.io
      accessModes:
        - ReadWriteOnce
      resources:
        requests:
          storage: 1Gi
    ```
    *   `spec.dataSource.name`: Specifies the name of the `VolumeSnapshot` object representing the snapshot to use as source.
    *   `spec.dataSource.kind`: Must be set to the `VolumeSnapshot` value.
    *   `spec.dataSource.apiGroup`: Must be set to the `snapshot.storage.k8s.io` value.
1.  Create a PVC by entering the following command:
    ```terminal
    $ oc create -f pvc-restore.yaml
    ```
1.  Verify that the restored PVC has been created by entering the following command:
    ```terminal
    $ oc get pvc
    ```

    A new PVC such as `myclaim-restore` is displayed.