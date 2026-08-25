---
title: "Uninstalling the {{ zero_trust_full }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Uninstalling the {{ zero_trust_full }} {id="zero-trust-manager-uninstall_{{ context }}"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "zero-trust-manager-uninstall" %}

To remove the {{ zero_trust_full }} from {{ product_title }}, uninstall the Operator and delete its related resources. This process removes the component from your cluster.

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-uninstall-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-uninstall-resources.md" %}{% endleveloffset %}