---
title: vSphere installation requirements for user-provisioned infrastructure
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# vSphere installation requirements for user-provisioned infrastructure {id="upi-vsphere-installation-reqs"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "upi-vsphere-installation-reqs" %}

Before you begin an installation on infrastructure that you provision, be sure that your vSphere environment meets the following installation requirements.

{% leveloffset +1 %}{% include "./modules/installation-vsphere-infrastructure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/vmware-csi-driver-reqs.md" %}{% endleveloffset %}

**Additional resources**

*   [Removing a third-party vSphere CSI Driver](/storage/container_storage_interface/persistent-storage-csi-vsphere#persistent-storage-csi-vsphere-install-issues_persistent-storage-csi-vsphere)
*   [Updating hardware on nodes running in vSphere](/updating/updating_a_cluster/updating-hardware-on-nodes-running-on-vsphere#updating-hardware-on-nodes-running-on-vsphere)
*   [Minimum permissions for the storage components](/installing/installing_vsphere/upi/upi-vsphere-installation-reqs#installation-vsphere-minimum-permissions-storage_upi-vsphere-installation-reqs)

{% leveloffset +1 %}{% include "./modules/installation-vsphere-user-provisioned-reqs-reference.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-vsphere-installer-infra-requirements.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating a compute machine set on vSphere](/machine_management/creating_machinesets/creating-machineset-vsphere#creating-machineset-vsphere_creating-machineset-vsphere)

{% leveloffset +2 %}{% include "./modules/installation-machine-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

**Additional resources**

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/installation-vsphere-encrypted-vms.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating an encrypted storage class](/storage/container_storage_interface/persistent-storage-csi-vsphere#vsphere-pv-encryption)

{% leveloffset +2 %}{% include "./modules/csr-management.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-network-user-infra.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring chrony time service](/installing/install_config/installing-customizing#installation-special-config-chrony_installing-customizing)

{% leveloffset +2 %}{% include "./modules/installation-dns-user-infra.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-dns-user-infra-example.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-load-balancing-user-infra.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-load-balancing-user-infra-example.md" %}{% endleveloffset %}