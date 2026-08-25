{%- set _mod_docs_content_type = "PROCEDURE" %}
# Backing up persistent volumes with CSI snapshots {id="backingup-persistent-volumes_{{ context }}"}

Configure the `VolumeSnapshotClass` custom resource (CR) to back up persistent volumes with Container Storage Interface (CSI) snapshots. This helps you to prepare your cloud storage for CSI-based backup operations. {._abstract}

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
        velero.io/csi-volumesnapshot-class: "true"
      annotations:
        snapshot.storage.kubernetes.io/is-default-class: true
    driver: <csi_driver>
    deletionPolicy: <deletion_policy_type>
    ```

    where:

    `velero.io/csi-volumesnapshot-class: "true"`
    :   Must be set to `true`.

    `snapshot.storage.kubernetes.io/is-default-class: true`
    :   If you are restoring this volume in another cluster with the same driver, make sure that you set the `snapshot.storage.kubernetes.io/is-default-class` parameter to `false` instead of setting it to `true`. Otherwise, the restore will partially fail.

    `<deletion_policy_type>`
    :   Specifies the deletion policy type. OADP supports the `Retain` and `Delete` deletion policy types for CSI and Data Mover backup and restore.

**Next steps**

*   You can now create a `Backup` CR.