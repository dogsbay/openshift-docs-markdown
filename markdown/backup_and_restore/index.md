---
title: Backup and restore
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Backup and restore {id="backup-restore-overview"}
{%- set context = "backup-restore-overview" -%}
{%- set backup_restore_overview = true %}

Learn how to back up and restore your {{ product_title }} cluster’s control plane and how to back up and restore applications running on the cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/control-plane-backup-restore-operations-overview.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Quorum protection with machine lifecycle hooks](/machine_management/deleting-machine#machine-lifecycle-hook-deletion-etcd_deleting-machine)

{% leveloffset +1 %}{% include "./modules/application-backup-restore-operations-overview.md" %}{% endleveloffset %}