---
title: Persistent storage using Azure File
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Persistent storage using Azure File {id="persistent-storage-using-azure-file"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "persistent-storage-azure-file" %}

{{ product_title }} supports Microsoft Azure File volumes. You can provision your {{ product_title }} cluster with persistent storage using Azure. Some familiarity with Kubernetes and Azure is assumed.

The Kubernetes persistent volume framework allows administrators to provision a cluster with persistent storage and gives users a way to request those resources without having any knowledge of the underlying infrastructure.
You can provision Azure File volumes dynamically.

Persistent volumes are not bound to a single project or namespace, and you can share them across the {{ product_title }} cluster.
Persistent volume claims are specific to a project or namespace, and can be requested by users for use in applications.


:::important

High availability of storage in the infrastructure is left to the underlying
storage provider.

:::



:::important

Azure File volumes use Server Message Block.

:::



:::important

{{ product_title }} 4.13 and later provides automatic migration for the Azure File in-tree volume plugin to its equivalent CSI driver.

CSI automatic migration should be seamless. Migration does not change how you use all existing API objects, such as persistent volumes, persistent volume claims, and storage classes. For more information about migration, see "CSI automatic migration".

:::


**Additional resources**

*   [CSI automatic migration](/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration)
*   [Azure Files](https://azure.microsoft.com/en-us/services/storage/files/)

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-azure-file.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-azure-file-pod.md" %}{% endleveloffset %}