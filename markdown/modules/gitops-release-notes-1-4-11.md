{%- set _mod_docs_content_type = "REFERENCE" %}

# Release notes for {{ gitops_title }} 1.4.11 {id="gitops-release-notes-1-4-11_{{ context }}"}

{{ gitops_title }} 1.4.11 is now available on {{ product_title }} 4.7, 4.8, 4.9, and 4.10.

## New features {id="new-features-1-4-11_{{ context }}"}

The current release adds the following improvements:

*   With this update, the bundled Argo CD has been updated to version 2.2.12.

## Fixed issues {id="fixed-issues-1-4-11_{{ context }}"}

The following issues have been resolved in the current release:

*   Before this update, the `redis-ha-haproxy` pods of an ArgoCD instance failed when more restrictive SCCs were present in the cluster. This update fixes the issue by updating the security context in workloads. [GITOPS-2034](https://issues.redhat.com/browse/GITOPS-2034)

## Known issues {id="known-issues-1-4-11_{{ context }}"}

*   {{ gitops_title }} Operator can use RHSSO (KeyCloak) with OIDC and Dex. However, with a recent security fix applied, the Operator cannot validate the RHSSO certificate in some scenarios. [GITOPS-2214](https://issues.redhat.com/browse/GITOPS-2214)

    As a workaround, disable TLS validation for the OIDC (Keycloak/RHSSO) endpoint in the ArgoCD specification.
    ```yaml
    apiVersion: argoproj.io/v1alpha1
    kind: ArgoCD
    metadata:
      name: example-argocd
    spec:
      extraConfig:
        "admin.enabled": "true"
    ...
    ```