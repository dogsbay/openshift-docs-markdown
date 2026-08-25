{%- set _mod_docs_content_type = "REFERENCE" %}

# Reference template functions {id="cluster-compare-templating-reference_{{ context }}"}

The `cluster-compare` plugin supports all `sprig` library functions, except for the `env` and `expandenv` functions. For the full list of `sprig` library functions, see "Sprig Function Documentation". {._abstract}

The following table describes the additional template functions for the `cluster-compare` plugin:

***Additional cluster-compare template functions***

<table>
<thead>
<tr>
  <th>Function</th>
  <th>Description</th>
  <th>Example</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>fromJson</code></td>
  <td>Parses the incoming string as a structured JSON object.</td>
  <td>`value: {{ obj := spec.jsontext \</td>
</tr>
<tr>
  <td>fromJson }}{{ obj.field }}`</td>
  <td><code>fromJsonArray</code></td>
  <td>Parses the incoming string as a structured JSON array.</td>
</tr>
<tr>
  <td>`value: {{ obj := spec.jsontext \</td>
  <td>fromJson}}{{ index $obj 0 }}`</td>
  <td><code>fromYaml</code></td>
</tr>
<tr>
  <td>Parses the incoming string as a structured YAML object.</td>
  <td>`value: {{ obj := spec.yamltext \</td>
  <td>fromYaml }}{{ obj.field }}`</td>
</tr>
<tr>
  <td><code>fromYamlArray</code></td>
  <td>Parses the incoming string as a structured YAML array.</td>
  <td>`value: {{ obj := spec.yamltext \</td>
</tr>
<tr>
  <td>fromYaml}}{{ index $obj 0 }`</td>
  <td><code>toJson</code></td>
  <td>Renders incoming data as JSON while preserving object types.</td>
</tr>
<tr>
  <td>`jsonstring: {{ $variable \</td>
  <td>toJson }}`</td>
  <td><code>toToml</code></td>
</tr>
<tr>
  <td>Renders the incoming string as structured TOML data.</td>
  <td>`tomlstring: {{ $variable \</td>
  <td>toToml }}`</td>
</tr>
<tr>
  <td><code>toYaml</code></td>
  <td>Renders incoming data as YAML while preserving object types.</td>
  <td>For simple scalar values: `value: {{ $data \</td>
</tr>
<tr>
  <td>toYaml }}` For lists or dictionaries: `value: {{ $dict \</td>
  <td>toYaml \</td>
  <td>nindent 2 }}`</td>
</tr>
<tr>
  <td><code>doNotMatch</code></td>
  <td>Prevents a template from matching a cluster resource, even if it would normally match. You can use this function inside a template to conditionally exclude certain resources from correlation. The specified reason is logged when running with the <code>--verbose</code> flag. Templates excluded due to <code>doNotMatch</code> are not considered comparison failures. This function is especially useful when your template does not specify a fixed name or namespace. In these cases, you can use the <code>doNotMatch</code> function to exclude specific resources based on other fields, such as <code>labels</code> or <code>annotations</code>.</td>
  <td><code>{{ if $condition }}{{ doNotMatch $reason }}{{ end }}</code></td>
</tr>
<tr>
  <td><code>lookupCRs</code></td>
  <td>Returns an array of objects that match the specified parameters. For example: <code>lookupCRs $apiVersion $kind $namespace $name</code>. If the <code>$namespace</code> parameter is an empty string (<code>""</code>) or <code>\*</code>, the function matches all namespaces. For cluster-scoped objects, the function matches objects with no namespace. If the <code>$name</code> is an empty string or <code>*</code>, the function matches any named object.</td>
  <td>-</td>
</tr>
<tr>
  <td><code>lookupCR</code></td>
  <td>Returns a single object that matches the parameters. If multiple objects match, the function returns nothing. This function takes the same arguments as the <code>lookupCRs</code> function.</td>
  <td>-</td>
</tr>
</tbody>
</table>

The following example shows how to use the `lookupCRs` function to retrieve and render values from multiple matching resources:

```yaml title="Config map example using lookupCRs"
kind: ConfigMap
apiVersion: v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard-settings
  namespace: kubernetes-dashboard
data:
  dashboard: {{ index (lookupCR "apps/v1" "Deployment" "kubernetes-dashboard" "kubernetes-dashboard") "metadata" "name" \| toYaml }}
  metrics: {{ (lookupCR "apps/v1" "Deployment" "kubernetes-dashboard" "dashboard-metrics-scraper").metadata.name \| toYaml }}
```

The following example shows how to use the `lookupCR` function to retrieve and use specific values from a single matching resource:

```yaml title="Config map example using lookupCR"
kind: ConfigMap
apiVersion: v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard-settings
  namespace: kubernetes-dashboard
data:
{{- $objlist := lookupCRs "apps/v1" "Deployment" "kubernetes-dashboard" "*" }}
{{- $dashboardName := "unknown" }}
{{- $metricsName := "unknown" }}
{{- range $obj := $objlist }}
{{- $appname := index $obj "metadata" "labels" "k8s-app" }}
{{- if contains "metrics" $appname }}
{{- $metricsName = $obj.metadata.name }}
{{- end }}
{{- if eq "kubernetes-dashboard" $appname }}
{{- $dashboardName = $obj.metadata.name }}
{{- end }}
{{- end }}
  dashboard: {{ $dashboardName }}
  metrics: {{ $metricsName }}
```