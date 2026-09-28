{%- set _mod_docs_content_type = "CONCEPT" %}
# Disable the default time server on my nodes {id="disable-the-default-time-server-on-my-nodes-con_{{ context }}"}

You can stop the `chronyd` service on the nodes in a pool by creating a machine config that masks the unit. Disable the default time service when those nodes must get their time from a different source.