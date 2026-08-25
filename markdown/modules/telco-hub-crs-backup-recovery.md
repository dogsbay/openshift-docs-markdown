{%- set _mod_docs_content_type = "REFERENCE" %}
# Backup Recovery reference CRs {id="backup-recovery-crs_{{ context }}"}

The following table lists the backup and recovery reference configuration custom resources (CRs) for the hub cluster. {._abstract}
 OADP,`backupSchedule.yaml`,Defines a `BackupSchedule` CR.,Yes OADP,`dataProtectionApplication.yaml`,Defines the data protection application with backup storage and configuration parameters.,Yes OADP,`objectBucketClaim.yaml`,Defines the object bucket used by backup.,Yes OADP,`policy-backup.yaml`,Defines a policy to ensure `BareMetalHost` CRs are correctly annotated for backup.,Yes OADP,`restore.yaml`,Example `Restore` CR.,Yes |