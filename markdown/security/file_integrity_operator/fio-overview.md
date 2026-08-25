---
title: File Integrity Operator overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# File Integrity Operator overview {id="fio-overview"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "fio-overview" %}

The File Integrity Operator continually runs file integrity checks on the cluster nodes. It deploys a DaemonSet that initializes and runs privileged Advanced Intrusion Detection Environment (AIDE) containers on each node, providing a log of files that have been modified since the initial run of the DaemonSet pods.


:::note

File Integrity Operator is not supported on HCP clusters.

:::


## Additional resources {id="fio-overview_additional-resources"}

*   [File Integrity Operator release notes](/security/file_integrity_operator/file-integrity-operator-release-notes#file-integrity-operator-release-notes)
*   [File Integrity Operator support](/security/file_integrity_operator/fio-support#fio-support)
*   [Installing the File Integrity Operator](/security/file_integrity_operator/file-integrity-operator-installation#installing-file-integrity-operator)
*   [Updating the File Integrity Operator](/security/file_integrity_operator/file-integrity-operator-updating#file-integrity-operator-updating)
*   [Understanding the File Integrity Operator](/security/file_integrity_operator/file-integrity-operator-understanding#understanding-file-integrity-operator)
*   [Configuring the Custom File Integrity Operator](/security/file_integrity_operator/file-integrity-operator-configuring#configuring-file-integrity-operator)
*   [Performing advanced Custom File Integrity Operator tasks](/security/file_integrity_operator/file-integrity-operator-advanced-usage#file-integrity-operator-advanced-usage)
*   [Troubleshooting the File Integrity Operator](/security/file_integrity_operator/file-integrity-operator-troubleshooting#troubleshooting-file-integrity-operator)
*   [Uninstalling the File Integrity Operator](/security/file_integrity_operator/fio-uninstalling#fio-uninstalling)