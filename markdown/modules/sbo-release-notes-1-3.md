{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ servicebinding_title }} 1.3 {id="sbo-release-notes-1-3_{{ context }}"}

{{ servicebinding_title }} 1.3 is now available on {{ product_title }} 4.9, 4.10, and 4.11.

## Removed functionality {id="removal-notice-1-3_{{ context }}"}
*   In {{ servicebinding_title }} 1.3, the Operator Lifecycle Manager (OLM) descriptor feature has been removed to improve resource utilization. As an alternative to OLM descriptors, you can use CRD annotations to declare binding data.