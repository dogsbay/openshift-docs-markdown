{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the hub cluster with ArgoCD {id="ztp-configuring-hub-cluster-with-argocd_{{ context }}"}

You can configure the hub cluster with a set of ArgoCD applications that generate the required installation and policy custom resources (CRs) for each site with {{ ztp_first }}. {._abstract}


:::note

{{ rh_rhacm_first }} uses `ClusterInstance` CRs to generate the Day 1 managed cluster installation CRs for ArgoCD. Each ArgoCD application can manage a maximum of 1000 `ClusterInstance` CRs.

:::


**Prerequisites**

*   You have a {{ product_title }} hub cluster with {{ rh_rhacm_first }} and {{ gitops_title }} installed.
*   You have extracted the reference deployment from the {{ ztp }} plugin container as described in the "Preparing the {{ ztp }} site configuration repository" section. Extracting the reference deployment creates the `out/argocd/deployment` directory referenced in the following procedure.

**Procedure**

1.  Prepare the ArgoCD pipeline configuration:
    1.  Create a Git repository with the directory structure similar to the example directory. For more information, see "Preparing the {{ ztp }} site configuration repository".
    1.  Configure access to the repository using the ArgoCD UI. Under **Settings** configure the following:
        *   **Repositories** - Add the connection information. The URL must end in `.git`, for example, `https://repo.example.com/repo.git` and credentials.
        *   **Certificates** - Add the public certificate for the repository, if needed.
    1.  Modify the two ArgoCD applications, `out/argocd/deployment/clusters-app.yaml` and `out/argocd/deployment/policies-app.yaml`, based on your Git repository:
        *   Update the URL to point to the Git repository. The URL ends with `.git`, for example, `https://repo.example.com/repo.git`.
        *   The `targetRevision` indicates which Git repository branch to monitor.
        *   `path` specifies the path to the `ClusterInstance` and `PolicyGenerator` or `PolicyGentemplate` CRs, respectively.

{% include "./snippets/ztp-patch-argocd-hub-cluster.md" %}

1.  Optional: If you have existing ArgoCD applications, verify that the `PrunePropagationPolicy=background` policy is set in the `Application` resource by running the following command:
    ```terminal
    $ oc -n openshift-gitops get applications.argoproj.io  \
    clusters -o jsonpath='{.spec.syncPolicy.syncOptions}' |jq
    ```

    Example output for an existing policy:

    ```terminal
    [
      "CreateNamespace=true",
      "PrunePropagationPolicy=background",
      "RespectIgnoreDifferences=true"
    ]
    ```
    1.  If the `spec.syncPolicy.syncOption` field does not contain a `PrunePropagationPolicy` parameter or `PrunePropagationPolicy` is set to the `foreground` value, set the policy to `background` in the `Application` resource. See the following example:
        ```yaml
        kind: Application
        spec:
          syncPolicy:
            syncOptions:
            - PrunePropagationPolicy=background
        ```


        Setting the `background` deletion policy ensures that the `ManagedCluster` CR and all its associated resources are deleted.