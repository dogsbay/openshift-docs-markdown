---
title: Configuring QinQ support for SR-IOV enabled workloads
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring QinQ support for SR-IOV enabled workloads {id="configuring-qinq-support"}
{%- set context = "configuring-qinq-support" %}

QinQ, formally known as 802.1Q-in-802.1Q, is a networking technique defined by IEEE 802.1ad. IEEE 802.1ad extends the IEEE 802.1Q-1998 standard and enriches VLAN capabilities by introducing an additional 802.1Q tag to packets already tagged with 802.1Q. This method is also referred to as VLAN stacking or double VLAN. {._abstract}

Before you perform any tasks in the following documentation, ensure that you [installed the SR-IOV Network Operator](/networking/networking_operators/sr-iov-operator/installing-sriov-operator#installing-sriov-operator).

{% leveloffset +1 %}{% include "./modules/nw-sriov-about-qinq.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuration for an VLAN additional network](/networking/multiple_networks/secondary_networks/creating-secondary-nwt-other-cni#nw-multus-vlan-object_configuring-additional-network-cni)

{% leveloffset +1 %}{% include "./modules/nw-configuring-qinq-sriov-proc.md" %}{% endleveloffset %}