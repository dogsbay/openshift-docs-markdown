{%- set _mod_docs_content_type = "PROCEDURE" %}
# Querying control plane metrics in hosted clusters by using the web console {id="hcp-cp-query-metrics-console_{{ context }}"}

After you enable metrics forwarding, you can verify that control plane metrics are ingested and query them from the web console. {._abstract}

Use the same PromQL patterns as standalone {{ product_title }} clusters because the metrics-proxy injects compatible labels.

**Prerequisites**

*   Metrics forwarding is enabled on the `HostedCluster` resource. For enablement steps, see "Enabling metrics forwarding".
*   You have `cluster-admin` access to the hosted cluster.
*   At least two minutes have elapsed since you enabled forwarding so Prometheus can complete initial scrapes.

**Procedure**

1.  Log in to the {{ product_title }} web console for the hosted cluster.
1.  Click **Observe** → **Metrics**.
1.  In the query field, enter a PromQL expression and run the query.

    Use the following examples:
    ```text title="Operator health"
    csv_succeeded{job="olm-operator-metrics"} == 0
    ```

    This query lists CSVs that are not in the `Succeeded` state.
    ```text title="API server request rate"
    sum(rate(apiserver_request_total{job="apiserver"}[5m])) by (verb, code)
    ```
    ```text title="Scheduler activity"
    sum(rate(scheduler_schedule_attempts_total[5m])) by (result)
    ```

    This query is available on {{ product_title }} 4.22 and later with metrics forwarding enabled.
    ```text title="Workload-oriented API saturation"
    apiserver_current_inflight_requests{job="apiserver"}
    ```
    ```text title="Scheduling backlog"
    scheduler_pending_pods
    ```
    ```text title="Controller workqueue depth"
    workqueue_depth{job="kube-controller-manager"}
    ```

    For `csv_succeeded` and other OLM metrics, see "Exposed metrics".

**Verification**

*   Prometheus targets for `control-plane-metrics-forwarder` scrape pools report the `health: up` status.
*   PromQL queries for `apiserver_request_total{job="apiserver"}` return nonzero results.
*   Example queries in the web console return time series for enabled components.