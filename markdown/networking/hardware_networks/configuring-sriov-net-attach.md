---
title: Configuring an SR-IOV Ethernet network attachment
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring an SR-IOV Ethernet network attachment {id="configuring-sriov-net-attach"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-sriov-net-attach" %}

You can configure an Ethernet network attachment for an Single Root I/O Virtualization (SR-IOV) device in the cluster.

Before you perform any tasks in the following documentation, ensure that you installed the SR-IOV Network Operator.

{% leveloffset +1 %}{% include "./modules/nw-sriov-network-object.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing the SR-IOV Network Operator](/networking/networking_operators/sr-iov-operator/installing-sriov-operator#installing-sriov-operator)
*   [Configuring namespaced SR-IOV resources](/networking/hardware_networks/configuring-namespaced-sriov-resources#introduction-to-namespaced-sriovnetwork-resources_configuring-namespaced-sriov-resources)

{% leveloffset +2 %}{% include "./modules/nw-multus-configure-dualstack-ip-address.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-multus-ipam-object.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-multus-whereabouts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-network-attachment.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-assigning-a-sriov-network-to-a-vrf.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-creating-an-additional-sriov-network-with-vrf-plug-in.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-runtime-config-ethernet.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-multus-add-pod.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-sriov-expose-mtu.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-sriov-change-vf-mtu-running-pod.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-configuring-multiple-nodes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-configure-exclude-topology-manager.md" %}{% endleveloffset %}

## Additional resources {id="configuring-sriov-net-attach-additional-resources"}

*   [Configuring an SR-IOV network device](/networking/hardware_networks/configuring-sriov-device#configuring-sriov-device)
*   [Using CPU Manager](/scalability_and_performance/using-cpu-manager#using-cpu-manager)