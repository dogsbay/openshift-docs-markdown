{%- set _mod_docs_content_type = "CONCEPT" %}
# Change the installed disk-partition schema for new nodes {id="change-the-installed-disk-partition-schema-for-new-nodes-con_{{ context }}"}

You can give new nodes a custom disk layout, such as a separate partition for `/var`, by supplying partitioning instructions in the Ignition configuration that the node boots with.