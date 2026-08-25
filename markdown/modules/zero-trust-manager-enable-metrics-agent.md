{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring metrics collection for SPIRE Agent by using a Service Monitor {id="zero-trust-manager-enable-metrics-agent_{{ context }}"}

Configure metrics collection for the SPIRE Agent by creating a `ServiceMonitor` custom resource (CR). This enables the Prometheus Operator to collect custom metrics that the SPIRE Agent exposes on the default port. {._abstract}

The SPIRE Agent operand exposes metrics by default on port `9402` at the `/metrics` endpoint. You can configure metrics collection for the SPIRE Agent by creating a `ServiceMonitor` custom resource (CR), which enables the Prometheus Operator to collect custom metrics.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   You have installed the {{ zero_trust_full }}.
*   You have deployed the SPIRE Agent operand in the cluster.
*   You have enabled the user workload monitoring.

**Procedure**

1.  Create the `ServiceMonitor` CR:
    1.  Create the YAML file that defines the `ServiceMonitor` CR:
        ```yaml title="Example servicemonitor-spire-agent.yaml file"
        apiVersion: monitoring.coreos.com/v1
        kind: ServiceMonitor
        metadata:
          labels:
            app.kubernetes.io/name: agent
            app.kubernetes.io/instance: spire
          name: spire-agent-metrics
          namespace: zero-trust-workload-identity-manager
        spec:
          endpoints:
          - port: metrics
            interval: 30s
            path: /metrics
          selector:
            matchLabels:
              app.kubernetes.io/name: agent
              app.kubernetes.io/instance: spire
          namespaceSelector:
            matchNames:
            - zero-trust-workload-identity-manager
        ```
    1.  Create the `ServiceMonitor` CR by running the following command:
        ```terminal
        $ oc create -f servicemonitor-spire-agent.yaml
        ```

        After the `ServiceMonitor` CR is created, the user workload Prometheus instance begins metrics collection from the SPIRE Agent. The collected metrics are labeled with `job="spire-agent"`.

**Verification**

1.  In the {{ product_title }} web console, navigate to **Observe** → **Targets**.
1.  In the **Label** filter field, enter the following label to filter the metrics targets:
    ```terminal
    $ service=spire-agent
    ```
1.  Confirm that the **Status** column shows `Up` for the `spire-agent-metrics` entry.