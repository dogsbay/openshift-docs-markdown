---
title: Use virtual machine file restore
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}

# Use virtual machine file restore {id="virt-using-vm-file-restore"}
{%- set context = "virt-using-vm-file-restore" %}

Discover VM backups, restore files, and access restored files through a web browser or SSH-based tools.

{% leveloffset +1 %}{% include "./modules/oadp-vmfr-enabling.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-vmfr-creating-vmbd.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-vmfr-creating-vmfr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-vmfr-accessing-files-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-vmfr-accessing-files-ssh.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-vmfr-deleting-vmfr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-vmfr-end-to-end-workflow.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Recover individual files from virtual machine backups](/virt/backup_restore/virt-recovering-individual-files-from-vm-backups#virt-recovering-individual-files-from-vm-backups)
*   [Backing up and restoring virtual machines](/virt/backup_restore/virt-backup-restore-overview#virt-backup-restore-overview)
*   [Introduction to {{ oadp_full }}](/backup_and_restore/application_backup_and_restore/oadp-intro#oadp-introduction)