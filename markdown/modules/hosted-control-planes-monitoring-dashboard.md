{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling monitoring dashboards in a hosted cluster {id="hosted-control-planes-monitoring-dashboard_{{ context }}"}

You can enable monitoring dashboards in a hosted cluster by creating a config map. {._abstract}

**Procedure**

1.  Create the `hypershift-operator-install-flags` config map in the `local-cluster` namespace. See the following example configuration:
    ```yaml
    kind: ConfigMap
    apiVersion: v1
    metadata:
      name: hypershift-operator-install-flags
      namespace: local-cluster
    data:
      installFlagsToAdd: "--monitoring-dashboards --metrics-set=All"
      installFlagsToRemove: ""
    ```

    The `--monitoring-dashboards --metrics-set=All` flag adds the monitoring dashboard for all metrics.
1.  Wait a couple of minutes for the HyperShift Operator deployment in the `hypershift` namespace to be updated to include the following environment variable:
    ```yaml
        - name: MONITORING_DASHBOARDS
          value: "1"
    ```

    When monitoring dashboards are enabled, for each hosted cluster that the HyperShift Operator manages, the Operator creates a config map named `hc-<hosted_cluster_namespace>-<hosted_cluster_name>` in the `openshift-config-managed` namespace, where `<hosted_cluster_namespace>` is the namespace of the hosted cluster and `<hosted_cluster_name>` is the name of the hosted cluster. As a result, a new dashboard is added in the administrative console of the management cluster.
1.  To view the dashboard, log in to the management cluster’s console and go to the dashboard for the hosted cluster by clicking **Observe -> Dashboards**.
1.  Optional: To disable monitoring dashboards in a hosted cluster, remove the `--monitoring-dashboards --metrics-set=All` flag from the `hypershift-operator-install-flags` config map. When you delete a hosted cluster, its corresponding dashboard is also deleted.