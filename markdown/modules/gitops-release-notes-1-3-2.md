# Release notes for {{ gitops_title }} 1.3.2 {id="gitops-release-notes-1-3-2_{{ context }}"}

{{ gitops_title }} 1.3.2 is now available on {{ product_title }} 4.7, 4.8, 4.9, and 4.6 with limited GA support.

## New features {id="new-features-1-3-2_{{ context }}"}

In addition to the fixes and stability improvements, the following sections highlight what is new in {{ gitops_title }} 1.3.2:

*   Upgraded Argo CD to version **2.1.8**
*   Upgraded Dex to version **2.30.0**

## Fixed issues {id="fixed-issues-1-3-2_{{ context }}"}

The following issues have been resolved in the current release:

*   Previously, in the software catalog UI under the **Infrastructure Features** section, when you filtered by `Disconnected` the {{ gitops_title }} Operator did not show in the search results, as the Operator did not have the related annotation set in its CSV file. With this update, the `Disconnected Cluster` annotation has been added to the {{ gitops_title }} Operator as an infrastructure feature. [GITOPS-1539](https://issues.redhat.com/browse/GITOPS-1539)
*   When using an `Namespace-scoped` Argo CD instance, for example, an Argo CD instance that is not scoped to **All Namepsaces** in a cluster, {{ gitops_title }} dynamically maintains a list of managed namespaces. These namespaces include the `argocd.argoproj.io/managed-by` label. This list of namespaces is stored in a cache in **Argo CD → Settings → Clusters → "in-cluster" → NAMESPACES**. Before this update, if you deleted one of these namespaces, the Operator ignored that, and the namespace remained in the list. This behavior broke the **CONNECTION STATE** in that cluster configuration, and all sync attempts resulted in errors. For example:
    ```text
    Argo service account does not have <random_verb> on <random_resource_type> in namespace <the_namespace_you_deleted>. 
    ```

    This bug is fixed. [GITOPS-1521](https://issues.redhat.com/browse/GITOPS-1521)
*   With this update, the {{ gitops_title }} Operator has been annotated with the **Deep Insights** capability level. [GITOPS-1519](https://issues.redhat.com/browse/GITOPS-1519)
*   Previously, the Argo CD Operator managed the `resource.exclusion` field by itself but ignored the `resource.inclusion` field. This prevented the `resource.inclusion` field configured in the `Argo CD` CR to generate in the `argocd-cm` configuration map. This bug is fixed. [GITOPS-1518](https://issues.redhat.com/browse/GITOPS-1518)