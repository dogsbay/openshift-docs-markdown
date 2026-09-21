{%- set _mod_docs_content_type = "CONCEPT" %}
# Follow plugin development guidelines {id="follow-plugin-development-guidelines-con_{{ context }}"}

Console dynamic plugins are loaded and interpreted from remote sources at runtime, so they must coexist with the console and with every other plugin. Following the established guidelines for PatternFly, localization, CSS, and Content Security Policy keeps your plugin compatible and maintainable across {{ product_title }} versions.