{%- set _mod_docs_content_type = "SNIPPET" %}

```yaml title="Example OpenTelemetryCollector CR"
apiVersion: opentelemetry.io/v1beta1
kind: OpenTelemetryCollector
metadata:
  name: otel
  namespace: <permitted_project_of_opentelemetry_collector_instance> # (1)
spec:
  mode: <deployment_mode> # (2)
  config:
    receivers: # (3)
      otlp:
        protocols:
          grpc:
          http:
      jaeger:
        protocols:
          grpc: {}
          thrift_binary: {}
          thrift_compact: {}
          thrift_http: {}
      zipkin: {}
    processors: # (4)
      batch: {}
      memory_limiter:
        check_interval: 1s
        limit_percentage: 50
        spike_limit_percentage: 30
    exporters: # (5)
      debug: {}
    service:
      pipelines:
        traces:
          receivers: [otlp,jaeger,zipkin]
          processors: [memory_limiter,batch]
          exporters: [debug]
```
1.  The project that you have chosen for the `OpenTelemetryCollector` deployment. Project names beginning with the `openshift-` prefix are not permitted.
1.  The deployment mode with the following supported values: the default `deployment`, `daemonset`, `statefulset`, or `sidecar`. For details, see _Deployment Modes_.
1.  For details, see _Receivers_.
1.  For details, see _Processors_.
1.  For details, see _Exporters_.