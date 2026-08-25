{%- set _mod_docs_content_type = "PROCEDURE" %}
# Statically creating a volume snapshot {id="persistent-storage-csi-snapshots-create-static_{{ context }}"}

To make a pre-existing storage snapshot available in {{ product_title }}, manually create a volume snapshot that references the existing snapshot content by name. {._abstract}

**Prerequisites**

*   Logged in to a running {{ product_title }} cluster.
*   A PVC created using a CSI driver that supports `VolumeSnapshot` objects.
*   A storage class to provision the storage back end.
*   No pods are using the persistent volume claim (PVC) that you want to take a snapshot of.

    :::warning

    Creating a volume snapshot of a PVC that is in use by a pod can cause unwritten data and cached data to be excluded from the snapshot. To ensure that all data is written to the disk, delete the pod that is using the PVC before creating the snapshot.
    
    :::


**Procedure**

1.  Create a file with the `VolumeSnapshotClass` object described by the following YAML:
    ```yaml title="Example volumesnapshotclass.yaml"
    apiVersion: snapshot.storage.k8s.io/v1
    kind: VolumeSnapshotClass
    metadata:
      name: csi-hostpath-snap
    driver: hostpath.csi.k8s.io
    deletionPolicy: Delete
    ```

    `driver` is the name of the CSI driver that is used to create snapshots of this `VolumeSnapshotClass` object. The name must be the same as the `Provisioner` field of the storage class that is responsible for the PVC that is being snapshotted.

    :::note

    Depending on the driver that you used to configure persistent storage, additional parameters might be required. You can also use an existing `VolumeSnapshotClass` object.
    
    :::

1.  Create the object you saved in the previous step by entering the following command:
    ```terminal
    $ oc create -f volumesnapshotclass.yaml
    ```
1.  Provide a value for the `volumeSnapshotContentName` parameter as the source for the snapshot:
    ```yaml title="Example volumesnapshot-manual.yaml"
    apiVersion: snapshot.storage.k8s.io/v1
    kind: VolumeSnapshot
    metadata:
      name: snapshot-demo
    spec:
      source:
        volumeSnapshotContentName: mycontent
    ```

    `spec.source.volumeSnapshotContentName` is required for pre-provisioned snapshots.
1.  Create the object you saved in the previous step by entering the following command:
    ```terminal
    $ oc create -f volumesnapshot-manual.yaml
    ```

**Verification**

After the snapshot has been created in the cluster, additional details about the snapshot are available.

1.  To display details about the volume snapshot that was created, enter the following command:
    ```terminal
    $ oc describe volumesnapshot mysnap
    ```

    The following example displays details about the `mysnap` volume snapshot:
    ```yaml title="Example volumesnapshot.yaml"
    apiVersion: snapshot.storage.k8s.io/v1
    kind: VolumeSnapshot
    metadata:
      name: mysnap
    spec:
      source:
        persistentVolumeClaimName: myclaim
      volumeSnapshotClassName: csi-hostpath-snap
    status:
      boundVolumeSnapshotContentName: snapcontent-1af4989e-a365-4286-96f8-d5dcd65d78d6
      creationTime: "2020-01-29T12:24:30Z"
      readyToUse: true
      restoreSize: 500Mi
    ```
    *   `status.boundVolumeSnapshotContentName`: Specifies the pointer to the actual storage content that was created by the controller.
    *   `status.creationTime`: Specifies the time when the snapshot was created. The snapshot contains the volume content that was available at this indicated time.
    *   `status.readyToUse`: If the value is set to `true`, the snapshot can be used to restore as a new PVC. If the value is set to `false`, the snapshot was created. However, the storage back end needs to perform additional tasks to make the snapshot usable so that it can be restored as a new volume. For example, Amazon Elastic Block Store data might be moved to a different, less expensive location, which can take several minutes.
1.  To verify that the volume snapshot was created, enter the following command:
    ```terminal
    $ oc get volumesnapshotcontent
    ```

    The pointer to the actual content is displayed. If the `boundVolumeSnapshotContentName` field is populated, a `VolumeSnapshotContent` object exists and the snapshot was created.
1.  To verify that the snapshot is ready, confirm that the `VolumeSnapshot` object has `readyToUse: true`.