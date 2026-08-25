---
title: Persistent storage using iSCSI
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Persistent storage using iSCSI {id="persistent-storage-using-iscsi"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "persistent-storage-iscsi" %}

You can provision your {{ product_title }} cluster with persistent storage by creating persistent volumes that pods can use to store and access data.

Some familiarity with Kubernetes and iSCSI is assumed.

The Kubernetes persistent volume framework allows administrators to provision a cluster with persistent storage and gives users a way to request those resources without having any knowledge of the underlying infrastructure.


:::important

High-availability of storage in the infrastructure is left to the underlying storage provider.

:::



:::important

When you use iSCSI on Amazon Web Services, you must update the default security policy to include TCP traffic between nodes on the iSCSI ports. By default, they are ports `860` and `3260`.

:::



:::important

Users must ensure that the iSCSI initiator is already configured on all {{ product_title }} nodes by installing the `iscsi-initiator-utils` package and configuring their initiator name in `/etc/iscsi/initiatorname.iscsi`. The `iscsi-initiator-utils` package is already installed on deployments that use {{ op_system_first }}. For more information, see "Managing Storage Devices".

:::


**Additional resources**

*   [Getting started with iSCSI](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html-single/managing_storage_devices/index#getting-started-with-iscsi_managing-storage-devices)
*   [Configuring an iSCSI initiator](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/managing_storage_devices/index#configuring-an-iscsi-initiator_managing-storage-devices)

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-iscsi-provisioning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-iscsi-enforcing-disk-quota.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-iscsi-volume-security.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-iscsi-multipath.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-iscsi-custom-initiator.md" %}{% endleveloffset %}