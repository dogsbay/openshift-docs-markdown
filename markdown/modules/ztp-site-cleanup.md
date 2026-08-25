{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing a managed cluster site from the {{ ztp }} pipeline {id="ztp-site-cleanup_{{ context }}"}

You can remove a managed site and the associated installation and configuration policy CRs from the {{ ztp_first }} pipeline. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have logged in to the hub cluster as a user with `cluster-admin` privileges.

**Procedure**

1.  Remove a site and the associated CRs by removing the associated `ClusterInstance` and `PolicyGenerator` or `PolicyGentemplate` files from the `kustomization.yaml` file.
1.  Add the following `syncOptions` field to the ArgoCD application that manages the target site.
    ```yaml
    kind: Application
    spec:
      syncPolicy:
        syncOptions:
        - PrunePropagationPolicy=background
    ```

    When you run the {{ ztp }} pipeline again, the generated CRs are removed.
1.  Optional: If you want to permanently remove a site, you should also remove the `ClusterInstance` and site-specific `PolicyGenerator` or `PolicyGentemplate` files from the Git repository.
1.  Optional: If you want to remove a site temporarily, for example when redeploying a site, you can leave the `ClusterInstance` and site-specific `PolicyGenerator` or `PolicyGentemplate` CRs in the Git repository.