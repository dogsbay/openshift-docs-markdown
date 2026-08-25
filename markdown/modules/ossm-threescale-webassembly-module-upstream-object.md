# The 3scale WebAssembly module upstream object {id="ossm-threescale-webassembly-module-upstream-object_{{ context }}"}

The `upstream` object describes an external host to which the proxy can perform calls.

```yaml
apiVersion: maistra.io/v1
upstream:
  name: outbound|443||multitenant.3scale.net
  url: "https://myaccount-admin.3scale.net/"
  timeout: 5000
# ...
```

**`upstream` object fields**

<table>
<thead>
<tr>
  <th>Name</th>
  <th>Description</th>
  <th>Required</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>name</code></td>
  <td><code>name</code> is not a free-form identifier. It is the identifier for the external host as defined by the proxy configuration. In the case of stand-alone <code>Envoy</code> configurations, it maps to the name of a <a href="https://www.envoyproxy.io/docs/envoy/v1.19.0/api-v3/config/cluster/v3/cluster.proto#config-cluster-v3-cluster">Cluster</a>, also known as <code>upstream</code> in other proxies. <strong>Note:</strong> the value of this field, because the {{ SMProductShortName }} and 3scale Istio adapter control plane configure the name according to a format using a vertical bar (|) as the separator of multiple fields. For the purposes of this integration, always use the format: <code>outbound|&lt;port&gt;||&lt;hostname&gt;</code>.</td>
  <td>Yes</td>
</tr>
<tr>
  <td><code>url</code></td>
  <td>The complete URL to access the described service. Unless implied by the scheme, you must include the TCP port.</td>
  <td>Yes</td>
</tr>
<tr>
  <td><code>Timeout</code></td>
  <td>Timeout in milliseconds so that connections to this service that take more than the amount of time to respond will be considered errors. Default is 1000 seconds.</td>
  <td>Optional</td>
</tr>
</tbody>
</table>