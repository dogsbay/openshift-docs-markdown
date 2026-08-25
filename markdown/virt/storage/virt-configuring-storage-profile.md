---
title: Configuring storage profiles
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring storage profiles {id="virt-configuring-storage-profile"}
{%- set context = "virt-configuring-storage-profile" %}

A storage profile provides recommended storage settings based on the associated storage class and is allocated for each storage class. {._abstract}

The Containerized Data Importer (CDI) recognizes a storage provider if it has been configured to identify and interact with the storage provider’s capabilities.

For recognized storage types, the CDI provides values that optimize the creation of PVCs. You can also configure automatic settings for the storage class by customizing the storage profile. If the CDI does not recognize your storage provider, you must configure storage profiles.

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}

:::important

When using {{ VirtProductName }} with {{ rh_storage_first }}, specify RBD block mode persistent volume claims (PVCs) when creating virtual machine disks. RBD block mode volumes are more efficient and provide better performance than Ceph FS or RBD filesystem-mode PVCs.

To specify RBD block mode PVCs, use the 'ocs-storagecluster-ceph-rbd' storage class and `VolumeMode: Block`.

:::

{% endif %}

{% leveloffset +1 %}{% include "./modules/virt-customizing-storage-profile.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/virt-customizing-storage-profile-snapshot-class-web.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/virt-customizing-storage-profile-snapshot-class-cli.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/virt-viewing-automatically-created-storage-profiles.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/virt-customizing-storage-profile-default-cloning-strategy.md" %}{% endleveloffset %}