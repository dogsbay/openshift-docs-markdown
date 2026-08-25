---
title: "{{ cli_manager }} overview"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ cli_manager }} overview {id="cli-manager-overview"}
{%- set context = "cli-manager-overview" %}

To install and update CLI plugins in both connected and disconnected environments, you can use the {{ cli_manager }}. {._abstract}

{%- set FeatureName = "Using the {{ cli_manager }} to install and manage plugins for the OpenShift CLI" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/cli-manager-about.md" %}{% endleveloffset %}