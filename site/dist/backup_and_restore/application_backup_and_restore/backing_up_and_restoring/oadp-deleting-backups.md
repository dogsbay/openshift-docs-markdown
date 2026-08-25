---
title: Deleting backups
---

# Deleting backups {#oadp-deleting-backups}

Delete a backup by creating the `DeleteBackupRequest` custom resource (CR) or by running the `velero backup delete` command. This helps you to free up storage space and remove outdated backup artifacts.

The volume backup artifacts are deleted at different times depending on the backup method:

- Restic: The artifacts are deleted in the next full maintenance cycle, after the backup is deleted.
- Container Storage Interface (CSI): The artifacts are deleted immediately when the backup is deleted.
- Kopia: The artifacts are deleted after three full maintenance cycles of the Kopia repository, after the backup is deleted.

{% include "./modules/oadp-deleting-backups-using-oc.md" %} {% include "./modules/oadp-deleting-backups-using-velero.md" %}
