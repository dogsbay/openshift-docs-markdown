{%- set _mod_docs_content_type = "PROCEDURE" %}
# Backing up persistent volumes with CSI snapshots {id="oadp-backing-up-pvs-csi_{{ context }}"}
{%- set context = "backing-up-applications" %}

You back up persistent volumes with Container Storage Interface (CSI) snapshots by editing the `VolumeSnapshotClass` custom resource (CR) of the cloud storage before you create the `Backup` CR.

**Prerequisites**

*   The cloud provider must support CSI snapshots.
*   You must enable CSI in the `DataProtectionApplication` CR.

**Procedure**

*   Add the `metadata.labels.velero.io/csi-volumesnapshot-class: "true"` key-value pair to the `VolumeSnapshotClass` CR:
    ```yaml title="Example configuration file"
    apiVersion: snapshot.storage.k8s.io/v1
    kind: VolumeSnapshotClass
    metadata:
      name: <volume_snapshot_class_name>
      labels:
        velero.io/csi-volumesnapshot-class: "true" (1)
      annotations:
        snapshot.storage.kubernetes.io/is-default-class: true (2)
    driver: <csi_driver>
    deletionPolicy: <deletion_policy_type> (3)
    ```
    1.  Must be set to `true`.
    1.  Must be set to `true`.
    1.  OADP supports the `Retain` and `Delete` deletion policy types for CSI and Data Mover backup and restore. For the OADP 1.2 Data Mover, set the deletion policy type to `Retain`.

**Next steps**

*   You can now create a `Backup` CR.