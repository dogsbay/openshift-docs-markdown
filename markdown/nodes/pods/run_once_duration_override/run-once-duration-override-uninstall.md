---
title: "Uninstalling the {{ run_once_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Uninstalling the {{ run_once_operator }} {id="run-once-duration-override-uninstall"}
{%- set context = "run-once-duration-override-uninstall" %}

You can remove the {{ run_once_operator }} from {{ product_title }} by uninstalling the Operator and deleting its related resources, such as custom resource definitions, the namespace, and configuration labels. {._abstract}

{% leveloffset +1 %}{% include "./modules/rodoo-uninstall-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rodoo-uninstall-resources.md" %}{% endleveloffset %}