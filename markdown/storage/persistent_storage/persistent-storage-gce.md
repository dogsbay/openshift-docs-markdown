---
title: Persistent storage using GCE Persistent Disk
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Persistent storage using GCE Persistent Disk {id="persistent-storage-using-gce"}
{%- set context = "persistent-storage-gce" %}

{{ product_title }} supports GCE Persistent Disk volumes (gcePD). You can provision your {{ product_title }} cluster with persistent storage
using GCE. Some familiarity with Kubernetes and GCE is assumed. {._abstract}

The Kubernetes persistent volume framework allows administrators to provision a cluster with persistent storage and gives users a way to request those resources without having any knowledge of the underlying infrastructure.

GCE Persistent Disk volumes can be provisioned dynamically.

Persistent volumes are not bound to a single project or namespace;
they can be shared across the {{ product_title }} cluster.
Persistent volume claims are specific to a project or namespace and can be
requested by users.

{% if not openshift_dedicated %}

:::important

{{ product_title }} 4.12 and later provides automatic migration for the GCE Persist Disk in-tree volume plugin to its equivalent CSI driver.

CSI automatic migration should be seamless. Migration does not change how you use all existing API objects, such as persistent volumes, persistent volume claims, and storage classes.

For more information about migration, see CSI automatic migration.

:::

{% endif %}


:::important

High availability of storage in the infrastructure is left to the underlying storage provider.

:::


**Additional resources**
{._additional-resources}

*   [GCE Persistent Disk](https://cloud.google.com/compute/docs/disks/)
{%- if not openshift_dedicated %}
*   [CSI automatic migration](/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration)
{%- endif %}

{%- set StorageClass = "GCE" -%}
{%- set Provisioner = "kubernetes.io/gce-pd" %}

{% leveloffset +1 %}{% include "./modules/storage-create-storage-class.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-creating-volume-claim.md" %}{% endleveloffset %}

{%- set provider = "GCE" %}
{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-volume-format.md" %}{% endleveloffset %}