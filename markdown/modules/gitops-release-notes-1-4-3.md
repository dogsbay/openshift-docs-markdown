# Release notes for {{ gitops_title }} 1.4.3 {id="gitops-release-notes-1-4-3_{{ context }}"}

{{ gitops_title }} 1.4.3 is now available on {{ product_title }} 4.7, 4.8, 4.9, and 4.10. {._abstract}

## Fixed issues {id="fixed-issues-1-4-3_{{ context }}"}

The following issue has been resolved in the current release:

*   Before this update, the TLS certificate in the `argocd-tls-certs-cm` configuration map was deleted by the {{ gitops_title }} unless the certificate was configured in the ArgoCD CR specification `tls.initialCerts` field. This update fixes this issue. [GITOPS-1725](https://issues.redhat.com/browse/GITOPS-1725)