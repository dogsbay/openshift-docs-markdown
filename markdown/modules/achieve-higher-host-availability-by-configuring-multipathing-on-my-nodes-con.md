{%- set _mod_docs_content_type = "CONCEPT" %}
# Achieve higher host availability by configuring multipathing on my nodes {id="achieve-higher-host-availability-by-configuring-multipathing-on-my-nodes-con_{{ context }}"}

You can enable multipathing on the primary disk of your nodes after installation by creating a machine config that sets the required kernel arguments. Multipathing gives each node redundant paths to its storage, so the host stays available if a single path fails.