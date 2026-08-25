---
title: Backing up and restoring virtual machines
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Backing up and restoring virtual machines {id="virt-backup-restore-overview"}
{%- set context = "virt-backup-restore-overview" -%}
{%- set virt_backup_restore_overview = true -%}
{%- set credentials = "cloud-credentials" -%}
{%- set provider = "gcp" %}

Back up and restore virtual machines by using the {{ oadp_full }}.


:::important

Red Hat supports using {{ VirtProductName }} 4.14 or later with {{ oadp_short }} 1.3.x or later.

{{ oadp_short }} versions earlier than 1.3.0 are not supported for back up and restore of {{ VirtProductName }}.

:::


{% leveloffset +1 %}{% include "./modules/install-and-configure-oadp-kubevirt.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/oadp-installing-dpa-1-3.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
## Additional resources {id="additional-resources_{{ context }}"}
*   [Application backup and restore operations](/backup_and_restore/index#application-backup-restore-operations-overview_backup-restore-overview)
*   [Backing up applications with File System Backup: Kopia or Restic](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-backing-up-applications-restic-doc#oadp-backing-up-applications-restic-doc)
*   [{{ oadp_short }} plug-ins](/backup_and_restore/application_backup_and_restore/oadp-features-plugins#oadp-plugins_oadp-features-plugins)
*   [Backing up applications](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/backing-up-applications#backing-up-applications)
*   [Restoring applications](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/restoring-applications#restoring-applications)
*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
{% endif %}

{%- set provider = false -%}
{%- set credentials = false -%}
{%- set virt_backup_restore_overview = false -%}