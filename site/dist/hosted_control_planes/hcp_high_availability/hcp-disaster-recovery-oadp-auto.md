---
title: Automated disaster recovery for a hosted cluster by using {{ oadp_short }}
---

# Automated disaster recovery for a hosted cluster by using {{ oadp_short }} {#hcp-disaster-recovery-oadp-auto}

In hosted clusters on bare-metal or {{ aws_first }} platforms, you can automate some backup and restore steps by using the {{ oadp_first }} Operator.

The process involves the following steps:

1. Configuring {{ oadp_short }}
2. Defining a Data Protection Application (DPA)
3. Backing up the data plane workload
4. Backing up the control plane workload
5. Restoring a hosted cluster by using {{ oadp_short }}

**Additional resources**

- [About installing {{ oadp_short }}](/backup_and_restore/application_backup_and_restore/installing/about-installing-oadp#about-installing-oadp)
- [{{ odf_full }}](https://docs.redhat.com/en/documentation/red_hat_openshift_data_foundation/)
- [MinIO](https://min.io/)
- [Support for {{ oadp_first }}](/backup_and_restore/application_backup_and_restore/oadp-intro#oadp-operator-supported_oadp-api)

**Additional resources**

- [Configuring the {{ oadp_full }} with AWS S3 compatible storage](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-mcg#installing-oadp-mcg)
- [Configuring the {{ oadp_full }} with Multicloud Object Gateway](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-aws#installing-oadp-aws)

**Additional resources**

- [Backing up applications](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/backing-up-applications#backing-up-applications)
