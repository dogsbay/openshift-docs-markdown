{%- set _mod_docs_content_type = "REFERENCE" %}

# Release notes for {{ gitops_title }} 1.5.9 {id="gitops-release-notes-1-5-9_{{ context }}"}

{{ gitops_title }} 1.5.9 is now available on {{ product_title }} 4.8, 4.9, 4.10, and 4.11.

## Fixed issues {id="fixed-issues-1-5-9_{{ context }}"}

*   Before this update, all versions of Argo CD v1.8.2 and later were vulnerable to an improper authorization bug. As a result, Argo CD would accept tokens for users who might not be authorized to access the cluster. This issue is now fixed. [CVE-2023-22482](https://bugzilla.redhat.com/show_bug.cgi?id=2160492)