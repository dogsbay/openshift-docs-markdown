# Release notes for {{ gitops_title }} 1.3.6 {id="gitops-release-notes-1-3-6_{{ context }}"}

{{ gitops_title }} 1.3.6 is now available on {{ product_title }} 4.7, 4.8, 4.9, and 4.6 with limited GA support.

## Fixed issues {id="fixed-issues-1-3-6_{{ context }}"}

The following issues have been resolved in the current release:

*   In {{ gitops_title }}, improper access control allows admin privilege escalation [(CVE-2022-1025)](https://access.redhat.com/security/cve/CVE-2022-1025). This update fixes the issue.
*   A path traversal flaw allows leaking of out-of-bound files [(CVE-2022-24731)](https://access.redhat.com/security/cve/CVE-2022-24731). This update fixes the issue.
*   A path traversal flaw and improper access control allows leaking of out-of-bound files [(CVE-2022-24730)](https://access.redhat.com/security/cve/CVE-2022-24730). This update fixes the issue.