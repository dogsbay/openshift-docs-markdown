{%- set _mod_docs_content_type = "PROCEDURE" %}
# Dynamically creating a volume snapshot {id="persistent-storage-csi-snapshots-create_{{ context }}"}

To create a point-in-time backup of a persistent volume claim (PVC), dynamically provision a volume snapshot by defining a VolumeSnapshotClass and VolumeSnapshot that automate the snapshot creation. {._abstract}

When you create a `VolumeSnapshot` object, {{ product_title }} creates a volume snapshot.

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
1.  Create a `VolumeSnapshot` object:
    ```yaml title="Example volumesnapshot-dynamic.yaml"
    apiVersion: snapshot.storage.k8s.io/v1
    kind: VolumeSnapshot
    metadata:
      name: mysnap
    spec:
      volumeSnapshotClassName: csi-hostpath-snap
      source:
        persistentVolumeClaimName: myclaim
    ```
    *   `spec.volumeSnapshotClassName`: Specifies the request for a particular class by the volume snapshot. If the `volumeSnapshotClassName` setting is absent and there is a default volume snapshot class, a snapshot is created with the default volume snapshot class name. But if the field is absent and no default volume snapshot class exists, then no snapshot is created.
    *   `spec.source.persistentVolumeClaimName`: Specifies the name of the `PersistentVolumeClaim` object bound to a persistent volume. This defines what you want to create a snapshot of. Required for dynamically provisioning a snapshot.
1.  Create the object you saved in the previous step by entering the following command:
    ```terminal
    $ oc create -f volumesnapshot-dynamic.yaml
    ```

**Verification**

1.  After the snapshot has been created in the cluster, additional details about the snapshot are available.

    To display details about the volume snapshot that was created, run the following command:
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
    *   `status.boundVolumeSnapshotContentName`: This parameter is the pointer to the actual storage content that was created by the controller.
    *   `status.creationTime`: Specifies the time when the snapshot was created. The snapshot contains the volume content that was available at this indicated time.
    *   `status.readyToUse`: Specifies the readiness of the snapshot. If the value is set to `true`, the snapshot can be used to restore as a new PVC. If the value is set to `false`, the snapshot was created. However, the storage back end needs to perform additional tasks to make the snapshot usable so that it can be restored as a new volume. For example, Amazon Elastic Block Store data might be moved to a different, less expensive location, which can take several minutes.
1.  To verify that the volume snapshot was created, enter the following command:
    ```terminal
    $ oc get volumesnapshotcontent
    ```

    The pointer to the actual content is displayed. If the `boundVolumeSnapshotContentName` field is populated, a `VolumeSnapshotContent` object exists and the snapshot was created.
1.  To verify that the snapshot is ready, confirm that the `VolumeSnapshot` object has `readyToUse: true`.