{%- set _mod_docs_content_type = "CONCEPT" %}
# Disabling the service monitor {id="op-disabling-the-service-monitor_{{ context }}"}

You can disable the service monitor, which is part of {{ pipelines_shortname }}, to expose the telemetry data. To disable the service monitor, set the `enableMetrics` parameter to `false` in the `.spec.pipeline` specification of the `TektonConfig` custom resource (CR):

```yaml title="Example"
apiVersion: operator.tekton.dev/v1alpha1
kind: TektonConfig
metadata:
  name: config
spec:
  pipeline:
    params:
       - name: enableMetrics
         value: 'false'
```