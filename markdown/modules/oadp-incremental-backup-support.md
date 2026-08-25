{%- set _mod_docs_content_type = "CONCEPT" %}
# About incremental backup support {id="oadp-about-incremental-backup-support_{{ context }}"}

{{ oadp_short }} supports incremental backups of `block` and `Filesystem` persistent volumes for both containerized, and {{ VirtProductName }} workloads. The following table summarizes the support for File System Backup (FSB), Container Storage Interface (CSI), and CSI Data Mover: {._abstract}

**{{ oadp_short }} backup support matrix for containerized workloads**

| Volume mode | FSB - Restic | FSB - Kopia | CSI | CSI Data Mover |
| --- | --- | --- | --- | --- |
| Filesystem | Backup supported, Incremental backup supported | Backup supported, Incremental backup supported | Backup supported | Backup supported, Incremental backup supported |
| Block | Not supported | Not supported | Backup supported | Backup supported, Incremental backup supported |

**{{ oadp_short }} backup support matrix for {{ VirtProductName }} workloads**

| Volume mode | FSB - Restic | FSB - Kopia | CSI | CSI Data Mover |
| --- | --- | --- | --- | --- |
| Filesystem | Not supported | Not supported | Backup supported | Backup supported, Incremental backup supported |
| Block | Not supported | Not supported | Backup supported | Backup supported, Incremental backup supported |


:::note

The CSI Data Mover backups use Kopia regardless of `uploaderType`.

:::