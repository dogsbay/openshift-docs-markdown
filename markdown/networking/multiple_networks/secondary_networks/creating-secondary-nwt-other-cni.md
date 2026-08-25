---
title: Creating secondary networks with other CNI plugins
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating secondary networks with other CNI plugins {id="creating-secondary-networks-other-cni"}
{%- set context = "configuring-additional-network-cni" %}

The specific configuration fields for secondary networks are described in the following sections. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-multus-bridge-object.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-multus-bond-cni-object.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring a bond interface from two SR-IOV interfaces](/networking/hardware_networks/using-pod-level-bonding#nw-sriov-cfg-bond-interface-with-virtual-functions_using-pod-level-bonding)

{% leveloffset +1 %}{% include "./modules/nw-multus-host-device-object.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-multus-dummy-device-object.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-multus-vlan-object.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-multus-ipvlan-object.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-multus-macvlan-object.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-multus-tap-object.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-multus-tap-setting-boolean.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-route-override-cni.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Setting SELinux booleans](/nodes/nodes/nodes-nodes-managing#nodes-nodes-working-setting-booleans_nodes-nodes-managing)