# Release notes for {{ gitops_title }} 1.4.5 {id="gitops-release-notes-1-4-5_{{ context }}"}

{{ gitops_title }} 1.4.5 is now available on {{ product_title }} 4.7, 4.8, 4.9, and 4.10. {._abstract}

## Fixed issues {id="fixed-issues-1-4-5_{{ context }}"}


:::warning

You should directly upgrade to {{ gitops_title }} v1.4.5 from {{ gitops_title }} v1.4.3. Do not use {{ gitops_title }} v1.4.4 in a production environment. Major issues that affected {{ gitops_title }} v1.4.4 are fixed in {{ gitops_title }} 1.4.5. 

:::


The following issue has been resolved in the current release:

*   Before this update, Argo CD pods were stuck in the `ErrImagePullBackOff` state. The following error message was shown:
```yaml
reason: ErrImagePull
          message: >-
            rpc error: code = Unknown desc = reading manifest
            sha256:ff4ad30752cf0d321cd6c2c6fd4490b716607ea2960558347440f2f370a586a8
            in registry.redhat.io/openshift-gitops-1/argocd-rhel8: StatusCode:
            404, <HTML><HEAD><TITLE>Error</TITLE></HEAD><BODY> 
```

This issue is now fixed. [GITOPS-1848](https://issues.redhat.com/browse/GITOPS-1848)