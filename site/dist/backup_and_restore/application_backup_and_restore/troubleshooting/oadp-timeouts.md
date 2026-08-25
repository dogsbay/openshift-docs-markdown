---
title: OADP timeouts
---

# OADP timeouts {#oadp-timeouts}

Configure {{ oadp_short }} timeout parameters for Restic, Velero, Data Mover, CSI snapshots, and item operations to allow complex or resource-intensive processes to complete successfully. This helps you reduce errors, retries, and failures caused by premature termination of backup and restore operations.

Ensure that you balance timeout extensions in a logical manner so that you do not configure excessively long timeouts that might hide underlying issues in the process. Consider and monitor an appropriate timeout value that meets the needs of the process and the overall system performance.

## Additional resources {#additional-resources_oadp-timeouts}

- [Restic timeout](/backup_and_restore/application_backup_and_restore/troubleshooting/oadp-timeouts#restic-timeout_oadp-timeouts)
- [Velero resource timeout](/backup_and_restore/application_backup_and_restore/troubleshooting/oadp-timeouts#velero-timeout_oadp-timeouts)
- [Data Mover timeout](/backup_and_restore/application_backup_and_restore/troubleshooting/oadp-timeouts#datamover-timeout_oadp-timeouts)
- [CSI snapshot timeout](/backup_and_restore/application_backup_and_restore/troubleshooting/oadp-timeouts#csisnapshot-timeout_oadp-timeouts)
- [Item operation timeout - backup](/backup_and_restore/application_backup_and_restore/troubleshooting/oadp-timeouts#item-operation-timeout-backup_oadp-timeouts)
- [Item operation timeout - restore](/backup_and_restore/application_backup_and_restore/troubleshooting/oadp-timeouts#item-operation-timeout-restore_oadp-timeouts)
