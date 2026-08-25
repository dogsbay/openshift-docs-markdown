---
title: "Installing the {{ cli_manager }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing the {{ cli_manager }} {id="cli-manager-install"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cli-manager-install" %}

You can simplify the installation and management of CLI plugins in connected and disconnected environments with the {{ cli_manager }}. The {{ cli_manager }} makes Krew compatible with the `oc` CLI, allowing cluster administrators to manage custom CLI plugin resources.

{%- set FeatureName = "Using the {{ cli_manager }} to install and manage plugins for the OpenShift CLI" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/cli-manager-installing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-manager-custom-index-krew.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-manager-adding-plugin-yaml.md" %}{% endleveloffset %}