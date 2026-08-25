---
title: "{{ cli_manager }} overview"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# {{ cli_manager }} overview {id="cli-manager-overview"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cli-manager-overview" %}

To install and update CLI plugins in both connected and disconnected environments, you can use the {{ cli_manager }}.

{%- set FeatureName = "Using the {{ cli_manager }} to install and manage plugins for the OpenShift CLI" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/cli-manager-about.md" %}{% endleveloffset %}