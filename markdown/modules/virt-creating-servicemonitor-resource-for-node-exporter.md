{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a ServiceMonitor resource for the node exporter service {id="virt-creating-servicemonitor-resource-for-node-exporter_{{ context }}"}

You can use a Prometheus client library and scrape metrics from the `/metrics` endpoint to access and view the metrics exposed by the node-exporter service. Use a `ServiceMonitor` custom resource definition (CRD) to monitor the node exporter service. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with `cluster-admin` privileges or the `monitoring-edit` role.
*   You have enabled monitoring for the user-defined project by configuring the node-exporter service.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a YAML file for the `ServiceMonitor` resource configuration. In this example, the service monitor matches any service with the label `metrics` and queries the `exmet` port every 30 seconds.

    ```yaml
    apiVersion: monitoring.coreos.com/v1
    kind: ServiceMonitor
    metadata:
      labels:
        k8s-app: node-exporter-metrics-monitor
      name: node-exporter-metrics-monitor
      namespace: dynamation
    spec:
      endpoints:
      - interval: 30s
        port: exmet
        scheme: http
      selector:
        matchLabels:
          servicetype: metrics

    ```
    *   `metadata.name` defines the name of the `ServiceMonitor`.
    *   `metadata.namespace` defines the namespace where the `ServiceMonitor` is created.
    *   `spec.endpoints.interval` defines the interval at which the port will be queried.
    *   `spec.endpoints.port` defines the name of the port that is queried every 30 seconds
1.  Create the `ServiceMonitor` configuration for the node-exporter service.
    ```terminal
    $ oc create -f node-exporter-metrics-monitor.yaml
    ```