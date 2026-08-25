{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage responsive restarts and security certificates {id="microshift-manage-responsive-restarts-and-security-certificates_{{ context }}"}

{{ microshift_short }} depends on device IP addresses and system-wide clock settings to remain consistent during runtime. When these settings change, or when security certificates approach expiration, {{ microshift_short }} handles responsive restarts and certificate rotations to maintain secure operation.