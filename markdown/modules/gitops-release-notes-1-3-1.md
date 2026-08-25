# Release notes for {{ gitops_title }} 1.3.1 {id="gitops-release-notes-1-3-1_{{ context }}"}

{{ gitops_title }} 1.3.1 is now available on {{ product_title }} 4.7, 4.8, 4.9, and 4.6 with limited GA support.

## Fixed issues {id="fixed-issues-1-3-1_{{ context }}"}

*   If you upgrade to v1.3.0, the Operator does not return an ordered slice of environment variables. As a result, the reconciler fails causing the frequent recreation of Argo CD pods in {{ product_title }} clusters running behind a proxy. This update fixes the issue so that Argo CD pods are not recreated. [GITOPS-1489](https://issues.redhat.com/browse/GITOPS-1489)