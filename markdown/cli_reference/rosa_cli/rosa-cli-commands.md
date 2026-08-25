{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# ROSA CLI command reference {id="rosa-cli-commands"}
{%- set context = "rosa-cli-commands" %}

This reference provides descriptions and example commands for {{ rosa_cli_first }} commands. {._abstract}

Run `rosa -h` to list all commands or run `rosa <command> --help` to get additional details for a specific command.

{% leveloffset +1 %}{% include "./modules/rosa-by-example-content.md" %}{% endleveloffset %}