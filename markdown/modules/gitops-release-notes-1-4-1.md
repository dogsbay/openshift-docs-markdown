# Release notes for {{ gitops_title }} 1.4.1 {id="gitops-release-notes-1-4-1_{{ context }}"}

{{ gitops_title }} 1.4.1 is now available on {{ product_title }} 4.7, 4.8, 4.9, and 4.10.

## Fixed issues {id="fixed-issues-1-4-1_{{ context }}"}

The following issue has been resolved in the current release:

*   {{ gitops_title }} Operator v1.4.0 introduced a regression which removes the description fields from `spec` for the following CRDs:
    *   `argoproj.io_applications.yaml`
    *   `argoproj.io_appprojects.yaml`
    *   `argoproj.io_argocds.yaml`

        Before this update, when you created an `AppProject` resource using the `oc create` command, the resource failed to synchronize due to the missing description fields. This update restores the missing description fields in the preceding CRDs.  [GITOPS-1721](https://issues.redhat.com/browse/GITOPS-1721)