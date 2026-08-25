# Release notes for {{ gitops_title }} 1.4.2 {id="gitops-release-notes-1-4-2_{{ context }}"}

{{ gitops_title }} 1.4.2 is now available on {{ product_title }} 4.7, 4.8, 4.9, and 4.10. {._abstract}

## Fixed issues {id="fixed-issues-1-4-2_{{ context }}"}

The following issue has been resolved in the current release:

*   Before this update, the **Route** resources got stuck in `Progressing` Health status if more than one `Ingress` were attached to the route.  This update fixes the health check and reports the correct health status of the **Route** resources. [GITOPS-1751](https://issues.redhat.com/browse/GITOPS-1751)