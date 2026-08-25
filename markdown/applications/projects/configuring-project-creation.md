---
title: Configuring project creation
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring project creation {id="configuring-project-creation"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-project-creation" %}

As a cluster administrator, you can allow and configure how developers and service accounts can create, or _self-provision_, their own projects.

In {{ product_title }}, _projects_ are used to group and isolate related objects.
When you request to create a new project by using the web console or `oc new-project` command, an endpoint in {{ product_title }} provisions the project according to a template.
You can customize this template to meet your needs.

{% leveloffset +1 %}{% include "./modules/about-project-creation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/modifying-template-for-new-projects.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/disabling-project-self-provisioning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/customizing-project-request-message.md" %}{% endleveloffset %}