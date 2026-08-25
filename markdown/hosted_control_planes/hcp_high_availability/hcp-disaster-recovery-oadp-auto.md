---
title: "Automated disaster recovery for a hosted cluster by using {{ oadp_short }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Automated disaster recovery for a hosted cluster by using {{ oadp_short }} {id="hcp-disaster-recovery-oadp-auto"}
{%- set context = "hcp-disaster-recovery-oadp-auto" %}

In hosted clusters on bare-metal or {{ aws_first }} platforms, you can automate some backup and restore steps by using the {{ oadp_first }} Operator. {._abstract}

The process involves the following steps:

1.  Configuring {{ oadp_short }}
1.  Defining a Data Protection Application (DPA)
1.  Backing up the data plane workload
1.  Backing up the control plane workload
1.  Restoring a hosted cluster by using {{ oadp_short }}

{% leveloffset +1 %}{% include "./modules/hcp-dr-oadp-auto-prereqs.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About installing {{ oadp_short }}](/backup_and_restore/application_backup_and_restore/installing/about-installing-oadp#about-installing-oadp)
*   [{{ odf_full }}](https://docs.redhat.com/en/documentation/red_hat_openshift_data_foundation/)
*   [MinIO](https://min.io/)
*   [Support for {{ oadp_first }}](/backup_and_restore/application_backup_and_restore/oadp-intro#oadp-operator-supported_oadp-api)

{% leveloffset +1 %}{% include "./modules/hcp-dr-prep-oadp-auto.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring the {{ oadp_full }} with AWS S3 compatible storage](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-mcg#installing-oadp-mcg)
*   [Configuring the {{ oadp_full }} with Multicloud Object Gateway](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-aws#installing-oadp-aws)

{% leveloffset +1 %}{% include "./modules/hcp-dr-oadp-dpa.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-dr-oadp-dpa-bm.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-dr-oadp-dpa-aws.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-dp-backup-oadp-auto.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Backing up applications](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/backing-up-applications#backing-up-applications)

{% leveloffset +1 %}{% include "./modules/hcp-dr-oadp-backup-cp-workload-auto.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-dr-oadp-restore-auto.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-dr-oadp-observe.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-dr-oadp-observe-velero.md" %}{% endleveloffset %}