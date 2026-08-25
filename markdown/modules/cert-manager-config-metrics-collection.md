{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring metrics collection for the istio-csr operand {id="cert-manager-config-metrics-collection_{{ context }}"}

The `istio-csr` operand exposes metrics by default on port `9402` at the `/metrics` service endpoint. You can configure metrics collection for the operand by creating a `ServiceMonitor` custom resource (CR), which enables the Prometheus Operator to collect custom metrics. For more information, see "Configuring user workload monitoring". {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have installed the {{ cert_manager_operator }}.
*   You have enabled user workload monitoring.

**Procedure**

1.  Create the `ServiceMonitor` CR definition file:
    ```yaml title="Example servicemonitor-istio-csr.yaml file"
    apiVersion: monitoring.coreos.com/v1
    kind: ServiceMonitor
    metadata:
      labels:
        app: cert-manager-istio-csr
        app.kubernetes.io/instance: cert-manager-istio-csr
        app.kubernetes.io/name: cert-manager-istio-csr
      name: cert-manager-istio-csr
      namespace: <istio_csr_project_name>
    spec:
      endpoints:
        - honorLabels: false
          interval: 60s
          path: /metrics
          scrapeTimeout: 30s
          targetPort: 9402
      namespaceSelector:
        matchNames:
          - <istio_csr_project_name>
      selector:
        matchLabels:
          app: cert-manager-istio-csr
          app.kubernetes.io/instance: cert-manager-istio-csr
          app.kubernetes.io/name: cert-manager-istio-csr
    ```

    Replace `<istio_csr_project_name>` with the namespace where you created the `IstioCSR` CR.
1.  Create the `ServiceMonitor` CR by running the following command:
    ```terminal
    $ oc apply -f servicemonitor-istio-csr.yaml
    ```

    After the `ServiceMonitor` CR is created, the user workload Prometheus instance starts collecting metrics from the istio-csr operand. The collected metrics are labeled with `job="cert-manager-istio-csr"`.

**Verification**

1.  Log in to the {{ product_title }} web console.
1.  Click **Observe** -> **Targets**.
1.  In the ***Label filter*** field, enter the `service=cert-manager-istio-csr` label to filter the metrics targets.
1.  Confirm that the **Status** column shows **Up** for the `cert-manager-istio-csr` target.