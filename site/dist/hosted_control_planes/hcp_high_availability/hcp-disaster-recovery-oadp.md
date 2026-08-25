---
title: Disaster recovery for a hosted cluster by using {{ oadp_short }}
---

# Disaster recovery for a hosted cluster by using {{ oadp_short }} {#hcp-disaster-recovery-oadp}

By using the {{ oadp_first }} Operator for disaster recovery, you can restore hosted cluster namespaces from object storage instead of manually rebuilding every cluster. In addition, you back up etcd as part of the control plane backup, and you can back up hosted clusters independently.

You can use the {{ oadp_short }} Operator to perform disaster recovery for {{ hcp }} on {{ aws_first }} and bare metal.

The disaster recovery process with {{ oadp_first }} involves the following steps:

1. Preparing your platform, such as {{ aws_full }} or bare metal, to use {{ oadp_short }}
2. Backing up the data plane workload
3. Backing up the control plane workload
4. Restoring a hosted cluster by using {{ oadp_short }}

**Additional resources**

- [About installing {{ oadp_short }}](/backup_and_restore/application_backup_and_restore/installing/about-installing-oadp#about-installing-oadp)
- [Support for {{ oadp_first }}](/backup_and_restore/application_backup_and_restore/oadp-intro#oadp-operator-supported_oadp-api)
- [Configuring the {{ oadp_full }} with AWS S3 compatible storage](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-mcg#installing-oadp-mcg)

**Additional resources**

- [About installing {{ oadp_short }}](/backup_and_restore/application_backup_and_restore/installing/about-installing-oadp#about-installing-oadp)
- [Support for {{ oadp_first }}](/backup_and_restore/application_backup_and_restore/oadp-intro#oadp-operator-supported_oadp-api)
- [Configuring the {{ oadp_full }} with Multicloud Object Gateway](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-aws#installing-oadp-aws)

**Additional resources**

- [Backing up applications](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/backing-up-applications#backing-up-applications)

**Additional resources**

- [Removing a cluster by using the console](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#remove-a-cluster-by-using-the-console)
- [Removing remaining resources after removing a cluster](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#removing-a-cluster-from-management-in-special-cases)
