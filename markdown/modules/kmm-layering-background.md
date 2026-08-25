{%- set _mod_docs_content_type = "CONCEPT" %}
# Layering background {id="kmm-layering-background_{{ context }}"}

Layering applies Day 0 kernel modules through the Machine Config Operator (MCO) on {{ product_title }}, so cluster upgrades do not trigger node upgrades for those modules. You recompile the driver only when you add new features, because the node operating system stays the same.