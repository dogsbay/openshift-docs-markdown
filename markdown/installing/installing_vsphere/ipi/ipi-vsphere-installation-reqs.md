---
title: vSphere installation requirements
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# vSphere installation requirements {id="ipi-vsphere-installation-reqs"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ipi-vsphere-installation-reqs" %}

Before you begin an installation using installer-provisioned infrastructure, be sure that your vSphere environment meets the following installation requirements.

{% leveloffset +1 %}{% include "./modules/installation-vsphere-infrastructure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-vsphere-installer-network-requirements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/vmware-csi-driver-reqs.md" %}{% endleveloffset %}

**Additional resources**

*   [Removing a third-party vSphere CSI Driver Operator](/storage/container_storage_interface/persistent-storage-csi-vsphere#persistent-storage-csi-vsphere-install-issues_persistent-storage-csi-vsphere)
*   [Updating hardware on nodes running on vSphere](/updating/updating_a_cluster/updating-hardware-on-nodes-running-on-vsphere#updating-hardware-on-nodes-running-on-vsphere)
*   [Minimum permissions for the storage components](/installing/installing_vsphere/ipi/ipi-vsphere-installation-reqs#installation-vsphere-minimum-permissions-storage_ipi-vsphere-installation-reqs)

{% leveloffset +1 %}{% include "./modules/installation-vsphere-installer-infra-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-vsphere-installer-infra-static-ip-nodes.md" %}{% endleveloffset %}

**Additional resources**

*   [Scaling machines to use static IP addresses](/post_installation_configuration/node-tasks.html#nodes-vsphere-scaling-machines-static-ip_post-install-node-tasks)
*   [Using a machine set to scale machines with configured static IP addresses](/post_installation_configuration/node-tasks.html#nodes-vsphere-machine-set-scaling-static-ip_post-install-node-tasks)