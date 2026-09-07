{%- set _mod_docs_content_type = "CONCEPT" %}
# Stop and start MicroShift {id="microshift-stop-and-start-microshift_{{ context }}"}

You can stop and start the {{ microshift_short }} service to apply changes, add optional packages, perform maintenance, or troubleshoot issues. On systems managed by `systemd`, the {{ microshift_short }} service integrates with greenboot health checks to verify that the node is healthy after each start.