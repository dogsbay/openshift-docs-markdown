# tracing parameters {id="ossm-cr-tracing_{{ context }}"}

The following example illustrates the `spec.tracing` parameters for the `ServiceMeshControlPlane` object, and a description of the available parameters with appropriate values.

```yaml title="Example tracing parameters"
apiVersion: maistra.io/v2
kind: ServiceMeshControlPlane
metadata:
  name: basic
spec:
  version: v{{ MaistraVersion }}
  tracing:
    sampling: 100
    type: Jaeger
```

**Istio tracing parameters**

<table>
<tbody>
<tr>
  <td>Parameter</td>
  <td>Description</td>
  <td>Values</td>
  <td>Default value</td>
</tr>
<tr>
  <td>tracing: sampling:</td>
  <td>The sampling rate determines how often the Envoy proxy generates a trace. You use the sampling rate to control what percentage of requests get reported to your tracing system.</td>
  <td>Integer values between 0 and 10000 representing increments of 0.01% (0 to 100%). For example, setting the value to <code>10</code> samples 0.1% of requests, setting the value to <code>100</code> will sample 1% of requests setting the value to <code>500</code> samples 5% of requests, and a setting of <code>10000</code> samples 100% of requests.</td>
  <td><code>10000</code> (100% of traces)</td>
</tr>
<tr>
  <td>tracing: type:</td>
  <td>Currently the only tracing type that is supported is <code>Jaeger</code>. Jaeger is enabled by default. To disable tracing, set the <code>type</code> parameter to <code>None</code>.</td>
  <td><code>None</code>, <code>Jaeger</code></td>
  <td><code>Jaeger</code></td>
</tr>
</tbody>
</table>