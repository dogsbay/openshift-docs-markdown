---
title: Configuring an SR-IOV network device
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring an SR-IOV network device {id="configuring-sriov-device"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-sriov-device" %}

You can configure a Single Root I/O Virtualization (SR-IOV) device in your cluster.

Before you perform any tasks in the following documentation, ensure that you [installed the SR-IOV Network Operator](/networking/networking_operators/sr-iov-operator/installing-sriov-operator#installing-sriov-operator).

{% leveloffset +1 %}{% include "./modules/nw-sriov-networknodepolicy-object.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-sr-iov-network-node-configuration-examples.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-sriov-device-discovery.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-sriov-nic-mlx-secure-boot.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-sriov-nic-partitioning.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-openstack-sr-iov-testpmd-pod.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-openstack-hw-offload-testpmd-pod.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-sriov-huge-pages.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-configuring-device.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding how to update labels on nodes](/nodes/nodes/nodes-nodes-working#nodes-nodes-working-updating_nodes-nodes-working)

{% leveloffset +1 %}{% include "./modules/nw-sriov-topology-manager.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-exclude-topology-manager.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-troubleshooting.md" %}{% endleveloffset %}

**Additional resources**

*   [Using CPU Manager](/scalability_and_performance/using-cpu-manager#using-cpu-manager)

**Additional resources**

*   [Configuring an SR-IOV network attachment](/networking/hardware_networks/configuring-sriov-net-attach#configuring-sriov-net-attach)