{%- set _mod_docs_content_type = "CONCEPT" %}
# Ensure that the times on my nodes are consistent {id="ensure-that-the-times-on-my-nodes-are-consistent-con_{{ context }}"}

You can set the time servers that your nodes use by supplying a `chrony.conf` file through a machine config. Consistent time across nodes keeps certificates, logs, and distributed components in step with each other.