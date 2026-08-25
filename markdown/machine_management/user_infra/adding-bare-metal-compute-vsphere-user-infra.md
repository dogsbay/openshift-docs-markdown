---
title: Adding bare-metal compute machines to a vSphere cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Adding bare-metal compute machines to a vSphere cluster {id="adding-bare-metal-compute-vsphere-user-infra"}
{%- set context = "adding-bare-metal-compute-vsphere-user-infra" %}

To support workloads requiring direct hardware access, extend your existing {{ vmw_first }} cluster by adding bare-metal compute machines. This creates a hybrid architecture that combines a virtualized control plane with the performance of physical hardware. {._abstract}

This procedure supports clusters installed using installer-provisioned infrastructure, user-provisioned infrastructure, or the Assisted Installer.

{%- set FeatureName = "Bare-metal nodes on vSphere clusters" %}
{% include "./snippets/technology-preview.md" %}


:::important

Bare-metal compute machines added to a {{ vmw_short }} cluster are unmanaged by the Machine API. You cannot use compute machine sets or the cluster autoscaler to manage these compute machines. Lifecycle tasks such as provisioning and replacement must be performed manually.

:::


## Prerequisites {id="_prerequisites"}

*   You have an existing {{ product_title }} cluster installed on {{ vmw_short }}.
*   You have bare-metal hardware with network connectivity to the existing cluster’s machine network.
*   You have configured the network for the new bare-metal compute machines, including:
    *   DHCP: Persistent IP addresses and hostname reservations.
    *   DNS: Forward and reverse DNS resolution for the new hostnames.
*   You have obtained the {{ op_system_first }} ISO image that matches your cluster version. You can download this from the **Cluster Details** page on the {{ hybrid_console }} or extract it from the cluster payload.


:::warning

To use this feature, you must explicitly disable the native {{ vmw_short }} Container Storage Interface (CSI) driver for the entire cluster. This means existing {{ vmw_short }} virtual machines will lose the ability to provision or attach {{ vmw_short }} volumes. You must ensure that all workloads (virtual and physical) are migrated to an alternative storage solution before proceeding.

:::


**Additional resources**
{._additional-resources}

*   [Disabling and enabling storage on vSphere](/storage/container_storage_interface/persistent-storage-csi-vsphere#persistent-storage-csi-vsphere-disable-storage-procedure_persistent-storage-csi-vsphere)

{% leveloffset +1 %}{% include "./modules/bare-metal-vsphere-iso.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-approve-csrs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/bare-metal-vsphere-remove-uninit-taint.md" %}{% endleveloffset %}