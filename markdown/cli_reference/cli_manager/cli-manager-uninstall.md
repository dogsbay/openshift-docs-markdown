---
title: "Uninstalling the {{ cli_manager }}"
---

{%- set _content_type = "ASSEMBLY" %}
# Uninstalling the {{ cli_manager }} {id="cli-manager-uninstall"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cli-manager-uninstall" %}

You can remove the {{ cli_manager }} from {{ product_title }} by uninstalling the {{ cli_manager }} and removing its related resources.

{%- set FeatureName = "Using the {{ cli_manager }} to install and manage plugins for the OpenShift CLI" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/cli-manager-uninstalling.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-manager-remove-resources.md" %}{% endleveloffset %}