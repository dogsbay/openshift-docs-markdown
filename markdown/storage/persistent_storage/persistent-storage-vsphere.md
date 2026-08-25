---
title: Persistent storage using VMware vSphere volumes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Persistent storage using VMware vSphere volumes {id="persistent-storage-using-vsphere"}
{%- set context = "persistent-storage-efs" %}

{{ product_title }} allows use of VMware vSphere’s Virtual Machine Disk (VMDK) volumes. You can provision your {{ product_title }} cluster with persistent storage using VMware vSphere. Some familiarity with Kubernetes and VMware vSphere is assumed. {._abstract}

VMware vSphere volumes can be provisioned dynamically. {{ product_title }} creates the disk in vSphere and attaches this disk to the correct image.


:::note

{{ product_title }} provisions new volumes as independent persistent disks that can freely attach and detach the volume on any node in the cluster. Consequently, you cannot back up volumes that use snapshots, or restore volumes from snapshots. For more information, see "Snapshot Limitations".

:::


The Kubernetes persistent volume framework allows administrators to provision a cluster with persistent storage and gives users a way to request those resources without having any knowledge of the underlying infrastructure.

Persistent volumes are not bound to a single project or namespace; they can be shared across the {{ product_title }} cluster. Persistent volume claims are specific to a project or namespace and can be requested by users.


:::important

For new installations, {{ product_title }} 4.13 and later provides automatic migration for the vSphere in-tree volume plugin to its equivalent CSI driver. Updating to {{ product_title }} 4.15 and later also provides automatic migration. For more information about updating and migration, see "CSI automatic migration".

CSI automatic migration should be seamless. Migration does not change how you use all existing API objects, such as persistent volumes, persistent volume claims, and storage classes.

:::


You can provision VMware vSphere volumes dynamically or statically. However, dynamically provisioning VMware vSphere volumes is the recommended method.

**Additional resources**
{._additional-resources}

*   [VMware vSphere](https://www.vmware.com/au/products/vsphere.html)
*   [Installing a cluster on vSphere](/installing/installing_vsphere/upi/installing-vsphere#installing-vsphere)

{% leveloffset +1 %}{% include "./modules/persistent-storage-vsphere-dynamic-provisioning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-vsphere-dynamic-provisioning-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-vsphere-static-provisioning.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-vsphere-formatting.md" %}{% endleveloffset %}