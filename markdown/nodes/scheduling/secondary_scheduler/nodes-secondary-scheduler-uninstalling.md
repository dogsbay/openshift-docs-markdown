---
title: "Uninstalling the {{ secondary_scheduler_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Uninstalling the {{ secondary_scheduler_operator }} {id="secondary-scheduler-uninstalling"}
{%- set context = "secondary-scheduler-uninstalling" %}

If you no longer need the {{ secondary_scheduler_operator_full }} in your cluster, you can uninstall the Operator and remove its related resources. {._abstract}

{% leveloffset +1 %}{% include "./modules/nodes-secondary-scheduler-uninstall-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-secondary-scheduler-remove-resources-console.md" %}{% endleveloffset %}