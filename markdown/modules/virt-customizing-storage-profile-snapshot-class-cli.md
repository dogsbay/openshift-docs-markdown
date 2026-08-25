{%- set _mod_docs_content_type = "PROCEDURE" %}
# Specifying a volume snapshot class by using the CLI {id="virt-customizing-storage-profile-snapshot-class-cli_{{ context }}"}

If you are creating a snapshot of a VM, you must specify only one volume snapshot class. Any disk that has more than one volume snapshot class is excluded from the snapshots list. A warning is displayed if the storage class of the disk has more than one volume snapshot class associated with it. {._abstract}

You can select which volume snapshot class to use by either:

*   Setting the `spec.snapshotClass` for the storage profile.
*   Setting a default volume snapshot class.

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

*   Set the `VolumeSnapshotClass` you want to use. For example:
    ```yaml
    apiVersion: cdi.kubevirt.io/v1beta1
    kind: StorageProfile
    metadata:
      name: ocs-storagecluster-ceph-rbd-virtualization
    spec:
      snapshotClass: ocs-storagecluster-rbdplugin-snapclass
    ```
*   Alternatively, set the default volume snapshot class by running the following command:
    ```terminal
    # oc patch VolumeSnapshotClass ocs-storagecluster-cephfsplugin-snapclass --type=merge -p '{"metadata":{"annotations":{"snapshot.storage.kubernetes.io/is-default-class":"true"}}}'
    ```