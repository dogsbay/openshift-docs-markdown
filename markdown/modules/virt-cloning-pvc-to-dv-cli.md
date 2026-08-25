{%- set _mod_docs_content_type = "PROCEDURE" %}
# Cloning a PVC to a data volume {id="virt-cloning-pvc-to-dv-cli_{{ context }}"}

You can clone the persistent volume claim (PVC) of an existing virtual machine (VM) disk to a data volume by using the command line. {._abstract}

You create a data volume that references the original source PVC. The lifecycle of the new data volume is independent of the original VM. Deleting the original VM does not affect the new data volume or its associated PVC.

Cloning between different volume modes is supported for host-assisted cloning, such as cloning from a block persistent volume (PV) to a file system PV, as long as the source and target PVs belong to the `kubevirt` content type.

{% if not (openshift_rosa or openshift_dedicated) %}

:::note

Smart-cloning is faster and more efficient than host-assisted cloning because it uses snapshots to clone PVCs. Smart-cloning is supported by storage providers that support snapshots, such as {{ rh_storage_first }}.

Cloning between different volume modes is not supported for smart-cloning.

:::

{% endif %}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   The VM with the source PVC must be powered down.
*   If you clone a PVC to a different namespace, you must have permissions to create resources in the target namespace.
*   Additional prerequisites for smart-cloning:
    *   Your storage provider must support snapshots.
    *   The source and target PVCs must have the same storage provider and volume mode.
    *   The value of the `driver` key of the `VolumeSnapshotClass` object must match the value of the `provisioner` key of the `StorageClass` object as shown in the following example:

        Example `VolumeSnapshotClass` object:
        ```yaml
        kind: VolumeSnapshotClass
        apiVersion: snapshot.storage.k8s.io/v1
        driver: openshift-storage.rbd.csi.ceph.com
        # ...
        ```

        Example `StorageClass` object:
        ```yaml
        kind: StorageClass
        apiVersion: storage.k8s.io/v1
        # ...
        provisioner: openshift-storage.rbd.csi.ceph.com
        ```

**Procedure**

1.  Create a `DataVolume` manifest as shown in the following example:
    ```yaml
    apiVersion: cdi.kubevirt.io/v1beta1
    kind: DataVolume
    metadata:
      name: <datavolume>
    spec:
      source:
        pvc:
          namespace: "<source_namespace>"
          name: "<my_vm_disk>"
      storage: {}
    ```

    where:

    `<datavolume>`
    :   Specifies the name of the new data volume.

    `<source_namespace>`
    :   Specifies the namespace of the source PVC.

    `<my_vm_disk>`
    :   Specifies the name of the source PVC.

1.  Create the data volume by running the following command:
    ```terminal
    $ oc create -f <datavolume>.yaml
    ```

    :::note

    Data volumes prevent a VM from starting before the PVC is prepared. You can create a VM that references the new data volume while the
    PVC is being cloned.
    
    :::