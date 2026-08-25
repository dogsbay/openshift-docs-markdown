{%- set _mod_docs_content_type = "REFERENCE" %}
# ConfigMap object configuration structure {id="insights-operator-configuring-configmap_{{ context }}"}

View the example of an `insights-config` `ConfigMap` object (`config.yaml` configuration) to better understand the configuration options for the `ConfigMap` object. {._abstract}

```yaml title="Example insights-config ConfigMap object "
apiVersion: v1
kind: ConfigMap
metadata:
  name: insights-config
  namespace: openshift-insights
data:
  config.yaml: |
    dataReporting:
      uploadEndpoint: https://console.redhat.com/api/ingress/v1/upload
      storagePath: /var/lib/insights-operator
      downloadEndpoint: https://console.redhat.com/api/insights-results-aggregator/v2/cluster/%s/reports
      conditionalGathererEndpoint: https://console.redhat.com/api/gathering/gathering_rules
      disableRuntimeExtractor: true
    sca:
        disabled: false
        endpoint: https://api.openshift.com/api/accounts_mgmt/v1/entitlement_certificates
        interval: 8h0m0s
    alerting:
        disabled: false
    proxy:
        httpProxy: http://example.com
        httpsProxy: https://example.com
        noProxy: test.org
```

The following table describes the available configuration attributes:


:::note

The `insights-config` `ConfigMap` object follows standard YAML formatting, wherein child values are below the parent attribute and indented two spaces. For the `Obfuscation` attribute, enter values as bulleted children of the parent attribute.

:::


***{{ insights_operator }} configurable attributes***

<table>
<thead>
<tr>
  <th>Attribute name</th>
  <th>Description</th>
  <th>Value type</th>
  <th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
  <td>alerting: disabled: false</td>
  <td>Disables {{ insights_operator }} alerts to the cluster Prometheus instance.</td>
  <td>Boolean</td>
  <td><code>false</code></td>
</tr>
<tr>
  <td>clusterTransfer: endpoint: <url></td>
  <td>The endpoint for checking and downloading cluster transfer data.</td>
  <td>URL</td>
  <td>https://api.openshift.com/api/accounts_mgmt/v1/cluster_transfers/</td>
</tr>
<tr>
  <td>clusterTransfer: interval: 1h0m0s</td>
  <td>Sets the frequency for checking available cluster transfers.</td>
  <td>Time interval</td>
  <td><code>24h</code></td>
</tr>
<tr>
  <td>dataReporting: interval: 30m0s</td>
  <td>Sets the data gathering and upload frequency.</td>
  <td>Time interval</td>
  <td><code>2h</code></td>
</tr>
<tr>
  <td>dataReporting: uploadEndpoint: <url></td>
  <td>Sets the upload endpoint.</td>
  <td>URL</td>
  <td>https://console.redhat.com/api/ingress/v1/upload</td>
</tr>
<tr>
  <td>dataReporting: storagePath: <path></td>
  <td>Configures the path where archived data gets stored.</td>
  <td>File path</td>
  <td>/var/lib/insights-operator</td>
</tr>
<tr>
  <td>dataReporting: downloadEndpoint: <url></td>
  <td>Specifies the endpoint for downloading the latest {{ red_hat_lightspeed }} analysis.</td>
  <td>URL</td>
  <td>https://console.redhat.com/api/ingress/v1/download</td>
</tr>
<tr>
  <td>dataReporting: conditionalGathererEndpoint: <url></td>
  <td>Sets the endpoint for providing conditional gathering rule definitions.</td>
  <td>URL</td>
  <td>https://console.redhat.com/api/gathering/gathering_rules</td>
</tr>
<tr>
  <td>dataReporting: disableRuntimeExtractor: true</td>
  <td>When set to true, it disables the deployment and management of all insights-runtime-extractor resources.</td>
  <td>Boolean</td>
  <td><code>false</code></td>
</tr>
<tr>
  <td>dataReporting: obfuscation: - networking</td>
  <td>Enables the global obfuscation of IP addresses and the cluster domain name.</td>
  <td>String</td>
  <td>Not applicable</td>
</tr>
<tr>
  <td>dataReporting: obfuscation: - workload_names</td>
  <td>Enables the obfuscation of Data Validation Operator data. The cluster resource ID is only visible in the archive file and not the resource name.</td>
  <td>String</td>
  <td>Not applicable</td>
</tr>
<tr>
  <td>proxy: httpProxy: http://example.com httpsProxy: http://example.com noProxy: test.org</td>
  <td>Set custom proxy for {{ insights_operator }}.</td>
  <td>URL</td>
  <td>No default</td>
</tr>
<tr>
  <td>sca: interval: 8h0m0s</td>
  <td>Specifies the frequency of the simple content access (SCA) entitlements download.</td>
  <td>Time interval</td>
  <td><code>2h</code></td>
</tr>
<tr>
  <td>sca: endpoint: <url></td>
  <td>Specifies the endpoint for downloading the simple content access (SCA) entitlements.</td>
  <td>URL</td>
  <td>https://api.openshift.com/api/accounts_mgmt/v1/entitlement_certificates</td>
</tr>
<tr>
  <td>sca: disabled: false</td>
  <td>Disables the simple content access entitlements download.</td>
  <td>Boolean</td>
  <td><code>false</code></td>
</tr>
</tbody>
</table>