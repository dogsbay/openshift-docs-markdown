{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ gitops_title }} 1.8.2 {id="gitops-release-notes-1-8-2_{{ context }}"}

{{ gitops_title }} 1.8.2 is now available on {{ product_title }} 4.10, 4.11, 4.12, and 4.13.

## Fixed issues {id="fixed-issues-1-8-2_{{ context }}"}

The following issues have been resolved in the current release:

*   Before this update, when you configured Dex using the `.spec.dex` parameter and tried to log in to the Argo CD UI by using the **LOG IN VIA OPENSHIFT** option, you were not able to log in. This update fixes the issue.

    :::important

    The `spec.dex` parameter in the ArgoCD CR is deprecated. In a future release of {{ gitops_title }} v1.9, configuring Dex using the `spec.dex` parameter in the ArgoCD CR is planned to be removed. Consider using the `.spec.sso` parameter instead. See "Enabling or disabling Dex using .spec.sso".  [GITOPS-2761](https://issues.redhat.com/browse/GITOPS-2761)
    
    :::

*   Before this update, the cluster and `kam` CLI pods failed to start with a new installation of {{ gitops_title }} v1.8.0 on the {{ product_title }} 4.10 cluster. This update fixes the issue and now all pods run as expected. [GITOPS-2762](https://issues.redhat.com/browse/GITOPS-2762)