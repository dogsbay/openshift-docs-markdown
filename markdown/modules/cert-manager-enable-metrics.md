{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring metrics collection for {{ cert_manager_operator }} operands by using a ServiceMonitor {id="cert-manager-enable-metrics_{{ context }}"}

You can configure metrics collection for the {{ cert_manager_operator }} operands by creating a `ServiceMonitor` custom resource (CR). {._abstract}

The {{ cert_manager_operator }} operands expose metrics by default on port `9402` at the `/metrics` service endpoint. The `ServiceMonitor` CR enables Prometheus Operator to collect custom metrics. 

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the {{ cert_manager_operator }}.
*   You have enabled the user workload monitoring.

**Procedure**

1.  Create the `ServiceMonitor` CR:
    1.  Create the YAML file that defines the `ServiceMonitor` CR:
        ```yaml title="Example servicemonitor-cert-manager.yaml file"
        apiVersion: monitoring.coreos.com/v1
        kind: ServiceMonitor
        metadata:
          labels:
            app: cert-manager
            app.kubernetes.io/instance: cert-manager
            app.kubernetes.io/name: cert-manager
          name: cert-manager
          namespace: cert-manager
        spec:
          endpoints:
            - honorLabels: false
              interval: 60s
              path: /metrics
              scrapeTimeout: 30s
              targetPort: 9402
          selector:
            matchExpressions:
              - key: app.kubernetes.io/name
                operator: In
                values:
                  - cainjector
                  - cert-manager
                  - webhook
              - key: app.kubernetes.io/instance
                operator: In
                values:
                  - cert-manager
              - key: app.kubernetes.io/component
                operator: In
                values:
                  - cainjector
                  - controller
                  - webhook
        ```
    1.  Create the `ServiceMonitor` CR by running the following command:
        ```terminal
        $ oc apply -f servicemonitor-cert-manager.yaml
        ```

        After the `ServiceMonitor` CR is created, the user workload Prometheus instance begins metrics collection from the {{ cert_manager_operator }} operands. The collected metrics are labeled with `job="cert-manager"`,`job="cert-manager-cainjector"`, and `job="cert-manager-webhook"`.

**Verification**

1.  In the {{ product_title }} web console, navigate to **Observe** → **Targets**.
1.  In the **Label** filter field, enter the following labels to filter the metrics targets for each operand:
    ```terminal
    $ service=cert-manager
    ```
    ```terminal
    $ service=cert-manager-webhook
    ```
    ```terminal
    $ service=cert-manager-cainjector
    ```
1.  Confirm that the **Status** column shows `Up` for the `cert-manager`, `cert-manager-webhook`, and `cert-manager-cainjector` entries.