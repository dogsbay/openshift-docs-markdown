{%- set _mod_docs_content_type = "PROCEDURE" %}
# Understanding the Prometheus trigger {id="nodes-cma-autoscaling-custom-trigger-prom_{{ context }}"}

You can scale pods based on Prometheus metrics, which can use the installed {{ product_title }} monitoring or an external Prometheus server as the metrics source. See "Configuring the custom metrics autoscaler to use {{ product_title }} monitoring" for information on the configurations required to use the {{ product_title }} monitoring as a source for metrics.


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
  - type: prometheus (1)
    metadata:
      serverAddress: https://thanos-querier.openshift-monitoring.svc.cluster.local:9092 (2)
      namespace: kedatest (3)
      metricName: http_requests_total (4)
      threshold: '5' (5)
      query: sum(rate(http_requests_total{job="test-app"}[1m])) (6)
      authModes: basic (7)
      cortexOrgID: my-org (8)
      ignoreNullValues: "false" (9)
      unsafeSsl: "false" (10)
      timeout: 1000 (11)
```
1.  Specifies Prometheus as the trigger type.
1.  Specifies the address of the Prometheus server. This example uses  {{ product_title }} monitoring.
1.  Optional: Specifies the namespace of the object you want to scale. This parameter is mandatory if using {{ product_title }} monitoring as a source for the metrics.
1.  Specifies the name to identify the metric in the `external.metrics.k8s.io` API. If you are using more than one trigger, all metric names must be unique.
1.  Specifies the value that triggers scaling. Must be specified as a quoted string value.
1.  Specifies the Prometheus query to use.
1.  Specifies the authentication method to use. Prometheus scalers support bearer authentication (`bearer`), basic authentication (`basic`), or TLS authentication (`tls`). You configure the specific authentication parameters in a trigger authentication, as discussed in a following section. As needed, you can also use a secret.
1.  Optional: Passes the `X-Scope-OrgID` header to multi-tenant [Cortex](https://cortexmetrics.io/) or [Mimir](https://grafana.com/oss/mimir/) storage for Prometheus. This parameter is required only with multi-tenant Prometheus storage, to indicate which data Prometheus should return.
1.  Optional: Specifies how the trigger should proceed if the Prometheus target is lost.
    *   If `true`, the trigger continues to operate if the Prometheus target is lost. This is the default behavior.
    *   If `false`, the trigger returns an error if the Prometheus target is lost.
1.  Optional: Specifies whether the certificate check should be skipped. For example, you might skip the check if you are running in a test environment and using self-signed certificates at the Prometheus endpoint.
    *   If `false`, the certificate check is performed. This is the default behavior.
    *   If `true`, the certificate check is not performed.

        :::important

        Skipping the check is not recommended.
        
        :::

1.  Optional: Specifies an HTTP request timeout in milliseconds for the HTTP client used by this Prometheus trigger. This value overrides any global timeout setting.