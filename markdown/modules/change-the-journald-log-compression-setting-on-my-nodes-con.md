{%- set _mod_docs_content_type = "CONCEPT" %}
# Change the journald log compression setting on my nodes {id="change-the-journald-log-compression-setting-on-my-nodes-con_{{ context }}"}

You can control whether journald compresses the logs it stores by setting the `Compress` option in a `journald.conf` file that you supply through a machine config. The Machine Config Operator rolls the change out to every node in the pool.