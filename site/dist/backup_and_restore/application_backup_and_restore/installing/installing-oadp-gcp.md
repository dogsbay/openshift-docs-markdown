---
title: Configuring the OpenShift API for Data Protection with {{ gcp_full }}
---

# Configuring the OpenShift API for Data Protection with {{ gcp_full }} {#installing-oadp-gcp}

You install the OpenShift API for Data Protection (OADP) with {{ gcp_first }} by installing the OADP Operator. The Operator installs Velero {{ velero_version }}.

You configure {{ gcp_short }} for Velero, create a default `Secret`, and then install the Data Protection Application.

To install the OADP Operator in a restricted network environment, you must first disable the default software catalog sources and mirror the Operator catalog.

## Additional resources {#additional-resources_installing-oadp-gcp}

- \[Velero {{ velero_version }}\](https://{{ velero_domain }}/docs/v{{ velero_version }}/)
- [Installing the OADP Operator](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/installing/oadp-installing-operator#oadp-installing-operator-doc)
- [Using Operator Lifecycle Manager in disconnected environments](/openshift-docs-markdown/disconnected/using-olm#olm-restricted-networks)
- [Installing the Data Protection Application with the `kubevirt` and `openshift` plugins](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/installing/installing-oadp-kubevirt#oadp-installing-dpa_installing-oadp-kubevirt)
- [Running tasks in pods using jobs](/openshift-docs-markdown/nodes/jobs/nodes-nodes-jobs#nodes-nodes-jobs)
- [Configuring the {{ oadp_first }} with multiple backup storage locations](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/installing/configuring-oadp-multiple-bsl#configuring-oadp-multiple-bsl)
