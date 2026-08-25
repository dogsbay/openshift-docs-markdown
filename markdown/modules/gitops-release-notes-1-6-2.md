{%- set _mod_docs_content_type = "REFERENCE" %}

# Release notes for {{ gitops_title }} 1.6.2 {id="gitops-release-notes-1-6-2_{{ context }}"}

{{ gitops_title }} 1.6.2 is now available on {{ product_title }} 4.8, 4.9, 4.10 and 4.11.

## New features {id="new-features-1-6-2_{{ context }}"}

*   This release removes the `DISABLE_DEX` environment variable from the `openshift-gitops-operator` CSV file. As a result, this environment variable is no longer set when you perform a fresh installation of {{ gitops_title }}. [GITOPS-2360](https://issues.redhat.com/browse/GITOPS-2360)

## Fixed issues {id="fixed-issues-1-6-2_{{ context }}"}

The following issues have been resolved in the current release:

*   Before this update, the subscription health check was marked **degraded** for missing **InstallPlan** when more than 5 Operators were installed in a project. This update fixes the issue. [GITOPS-2018](https://issues.redhat.com/browse/GITOPS-2018)
*   Before this update, the {{ gitops_title }} Operator would spam the cluster with a deprecation notice warning whenever it detected that an Argo CD instance used deprecated fields. This update fixes this issue and shows only one warning event for each instance that detects a field. [GITOPS-2230](https://issues.redhat.com/browse/GITOPS-2230)
*   From {{ product_title }} 4.12, it is optional to install the console. This fix updates the {{ gitops_title }} Operator to prevent errors with the Operator if the console is not installed. [GITOPS-2352](https://issues.redhat.com/browse/GITOPS-2352)