---
title: Backing up applications on ROSA clusters using OADP
---

# Backing up applications on ROSA clusters using OADP {#oadp-rosa-backing-up-applications}

Use {{ oadp_first }} with {{ product_rosa }} (ROSA) clusters to back up and restore application data.

ROSA is a fully-managed, turnkey application platform that allows you to deliver value to your customers by building and deploying applications.

ROSA provides seamless integration with a wide range of {{ aws_first }} compute, database, analytics, machine learning, networking, mobile, and other services to speed up the building and delivery of differentiating experiences to your customers.

You can subscribe to the service directly from your {{ aws_short }} account.

After you create your clusters, you can operate your clusters with the OpenShift Container Platform web console or through {{ cluster_manager_first }}. You can also use ROSA with OpenShift APIs and command-line interface (CLI) tools.

For additional information about ROSA installation, see *Installing Red Hat OpenShift Service on AWS (ROSA)* interactive walk-through.

Before installing {{ oadp_first }}, you must set up role and policy credentials for OADP so that it can use the {{ aws_full }} API.

This process is performed in the following two stages:

1. Prepare {{ aws_short }} credentials
2. Install the OADP Operator and give it an IAM role

**Additional resources**

- [Installing from the software catalog using the web console](/openshift-docs-markdown/operators/user/olm-installing-operators-in-namespace#olm-installing-from-software-catalog-using-web-console_olm-installing-operators-in-namespace)
- [Backing up applications](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/backing-up-applications#backing-up-applications)
- [Installing Red Hat OpenShift Service on AWS interactive walkthrough](https://www.redhat.com/en/products/interactive-walkthrough/install-rosa)
- [{{ cluster_manager_first }}](https://docs.openshift.com/dedicated/ocm/ocm-overview.html)
