{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a volume snapshot {id="microshift-storage-creating-vol-snapshot_{{ context }}"}

To preserve the data on a `PersistentVolumeClaim` (PVC) at a specific point in time, create a volume snapshot. By using a volume snapshot, you can restore the volume to its previous state or provision new volumes with the saved data. {._abstract}

To create a snapshot of a {{ microshift_short }} storage volume, you must first configure {{ op_system_ostree }} and the node. 

In the following example procedure, the pod that the source volume is mounted to is deleted. Deleting the pod prevents data from being written to it during snapshot creation. Ensuring that no data is being written during a snapshot is crucial to creating a viable snapshot.

**Prerequisites**

*   User has root access to a {{ microshift_short }} node.
*   {{ microshift_short }} is running.
*   A device class defines an LVM thin-pool.
*   A `volumeSnapshotClass` specifies `driver: topolvm.io`.
*   Any workload attached to the source PVC is paused or deleted. This helps avoid data corruption.


:::important

All writes to the volume must be halted while you are creating the snapshot. If you do not halt writes, your data might be corrupted.

:::


**Procedure**

1.  Prevent data from being written to the volume during snapshotting by using one of the two following steps:
    1.  Delete the pod to ensure that no data is written to the volume during snapshotting by running the following command:
        ```terminal
        $ oc delete my-pod
        ```
    1.  Scale the replica count to zero on a pod that is managed with a replication controller. Setting the count to zero prevents the instant creation of a new pod when one is deleted.
1.  After all writes to the volume are halted, run a command similar to the example that follows. Insert your own configuration details.
    ```terminal title="Example snapshot configuration"
    # oc apply -f <<EOF
    apiVersion: snapshot.storage.k8s.io/v1
    kind: VolumeSnapshot
    metadata:
      name: <snapshot_name>
    spec:
      volumeSnapshotClassName: topolvm-snapclass
      source:
        persistentVolumeClaimName: test-claim-thin
    EOF
    ```

    where:

    `kind`
    :   Specifies the type of `VolumeSnapshot` object to create.


`metadata.name`
:   Specifies the name that you specify for the snapshot.


`volumeSnapshotClassName`
:   Specifies the desired name of the `VolumeSnapshotClass` object.


`persistentVolumeClaimName`
:   Specifies either `persistentVolumeClaimName` or `volumeSnapshotContentName`. In this example, a snapshot is created from a PVC named `test-claim-thin`.

1.  Wait for the storage driver to finish creating the snapshot by running the following command:
    ```terminal
    $ oc wait volumesnapshot/<snapshot_name> --for=jsonpath\='{.status.readyToUse}=true'
    ```
1.  When the `volumeSnapshot` object is in a `ReadyToUse` state, you can restore the state as a volume for future PVCs. Restart the pod or scale the replica count back up to the desired number.
1.  After you have created the volume snapshot, you can remount the source PVC to a new pod.

    :::important

    Volume snapshots are located on the same devices as the original data. To use the volume snapshots as backups, move the snapshots to a secure location.
    
    :::