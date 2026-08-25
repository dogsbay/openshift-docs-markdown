{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ servicebinding_title }} 1.3.1 {id="sbo-release-notes-1-3-1_{{ context }}"}

{{ servicebinding_title }} 1.3.1 is now available on {{ product_title }} 4.9, 4.10, and 4.11.

## Fixed issues {id="fixed-issues-1-3-1_{{ context }}"}
*   Before this update, a security vulnerability `CVE-2022-32149` was noted for {{ servicebinding_title }}. This update fixes the `CVE-2022-32149` error and updates the `golang.org/x/text` package from v0.3.7 to v0.3.8. [APPSVC-1220](https://issues.redhat.com/browse/APPSVC-1220)