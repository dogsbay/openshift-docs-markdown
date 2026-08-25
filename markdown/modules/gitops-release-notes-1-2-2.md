# Release notes for {{ gitops_title }} 1.2.2 {id="gitops-release-notes-1-2-2_{{ context }}"}

{{ gitops_title }} 1.2.2 is now available on {{ product_title }} 4.8.

## Fixed issues {id="fixed-issues-1-2-2_{{ context }}"}
The following issue was resolved in the current release:

*   All versions of Argo CD are vulnerable to a path traversal bug that allows to pass arbitrary values to be consumed by Helm charts. This update fixes the CVE-2022-24348 gitops error, path traversal and dereference of symlinks when passing Helm value files.
[GITOPS-1756](https://issues.redhat.com/browse/GITOPS-1756)