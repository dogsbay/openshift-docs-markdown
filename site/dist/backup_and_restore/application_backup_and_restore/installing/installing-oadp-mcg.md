---
title: Configuring the OpenShift API for Data Protection with Multicloud Object Gateway
---

# Configuring the OpenShift API for Data Protection with Multicloud Object Gateway {#installing-oadp-mcg}

Configure {{ oadp_first }} to use Multicloud Object Gateway (MCG), a component of {{ rh_storage }}, as a backup storage location by setting up credentials, secrets, and the Data Protection Application.

You can install the {{ oadp_first }} with MCG by installing the OADP Operator. The Operator installs Velero {{ velero_version }}.

You can create a `Secret` CR for the backup location and install the Data Protection Application.

To install the OADP Operator in a restricted network environment, you must first disable the default software catalog sources and mirror the Operator catalog.

## Additional resources {#additional-resources_installing-oadp-mcg}

- \[Velero {{ velero_version }}\](https://{{ velero_domain }}/docs/v{{ velero_version }}/)
- [Installing the OADP Operator](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/installing/oadp-installing-operator#oadp-installing-operator-doc)
- [Using Operator Lifecycle Manager in disconnected environments](/openshift-docs-markdown/disconnected/using-olm#olm-restricted-networks)
- [Performance tuning guide for Multicloud Object Gateway](https://access.redhat.com/solutions/6719951)
- [Installing the Data Protection Application with the `kubevirt` and `openshift` plugins](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/installing/installing-oadp-kubevirt#oadp-installing-dpa_installing-oadp-kubevirt)
- [Running tasks in pods using jobs](/openshift-docs-markdown/nodes/jobs/nodes-nodes-jobs#nodes-nodes-jobs)
- [Configuring the {{ oadp_first }} with multiple backup storage locations](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/installing/configuring-oadp-multiple-bsl#configuring-oadp-multiple-bsl)
- [Configuring node agents and node labels](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/installing/installing-oadp-mcg#oadp-configuring-node-agents_installing-oadp-mcg)
