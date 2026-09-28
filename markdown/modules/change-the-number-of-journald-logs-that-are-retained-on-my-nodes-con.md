{%- set _mod_docs_content_type = "CONCEPT" %}
# Change the number of journald logs that are retained on my nodes {id="change-the-number-of-journald-logs-that-are-retained-on-my-nodes-con_{{ context }}"}

You can control how long journald keeps its logs by setting the log lifetime options in a `journald.conf` file that you supply through a machine config. The Machine Config Operator rolls the change out to every node in the pool.