---
title: Configuring IP address assignment on secondary networks
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring IP address assignment on secondary networks {id="configuring-ip-secondary-nwt"}
{%- set context = "configuring-additional-network" %}

You can configure IP address assignments for secondary networks so that pods can connect to the secondary networks. {._abstract}


:::important

When using the Whereabouts IPAM plugin with an IPv6 address, do not configure wide IPv6 CIDR ranges where the intended allocation addresses require an offset larger than 64 bits from the CIDR network base. In particular, avoid IPv6 ranges with prefix length less than or equal to `/64`. Due to the current uint64-based offset calculation in Whereabouts, such ranges can result in incorrect allocation persistence or reconstruction.

Use a narrower IPv6 CIDR that directly covers the intended allocation range. For example, instead of using `193:21:4::/24` with a range start of `193:21:4::2` and a range end of `193:21:4::180`, use `193:21:4::/119`.

:::


{% leveloffset +1 %}{% include "./modules/nw-multus-ipam-object.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-multus-whereabouts.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-multus-creating-whereabouts-reconciler-daemon-set.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-multus-configuring-whereabouts-ip-reconciler-schedule.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-multus-whereabouts-fast-ipam.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-multus-configure-dualstack-ip-address.md" %}{% endleveloffset %}