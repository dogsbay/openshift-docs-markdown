---
title: OpenShift CLI developer command reference
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# OpenShift CLI developer command reference {id="cli-developer-commands"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cli-developer-commands" %}

To learn more about the {{ oc_first }} developer commands, review their descriptions and example commands.

{% if openshift_enterprise or openshift_origin %}
For administrator commands, see the "OpenShift CLI administrator command reference".
{% endif %}

Run `oc help` to list all commands or run `oc <command> --help` to get additional details for a specific command.

{% leveloffset +1 %}{% include "./modules/oc-by-example-content.md" %}{% endleveloffset %}

{% if openshift_enterprise or openshift_origin %}

## Additional resources {id="additional-resources_cli-developer-commands"}

*   [OpenShift CLI administrator command reference](/cli_reference/openshift_cli/administrator-cli-commands#cli-administrator-commands)

{% endif %}