{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ gitops_title }} 1.8.4 {id="gitops-release-notes-1-8-4_{{ context }}"}

{{ gitops_title }} 1.8.4 is now available on {{ product_title }} 4.10, 4.11, 4.12, and 4.13.

## New features {id="new-features-1-8-4_{{ context }}"}

The current release adds the following improvements:

*   With this update, the bundled Argo CD has been updated to version 2.6.13.

## Fixed issues {id="fixed-issues-1-8-4_{{ context }}"}

The following issues have been resolved in the current release:

*   Before this update, Argo CD was becoming unresponsive when there was an increase in namespaces and applications. The functions competing for resources caused a deadlock. This update fixes the issue by removing the deadlock. Now, you should not experience crashes or unresponsiveness when there is an increase in namespaces or applications. [GITOPS-3192](https://issues.redhat.com/browse/GITOPS-3192)
*   Before this update, the Argo CD application controller resource could suddenly stop working when resynchronizing applications. This update fixes the issue by adding logic to prevent a cluster cache deadlock. Now, applications should resynchronize successfully. [GITOPS-3052](https://issues.redhat.com/browse/GITOPS-3052)
*   Before this update, there was a mismatch in the RSA key for known hosts in the `argocd-ssh-known-hosts-cm` config map. This update fixes the issue by matching the RSA key with the upstream project. Now, you can use the default RSA keys on default deployments. [GITOPS-3144](https://issues.redhat.com/browse/GITOPS-3144)
*   Before this update, an old Redis image version was used when deploying the {{ gitops_title }} Operator, which resulted in vulnerabilities. This update fixes the vulnerabilities on Redis by upgrading it to the latest version of the `registry.redhat.io/rhel-8/redis-6` image. [GITOPS-3069](https://issues.redhat.com/browse/GITOPS-3069)
*   Before this update, users could not connect to Microsoft Team Foundation Server (TFS) type Git repositories through Argo CD deployed by the Operator. This update fixes the issue by updating the Git version to 2.39.3 in the Operator. Now, you can set the `Force HTTP basic auth` flag during repository configurations to connect with the TFS type Git repositories. [GITOPS-1315](https://issues.redhat.com/browse/GITOPS-1315)

## Known issues {id="known-issues-1-8-4_{{ context }}"}

*   Currently, {{ gitops_title }} 1.8.4 is not available in the `latest` channel of {{ product_title }} 4.10 and 4.11. The `latest` channel is taken by {{ gitops_shortname }} 1.9.z, which is only released on {{ product_title }} 4.12 and later versions.

    As a workaround, switch to the `gitops-1.8` channel to get the new update. [GITOPS-3158](https://issues.redhat.com/browse/GITOPS-3158)