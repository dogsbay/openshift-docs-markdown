{%- set _mod_docs_content_type = "CONCEPT" %}
# About the OpenShift CLI {id="cli-about-cli_{{ context }}"}

With the {{ oc_first }}, you can create applications and manage {{ product_title }} projects from a terminal. {._abstract}

The OpenShift CLI is ideal in the following situations:

*   Working directly with project source code.
*   Scripting {{ product_title }} operations
{%- if not microshift %}
*   Managing projects while restricted by bandwidth resources and the web console is unavailable.
{% endif %}
{% if microshift %}
*   Managing projects while restricted by bandwidth resources.
{% endif %}