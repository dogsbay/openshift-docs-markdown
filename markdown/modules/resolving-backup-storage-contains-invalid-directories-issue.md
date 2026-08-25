{%- set _mod_docs_content_type = "PROCEDURE" %}

# Resolving invalid directories in backup storage {id="resolving-backup-storage-contains-invalid-directories-issue_{{ context }}"}

Resolve the `Backup storage contains invalid top-level directories` error that occurs when object storage contains non-Velero directories. This helps you configure the correct bucket prefix for shared object storage. {._abstract}

**Procedure**

*   If the object storage is not dedicated to Velero, you must specify a prefix for the bucket by setting the `spec.backupLocations.velero.objectStorage.prefix` parameter in the `DataProtectionApplication` manifest.