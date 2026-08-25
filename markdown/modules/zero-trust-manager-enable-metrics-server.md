{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring metrics collection for SPIRE Server by using a ServiceMonitor {id="zero-trust-manager-enable-metrics-server_{{ context }}"}

To collect custom metrics from the SPIRE Server, create a ServiceMonitor custom resource (CR). This configuration enables the Prometheus Operator to scrape metrics from the default endpoint, which helps you monitor your SPIRE deployment. {._abstract}

The SPIRE Server operand exposes metrics by default on port `9402` at the `/metrics` endpoint. You can configure metrics collection for the SPIRE Server by creating a `ServiceMonitor` custom resource (CR) that enables the Prometheus Operator to collect custom metrics.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have installed the {{ zero_trust_full }}.
*   You have deployed the SPIRE Server operand in the cluster.
*   You have enabled the user workload monitoring.

**Procedure**

1.  Create the `ServiceMonitor` CR:
    1.  Create the YAML file that defines the `ServiceMonitor` CR:
        ```yaml title="Example servicemonitor-spire-server file"
        apiVersion: monitoring.coreos.com/v1
        kind: ServiceMonitor
        metadata:
        labels:
          app.kubernetes.io/name: server
          app.kubernetes.io/instance: spire
        name: spire-server-metrics
        namespace: zero-trust-workload-identity-manager
        spec:
        endpoints:
        - port: metrics
          interval: 30s
          path: /metrics
        selector:
          matchLabels:
            app.kubernetes.io/name: server
            app.kubernetes.io/instance: spire
        namespaceSelector:
          matchNames:
          - zero-trust-workload-identity-manager
        ```
    1.  Create the `ServiceMonitor` CR by running the following command:
        ```terminal
        $ oc create -f servicemonitor-spire-server.yaml
        ```

        After the `ServiceMonitor` CR is created, the user workload Prometheus instance begins metrics collection from the SPIRE Server. The collected metrics are labeled with `job="spire-server"`.

**Verification**

1.  In the {{ product_title }} web console, navigate to **Observe** → **Targets**.
1.  In the **Label** filter field, enter the following label to filter the metrics targets:
    ```terminal
    $ service=zero-trust-workload-identity-manager-metrics-service
    ```
1.  Confirm that the **Status** column shows `Up` for the `spire-server-metrics` entry.