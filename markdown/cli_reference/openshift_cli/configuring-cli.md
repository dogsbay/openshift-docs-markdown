---
title: Configuring the OpenShift CLI
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring the OpenShift CLI {id="cli-configuring-cli"}
{%- set context = "cli-configuring-cli" %}

You can customize your command-line environment after installing the {{ oc_first }}. {._abstract}

## Enabling tab completion {id="cli-enabling-tab-completion"}

You can enable tab completion for the Bash or Zsh shells.

{% leveloffset +2 %}{% include "./modules/cli-configuring-completion.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cli-configuring-completion-zsh.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-configuring-kubeconfig-using-cli.md" %}{% endleveloffset %}