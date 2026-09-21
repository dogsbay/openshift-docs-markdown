{%- set _mod_docs_content_type = "CONCEPT" %}
# Develop dynamic plugins {id="develop-dynamic-plugins-con_{{ context }}"}

Dynamic plugins add custom pages and other extensions to the {{ product_title }} console user interface at runtime, so you can tailor the console to a specific use case. You set up a plugin development environment, build the plugin against the console plugin SDK, and register it with the console by using a `ConsolePlugin` custom resource.