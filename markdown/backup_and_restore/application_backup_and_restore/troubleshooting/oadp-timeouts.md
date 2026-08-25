---
title: OADP timeouts
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# OADP timeouts {id="oadp-timeouts"}
{%- set toc = true %}

{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "oadp-timeouts" -%}
{%- set namespace = "openshift-adp" -%}
{%- set local_product = "OADP" %}

Configure {{ oadp_short }} timeout parameters for Restic, Velero, Data Mover, CSI snapshots, and item operations to allow complex or resource-intensive processes to complete successfully. This helps you reduce errors, retries, and failures caused by premature termination of backup and restore operations.

Ensure that you balance timeout extensions in a logical manner so that you do not configure excessively long timeouts that might hide underlying issues in the process. Consider and monitor an appropriate timeout value that meets the needs of the process and the overall system performance.

{% leveloffset +1 %}{% include "./modules/oadp-restic-timeouts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-velero-timeouts.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-velero-default-timeouts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-datamover-timeouts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-csi-snapshot-timeouts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-item-restore-timeouts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-item-backup-timeouts.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Restic timeout](/backup_and_restore/application_backup_and_restore/troubleshooting/oadp-timeouts#restic-timeout_oadp-timeouts)
*   [Velero resource timeout](/backup_and_restore/application_backup_and_restore/troubleshooting/oadp-timeouts#velero-timeout_oadp-timeouts)
*   [Data Mover timeout](/backup_and_restore/application_backup_and_restore/troubleshooting/oadp-timeouts#datamover-timeout_oadp-timeouts)
*   [CSI snapshot timeout](/backup_and_restore/application_backup_and_restore/troubleshooting/oadp-timeouts#csisnapshot-timeout_oadp-timeouts)
*   [Item operation timeout - backup](/backup_and_restore/application_backup_and_restore/troubleshooting/oadp-timeouts#item-operation-timeout-backup_oadp-timeouts)
*   [Item operation timeout - restore](/backup_and_restore/application_backup_and_restore/troubleshooting/oadp-timeouts#item-operation-timeout-restore_oadp-timeouts)