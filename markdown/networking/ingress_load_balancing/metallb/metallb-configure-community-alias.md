---
title: Configuring community alias
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring community alias {id="metallb-configure-community-alias"}
{%- set context = "configure-community-alias" %}

As a cluster administrator, you can configure a community alias and use it across different advertisements. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-metallb-community-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-configure-community-bgp-advertisement.md" %}{% endleveloffset %}