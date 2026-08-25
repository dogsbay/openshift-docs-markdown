---
title: Removing an egress firewall from a project
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Removing an egress firewall from a project {id="removing-egress-firewall-ovn"}
{%- set context = "removing-egress-firewall-ovn" %}

As a cluster administrator, you can remove an egress firewall from a project to remove all restrictions on network traffic from the project that leaves the {{ product_title }} cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-egress-firewall-delete.md" %}{% endleveloffset %}