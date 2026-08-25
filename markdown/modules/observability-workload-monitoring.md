{%- set _mod_docs_content_type = "PROCEDURE" %}
# Workload monitoring {id="observability-workload-monitoring_{{ context }}"}

By default, {{ product_title }} does not collect metrics for application workloads. You can configure a cluster to collect workload metrics and create alerts for user workloads. {._abstract}

**Prerequisites**

*   You have defined endpoints to gather workload metrics on the cluster.

**Procedure**

1.  Create a `ConfigMap` CR and save it as `monitoringConfigMap.yaml`, as in the following example:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: cluster-monitoring-config
      namespace: openshift-monitoring
    data:
      config.yaml: |
        enableUserWorkload: true
    ```

    Set `enableUserWorkload` to `true` to enable workload monitoring.
1.  Apply the `ConfigMap` CR by running the following command:
    ```terminal
    $ oc apply -f monitoringConfigMap.yaml
    ```
1.  Create a `ServiceMonitor` CR, and save it as `monitoringServiceMonitor.yaml`, as in the following example:
    ```yaml
    apiVersion: monitoring.coreos.com/v1
    kind: ServiceMonitor
    metadata:
      labels:
        app: ui
      name: myapp
      namespace: myns
    spec:
      endpoints:
      - interval: 30s
        port: ui-http
        scheme: http
        path: /healthz
      selector:
        matchLabels:
          app: ui
    ```
    *   `endpoints` specifies the workload metrics endpoints to scrape.
    *   `path` specifies a custom scrape path. Prometheus scrapes the `/metrics` path by default.
1.  Apply the `ServiceMonitor` CR by running the following command:
    ```terminal
    $ oc apply -f monitoringServiceMonitor.yaml
    ```

    The vendor of the application must decide whether to expose the endpoint for scraping, with metrics that they deem relevant.
1.  To enable alerts for user workloads, verify that the `cluster-monitoring-config` ConfigMap has `enableUserWorkload: true` set. If you completed step 1, this is already configured.
1.  Create a YAML file for alerting rules and save it as `monitoringAlertRule.yaml`, as in the following example:
    ```yaml
    apiVersion: monitoring.coreos.com/v1
    kind: PrometheusRule
    metadata:
      name: myapp-alert
      namespace: myns
    spec:
      groups:
      - name: example
        rules:
        - alert: InternalErrorsAlert
          expr: flask_http_request_total{status="500"} > 0
    # ...
    ```
1.  Apply the alert rule by running the following command:
    ```terminal
    $ oc apply -f monitoringAlertRule.yaml
    ```