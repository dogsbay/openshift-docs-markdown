{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure MicroShift with the configuration file {id="microshift-configure-with-config-file_{{ context }}"}

{{ microshift_short }} uses a YAML configuration file to control networking, API server behavior, node settings, and other runtime options. You can customize {{ microshift_short }} by editing the default configuration file or by providing configuration snippets that are merged at startup. Understanding the configuration file structure and parameters helps you tailor {{ microshift_short }} to your deployment requirements.