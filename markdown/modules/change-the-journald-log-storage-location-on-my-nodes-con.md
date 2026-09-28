{%- set _mod_docs_content_type = "CONCEPT" %}
# Change the journald log storage location on my nodes {id="change-the-journald-log-storage-location-on-my-nodes-con_{{ context }}"}

You can control where journald stores its log data by setting the `Storage` option in a `journald.conf` file that you supply through a machine config. The Machine Config Operator rolls the change out to every node in the pool.