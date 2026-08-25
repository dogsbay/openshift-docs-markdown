{%- set _mod_docs_content_type = "CONCEPT" %}
# User Telemetry {id="telemetry-user-telemetry_{{ context }}"}

Red Hat collects anonymized user data from your browser. This anonymized data includes what pages, features, and resource types that the user of all clusters with enabled telemetry uses. {._abstract}

Other considerations:

*   User events are grouped as a SHA-1 hash.
*   User’s IP address is saved as `0.0.0.0`.
*   User names and IP addresses are never saved as separate values.