{%- set _mod_docs_content_type = "CONCEPT" %}
# Use sos reports {id="microshift-use-sos-reports_{{ context }}"}

The `sos` tool collects diagnostic information from a {{ microshift_short }} node, including logs, configuration files, and system state. You can generate an sos report and share it with Red Hat Support to help diagnose problems. {{ microshift_short }} provides a dedicated sos plugin that gathers {{ microshift_short }}-specific data alongside standard system information.