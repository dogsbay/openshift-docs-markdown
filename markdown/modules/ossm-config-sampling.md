{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adjusting the sampling rate {id="ossm-config-sampling_{{ context }}"}

A trace is an execution path between services in the service mesh. A trace is comprised of one or more spans. A span is a logical unit of work that has a name, start time, and duration. The sampling rate determines how often a trace is persisted.

The Envoy proxy sampling rate is set to sample 100% of traces in your service mesh by default. A high sampling rate consumes cluster resources and performance but is useful when debugging issues. Before you deploy {{ SMProductName }} in production, set the value to a smaller proportion of traces. For example, set `spec.tracing.sampling` to `100` to sample 1% of traces.

Configure the Envoy proxy sampling rate as a scaled integer representing 0.01% increments.

In a basic installation, `spec.tracing.sampling` is set to `10000`, which samples 100% of traces. For example:

*   Setting the value to 10 samples 0.1% of traces.
*   Setting the value to 500 samples 5% of traces.


:::note

The Envoy proxy sampling rate applies for applications that are available to a Service Mesh, and use the Envoy proxy. This sampling rate determines how much data the Envoy proxy collects and tracks.

The Jaeger remote sampling rate applies to applications that are external to the Service Mesh, and do not use the Envoy proxy, such as a database. This sampling rate determines how much data {{ DTProductName }} collects and stores.

:::


**Procedure**

1.  In the {{ product_title }} web console, click **Ecosystem** -> **Installed Operators**.
1.  Click the **Project** menu and select the project where you installed the control plane, for example **istio-system**.
1.  Click the {{ SMProductName }} Operator. In the **Istio Service Mesh Control Plane** column, click the name of your `ServiceMeshControlPlane` resource, for example `basic`.
1.  To adjust the sampling rate, set a different value for `spec.tracing.sampling`.
    1.  Click the **YAML** tab.
    1.  Set the value for `spec.tracing.sampling` in your `ServiceMeshControlPlane` resource. In the following example, set it to `100`.
        ```yaml title="Jaeger sampling example"
        spec:
          tracing:
            sampling: 100
        ```
    1.  Click **Save**.
1.  Click **Reload** to verify the `ServiceMeshControlPlane` resource was configured correctly.