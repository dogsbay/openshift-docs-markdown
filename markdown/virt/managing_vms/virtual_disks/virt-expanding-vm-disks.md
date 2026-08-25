---
title: Expand virtual machine disks
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Expand virtual machine disks {id="virt-expanding-vm-disks"}
{%- set context = "virt-expanding-vm-disks" %}

Expand the  persistent volume claim (PVC) of your virtual machine disk to accomodate growing data requirements. If your storage provider does not support volume expansion, you can expand the available virtual storage of a VM by adding blank data volumes.

You cannot reduce the size of a VM disk.

{% leveloffset +1 %}{% include "./modules/virt-expanding-vm-disk-pvc-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-expanding-vm-disk-pvc-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-expanding-storage-with-data-volumes.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Extending a basic volume in Windows](https://docs.microsoft.com/en-us/windows-server/storage/disk-management/extend-a-basic-volume)
*   [Extending an existing file system partition without destroying data in Red Hat Enterprise Linux](https://access.redhat.com/solutions/29095)
*   [Extending a logical volume and its file system online in Red Hat Enterprise Linux](https://access.redhat.com/solutions/24770)
*   [Configuring preallocation mode for data volumes](/virt/storage/virt-using-preallocation-for-datavolumes#virt-using-preallocation-for-datavolumes)
*   [Managing data volume annotations](/virt/storage/virt-managing-data-volume-annotations#virt-managing-data-volume-annotations)