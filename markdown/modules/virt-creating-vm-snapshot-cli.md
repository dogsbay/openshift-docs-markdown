{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a snapshot by using the CLI {id="virt-creating-vm-snapshot-cli_{{ context }}"}

You can create a virtual machine (VM) snapshot for an offline or online VM by creating a `VirtualMachineSnapshot` object. {._abstract}

**Prerequisites**

*   Ensure the `Snapshot` feature gate is enabled for the `kubevirt` CR by using the following command:
    ```terminal
    $ oc get kubevirt kubevirt-hyperconverged -n {{ CNVNamespace }} -o yaml
    ```

    Truncated output:
    ```yaml
    spec:
      developerConfiguration:
        featureGates:
          - Snapshot
    ```
*   Ensure that the VM snapshot includes disks that meet the following requirements:
    *   The disks are data volumes or persistent volume claims.
    *   The disks belong to a storage class that supports Container Storage Interface (CSI) volume snapshots.
    *   The disks are _bound_ to a persistent volume (PV) and _populated_ with a datasource. 
*   Install the OpenShift CLI (`oc`).
*   Optional: Power down the VM for which you want to create a snapshot.

**Procedure**

1.  Create a YAML file to define a `VirtualMachineSnapshot` object that specifies the name of the new `VirtualMachineSnapshot` and the name of the source VM as in the following example:
    ```yaml
    apiVersion: snapshot.kubevirt.io/v1beta1
    kind: VirtualMachineSnapshot
    metadata:
      name: <snapshot_name>
    spec:
      source:
        apiGroup: kubevirt.io
        kind: VirtualMachine
        name: <vm_name>
    ```
1.  Create the `VirtualMachineSnapshot` object:
    ```terminal
    $ oc create -f <snapshot_name>.yaml
    ```

    The snapshot controller creates a `VirtualMachineSnapshotContent` object, binds it to the `VirtualMachineSnapshot`, and updates the `status` and `readyToUse` fields of the `VirtualMachineSnapshot` object.

**Verification**

1.  Optional: During the snapshot creation process, you can use the `wait` command to monitor the status of the snapshot and wait until it is ready for use:
    1.  Enter the following command:
        ```terminal
        $ oc wait <vm_name> <snapshot_name> --for condition=Ready
        ```
    1.  Verify the status of the snapshot:
        *   `InProgress` - The snapshot operation is still in progress.
        *   `Succeeded` - The snapshot operation completed successfully.
        *   `Failed` - The snapshot operaton failed.

            :::note

            Online snapshots have a default time deadline of five minutes (`5m`). If the snapshot does not complete successfully in five minutes, the status is set to `failed`. Afterwards, the file system will be thawed and the VM unfrozen but the status remains `failed` until you delete the failed snapshot image.

            To change the default time deadline, add the `FailureDeadline` attribute to the VM snapshot spec with the time designated in minutes (`m`) or in seconds (`s`) that you want to specify before the snapshot operation times out.

            To set no deadline, you can specify `0`, though this is generally not recommended, as it can result in an unresponsive VM.

            If you do not specify a unit of time such as `m` or `s`, the default is seconds (`s`).
            
            :::

1.  Verify that the `VirtualMachineSnapshot` object is created and bound with `VirtualMachineSnapshotContent` and that the `readyToUse` flag is set to `true`:
    ```terminal
    $ oc describe vmsnapshot <snapshot_name>
    ```

    Example output:
    ```yaml
    apiVersion: snapshot.kubevirt.io/v1beta1
    kind: VirtualMachineSnapshot
    metadata:
      creationTimestamp: "2020-09-30T14:41:51Z"
      finalizers:
      - snapshot.kubevirt.io/vmsnapshot-protection
      generation: 5
      name: mysnap
      namespace: default
      resourceVersion: "3897"
      selfLink: /apis/snapshot.kubevirt.io/v1beta1/namespaces/default/virtualmachinesnapshots/my-vmsnapshot
      uid: 28eedf08-5d6a-42c1-969c-2eda58e2a78d
    spec:
      source:
        apiGroup: kubevirt.io
        kind: VirtualMachine
        name: my-vm
    status:
      conditions:
      - lastProbeTime: null
        lastTransitionTime: "2020-09-30T14:42:03Z"
        reason: Operation complete
        status: "False"
        type: Progressing
      - lastProbeTime: null
        lastTransitionTime: "2020-09-30T14:42:03Z"
        reason: Operation complete
        status: "True"
        type: Ready
      creationTime: "2020-09-30T14:42:03Z"
      readyToUse: true
      sourceUID: 355897f3-73a0-4ec4-83d3-3c2df9486f4f
      virtualMachineSnapshotContentName: vmsnapshot-content-28eedf08-5d6a-42c1-969c-2eda58e2a78d
      indications:
        - Online
      includedVolumes:
        - name: rootdisk
          kind: PersistentVolumeClaim
          namespace: default
        - name: datadisk1
          kind: DataVolume
          namespace: default
    ```

    where:

    `status`
    :   The `status` field of the `Progressing` condition specifies if the snapshot is still being created.
    The `status` field of the `Ready` condition specifies if the snapshot creation process is complete.
    `readyToUse`:: Specifies if the snapshot is ready to be used.
    `virtualMachineSnapshotContentName`:: Specifies that the snapshot is bound to a `VirtualMachineSnapshotContent` object created by the snapshot controller.
    `indications`:: Specifies additional information about the snapshot, such as whether it is an online snapshot, or whether it was created with QEMU guest agent running.
    `includedVolumes`:: Lists the storage volumes that are part of the snapshot, as well as their parameters.

1.  Check the `includedVolumes` section in the snapshot description to verify that the expected PVCs are included in the snapshot.