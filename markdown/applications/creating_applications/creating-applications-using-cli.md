---
title: Creating applications by using the CLI
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating applications by using the CLI {id="creating-applications-using-cli"}
{%- set context = "creating-applications-using-cli" %}

You can create an {{ product_title }} application from components that include
source or binary code, images, and templates by using the {{ product_title }}
CLI.

The set of objects created by `new-app` depends on the artifacts passed as
input: source repositories, images, or templates.

{% leveloffset +1 %}{% include "./modules/applications-create-using-cli-source-code.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/applications-create-using-cli-image.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/applications-create-using-cli-template.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/applications-create-using-cli-modify.md" %}{% endleveloffset %}