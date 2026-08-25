---
title: Defining a default network policy for projects
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Defining a default network policy for projects {id="default-network-policy"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "default-network-policy" %}

To enforce consistent network isolation and security controls across projects, configure a default project template to automatically apply network policies to newly created projects.

As a cluster administrator, you can modify the new project template to automatically include network policies when you create a new project. If you do not yet have a customized template for new projects, you must first create one.

{% leveloffset +1 %}{% include "./modules/modifying-template-for-new-projects.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-project-defaults.md" %}{% endleveloffset %}