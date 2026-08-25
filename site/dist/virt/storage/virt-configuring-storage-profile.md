---
title: Configuring storage profiles
---

# Configuring storage profiles {#virt-configuring-storage-profile}

A storage profile provides recommended storage settings based on the associated storage class and is allocated for each storage class.

The Containerized Data Importer (CDI) recognizes a storage provider if it has been configured to identify and interact with the storage provider’s capabilities.

For recognized storage types, the CDI provides values that optimize the creation of PVCs. You can also configure automatic settings for the storage class by customizing the storage profile. If the CDI does not recognize your storage provider, you must configure storage profiles.

> [!IMPORTANT]
> When using {{ VirtProductName }} with {{ rh_storage_first }}, specify RBD block mode persistent volume claims (PVCs) when creating virtual machine disks. RBD block mode volumes are more efficient and provide better performance than Ceph FS or RBD filesystem-mode PVCs.
>
> To specify RBD block mode PVCs, use the 'ocs-storagecluster-ceph-rbd' storage class and `VolumeMode: Block`.

{% include "./modules/virt-customizing-storage-profile.md" %} {% include "./modules/virt-customizing-storage-profile-snapshot-class-web.md" %} {% include "./modules/virt-customizing-storage-profile-snapshot-class-cli.md" %}
