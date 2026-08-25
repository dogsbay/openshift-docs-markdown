---
title: Backing up applications on AWS STS using OADP
---

# Backing up applications on AWS STS using OADP {#oadp-aws-sts}

Install the {{ oadp_first }} with {{ aws_first }} by installing the OADP Operator. The Operator installs {{ velero_link }}.

You configure {{ aws_short }} for Velero, create a default `Secret`, and then install the Data Protection Application. For more details, see *Installing the OADP Operator*.

To install the OADP Operator in a restricted network environment, you must first disable the default software catalog sources and mirror the Operator catalog. See *Using Operator Lifecycle Manager in disconnected environments*.

You can install {{ oadp_short }} on an AWS {{ sts_first }} (AWS STS) cluster manually. Amazon {{ aws_short }} provides {{ aws_short }} STS as a web service that enables you to request temporary, limited-privilege credentials for users. You use STS to provide trusted users with temporary access to resources via API calls, your {{ aws_short }} console, or the {{ aws_short }} command-line interface (CLI).

Before installing {{ oadp_first }}, you must set up role and policy credentials for {{ oadp_short }} so that it can use the {{ aws_full }} API.

This process is performed in the following two stages:

1. Prepare {{ aws_short }} credentials.
2. Install the OADP Operator and give it an IAM role.

**Additional resources**

- [Installing the OADP Operator](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/installing/oadp-installing-operator#oadp-installing-operator-doc)
- [Using Operator Lifecycle Manager in disconnected environments](/openshift-docs-markdown/disconnected/using-olm#olm-restricted-networks)
- [Installing from the software catalog using the web console](/openshift-docs-markdown/operators/user/olm-installing-operators-in-namespace#olm-installing-from-software-catalog-using-web-console_olm-installing-operators-in-namespace)
- [Backing up applications](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/backing-up-applications#backing-up-applications)
