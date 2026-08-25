---
title: Configuring IP address assignment on secondary networks
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring IP address assignment on secondary networks {id="configuring-ip-secondary-nwt"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-additional-network" %}

You can configure IP address assignments for secondary networks so that pods can connect to the secondary networks.

{% leveloffset +1 %}{% include "./modules/nw-multus-ipam-object.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-multus-whereabouts.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-multus-creating-whereabouts-reconciler-daemon-set.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-multus-configuring-whereabouts-ip-reconciler-schedule.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-multus-whereabouts-fast-ipam.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-multus-configure-dualstack-ip-address.md" %}{% endleveloffset %}