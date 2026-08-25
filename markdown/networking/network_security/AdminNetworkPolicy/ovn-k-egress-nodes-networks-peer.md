---
title: Egress nodes and networks peer for AdminNetworkPolicy
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Egress nodes and networks peer for AdminNetworkPolicy {id="ovn-k-egress-nodes-networks-peer"}
{%- set context = "ovn-k-egress-nodes-networks-peer" %}

To control northbound egress from pods to cluster nodes, the API, or external CIDR ranges in {{ product_title }}, you can use `nodes` and `networks` peers in `AdminNetworkPolicy` and `BaselineAdminNetworkPolicy` egress rules. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-anp-nodes-peer-concept.md" %}{% endleveloffset %}