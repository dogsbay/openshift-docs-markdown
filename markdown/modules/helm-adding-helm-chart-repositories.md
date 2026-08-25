{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding custom Helm chart repositories {id="adding-helm-chart-repositories_{{ context }}"}

As a cluster administrator, you can add custom Helm chart repositories to your cluster and enable access to the Helm charts from these repositories in the **Developer Catalog**.

**Procedure**

1.  To add a new Helm Chart Repository, you must add the Helm Chart Repository custom resource (CR) to your cluster.

```yaml title="Sample Helm Chart Repository CR"
apiVersion: helm.openshift.io/v1beta1
kind: HelmChartRepository
metadata:
  name: <name>
spec:
 # optional name that might be used by console
 # name: <chart-display-name>
  connectionConfig:
    url: <helm-chart-repository-url>
```

For example, to add an Azure sample chart repository, run:

```terminal
$ cat <<EOF | oc apply -f -
apiVersion: helm.openshift.io/v1beta1
kind: HelmChartRepository
metadata:
  name: azure-sample-repo
spec:
  name: azure-sample-repo
  connectionConfig:
    url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs
EOF
```
1.  Navigate to  the **Developer Catalog** in the web console to verify that the Helm charts from the chart repository are displayed.

    For example, use the **Chart repositories** filter to search for a Helm chart from the repository.
    **Figure 1. Chart repositories filter**

    ![odc_helm_chart_repo_filter](/_assets/images/odc_helm_chart_repo_filter.png)

    :::note

    If a cluster administrator removes all of the chart repositories, then you cannot view the Helm option in the **+Add** view, **Developer Catalog**, and left navigation panel.
    
    :::