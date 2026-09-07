{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure the DTS ServiceMonitor {id="nw-dpf-configuring-dts-servicemonitor_{{ context }}"}

Create a `ServiceMonitor` resource to instruct the user workload monitoring Prometheus instance to scrape the DTS metrics endpoint. {._abstract}

**Prerequisites**

*   User workload monitoring is enabled in {{ product_title }}.
*   The DTS `DPUServiceConfiguration` and `DPUDeployment` resources are applied.

    For details, see "DPU telemetry observability with DTS".
*   You have access to the management cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Create a file named `dts-servicemonitor.yaml` with the following content:
    ```yaml
    apiVersion: monitoring.coreos.com/v1
    kind: ServiceMonitor
    metadata:
      name: doca-telemetry-service-monitor
      namespace: dpf-operator-system
    spec:
      selector:
        matchExpressions:
          - key: dpu.nvidia.com/dpuservice-name
            operator: Exists
      endpoints:
        - port: httpserverport
          interval: 30s
          path: /metrics
          relabelings:
            - sourceLabels:
                - __meta_kubernetes_service_label_dpu_nvidia_com_dpuservice_name
              regex: doca-telemetry-service.*
              action: keep
      namespaceSelector:
        matchNames:
          - dpf-operator-system
    ```
1.  Apply the `ServiceMonitor`:
    ```terminal
    $ oc apply -f dts-servicemonitor.yaml
    ```

**Verification**

*   Verify that the `ServiceMonitor` is created in the `dpf-operator-system` namespace:
    ```terminal
    $ oc -n dpf-operator-system get servicemonitor doca-telemetry-service-monitor
    ```
    ```terminal title="Example output"
    NAME                               AGE
    doca-telemetry-service-monitor     ...
    ```