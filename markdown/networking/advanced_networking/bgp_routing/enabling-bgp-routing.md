---
title: Enabling BGP routing
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Enabling BGP routing {id="enabling-bgp-routing"}
{%- set context = "enabling-bgp-routing" %}

To support dynamic route advertisement and integration with external network infrastructure, you can enable Border Gateway Protocol (BGP) routing for your cluster as a cluster administrator. {._abstract}

As a cluster administrator, you can enable OVN-Kubernetes BGP routing support for your cluster.

{% leveloffset +1 %}{% include "./modules/nw-bgp-routing-enable.md" %}{% endleveloffset %}