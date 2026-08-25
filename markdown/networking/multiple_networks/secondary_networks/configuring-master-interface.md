---
title: Configuring the master interface in the container network namespace
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring the master interface in the container network namespace {id="configuring-master-interface-secondary-nwt"}
{%- set context = "configuring-additional-network" %}

You can create and manage a MAC-VLAN, IP-VLAN, and VLAN subinterface based on a `master` interface. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-about-configuring-master-interface-container.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-multus-create-multiple-vlans-sriov.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-multus-create-master-interface-bridge-cni.md" %}{% endleveloffset %}