{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ VirtProductName }} LogQL queries {id="virt-loki-log-queries_{{ context }}"}

To diagnose issues and monitor {{ VirtProductName }} components, you can view and filter aggregated logs by running Loki Query Language (LogQL) queries on the **Observe** -> **Logs** page in the web console. {._abstract}

The default log type is _infrastructure_. The `virt-launcher` log type is _application_.

Optional: You can include or exclude strings or regular expressions by using line filter expressions.


:::note

If the query matches a large number of logs, the query might time out.

:::


***{{ VirtProductName }} LogQL example queries***

<table>
<thead>
<tr>
  <th>Component</th>
  <th>LogQL query</th>
</tr>
</thead>
<tbody>
<tr>
  <td>All</td>
  <td><pre>{log_type=~".+"}\</pre></td>
</tr>
<tr>
  <td>json \</td>
  <td>kubernetes_labels_app_kubernetes_io_part_of="hyperconverged-cluster"</td>
</tr>
<tr>
  <td><code>cdi-apiserver</code><br><br><code>cdi-deployment</code><br><br><code>cdi-operator</code></td>
  <td><pre>{log_type=~".+"}\</pre></td>
</tr>
<tr>
  <td>json \</td>
  <td>kubernetes_labels_app_kubernetes_io_part_of="hyperconverged-cluster"</td>
</tr>
<tr>
  <td>\</td>
  <td>kubernetes_labels_app_kubernetes_io_component="storage"</td>
</tr>
<tr>
  <td><code>hco-operator</code></td>
  <td><pre>{log_type=~".+"}\</pre></td>
</tr>
<tr>
  <td>json \</td>
  <td>kubernetes_labels_app_kubernetes_io_part_of="hyperconverged-cluster"</td>
</tr>
<tr>
  <td>\</td>
  <td>kubernetes_labels_app_kubernetes_io_component="deployment"</td>
</tr>
<tr>
  <td><code>kubemacpool</code></td>
  <td><pre>{log_type=~".+"}\</pre></td>
</tr>
<tr>
  <td>json \</td>
  <td>kubernetes_labels_app_kubernetes_io_part_of="hyperconverged-cluster"</td>
</tr>
<tr>
  <td>\</td>
  <td>kubernetes_labels_app_kubernetes_io_component="network"</td>
</tr>
<tr>
  <td><code>virt-api</code><br><br><code>virt-controller</code><br><br><code>virt-handler</code><br><br><code>virt-operator</code></td>
  <td><pre>{log_type=~".+"}\</pre></td>
</tr>
<tr>
  <td>json \</td>
  <td>kubernetes_labels_app_kubernetes_io_part_of="hyperconverged-cluster"</td>
</tr>
<tr>
  <td>\</td>
  <td>kubernetes_labels_app_kubernetes_io_component="compute"</td>
</tr>
<tr>
  <td><code>ssp-operator</code></td>
  <td><pre>{log_type=~".+"}\</pre></td>
</tr>
<tr>
  <td>json \</td>
  <td>kubernetes_labels_app_kubernetes_io_part_of="hyperconverged-cluster"</td>
</tr>
<tr>
  <td>\</td>
  <td>kubernetes_labels_app_kubernetes_io_component="schedule"</td>
</tr>
<tr>
  <td>Container</td>
  <td>[source,text]</td>
</tr>
<tr>
  <td>{log_type=~".+",kubernetes_container_name=~"<container>\</td>
  <td><container>"}</td>
</tr>
<tr>
  <td>\</td>
  <td>json\</td>
</tr>
<tr>
  <td>kubernetes_labels_app_kubernetes_io_part_of="hyperconverged-cluster" ---- Specify one or more containers separated by a pipe (`\</td>
  <td>`).</td>
</tr>
<tr>
  <td><code>virt-launcher</code></td>
  <td>You must select <strong>application</strong> from the log type list before running this query.<br><br><pre>{log_type=~".+", kubernetes_container_name="compute"}\</pre></td>
</tr>
<tr>
  <td>json \</td>
  <td>!= "custom-ga-command"</td>
</tr>
<tr>
  <td>`\</td>
  <td>!= "custom-ga-command"<code> excludes libvirt logs that contain the string </code>custom-ga-command`. (https://bugzilla.redhat.com/show_bug.cgi?id=2177684[<strong>BZ#2177684</strong>])</td>
</tr>
</tbody>
</table>

You can filter log lines to include or exclude strings or regular expressions by using line filter expressions.

***Line filter expressions***

<table>
<thead>
<tr>
  <th>Line filter expression</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>`\</td>
  <td>= "<string>"`</td>
</tr>
<tr>
  <td>Log line contains string</td>
  <td><code>!= "<string>"</code></td>
</tr>
<tr>
  <td>Log line does not contain string</td>
  <td>`\</td>
</tr>
<tr>
  <td>~ "<regex>"`</td>
  <td>Log line contains regular expression</td>
</tr>
<tr>
  <td><code>!~ "<regex>"</code></td>
  <td>Log line does not contain regular expression</td>
</tr>
</tbody>
</table>

**Example line filter expression**

```text
{log_type=~".+"}|json
|kubernetes_labels_app_kubernetes_io_part_of="hyperconverged-cluster"
|= "error" != "timeout"
```