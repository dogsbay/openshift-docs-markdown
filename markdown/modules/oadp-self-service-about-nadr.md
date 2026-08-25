{%- set _mod_docs_content_type = "REFERENCE" %}
# About NonAdminDownloadRequest CR {id="oadp-self-service-about-nadr_{{ context }}"}

Review backup and restore logs by using the `NonAdminDownloadRequest` (NADR) custom resource (CR). This helps you troubleshoot backup and restore issues without cluster administrator assistance.  {._abstract}

The NADR CR provides information that is equivalent to what a cluster administrator can access by using the `velero backup describe --details` command.

After the NADR CR request is validated, a secure download URL is generated to access the requested information.

You can download the following NADR resources:

**NADR resources**

|     |     |     |
| --- | --- | --- |
| **Resource type** | **Description** | **Equivalent to** |
| `BackupResourceList` | List of resources included in the backup | `velero backup describe --details` (resource listing)  |
| `BackupContents` | Contents of files backed up | Part of backup details  |
| `BackupLog` | Logs from the backup operation | `velero backup logs`  |
| `BackupVolumeSnapshots` | Information about volume snapshots | `velero backup describe --details` (snapshots section)  |
| `BackupItemOperations` | Information about item operations performed during backup | `velero backup describe --details` (operations section)  |
| `RestoreLog` | Logs from the restore operation | `velero restore logs`  |
| `RestoreResults` | Detailed results of the restore | `velero restore describe --details` |