---
title: Configuring an SR-IOV InfiniBand network attachment
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring an SR-IOV InfiniBand network attachment {id="configuring-sriov-ib-attach"}
{%- set context = "configuring-sriov-ib-attach" %}

You can configure an InfiniBand (IB) network attachment for an Single Root I/O Virtualization (SR-IOV) device in the cluster. {._abstract}

Before you perform any tasks in the following documentation, ensure that you [installed the SR-IOV Network Operator](/networking/networking_operators/sr-iov-operator/installing-sriov-operator#installing-sriov-operator).

{% leveloffset +1 %}{% include "./modules/nw-sriov-ibnetwork-object.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-multus-configure-dualstack-ip-address.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-multus-ipam-object.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-multus-whereabouts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-network-attachment.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-runtime-config-sriov-ib.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-multus-add-pod.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-sriov-expose-mtu.md" %}{% endleveloffset %}

## Additional resources {id="configuring-sriov-ib-attach-additional-resources" ._additional-resources}

*   [Configuring an SR-IOV network device](/networking/hardware_networks/configuring-sriov-device#configuring-sriov-device)
*   [Using CPU Manager](/scalability_and_performance/using-cpu-manager#using-cpu-manager)
*   [Exclude SR-IOV network topology for NUMA-aware scheduling](/networking/hardware_networks/configuring-sriov-device#nw-sriov-exclude-topology-manager_configuring-sriov-device)