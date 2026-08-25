{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ oadp_short }} Self-Service custom resources {id="oadp-self-service-custom-resources_{{ context }}"}

Use {{ oadp_short }} Self-Service custom resources to control backup, restore, storage location, and download operations for namespace-scoped applications. This provides namespace administrators with self-service data protection tools. {._abstract}

The {{ oadp_short }} Self-Service feature has the following new custom resources (CRs) to perform the backup and restore operations for a namespace admin user:

**Custom resources**

|     |     |
| --- | --- |
| **CR** | **Description** |
| `NonAdminController` (NAC) | Controls and orchestrates the Self-Service operations. |
| `NonAdminBackup` (NAB) | Manages namespace-scoped backup operations. |
| `NonAdminRestore` (NAR) | Manages namespace-scoped restore operations. |
| `NonAdminBackupStorageLocation` (NABSL) | Defines user-specific backup storage location.  |
| `NonAdminDownloadRequest` (NADR) | Manages namespace-scoped download request operations. |