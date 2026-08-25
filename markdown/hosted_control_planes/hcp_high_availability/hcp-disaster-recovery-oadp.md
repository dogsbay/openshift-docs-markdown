---
title: "Disaster recovery for a hosted cluster by using {{ oadp_short }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Disaster recovery for a hosted cluster by using {{ oadp_short }} {id="hcp-disaster-recovery-oadp"}
{%- set context = "hcp-disaster-recovery-oadp" %}

By using the {{ oadp_first }} Operator for disaster recovery, you can restore hosted cluster namespaces from object storage instead of manually rebuilding every cluster. In addition, you back up etcd as part of the control plane backup, and you can back up hosted clusters independently.

You can use the {{ oadp_short }} Operator to perform disaster recovery for {{ hcp }} on {{ aws_first }} and bare metal.

The disaster recovery process with {{ oadp_first }} involves the following steps:

1.  Preparing your platform, such as {{ aws_full }} or bare metal, to use {{ oadp_short }}
1.  Backing up the data plane workload
1.  Backing up the control plane workload
1.  Restoring a hosted cluster by using {{ oadp_short }}

{% leveloffset +1 %}{% include "./modules/hcp-prepare-aws-oadp.md" %}{% endleveloffset %}

**Additional resources**

*   [About installing {{ oadp_short }}](/backup_and_restore/application_backup_and_restore/installing/about-installing-oadp#about-installing-oadp)
*   [Support for {{ oadp_first }}](/backup_and_restore/application_backup_and_restore/oadp-intro#oadp-operator-supported_oadp-api)
*   [Configuring the {{ oadp_full }} with AWS S3 compatible storage](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-mcg#installing-oadp-mcg)

{% leveloffset +1 %}{% include "./modules/hcp-prepare-bm-oadp.md" %}{% endleveloffset %}

**Additional resources**

*   [About installing {{ oadp_short }}](/backup_and_restore/application_backup_and_restore/installing/about-installing-oadp#about-installing-oadp)
*   [Support for {{ oadp_first }}](/backup_and_restore/application_backup_and_restore/oadp-intro#oadp-operator-supported_oadp-api)
*   [Configuring the {{ oadp_full }} with Multicloud Object Gateway](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-aws#installing-oadp-aws)

{% leveloffset +1 %}{% include "./modules/hcp-backup-dp-oadp.md" %}{% endleveloffset %}

**Additional resources**

*   [Backing up applications](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/backing-up-applications#backing-up-applications)

{% leveloffset +1 %}{% include "./modules/hcp-backup-cp-oadp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-dr-oadp-backup-cp-workload-aws.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-dr-oadp-backup-cp-workload-bm.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-restoring-oadp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-dr-oadp-restore.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-dr-oadp-restore-new-mgmt.md" %}{% endleveloffset %}

**Additional resources**

*   [Removing a cluster by using the console](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#remove-a-cluster-by-using-the-console)
*   [Removing remaining resources after removing a cluster](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#removing-a-cluster-from-management-in-special-cases)

{% leveloffset +1 %}{% include "./modules/hcp-dr-oadp-observe.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-dr-oadp-observe-velero.md" %}{% endleveloffset %}