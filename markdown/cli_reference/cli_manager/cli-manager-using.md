---
title: "Using the {{ cli_manager }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using the {{ cli_manager }} {id="cli-manager-using"}
{%- set context = "cli-manager-using" %}

To install, update, and uninstall CLI plugins in {{ product_title }}, you can set up and configure the {{ cli_manager }}. {._abstract}

{%- set FeatureName = "Using the {{ cli_manager }} to install and manage plugins for the OpenShift CLI" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/cli-manager-installing-plugins.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-manager-upgrading-plugin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-manager-updating-plugin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-manager-uninstall-plugin.md" %}{% endleveloffset %}