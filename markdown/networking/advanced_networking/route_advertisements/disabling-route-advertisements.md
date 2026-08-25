---
title: Disabling route advertisements
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Disabling route advertisements {id="disabling-route-advertisements"}
{%- set context = "disabling-route-advertisements" %}

To stop the broadcast of cluster network routes and egress IP addresses to your provider network, you can disable route advertisements. Disabling this feature removes the automatically generated routing configurations while maintaining your existing network infrastructure. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-route-advertisements-disable.md" %}{% endleveloffset %}