---
title: Disabling BGP routing
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Disabling BGP routing {id="disabling-bgp-routing"}

{%- set context = "disable-bgp-routing" %}

To stop external route advertisement and restore standard cluster networking behavior, disable OVN-Kubernetes Border Gateway Protocol (BGP) routing. {._abstract}

As a cluster administrator, you can disable OVN-Kubernetes BGP routing support for your cluster.

{% leveloffset +1 %}{% include "./modules/nw-bgp-routing-disable.md" %}{% endleveloffset %}