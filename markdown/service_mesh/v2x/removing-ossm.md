---
title: Uninstalling Service Mesh
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Uninstalling Service Mesh {id="removing-ossm"}
{%- set context = "removing-ossm" %}

To uninstall {{ SMProductName }} from an existing {{ product_title }} instance and remove its resources, you must delete the control plane, delete the Operators, and run commands to manually remove some resources.

{% leveloffset +1 %}{% include "./modules/ossm-control-plane-remove.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-remove-operators.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-remove-cleanup.md" %}{% endleveloffset %}