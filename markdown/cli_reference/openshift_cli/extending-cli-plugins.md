---
title: Extending the OpenShift CLI with plugins
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Extending the OpenShift CLI with plugins {id="cli-extend-plugins"}
{%- set context = "cli-extend-plugins" %}

You can write and install plugins to build on the default `oc` commands, allowing you to perform new and more complex tasks with the {{ oc_first }}. {._abstract}

{% leveloffset +1 %}{% include "./modules/cli-extending-plugins-writing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-extending-plugins-installing.md" %}{% endleveloffset %}