{%- set _mod_docs_content_type = "REFERENCE" %}
# Configuring Kiali {id="configuring-kiali_{{ context }}"}

When the {{ SMProductShortName }} Operator creates the `ServiceMeshControlPlane` it also processes the Kiali resource. The Kiali Operator then uses this object when creating Kiali instances.

The default Kiali parameters specified in the `ServiceMeshControlPlane` are as follows:

```yaml title="Example Kiali parameters"
apiVersion: maistra.io/v1
kind: ServiceMeshControlPlane
spec:
    kiali:
      enabled: true
      dashboard:
        viewOnlyMode: false
      ingress:
        enabled: true
```

**Kiali parameters**

<table>
<tbody>
<tr>
  <td>Parameter</td>
  <td>Description</td>
  <td>Values</td>
  <td>Default value</td>
</tr>
<tr>
  <td>enabled</td>
  <td>This parameter enables/disables Kiali. Kiali is enabled by default.</td>
  <td><code>true</code>/<code>false</code></td>
  <td><code>true</code></td>
</tr>
<tr>
  <td>dashboard viewOnlyMode</td>
  <td>This parameter enables/disables view-only mode for the Kiali console.  When view-only mode is enabled, users cannot use the console to make changes to the {{ SMProductShortName }}.</td>
  <td><code>true</code>/<code>false</code></td>
  <td><code>false</code></td>
</tr>
<tr>
  <td>ingress enabled</td>
  <td>This parameter enables/disables ingress for Kiali.</td>
  <td><code>true</code>/<code>false</code></td>
  <td><code>true</code></td>
</tr>
</tbody>
</table>

## Configuring Kiali for Grafana {id="configuring-kiali-grafana_{{ context }}"}

When you install Kiali and Grafana as part of {{ SMProductName }} the Operator configures the following by default:

*   Grafana is enabled as an external service for Kiali
*   Grafana authorization for the Kiali console
*   Grafana URL for the Kiali console

Kiali can automatically detect the Grafana URL. However if you have a custom Grafana installation that is not easily auto-detectable by Kiali, you must update the URL value in the `ServiceMeshControlPlane` resource.

```yaml title="Additional Grafana parameters"
spec:
  kiali:
    enabled: true
    dashboard:
      viewOnlyMode: false
      grafanaURL:  "https://grafana-istio-system.127.0.0.1.nip.io"
    ingress:
      enabled: true
```

## Configuring Kiali for Jaeger {id="configuring-kiali-jaeger_{{ context }}"}

When you install Kiali and Jaeger as part of {{ SMProductName }} the Operator configures the following by default:

*   Jaeger is enabled as an external service for Kiali
*   Jaeger authorization for the Kiali console
*   Jaeger URL for the Kiali console

Kiali can automatically detect the Jaeger URL. However if you have a custom Jaeger installation that is not easily auto-detectable by Kiali, you must update the URL value in the `ServiceMeshControlPlane` resource.

```yaml title="Additional Jaeger parameters"
spec:
  kiali:
    enabled: true
    dashboard:
      viewOnlyMode: false
      jaegerURL: "http://jaeger-query-istio-system.127.0.0.1.nip.io"
    ingress:
      enabled: true
```