{%- set _mod_docs_content_type = "CONCEPT" %}
# Modify systemd settings on my nodes {id="modify-systemd-settings-on-my-nodes-con_{{ context }}"}

You can add, override, or disable systemd units on the nodes in a pool by defining the unit in a machine config. The Machine Config Operator writes the unit to every node in the pool, which keeps the service configuration consistent.