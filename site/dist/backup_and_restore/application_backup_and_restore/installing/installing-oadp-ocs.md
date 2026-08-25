---
title: Configuring the OpenShift API for Data Protection with OpenShift Data Foundation
---

# Configuring the OpenShift API for Data Protection with OpenShift Data Foundation {#installing-oadp-ocs}

Install the {{ oadp_first }} with {{ rh_storage }} by installing the {{ oadp_short }} Operator and configuring a backup location and a snapshot location. You then install the Data Protection Application.

You can configure Multicloud Object Gateway or any AWS S3-compatible object storage as a backup location.

You can create a `Secret` CR for the backup location and install the Data Protection Application.

To install the OADP Operator in a restricted network environment, you must first disable the default software catalog sources and mirror the Operator catalog.

## Additional resources {#additional-resources_installing-oadp-ocs}

- [Configuring OADP with Multicloud Object Gateway](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/installing/installing-oadp-mcg#installing-oadp-mcg)
- [Installing the OADP Operator](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/installing/oadp-installing-operator#oadp-installing-operator-doc)
- [Using Operator Lifecycle Manager in disconnected environments](/openshift-docs-markdown/disconnected/using-olm#olm-restricted-networks)
- [Installing the Data Protection Application with the `kubevirt` and `openshift` plugins](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/installing/installing-oadp-kubevirt#oadp-installing-dpa_installing-oadp-kubevirt)
- [Running tasks in pods using jobs](/openshift-docs-markdown/nodes/jobs/nodes-nodes-jobs#nodes-nodes-jobs)
- [Configuring the {{ oadp_first }} with multiple backup storage locations](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/installing/configuring-oadp-multiple-bsl#configuring-oadp-multiple-bsl)
- [Creating an Object Bucket Claim using the OpenShift Web Console](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/4.13/html/managing_hybrid_and_multicloud_resources/object-bucket-claim#creating-an-object-bucket-claim-using-the-openshift-web-console_rhodf)
- [Configuring node agents and node labels](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/installing/installing-oadp-ocs#oadp-configuring-node-agents_installing-oadp-ocs)
