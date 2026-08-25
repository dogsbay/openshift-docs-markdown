---
title: "Configuring the {{ oadp_full }} with {{ VirtProductName }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring the {{ oadp_full }} with {{ VirtProductName }} {id="installing-oadp-kubevirt"}
{%- set context = "installing-oadp-kubevirt" -%}
{%- set installing_oadp_kubevirt = true -%}
{%- set credentials = "cloud-credentials" -%}
{%- set provider = "gcp" %}

You can install the {{ oadp_first }} with {{ VirtProductName }} by installing the OADP Operator and configuring a backup location. Then, you can install the Data Protection Application.

Back up and restore virtual machines by using the {{ oadp_full }}.

{{ oadp_full }} with {{ VirtProductName }} supports the following backup and restore storage options:

*   Container Storage Interface (CSI) backups
*   Container Storage Interface (CSI) backups with DataMover

The following storage options are excluded:

*   File system backup and restore
*   Volume snapshot backups and restores

To install the OADP Operator in a restricted network environment, you must first disable the default software catalog sources and mirror the Operator catalog.


:::important

Red Hat only supports the combination of {{ oadp_short }} versions 1.3.0 and later, and {{ VirtProductName }} versions 4.14 and later.

{{ oadp_short }} versions before 1.3.0 are not supported for back up and restore of {{ VirtProductName }}.

:::


{% leveloffset +1 %}{% include "./modules/install-and-configure-oadp-kubevirt.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-installing-dpa-1-3.md" %}{% endleveloffset %}

{% include "./snippets/oadp-windows-vm-backup-fails.md" %}

{% leveloffset +1 %}{% include "./modules/oadp-backup-single-vm.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-restore-single-vm.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-restore-single-vm-from-multiple-vm-backup.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-client-burst-qps.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-node-agent-non-root.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-node-agents.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-node-agent-load-affinity.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-node-agent-load-affinity-guidelines.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-node-agent-load-concurrency.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-repository-maintenance.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-velero-load-affinity.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-priority-class.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-imagepullpolicy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-incremental-backup-support.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Application backup and restore operations](/backup_and_restore/index#application-backup-restore-operations-overview_backup-restore-overview)
*   [Backing up applications with File System Backup: Kopia or Restic](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-backing-up-applications-restic-doc#oadp-backing-up-applications-restic-doc)
*   [{{ oadp_short }} plugins](/backup_and_restore/application_backup_and_restore/oadp-features-plugins#oadp-plugins_oadp-features-plugins)
*   [`Backup` custom resource (CR)](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/backing-up-applications#backing-up-applications)
*   [`Restore` CR](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/restoring-applications#restoring-applications)
*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
*   [Velero {{ velero_version }}](https://velero.io/docs/v{{ velero_version }})

{%- set installing_oadp_kubevirt = false -%}