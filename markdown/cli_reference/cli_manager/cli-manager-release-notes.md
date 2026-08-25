---
title: "{{ cli_manager }} release notes"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ cli_manager }} release notes {id="cli-manager-release-notes"}
{%- set context = "cli-manager-release-notes" %}

Track the development of the {{ cli_manager }} for {{ product_title }}, which enables you to install CLI plugins in both connected and disconnected environments.

{%- set FeatureName = "Using the {{ cli_manager }} to install and manage plugins for the OpenShift CLI" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/cli-manager-rn-0-2-0.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-manager-rn-0-1-1.md" %}{% endleveloffset %}

**Additional resources**

*   [About the {{ cli_manager }}](/cli_reference/cli_manager/index#cli-manager-overview)