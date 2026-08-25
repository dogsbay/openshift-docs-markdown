---
title: "Uninstalling the {{ cert_manager_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Uninstalling the {{ cert_manager_operator }} {id="cert-manager-operator-uninstall"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cert-manager-operator-uninstall" %}

You can remove the {{ cert_manager_operator }} from {{ product_title }} by uninstalling the Operator and removing its related resources.

{% leveloffset +1 %}{% include "./modules/cert-manager-uninstall-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cert-manager-remove-resources-console.md" %}{% endleveloffset %}