{%- set _mod_docs_content_type = "CONCEPT" %}
# About backing up data from one cluster and restoring it on another cluster {id="oadp-about-backing-and-restoring-from-cluster-to-cluster_{{ context }}"}

Back up application data from one {{ product_title }} cluster and restore it to another using {{ oadp_short }}. {._abstract}

{{ oadp_first }} is designed to back up and restore application data in the same {{ product_title }} cluster. You can use OADP to back up application data from one {{ product_title }} cluster and restore it on another cluster. However, doing so is more complicated than using OADP to back up and restore on the same cluster.

To successfully use OADP to back up data from one cluster and restore it to another cluster, you must take into account the following factors, in addition to the prerequisites and procedures that apply to using OADP to back up and restore data on the same cluster:

*   Operators
*   Use of Velero
*   UID and GID ranges

## Operators {id="oadp-cluster-to-cluster-operators_{{ context }}"}
You must exclude Operators from the backup of an application for backup and restore to succeed.

## Use of Velero {id="oadp-cluster-to-cluster-velero_{{ context }}"}

Velero, which OADP is built upon, does not natively support migrating persistent volume snapshots across cloud providers. To migrate volume snapshot data between cloud platforms, you must _either_ enable the Velero Restic file system backup option, which backs up volume contents at the file system level, _or_ use the OADP Data Mover for CSI snapshots.


:::note

In OADP 1.1 and earlier, the Velero Restic file system backup option is called `restic`.
In OADP 1.2 and later, the Velero Restic file system backup option is called `file-system-backup`.

:::


*   You must also use Velero’s File System Backup to migrate data between AWS regions or between Microsoft Azure regions.
*   Velero does not support restoring data to a cluster with an _earlier_ Kubernetes version than the source cluster.
*   It is theoretically possible to migrate workloads to a destination with a _later_ Kubernetes version than the source, but you must consider the compatibility of API groups between clusters for each custom resource. If a Kubernetes version upgrade breaks the compatibility of core or native API groups, you must first update the impacted custom resources.

**Additional resources**
{._additional-resources}

*   [File System Backup](https://velero.io/docs/main/file-system-backup/)