{%- set _mod_docs_content_type = "PROCEDURE" %}
# Querying control plane metrics in hosted clusters by using the CLI {id="hcp-cp-query-metrics_{{ context }}"}

After you enable metrics forwarding, you can verify that control plane metrics are ingested and query them from the CLI. {._abstract}

Use the same PromQL patterns as standalone {{ product_title }} clusters because the metrics-proxy injects compatible labels.

**Prerequisites**

*   Metrics forwarding is enabled on the `HostedCluster` resource. For enablement steps, see "Enabling metrics forwarding".
*   You have `cluster-admin` access to the hosted cluster.
*   At least two minutes have elapsed since you enabled forwarding so Prometheus can complete initial scrapes.

**Procedure**

1.  Verify that the `control-plane-metrics-forwarder` deployment exists in the `openshift-monitoring` namespace:
    ```terminal
    $ oc get deployment control-plane-metrics-forwarder -n openshift-monitoring
    ```

    :::note

    Control plane metrics are available when the Cluster Monitoring Operator and platform Prometheus are running, even if no compute nodes are scheduled. Data-plane node and workload metrics still require compute nodes.
    
    :::

1.  Verify that the `control-plane-metrics-forwarder` `PodMonitor` exists:
    ```terminal
    $ oc get podmonitor control-plane-metrics-forwarder -n openshift-monitoring
    ```
1.  Optional: Verify that management-cluster components are running by logging in to the management cluster:
    1.  Enter the following command:
        ```terminal
        $ oc get deployment endpoint-resolver metrics-proxy -n <hcp_namespace>
        ```

        Replace `<hcp_namespace>` with the namespace for your hosted cluster. Typically, the format of the namespace is `<hosted_cluster_namespace>-<hosted_cluster_name>`.
    1.  Enter the following command:
        ```terminal
        $ oc get route metrics-proxy -n <hcp_namespace>
        ```
1.  Verify that Prometheus scraped targets for the forwarder report:
    ```terminal
    $ oc exec -n openshift-monitoring prometheus-k8s-0 -c prometheus -- \
      curl -s http://localhost:9090/api/v1/targets \
      | jq '.data.activeTargets[] | select(.scrapePool | contains("control-plane-metrics-forwarder")) | {scrapePool, scrapeUrl: .scrapeUrl, health}'
    ```

    You should see one target per forwarded component with the status of `"health": "up"`.
1.  Confirm that Kubernetes API server metrics are ingested by querying `apiserver_request_total`:
    ```terminal
    $ oc exec -n openshift-monitoring prometheus-k8s-0 -c prometheus -- \
      curl -gs 'http://localhost:9090/api/v1/query?query=apiserver_request_total{job="apiserver"}' \
      | jq '.data.result | length'
    ```

    A nonzero result confirms that API server metrics are available in the guest cluster monitoring stack.