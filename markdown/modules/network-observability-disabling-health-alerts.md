{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling health alerts {id="network-observability-disable-alerts_{{ context }}"}

Disable specific health alerts, such as `NetObservLokiError` or `NetObservNoFlows`, by editing the `FlowCollector` resource and using the `spec.processor.metrics.disableAlerts` specification. {._abstract}

**Procedure**

1.  In the web console, navigate to **Ecosystem** -> **Installed Operators**.
1.  Under the **Provided APIs** heading for the **NetObserv Operator**, select **Flow Collector**.
1.  Select **cluster** then select the **YAML** tab.
1.  Add `spec.processor.metrics.disableAlerts` to disable health alerts, as in the following YAML sample:
    ```yaml
    apiVersion: flows.netobserv.io/v1beta2
    kind: FlowCollector
    metadata:
      name: cluster
    spec:
      processor:
        metrics:
          disableAlerts: [NetObservLokiError, NetObservNoFlows]
    ```

    where:

    `spec.processor.metrics.disableAlerts`
    :   Specifies one or more types of alerts to disable.