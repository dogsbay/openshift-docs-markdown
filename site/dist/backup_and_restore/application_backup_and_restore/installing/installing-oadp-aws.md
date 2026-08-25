---
title: Configuring the OpenShift API for Data Protection with AWS S3 compatible storage
---

# Configuring the OpenShift API for Data Protection with AWS S3 compatible storage {#installing-oadp-aws}

Install the {{ oadp_first }} with Amazon Web Services (AWS) S3 compatible storage by installing the {{ oadp_short }} Operator. The Operator installs Velero {{ velero_version }}.

You configure AWS for Velero, create a default `Secret`, and then install the Data Protection Application. For more details, see *Installing the OADP Operator*.

To install the OADP Operator in a restricted network environment, you must first disable the default software catalog sources and mirror the Operator catalog. See *Using Operator Lifecycle Manager in disconnected environments* for details.

**Additional resources**

- [Installing the OADP Operator](/backup_and_restore/application_backup_and_restore/installing/oadp-installing-operator#oadp-installing-operator-doc)
- \[Velero {{ velero_version }}\](https://{{ velero_domain }}/docs/v{{ velero_version }}/)
- [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
- [Installing the Data Protection Application with the `kubevirt` and `openshift` plugins](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-kubevirt#oadp-installing-dpa_installing-oadp-kubevirt)
- [Running tasks in pods using jobs](/nodes/jobs/nodes-nodes-jobs#nodes-nodes-jobs)
