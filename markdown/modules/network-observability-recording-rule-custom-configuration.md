{%- set _mod_docs_content_type = "PROCEDURE" %}
# Optimizing dashboard metrics with recording rules {id="network-observability-configuring-custom-recording-rules_{{ context }}"}

Create custom recording rules to pre-compute metrics for the **Network Health** dashboard. Recording rules require specific annotations and labels to integrate with the Network Observability Operator. {._abstract}

**Prerequisites**

*   Access to the cluster with `cluster-admin` privileges.
*   The Network Observability Operator is installed.
*   {{ product_title }} 4.16 or later is installed.
*   Familiarity with PromQL.


:::important

Custom `PrometheusRule` resources are not owned by the `FlowCollector` resource. Custom rules created in the `netobserv` namespace might be deleted if the Network Observability Operator is uninstalled. To prevent data loss, create custom rules in a different namespace, such as `openshift-monitoring`, and maintain a backup in version control.

:::


**Procedure**

1.  Define a `PrometheusRule` resource in a YAML file, such as `custom-recording-rule.yaml`, ensuring the `netobserv: "true"` label and `netobserv.io/network-health` annotation are included:
    ```yaml
    apiVersion: monitoring.coreos.com/v1
    kind: PrometheusRule
    metadata:
      name: my-recording-rules
      namespace: openshift-monitoring
      labels:
        netobserv: "true"
      annotations:
        netobserv.io/network-health: |
          {
            "my_metric_per_namespace": {
              "summary": "Custom metric is {{ $value }} in the namespace {{ $labels.namespace }}",
              "description": "Custom metric is {{ $value }} in the namespace {{ $labels.namespace }}",
              "netobserv_io_network_health": "{\"unit\":\"%\",\"upperBound\":\"100\",\"namespaceLabels\":[\"namespace\"],\"recordingThresholds\":{\"info\":\"10\",\"warning\":\"25\",\"critical\":\"50\"}}"
            }
          }
    spec:
      groups:
        - name: MyRecordingRules
          interval: 30s
          rules:
            - record: my_metric_per_namespace
              expr: (count by (namespace) (kube_pod_info) * 0 + 20)
              labels:
                netobserv: "true"
    ```
1.  Apply the custom recording rule by running the following command:
    ```terminal
    $ oc apply -f custom-recording-rule.yaml
    ```

**Verification**

1.  Confirm the `PrometheusRule` resource exists by running the following command:
    ```terminal
    $ oc get prometheusrules my-recording-rules -n openshift-monitoring -o yaml
    ```
1.  Confirm the recording rule appears in the {{ product_title }} web console by navigating to **Observe** → **Network Health**.