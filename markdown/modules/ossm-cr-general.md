{%- set _mod_docs_content_type = "REFERENCE" %}
# general parameters {id="ossm-cr-general_{{ context }}"}

Here is an example that illustrates the `spec.general` parameters for the `ServiceMeshControlPlane` object and a description of the available parameters with appropriate values.

```yaml title="Example general parameters"
apiVersion: maistra.io/v2
kind: ServiceMeshControlPlane
metadata:
  name: basic
spec:
  general:
    logging:
      componentLevels: {}
          # misc: error
      logAsJSON: false
    validationMessages: true
```

**Istio general parameters**

<table>
<tbody>
<tr>
  <td>Parameter</td>
  <td>Description</td>
  <td>Values</td>
  <td>Default value</td>
</tr>
<tr>
  <td>logging:</td>
  <td>Use to configure logging for the {{ SMProductShortName }} control plane components.</td>
  <td></td>
  <td>N/A</td>
</tr>
<tr>
  <td>logging: componentLevels:</td>
  <td>Use to specify the component logging level.</td>
  <td>Possible values: <code>debug</code>, <code>info</code>, <code>warn</code>, <code>error</code>, <code>fatal</code>.</td>
  <td>N/A</td>
</tr>
<tr>
  <td>logging: logAsJSON:</td>
  <td>Use to enable or disable JSON logging.</td>
  <td><code>true</code>/<code>false</code></td>
  <td>N/A</td>
</tr>
<tr>
  <td>validationMessages:</td>
  <td>Use to enable or disable validation messages to the status fields of istio.io resources. This can be useful for detecting configuration errors in resources.</td>
  <td><code>true</code>/<code>false</code></td>
  <td>N/A</td>
</tr>
</tbody>
</table>