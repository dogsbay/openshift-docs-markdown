{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a volume snapshot {id="persistent-storage-csi-snapshots-delete_{{ context }}"}

To clean up unneeded snapshots and free storage resources, delete volume snapshots by setting a deletion policy that controls whether the underlying content is retained or removed. {._abstract}

**Procedure**

1.  Specify the deletion policy that you require in the `VolumeSnapshotClass` object, as shown in the following example:
    ```yaml title="Example volumesnapshotclass.yaml file"
    apiVersion: snapshot.storage.k8s.io/v1
    kind: VolumeSnapshotClass
    metadata:
      name: csi-hostpath-snap
    driver: hostpath.csi.k8s.io
    deletionPolicy: Delete
    # ...
    ```

    When deleting the volume snapshot, if `deletionPolicy` is set to `Delete`, the underlying snapshot is deleted along with the `VolumeSnapshotContent` object. If the `Retain` value is set, both the underlying snapshot and `VolumeSnapshotContent` object remain.

    :::note

    If the `Retain` value is set and the `VolumeSnapshot` object is deleted without deleting the corresponding `VolumeSnapshotContent` object, the content remains. The snapshot itself is also retained in the storage back end.
    
    :::

1.  Delete the volume snapshot by entering the following command:
    ```terminal
    $ oc delete volumesnapshot <volumesnapshot_name>
    ```

    Replace `<volumesnapshot_name>` with the name of the volume snapshot you want to delete.
    ```terminal title="Example output"
    volumesnapshot.snapshot.storage.k8s.io "mysnapshot" deleted
    ```
1.  If the deletion policy is set to `Retain`, delete the volume snapshot content by entering the following command:
    ```terminal
    $ oc delete volumesnapshotcontent <volumesnapshotcontent_name>
    ```

    Replace `<volumesnapshotcontent_name>` with the content you want to delete.
1.  Optional: If the `VolumeSnapshot` object is not successfully deleted, enter the following command to remove any finalizers for the leftover resource so that the delete operation can continue:

    :::important

    Only remove the finalizers if you are confident that there are no existing references from either persistent volume claims or volume snapshot contents to the `VolumeSnapshot` object. Even with the `--force` option, the delete operation does not delete snapshot objects until all finalizers are removed.
    
    :::

    ```terminal
    $ oc patch -n $PROJECT volumesnapshot/$NAME --type=merge -p '{"metadata": {"finalizers":null}}'
    ```
    ```terminal title="Example output"
    volumesnapshotclass.snapshot.storage.k8s.io "csi-ocs-rbd-snapclass" deleted
    ```

    The finalizers are removed and the volume snapshot is deleted.