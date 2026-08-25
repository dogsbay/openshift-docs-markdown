---
title: Using Bring-Your-Own-Host (BYOH) Windows instances as nodes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using Bring-Your-Own-Host (BYOH) Windows instances as nodes {id="byoh-windows-instance"}
{%- set context = "<byoh-windows-instance>" %}

You can create Bring-Your-Own-Host (BYOH) Windows instances to bring existing Windows Server VMs into {{ product_title }}. By using BYOH Windows instances, you can mitigate major disruptions if a Windows server goes offline. {._abstract}

{% leveloffset +1 %}{% include "./modules/byoh-configuring.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/byoh-removal.md" %}{% endleveloffset %}