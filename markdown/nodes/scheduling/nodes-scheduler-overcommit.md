---
title: Placing pods onto overcommited nodes
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-scheduler-overcommit" %}
# Placing pods onto overcommited nodes {id="nodes-scheduler-overcommit"}
{% include "./_attributes/common-attributes.md" %}

{{ product_title }} administrators can use container compute resource requests and limits to allow and manage the overcommitment of resources on a node, which enables pods to use additional resources when available, without guaranteeing those resources.

In an _overcommited_ state, the sum of the container compute resource requests and limits exceeds the resources available on the system.
Overcommitment might be desirable in development environments where a trade-off of guaranteed performance for capacity is acceptable.

Requests and limits enable administrators to allow and manage the overcommitment of resources on a node.
The scheduler uses requests for scheduling your container and providing a minimum service guarantee.
Limits constrain the amount of compute resource that may be consumed on your node.

{% leveloffset +1 %}{% include "./modules/nodes-cluster-overcommit-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-overcommit-configure-nodes.md" %}{% endleveloffset %}