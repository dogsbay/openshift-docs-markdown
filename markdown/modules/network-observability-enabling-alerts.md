{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling Technology Preview alerts in network observability {id="network-observability-enabling-alerts_{{ context }}"}

Network Observability Operator alerts are a Technology Preview feature. To use this feature, you must enable it in the `FlowCollector` custom resource (CR), and then continue with configuring alerts to your specific needs. {._abstract}

**Procedure**

1.  Edit the `FlowCollector` CR to set the experimental alerts flag to `true`:

```yaml
apiVersion: flows.netobserv.io/v1beta1
kind: FlowCollector
metadata:
  name: flow-collector
spec:
  processor:
    advanced:
      env:
        EXPERIMENTAL_ALERTS_HEALTH: "true"
```

    You can still use the existing method for creating alerts. For more information, see "Creating alerts".