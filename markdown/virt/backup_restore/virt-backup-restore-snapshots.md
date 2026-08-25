---
title: Backup and restore by using VM snapshots
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Backup and restore by using VM snapshots {id="virt-backup-restore-snapshots"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-backup-restore-snapshots" %}

You can back up and restore virtual machines (VMs) by using snapshots.

Snapshots are supported by the following storage providers:

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   {{ rh_storage_first }}
*   Any other cloud storage provider with the Container Storage Interface (CSI) driver that supports the Kubernetes Volume Snapshot API
{% endif %}
{% if openshift_rosa or openshift_dedicated or openshift_rosa_hcp %}
*   Any cloud storage provider with the Container Storage Interface (CSI) driver that supports the Kubernetes Volume Snapshot API
{% endif %}

To create snapshots of a VM in the `Running` state with the highest integrity, install the QEMU guest agent if it is not included with your operating system. The QEMU guest agent is included with the default Red&#160;Hat templates.


:::important

Online snapshots are supported for virtual machines that have hot plugged virtual disks. However, hot plugged disks that are not in the virtual machine specification are not included in the snapshot.

Ensure that the QEMU guest agent is installed and running on the virtual machine before you take an online snapshot.

The QEMU guest agent stops responding to file system operations to ensure that the snapshot captures a consistent state.

:::


The QEMU guest agent takes a consistent snapshot by attempting to quiesce the VM file system. This ensures that in-flight I/O is written to the disk before the snapshot is taken. If the guest agent is not present, quiescing is not possible and a best-effort snapshot is taken.

The conditions under which a snapshot is taken are reflected in the snapshot indications that are displayed in the web console or CLI. If these conditions do not meet your requirements, try creating the snapshot again or use an offline snapshot

{% leveloffset +1 %}{% include "./modules/virt-about-vm-snapshots.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-about-application-consistent-backups.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-vm-snapshot-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-vm-snapshot-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-verifying-online-snapshot-creation-with-snapshot-indications.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-restoring-vm-from-snapshot-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-restoring-vm-from-snapshot-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-deleting-vm-snapshot-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-deleting-vm-snapshot-cli.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
## Additional resources {id="_additional_resources"}
*   [CSI Volume Snapshots](/storage/container_storage_interface/persistent-storage-csi-snapshots#persistent-storage-csi-snapshots)
{% endif %}