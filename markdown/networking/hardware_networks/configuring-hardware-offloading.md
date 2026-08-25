---
title: Configuring hardware offloading
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring hardware offloading {id="configuring-hardware-offloading"}
{%- set context = "configuring-hardware-offloading" %}

As a cluster administrator, you can configure hardware offloading on compatible nodes to increase data processing performance and reduce load on host CPUs. {._abstract}

Before you perform any tasks in the following documentation, ensure that you [installed the SR-IOV Network Operator](/networking/networking_operators/sr-iov-operator/installing-sriov-operator#installing-sriov-operator).

{% leveloffset +1 %}{% include "./modules/nw-sriov-hwol-about-hardware-offloading.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-hwol-supported-devices.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-hwol-prerequisites.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installing the SR-IOV Network Operator](/networking/networking_operators/sr-iov-operator/installing-sriov-operator#installing-sriov-operator)
*   [About the OVN-Kubernetes network plugin](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#about-ovn-kubernetes)
*   [OVN-Kubernetes network plugin configuration](/networking/networking_operators/cluster-network-operator#gatewayConfig-object_cluster-network-operator)

{% leveloffset +1 %}{% include "./modules/nw-sriov-hwol-configuring-systemd-mode.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-hwol-configuring-machine-config-pool.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-hwol-creating-sriov-policy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-sriov-hwol-ref-openstack-sriov-policy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-hwol-improving-network-traffic-performance.md" %}{% endleveloffset %}

<a name="additional-resources_using-vf-improve-network-traffic-performance"></a>**Additional resources**
{._additional-resources}

*   [SR-IOV network node configuration object](/networking/hardware_networks/configuring-sriov-device#nw-sriov-networknodepolicy-object_configuring-sriov-device)

{% leveloffset +1 %}{% include "./modules/nw-sriov-hwol-creating-network-attachment-definition.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-hwol-adding-network-attachment-definitions-to-pods.md" %}{% endleveloffset %}