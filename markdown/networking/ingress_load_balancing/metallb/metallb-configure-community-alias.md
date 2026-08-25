---
title: Configuring community alias
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring community alias {id="metallb-configure-community-alias"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configure-community-alias" %}

As a cluster administrator, you can configure a community alias and use it across different advertisements.

{% leveloffset +1 %}{% include "./modules/nw-metallb-community-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-configure-community-bgp-advertisement.md" %}{% endleveloffset %}