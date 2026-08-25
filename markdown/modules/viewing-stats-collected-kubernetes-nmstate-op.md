{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing metrics collected by the Kubernetes NMState Operator {id="viewing-stats-collected-kubernetes-nmstate-op_{{ context }}"}

The Kubernetes NMState Operator, `kubernetes-nmstate-operator`, can collect metrics from the Kubernetes components and expose them as ready-to-use metrics. {._abstract}

The Kubernetes NMState Operator can collect metrics from the following Kubernetes components:

*   `kubernetes_nmstate_features_applied`, which tracks what NMState features are enabled and successfully applied to the cluster. 
*   `kubernetes_nmstate_policies_status`, which tracks the active status of `NodeNetworkConfigurationPolicy` (NNCP) resources across the cluster.
*   `kubernetes_nmstate_enactments_status`, which tracks the active status of `NodeNetworkConfigurationEnactment` (NNCE) resources on a per-node basis.

As a use case for viewing metrics, consider a situation where you created a `NodeNetworkConfigurationPolicy` custom resource (CR) and you want to confirm that the policy is active.


:::note

The `kubernetes_nmstate_features_applied` metrics are not an API and might change between {{ product_title }} versions.

:::


In the web console, the Metrics UI includes some predefined CPU, memory, bandwidth, and network packet queries for the selected project. You can run custom Prometheus Query Language (PromQL) queries for CPU, memory, bandwidth, network packet and application metrics for the project.

The following example demonstrates a `NodeNetworkConfigurationPolicy` manifest example that is applied to an {{ product_title }} cluster:

```yaml
# ...
interfaces:
  - name: br1
    type: linux-bridge
    state: up
    ipv4:
      enabled: true
      dhcp: true
      dhcp-custom-hostname: foo
    bridge:
      options:
        stp:
          enabled: false
      port: []
# ...
```

The `NodeNetworkConfigurationPolicy` manifest exposes metrics and makes them available to the Cluster Monitoring Operator (CMO). The following example shows some exposed metrics:

```terminal
controller_runtime_reconcile_time_seconds_bucket{controller="nodenetworkconfigurationenactment",le="0.005"} 16
controller_runtime_reconcile_time_seconds_bucket{controller="nodenetworkconfigurationenactment",le="0.01"} 16
controller_runtime_reconcile_time_seconds_bucket{controller="nodenetworkconfigurationenactment",le="0.025"} 16
...
# HELP kubernetes_nmstate_features_applied Number of nmstate features applied labeled by its name
# TYPE kubernetes_nmstate_features_applied gauge
kubernetes_nmstate_features_applied{name="dhcpv4-custom-hostname"} 1
```

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in to the web console as the administrator and installed the Kubernetes NMState Operator.
*   You have access to the cluster as a developer or as a user with view permissions for the project that you are viewing metrics for.
*   You have enabled monitoring for user-defined projects.
*   You have deployed a service in a user-defined project.
*   You have created a `NodeNetworkConfigurationPolicy` manifest and applied it to your cluster.

{% include "./snippets/snip-unified-perspective-web-console.md" %}

**Procedure**

1.  If you want to view the metrics from the **Developer** perspective in the {{ product_title }} web console, complete the following tasks:
    1.  Click **Observe**.
    1.  To view the metrics of a specific project, select the project in the **Project:** list. For example, `openshift-nmstate`.
    1.  Click the **Metrics** tab.
    1.  To visualize the metrics on the plot, select a query from the **Select query** list or create a custom PromQL query based on the selected query by selecting **Show PromQL**.

        :::note

        You can only run one query at a time with the developer role.
        
        :::

1.  If you want to view the metrics in the {{ product_title }} web console as an administrator, complete the following tasks:
    1.  Click **Observe** → **Metrics**.
    1.  Enter `kubernetes_nmstate_features_applied` in the **Expression** field.
    1.  Click **Add query** and then **Run queries**.
1.  To explore the visualized metrics, do any of the following tasks:
    1.  To zoom into the plot and change the time range, do any of the following tasks:
        *   To visually select the time range, click and drag on the plot horizontally.
        *   To select the time range, use the menu which is in the upper left of the console.
    1.  To reset the time range, select **Reset zoom**.
    1.  To display the output for all the queries at a specific point in time, hold the mouse cursor on the plot at that point. The query output displays in a pop-up box.