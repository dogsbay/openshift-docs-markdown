# Release notes for {{ gitops_title }} 1.3.3 {id="gitops-release-notes-1-3-3_{{ context }}"}

{{ gitops_title }} 1.3.3 is now available on {{ product_title }} 4.7, 4.8, 4.9, and 4.6 with limited GA support.

## Fixed issues {id="fixed-issues-1-3-3_{{ context }}"}

The following issue has been resolved in the current release:

*   All versions of Argo CD are vulnerable to a path traversal bug that allows to pass arbitrary values to be consumed by Helm charts. This update fixes the `CVE-2022-24348 gitops` error, path traversal and dereference of symlinks when passing Helm value files. [GITOPS-1756](https://issues.redhat.com/browse/GITOPS-1756)