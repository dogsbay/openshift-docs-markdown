---
title: Deleting backups
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Deleting backups {id="oadp-deleting-backups"}
{%- set context = "deleting-backups" %}

Delete a backup by creating the `DeleteBackupRequest` custom resource (CR) or by running the `velero backup delete` command. This helps you to free up storage space and remove outdated backup artifacts. {._abstract}

The volume backup artifacts are deleted at different times depending on the backup method:

*   Restic: The artifacts are deleted in the next full maintenance cycle, after the backup is deleted.
*   Container Storage Interface (CSI): The artifacts are deleted immediately when the backup is deleted.
*   Kopia: The artifacts are deleted after three full maintenance cycles of the Kopia repository, after the backup is deleted.

{% leveloffset +1 %}{% include "./modules/oadp-deleting-backups-using-oc.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/oadp-deleting-backups-using-velero.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/oadp-about-kopia-repo-maintenance.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/oadp-deleting-backup-repository.md" %}{% endleveloffset %}