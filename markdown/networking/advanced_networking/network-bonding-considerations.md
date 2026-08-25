---
title: Network bonding considerations
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Network bonding considerations {id="network-bonding-considerations"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "network-bonding-considerations" %}

You can use network bonding, also known as _link aggregration_, to combine many network interfaces into a single, logical interface. This means that you can use different modes for handling how network traffic distributes across bonded interfaces. Each mode provides fault tolerance and some modes provide load balancing capabilities to your network. Red Hat supports Open vSwitch (OVS) bonding and kernel bonding.

{% leveloffset +1 %}{% include "./modules/nw-ovs-bonding.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/enable-active-backup-mode.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/enabling-OVS-balance-slb-mode.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-kernel-bonding.md" %}{% endleveloffset %}