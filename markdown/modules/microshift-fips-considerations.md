{%- set _mod_docs_content_type = "CONCEPT" %}
# Considerations for enabling FIPS mode {id="microshift-fips-considerations_{{ context }}"}

You must enable FIPS mode for RPM-based installations of {{ microshift_short }} on {{ op_system_base_full }} {{ op_system_version_major }} to ensure that your edge deployments comply with security mandates.

The following considerations apply when enabling FIPS mode:

*   To enable FIPS mode in {{ microshift_short }} containers, the worker machine kernel must be enabled to run in FIPS mode before the machine starts.
*   Using FIPS with {{ op_system_ostree_first }} images is not supported.
*   Using FIPS with image mode for {{ op_system_base }} is not supported.