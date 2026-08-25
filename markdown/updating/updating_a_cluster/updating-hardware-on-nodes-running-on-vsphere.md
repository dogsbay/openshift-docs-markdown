---
title: Updating hardware on nodes running on vSphere
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Updating hardware on nodes running on vSphere {id="updating-hardware-on-nodes-running-on-vsphere"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "updating-hardware-on-nodes-running-in-vsphere" %}

You must ensure that your nodes running in vSphere are running on the hardware version supported by {{ product_title }}. Currently, hardware version 15 or later is supported for vSphere virtual machines in a cluster. You can update your virtual hardware immediately or schedule an update in vCenter.


:::important

*   Version {{ product_version }} of {{ product_title }} requires VMware virtual hardware version 15 or later.
*   Before upgrading OpenShift 4.12 to OpenShift 4.13, you must update vSphere to **v8.0 Update 1 or later**; otherwise, the OpenShift 4.12 cluster is marked **un-upgradeable**.

:::



:::warning

Updating custom API certificates triggers the Machine Config Operator (MCO) to initiate a rolling reboot of the control plane nodes. These nodes must be updated serially. Ensure each node returns to a `Ready` state and the `etcd` static pods are healthy before the next node in the sequence begins its update. Failure to do so might result in a loss of etcd quorum and cluster-wide downtime.

:::


{% leveloffset +1 %}{% include "./modules/update-vsphere-virtual-hardware-on-control-plane-nodes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/update-vsphere-virtual-hardware-on-compute-nodes.md" %}{% endleveloffset %}

**Additional resources**

*   [Evacuating pods on nodes](/nodes/nodes/nodes-nodes-working#nodes-nodes-working-evacuating_nodes-nodes-working)

{% leveloffset +1 %}{% include "./modules/update-vsphere-virtual-hardware-on-template.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/scheduling-virtual-hardware-update-on-vsphere.md" %}{% endleveloffset %}