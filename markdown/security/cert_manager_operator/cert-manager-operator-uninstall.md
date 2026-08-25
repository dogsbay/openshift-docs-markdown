---
title: "Uninstalling the {{ cert_manager_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Uninstalling the {{ cert_manager_operator }} {id="cert-manager-operator-uninstall"}
{%- set context = "cert-manager-operator-uninstall" %}

You can remove the {{ cert_manager_operator }} from {{ product_title }} by uninstalling the Operator and removing its related resources. {._abstract}

{% leveloffset +1 %}{% include "./modules/cert-manager-uninstall-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cert-manager-remove-resources-console.md" %}{% endleveloffset %}