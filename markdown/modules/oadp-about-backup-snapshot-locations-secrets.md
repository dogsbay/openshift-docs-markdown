{%- set _mod_docs_content_type = "CONCEPT" %}
# About backup and snapshot locations and their secrets {id="oadp-about-backup-snapshot-locations_{{ context }}"}

Review backup location, snapshot location, and secret configuration requirements for the `DataProtectionApplication` custom resource (CR). This helps you understand storage options and credential management for data protection operations. {._abstract}

## Backup locations {id="backup-locations_{{ context }}"}

You can specify one of the following AWS S3-compatible object storage solutions as a backup location:

*   Multicloud Object Gateway (MCG) 
*   Red&#160;Hat Container Storage
*   Ceph RADOS Gateway; also known as Ceph Object Gateway
*   {{ odf_full }}
*   MinIO

Velero backs up {{ product_title }} resources, Kubernetes objects, and internal images as an archive file on object storage.

## Snapshot locations {id="snapshot-locations_{{ context }}"}

If you use your cloud provider’s native snapshot API to back up persistent volumes, you must specify the cloud provider as the snapshot location.

If you use Container Storage Interface (CSI) snapshots, you do not need to specify a snapshot location because you will create a `VolumeSnapshotClass` CR to register the CSI driver.

If you use File System Backup (FSB), you do not need to specify a snapshot location because FSB backs up the file system on object storage.

## Secrets {id="secrets_{{ context }}"}

If the backup and snapshot locations use the same credentials or if you do not require a snapshot location, you create a default `Secret`.

If the backup and snapshot locations use different credentials, you create two secret objects:

*   Custom `Secret` for the backup location, which you specify in the `DataProtectionApplication` CR.
*   Default `Secret` for the snapshot location, which is not referenced in the `DataProtectionApplication` CR.


:::important

The Data Protection Application requires a default `Secret`. Otherwise, the installation will fail.

If you do not want to specify backup or snapshot locations during the installation, you can create a default `Secret` with an empty `credentials-velero` file.

:::