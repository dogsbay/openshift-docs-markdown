---
title: "Backing up etcd data for {{ hcp }} by using the etcd snapshot method"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Backing up etcd data for {{ hcp }} by using the etcd snapshot method {id="hcp-backup-etcd-snapshot"}
{%- set context = "hcp-backup-etcd-snapshot" %}

To back up etcd data for {{ hcp }}, you can use the default volume snapshot approach, or you can take the etcd snapshot approach, which results in smaller backup artifacts.

{%- set FeatureName = "The etcd snapshot method" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/hcp-backup-etcd-snapshot-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-backup-etcd-snapshot-config.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring {{ oadp_short }}](/hosted_control_planes/hcp_high_availability/hcp-disaster-recovery-oadp-auto#hcp-dr-prep-oadp-auto_hcp-disaster-recovery-oadp-auto)
*   [Automating the backup and restore process by using DPA](/hosted_control_planes/hcp_high_availability/hcp-disaster-recovery-oadp-auto#hcp-dr-oadp-dpa_hcp-disaster-recovery-oadp-auto)
*   [About installing {{ oadp_short }}](/backup_and_restore/application_backup_and_restore/installing/about-installing-oadp#about-installing-oadp)

{% leveloffset +1 %}{% include "./modules/hcp-backup-etcd-snapshot-backup.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring the etcd snapshot method](/hosted_control_planes/hcp_high_availability/hcp-backup-etcd-snapshot#hcp-backup-etcd-snapshot-config_hcp-backup-etcd-snapshot)

{% leveloffset +1 %}{% include "./modules/hcp-backup-etcd-snapshot-restore.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring the etcd snapshot method](/hosted_control_planes/hcp_high_availability/hcp-backup-etcd-snapshot#hcp-backup-etcd-snapshot-config_hcp-backup-etcd-snapshot)

{% leveloffset +1 %}{% include "./modules/hcp-backup-etcd-snapshot-reference.md" %}{% endleveloffset %}