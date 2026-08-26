{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding namespace-scoped custom Helm chart repositories {id="adding-namespace-scoped-helm-chart-repositories_{{ context }}"}

The cluster-scoped `HelmChartRepository` custom resource definition (CRD) for Helm repository provides the ability for administrators to add Helm repositories as custom resources. The namespace-scoped `ProjectHelmChartRepository` CRD allows project members with the appropriate role-based access control (RBAC) permissions to create Helm repository resources of their choice but scoped to their namespace. Such project members can see charts from both cluster-scoped and namespace-scoped Helm repository resources. {._abstract}


:::note

*   Administrators can limit users from creating namespace-scoped Helm repository resources. By limiting users, administrators have the flexibility to control the RBAC through a namespace role instead of a cluster role. This avoids unnecessary permission elevation for the user and prevents access to unauthorized services or applications.
*   The addition of the namespace-scoped Helm repository does not impact the behavior of the existing cluster-scoped Helm repository.

:::


As a regular user or project member with the appropriate RBAC permissions, you can add custom namespace-scoped Helm chart repositories to your cluster and enable access to the Helm charts from these repositories in the **Developer Catalog**.

**Procedure**

1.  To add a new namespace-scoped Helm Chart Repository, you must add the Helm Chart Repository custom resource (CR) to your namespace.

    ```yaml title="Sample Namespace-scoped Helm Chart Repository CR"
    apiVersion: helm.openshift.io/v1beta1
    kind: ProjectHelmChartRepository
    metadata:
      name: <name>
    spec:
      url: https://my.chart-repo.org/stable

      # optional name that might be used by console
      name: <chart-repo-display-name>

      # optional and only needed for UI purposes
      description: <My private chart repo>

      # required: chart repository URL
      connectionConfig:
        url: <helm-chart-repository-url>
    ```

    For example, to add an Azure sample chart repository scoped to your `my-namespace` namespace, run:
    ```terminal
    $ cat <<EOF | oc apply --namespace my-namespace -f -
    apiVersion: helm.openshift.io/v1beta1
    kind: ProjectHelmChartRepository
    metadata:
      name: azure-sample-repo
    spec:
      name: azure-sample-repo
      connectionConfig:
        url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs
    EOF
    ```

    The output verifies that the namespace-scoped Helm Chart Repository CR is created:
    ```text title="Example output"
    projecthelmchartrepository.helm.openshift.io/azure-sample-repo created
    ```
1.  Navigate to  the **Developer Catalog** in the web console to verify that the Helm charts from the chart repository are displayed in your `my-namespace` namespace.

    For example, use the **Chart repositories** filter to search for a Helm chart from the repository.

    **Figure 1. Chart repositories filter in your namespace**

    ![odc_namespace_helm_chart_repo_filter](/images/odc_namespace_helm_chart_repo_filter.png)

    Alternatively, run:
    ```terminal
    $ oc get projecthelmchartrepositories --namespace my-namespace
    ```
    ```text title="Example output"
    NAME                     AGE
    azure-sample-repo        1m
    ```

    :::note

    If a cluster administrator or a regular user with appropriate RBAC permissions removes all of the chart repositories in a specific namespace, then you cannot view the Helm option in the **+Add** view, **Developer Catalog**, and left navigation panel for that specific namespace.
    
    :::