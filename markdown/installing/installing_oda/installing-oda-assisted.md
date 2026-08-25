---
title: "Installing a cluster on {{ oda }} by using the Assisted Installer"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on {{ oda }} by using the Assisted Installer {id="installing-oda-assisted-installer"}
{%- set context = "installing-oda-assisted-installer" %}

You can use the {{ ai_full }} to install a cluster on {{ oda_first }}. {._abstract}

{% leveloffset +1 %}{% include "./modules/ai-oda-environment.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ai-oda-discovery.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Generating a key pair for cluster node SSH access](/installing/installing_platform_agnostic/installing-platform-agnostic#ssh-agent-using_installing-platform-agnostic)

{% leveloffset +1 %}{% include "./modules/ai-oda-create-nodes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ai-oda-start-install.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ai-oda-complete-install.md" %}{% endleveloffset %}