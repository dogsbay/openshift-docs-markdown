---
title: Configuring interface-level network sysctl settings and all-multicast mode for SR-IOV networks
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring interface-level network sysctl settings and all-multicast mode for SR-IOV networks {id="configuring-interface-level-sysctl-settings-sriov-device"}
{%- set context = "configuring-sysctl-interface-sriov-device" %}

As a cluster administrator, you can change interface-level network sysctls and several interface attributes such as promiscuous mode, all-multicast mode, MTU, and MAC address by using the tuning Container Network Interface (CNI) meta plugin for a pod connected to a SR-IOV network device. {._abstract}

Before you perform any tasks in the following documentation, ensure that you [installed the SR-IOV Network Operator](/networking/networking_operators/sr-iov-operator/installing-sriov-operator#installing-sriov-operator).

{% leveloffset +1 %}{% include "./modules/nw-label-nodes-with-sriov.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-interface-level-sysctl-basic.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-sriov-interface-level-sysctl-basic-node-policy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-configure-sysctl-interface-sriov-network.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-interface-level-sysctl-bonded.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-sriov-interface-level-sysctl-bonded-node-policy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-configure-sysctl-interface-sriov-network-bonded.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-about-all-multi-cast-mode.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-enable-all-multicast-mode-sriov-network.md" %}{% endleveloffset %}