{%- set _mod_docs_content_type = "CONCEPT" %}
# Change the rate at which journald log messages are collected on my nodes {id="change-the-rate-at-which-journald-log-messages-are-collected-on-my-nodes-con_{{ context }}"}

You can limit how many messages journald accepts in a given interval by setting the rate limiting options in a `journald.conf` file that you supply through a machine config. The Machine Config Operator rolls the change out to every node in the pool.