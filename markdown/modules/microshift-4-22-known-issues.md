{%- set _mod_docs_content_type = "CONCEPT" %}
# Known issues {id="microshift-4-22-known-issues_{{ context }}"}

Understand the known issues that impact your {{ microshift_short }} development and deployments. {._abstract}

*   The following known issues exist for {{ microshift_short }} RPM installation failures on {{ op_system_base_full }} 10.1, requiring manual installation:
    *   {{ microshift_short }} RPMs are not available from {{ op_system_base }} 10 repositories.
    *   {{ op_system_base }} 9 repositories cannot be enabled with a `subscription-manager` agent on {{ op_system_base }} 10.
    *   Manual single-RPM installation fails with missing dependencies.