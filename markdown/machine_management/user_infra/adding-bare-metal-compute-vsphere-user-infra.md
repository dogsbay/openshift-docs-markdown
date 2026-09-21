---
title: Adding bare-metal compute machines to a vSphere cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Adding bare-metal compute machines to a vSphere cluster {id="adding-bare-metal-compute-vsphere-user-infra"}
{%- set context = "adding-bare-metal-compute-vsphere-user-infra" %}

To support workloads requiring direct hardware access, extend your existing {{ vmw_first }} cluster by adding bare-metal compute machines. This creates a hybrid architecture that combines a virtualized control plane with the performance of physical hardware. {._abstract}

This procedure supports clusters installed using installer-provisioned infrastructure, user-provisioned infrastructure, or the Assisted Installer.


:::important

Bare-metal nodes on VMware vSphere clusters is generally available for {{ product_title }} 4.22.13 and later. However, this feature is Technology Preview for 4.21 through 4.22.12.

:::



:::important

Bare-metal compute machines added to a {{ vmw_short }} cluster are unmanaged by the Machine API. You cannot use compute machine sets or the cluster autoscaler to manage these compute machines. Lifecycle tasks such as provisioning and replacement must be performed manually.

:::


{% leveloffset +1 %}{% include "./modules/bare-metal-vsphere-prerequisites.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Disabling and enabling storage on vSphere](/storage/container_storage_interface/persistent-storage-csi-vsphere#persistent-storage-csi-vsphere-disable-storage-procedure_persistent-storage-csi-vsphere)

{% leveloffset +1 %}{% include "./modules/bare-metal-vsphere-iso.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-approve-csrs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/bare-metal-vsphere-remove-uninit-taint.md" %}{% endleveloffset %}