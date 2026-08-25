{%- set _mod_docs_content_type = "PROCEDURE" %}
# Backing up applications with File System Backup {id="oadp-backingup-file-system-backup_{{ context }}"}

Create a `Backup` custom resource (CR) to back up applications by using File System Backup (FSB) with Kopia as the uploader. This helps you to protect Kubernetes volumes attached to pods when snapshots are not available or when using NFS data volumes. {._abstract}

**Prerequisites**

*   You must install the OpenShift API for Data Protection (OADP) Operator.
*   You must not disable the default `nodeAgent` installation by setting `spec.configuration.nodeAgent.enable` to `false` in the `DataProtectionApplication` CR.
*   You must select Kopia or Restic as the uploader by setting `spec.configuration.nodeAgent.uploaderType` to `kopia` or `restic` in the `DataProtectionApplication` CR.
*   The `DataProtectionApplication` CR must be in a `Ready` state.

**Procedure**

*   Create the `Backup` CR, as in the following example:
    ```yaml
    apiVersion: velero.io/v1
    kind: Backup
    metadata:
      name: <backup>
      labels:
        velero.io/storage-location: default
      namespace: openshift-adp
    spec:
      defaultVolumesToFsBackup: true
    ...
    ```

    where:

    `defaultVolumesToFsBackup: true`
    :   Specifies the FSB setting within the `spec` block for OADP version 1.2 and later. In OADP version 1.1, add `defaultVolumesToRestic: true` instead.