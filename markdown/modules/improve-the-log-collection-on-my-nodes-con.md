{%- set _mod_docs_content_type = "CONCEPT" %}
# Improve the log collection on my nodes {id="improve-the-log-collection-on-my-nodes-con_{{ context }}"}

You can change how journald collects and stores logs on the nodes in a pool by supplying a `journald.conf` file through a machine config. The Machine Config Operator rolls the change out to every node in the pool.