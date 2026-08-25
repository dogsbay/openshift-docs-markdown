{%- set _mod_docs_content_type = "CONCEPT" %}
# Troubleshoot etcd {id="microshift-troubleshooting-etcd_{{ context }}"}

{{ microshift_short }} runs etcd as a managed, separate process to store system state. To ensure optimal performance and resolve issues, as an administrator, you can observe system activity and enforce memory usage limits by using the {{ microshift_short }} configuration file.