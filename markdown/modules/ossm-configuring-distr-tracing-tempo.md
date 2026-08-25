{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the {{ TempoName }} and the {{ OTELName }} {id="ossm-configuring-distr-tracing-tempo_{{ context }}"}

You can expose tracing data to the {{ TempoName }} by appending a named element and the `opentelemetry` provider to the `spec.meshConfig.extensionProviders` specification in the `ServiceMeshControlPlane`. Then, a telemetry custom resource configures Istio proxies to collect trace spans and send them to the OpenTelemetry Collector endpoint.

You can create a {{ OTELName }} instance in a mesh namespace and configure it to send tracing data to a tracing platform backend service.

**Prerequisites**

*   You created a TempoStack instance using the Red Hat {{ TempoOperator }} in the `tracing-system` namespace. For more information, see "Installing {{ TempoName }}".
*   You installed the {{ OTELOperator }} in either the recommended namespace or the `openshift-operators` namespace. For more information, see "Installing the {{ OTELName }}".
*   If using {{ SMProductName }} 2.5 or earlier, set the `spec.tracing.type` parameter of the `ServiceMeshControlPlane` resource to `None` so tracing data can be sent to the OpenTelemetry Collector.

**Procedure**

1.  Create an OpenTelemetry Collector instance in a mesh namespace. This example uses the `bookinfo` namespace:
    ```yaml title="Example OpenTelemetry Collector configuration"
    apiVersion: opentelemetry.io/v1alpha1
    kind: OpenTelemetryCollector
    metadata:
      name: otel
      namespace: bookinfo  (1)
    spec:
      mode: deployment
      config: |
        receivers:
          otlp:
            protocols:
              grpc:
                endpoint: 0.0.0.0:4317
        exporters:
          otlp:
            endpoint: "tempo-sample-distributor.tracing-system.svc.cluster.local:4317" (2)
            tls:
              insecure: true
        service:
          pipelines:
            traces:
              receivers: [otlp]
              processors: []
              exporters: [otlp]
    ```
    1.  Include the namespace in the `ServiceMeshMemberRoll` member list.
    1.  In this example, a TempoStack instance is running in the `tracing-system` namespace. You do not have to include the TempoStack namespace, such as`tracing-system`, in the `ServiceMeshMemberRoll` member list.

    :::note

    *   Create a single  instance of the OpenTelemetry Collector in one of the `ServiceMeshMemberRoll` member namespaces.
    *   You can add an `otel-collector` as a part of the mesh by adding `sidecar.istio.io/inject: 'true'` to the `OpenTelemetryCollector` resource.
    
    :::

1.  Check the `otel-collector` pod log and verify that the pod is running:
    ```terminal title="Example otel-collector pod log check"
    $ oc logs -n bookinfo  -l app.kubernetes.io/name=otel-collector
    ```
1.  Create or update an existing `ServiceMeshControlPlane` custom resource (CR) in the `istio-system` namespace:
    ```yaml title="Example SMCP custom resource"
    kind: ServiceMeshControlPlane
    apiVersion: maistra.io/v2
    metadata:
      name: basic
      namespace: istio-system
    spec:
      addons:
        grafana:
          enabled: false
        kiali:
          enabled: true
        prometheus:
          enabled: true
      meshConfig:
        extensionProviders:
          - name: otel
            opentelemetry:
              port: 4317
              service: otel-collector.bookinfo.svc.cluster.local
      policy:
        type: Istiod
      telemetry:
        type: Istiod
      version: v2.6
    ```

    :::note

    When upgrading from SMCP 2.5 to 2.6, set the `spec.tracing.type` parameter to `None`:

    ```yaml title="Example SMCP spec.tracing.type parameter"
    spec:
      tracing:
        type: None
    ```
    
    :::

1.  Create a Telemetry resource in the `istio-system` namespace:
    ```yaml title="Example Telemetry resource"
    apiVersion: telemetry.istio.io/v1alpha1
    kind: Telemetry
    metadata:
      name: mesh-default
      namespace: istio-system
    spec:
      tracing:
      - providers:
        - name: otel
        randomSamplingPercentage: 100
    ```
1.  Verify the `istiod` log.
1.  Configure the Kiali resource specification to enable a Kiali workload traces dashboard. You can use the dashboard to view tracing query results.
    ```yaml title="Example Kiali resource"
    apiVersion: kiali.io/v1alpha1
    kind: Kiali
    # ...
    spec:
      external_services:
        tracing:
          query_timeout: 30 (1)
          enabled: true
          in_cluster_url: 'http://tempo-sample-query-frontend.tracing-system.svc.cluster.local:16685'
          url: '[Tempo query frontend Route url]'
          use_grpc: true (2)
    ```
    1.  The default `query_timeout` integer value is 30 seconds. If you set the value to greater than 30 seconds, you must update `.spec.server.write_timeout` in the Kiali CR and add the annotation `haproxy.router.openshift.io/timeout=50s` to the Kiali route. Both `.spec.server.write_timeout` and `haproxy.router.openshift.io/timeout=` must be greater than `query_timeout`.
    1.  If you are not using the default HTTP or gRPC port, replace the `in_cluster_url:` port with your custom port.

    :::note

    Kiali 1.73 uses the Jaeger Query API, which causes a longer response time depending on Tempo resource limits. If you see a `Could not fetch spans` error message in the Kiali UI, then check your Tempo configuration or reduce the limit per query in Kiali.
    
    :::

1.  Send requests to your application.
1.  Verify the `istiod` pod logs and the `otel-collector` pod logs.

## Configuring the `OpenTelemetryCollector` in a mTLS encrypted Service Mesh member namespace {id="configuring-otel-collector-mtls-encrypted-namespace_{{ context }}"}

All traffic is TLS encrypted when you enable Service Mesh `dataPlane` mTLS encryption.

To enable the mesh to communicate with the `OpenTelemetryCollector` service, disable the TLS `trafficPolicy` by applying a `DestinationRule` for the `OpenTelemetryCollector` service:

```yaml title="Example DestinationRule Tempo CR"
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: otel-disable-tls
spec:
  host: "otel-collector.bookinfo.svc.cluster.local"
  trafficPolicy:
    tls:
      mode: DISABLE
```

## Configuring the {{ TempoName }} in a mTLS encrypted Service Mesh member namespace {id="configuring-distr-tracing-tempo-mtls-encrypted-namespace_{{ context }}"}


:::note

You don’t need this additional `DestinationRule` configuration if you created a TempoStack instance in a namespace that is not a Service Mesh member namespace.

:::


All traffic is TLS encrypted when you enable Service Mesh `dataPlane` mTLS encryption and you create a TempoStack instance in a Service Mesh member namespace such as `tracing-system-mtls`. This encryption is not expected from the Tempo distributed service and returns a TLS error.

To fix the TLS error, disable the TLS `trafficPolicy` by applying a `DestinationRule` for Tempo and Kiali:

```yaml title="Example DestinationRule Tempo"
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: tempo
  namespace: tracing-system-mtls
spec:
  host: "*.tracing-system-mtls.svc.cluster.local"
  trafficPolicy:
    tls:
      mode: DISABLE
```

```yaml title="Example DestinationRule Kiali"
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: kiali
  namespace: istio-system
spec:
  host: kiali.istio-system.svc.cluster.local
  trafficPolicy:
    tls:
      mode: DISABLE
```