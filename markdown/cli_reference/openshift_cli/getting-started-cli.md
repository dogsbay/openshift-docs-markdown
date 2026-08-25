---
title: Getting started with the OpenShift CLI
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Getting started with the OpenShift CLI {id="cli-getting-started"}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "cli-developer-commands" %}

Install and configure the {{ oc_first }} to manage {{ product_title }} clusters and deploy applications directly from a terminal.

{% leveloffset +1 %}{% include "./modules/cli-about-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cli-installing-cli-portal.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cli-installing-cli-web-console.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cli-installing-cli-web-console-linux.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cli-installing-cli-web-console-windows.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cli-installing-cli-web-console-macos.md" %}{% endleveloffset %}

{% if not openshift_origin %}
{% leveloffset +2 %}{% include "./modules/cli-installing-cli-rpm.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +2 %}{% include "./modules/cli-installing-cli-brew.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-using-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cli-using-cli-project.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cli-using-cli-new-app.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cli-using-cli-pods.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cli-using-cli-pod-logs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cli-using-cli-current-project.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cli-using-cli-project-status.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cli-using-cli-list-api-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-getting-help.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-out.md" %}{% endleveloffset %}