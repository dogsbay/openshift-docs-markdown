---
title: Creating applications by using the CLI
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating applications by using the CLI {id="creating-applications-using-cli"}
{%- set context = "creating-applications-using-cli" %}

You can create applications on your {{ product_title }} cluster from a Git repository, a container image, or a template using the `oc new-app` command. Customize names, labels, environment variables, target projects, and other deployment options with command flags. {._abstract}

{% leveloffset +1 %}{% include "./modules/applications-create-using-cli-source-code.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/applications-create-using-cli-source-reference.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/applications-create-using-cli-image.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Docker Hub registry (Docker)](https://registry.hub.docker.com)

{% leveloffset +1 %}{% include "./modules/applications-create-using-cli-template.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/applications-create-using-cli-modify.md" %}{% endleveloffset %}