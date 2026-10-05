{%- set _mod_docs_content_type = "REFERENCE" %}
# Understanding the Prometheus trigger {id="nodes-cma-autoscaling-custom-trigger-prom_{{ context }}"}

You can scale pods based on Prometheus metrics, which can use the installed {{ product_title }} monitoring or an external Prometheus server as the metrics source.  {._abstract}

See "Configuring the custom metrics autoscaler to use {{ product_title }} monitoring" for information on the configurations required to use the {{ product_title }} monitoring as a source for metrics.


:::note

If Prometheus is collecting metrics from the application that the custom metrics autoscaler is scaling, do not set the minimum replicas to `0` in the custom resource. If there are no application pods, the custom metrics autoscaler does not have any metrics to scale on.

:::


```yaml title="Example scaled object with a Prometheus target"
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: prom-scaledobject
  namespace: my-namespace
spec:
# ...
  triggers:
  - type: prometheus
    metadata:
      serverAddress: https://thanos-querier.openshift-monitoring.svc.cluster.local:9092
      namespace: kedatest
      metricName: http_requests_total
      threshold: '5'
      query: sum(rate(http_requests_total{job="test-app"}[1m]))
      authModes: basic
      cortexOrgID: my-org
      ignoreNullValues: "false"
      unsafeSsl: "false"
      timeout: 1000
```
where:


`spec.triggers[].type`
:   Specifies Prometheus as the trigger type.

`spec.triggers[].metadata.serverAddress`
:   Specifies the address of the Prometheus server. This example uses  {{ product_title }} monitoring.

`spec.triggers[].metadata.namespace`
:   Specifies the namespace of the object you want to scale. This parameter is mandatory if using {{ product_title }} monitoring as a source for the metrics. This parameter is optional.

`spec.triggers[].metadata.metricName`
:   Specifies the name to identify the metric in the `external.metrics.k8s.io` API. If you are using more than one trigger, all metric names must be unique.

`spec.triggers[].metadata.threshold`
:   Specifies the value that triggers scaling. Must be specified as a quoted string value.

`spec.triggers[].metadata.query`
:   Specifies the Prometheus query to use.

`spec.triggers[].metadata.authModes`
:   Specifies the authentication method to use. Prometheus scalers support bearer authentication (`bearer`), basic authentication (`basic`), or TLS authentication (`tls`). You configure the specific authentication parameters in a trigger authentication, as discussed in a following section. As needed, you can also use a secret.

`spec.triggers[].metadata.cortexOrgID`
:   Specifies the `X-Scope-OrgID` header to pass to multi-tenant [Cortex](https://cortexmetrics.io/) or [Mimir](https://grafana.com/oss/mimir/) storage for Prometheus. This parameter is required only with multi-tenant Prometheus storage, to indicate which data Prometheus should return. This parameter is optional.

`spec.triggers[].metadata.ignoreNullValues`
:   Specifies how the trigger should proceed if the Prometheus target is lost. This parameter is optional.
    *   If `true`, the trigger continues to operate if the Prometheus target is lost. This is the default behavior.
    *   If `false`, the trigger returns an error if the Prometheus target is lost.

`spec.triggers[].metadata.unsafeSsl`
:   Specifies whether the certificate check should be skipped. For example, you might skip the check if you are running in a test environment and using self-signed certificates at the Prometheus endpoint. This parameter is optional.
    *   If `false`, the certificate check is performed. This is the default behavior.
    *   If `true`, the certificate check is not performed.

    :::important


    Skipping the check is not recommended.
    
    :::


`spec.triggers[].metadata.timeout`
:   Specifies an HTTP request timeout in milliseconds for the HTTP client used by this Prometheus trigger. This value overrides any global timeout setting. This parameter is optional.