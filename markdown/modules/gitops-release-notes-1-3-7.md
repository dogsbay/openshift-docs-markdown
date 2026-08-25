# Release notes for {{ gitops_title }} 1.3.7 {id="gitops-release-notes-1-3-7_{{ context }}"}

{{ gitops_title }} 1.3.7 is now available on {{ product_title }} 4.7, 4.8, 4.9, and 4.6 with limited GA support.

## Fixed issues {id="fixed-issues-1-3-7_{{ context }}"}

The following issue has been resolved in the current release:

*   Before this update, a flaw was found in OpenSSL. This update fixes the issue by updating the base images to the latest version to avoid the OpenSSL flaw. [(CVE-2022-0778)](https://access.redhat.com/security/cve/CVE-2022-0778).


:::note

To install the current release of {{ gitops_title }} 1.3 and receive further updates during its product life cycle, switch to the ***GitOps-1.3*** channel.

:::