{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ servicebinding_title }} 1.3.3 {id="sbo-release-notes-1-3-3_{{ context }}"}

{{ servicebinding_title }} 1.3.3 is now available on {{ product_title }} 4.9, 4.10, 4.11 and 4.12.

## Fixed issues {id="fixed-issues-1-3-3_{{ context }}"}
*   Before this update, a security vulnerability `CVE-2022-41717` was noted for {{ servicebinding_title }}. This update fixes the `CVE-2022-41717` error and updates the `golang.org/x/net` package from v0.0.0-20220906165146-f3363e06e74c to v0.4.0. [APPSVC-1256](https://issues.redhat.com/browse/APPSVC-1256)
*   Before this update, Provisioned Services were only detected if the respective resource had the "servicebinding.io/provisioned-service: true" annotation set while other Provisioned Services were missed. With this update, the detection mechanism identifies all Provisioned Services correctly based on the "status.binding.name" attribute. [APPSVC-1204](https://issues.redhat.com/browse/APPSVC-1204)