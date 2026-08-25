{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing and configuring {{ oadp_short }} with {{ VirtProductName }} {id="install-and-configure-oadp-kubevirt_{{ context }}"}

As a cluster administrator, you can install the {{ oadp_first }} with {{ VirtProductName }} by installing the {{ oadp_short }} Operator and configuring a backup location. You can then install the Data Protection Application. {._abstract}

To install the {{ oadp_short }} Operator in a restricted network environment, you must first disable the default software catalog sources and mirror the Operator catalog.


:::note

{{ oadp_full }} with {{ VirtProductName }} supports the following backup and restore storage options:

*   Container Storage Interface (CSI) backups
*   Container Storage Interface (CSI) backups with DataMover

The following storage options are excluded:

*   File system backup and restore
*   Volume snapshot backup and restore

The latest version of the {{ oadp_short }} Operator installs Velero {{ velero_version }}.

:::



:::warning

Red Hat support is limited to only the following options:

*   CSI backups
*   CSI backups with DataMover.

:::


**Prerequisites**

*   Access to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Install the {{ oadp_short }} Operator according to the instructions for your storage provider.
1.  Install the Data Protection Application (DPA) with the `kubevirt` and `openshift` {{ oadp_short }} plug-ins.
1.  Back up virtual machines by creating a `Backup` custom resource (CR).

    You restore the `Backup` CR by creating a `Restore` CR.