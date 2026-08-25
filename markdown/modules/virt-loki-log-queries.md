{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ VirtProductName }} LogQL queries {id="virt-loki-log-queries_{{ context }}"}

To diagnose issues and monitor {{ VirtProductName }} components, you can view and filter aggregated logs by running Loki Query Language (LogQL) queries on the **Observe** → **Logs** page in the web console. {._abstract}

The default log type is _infrastructure_. The `virt-launcher` log type is _application_.

Optional: You can include or exclude strings or regular expressions by using line filter expressions.


:::note

If the query matches a large number of logs, the query might time out.

:::


**{{ VirtProductName }} LogQL example queries**

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
  <td><pre>{log_type=~".+"}|json&#10;|kubernetes_labels_app_kubernetes_io_part_of="hyperconverged-cluster"</pre></td>
</tr>
<tr>
  <td><code>cdi-apiserver</code><br><br><code>cdi-deployment</code><br><br><code>cdi-operator</code></td>
  <td><pre>{log_type=~".+"}|json&#10;|kubernetes_labels_app_kubernetes_io_part_of="hyperconverged-cluster"&#10;|kubernetes_labels_app_kubernetes_io_component="storage"</pre></td>
</tr>
<tr>
  <td><code>hco-operator</code></td>
  <td><pre>{log_type=~".+"}|json&#10;|kubernetes_labels_app_kubernetes_io_part_of="hyperconverged-cluster"&#10;|kubernetes_labels_app_kubernetes_io_component="deployment"</pre></td>
</tr>
<tr>
  <td><code>kubemacpool</code></td>
  <td><pre>{log_type=~".+"}|json&#10;|kubernetes_labels_app_kubernetes_io_part_of="hyperconverged-cluster"&#10;|kubernetes_labels_app_kubernetes_io_component="network"</pre></td>
</tr>
<tr>
  <td><code>virt-api</code><br><br><code>virt-controller</code><br><br><code>virt-handler</code><br><br><code>virt-operator</code></td>
  <td><pre>{log_type=~".+"}|json&#10;|kubernetes_labels_app_kubernetes_io_part_of="hyperconverged-cluster"&#10;|kubernetes_labels_app_kubernetes_io_component="compute"</pre></td>
</tr>
<tr>
  <td><code>ssp-operator</code></td>
  <td><pre>{log_type=~".+"}|json&#10;|kubernetes_labels_app_kubernetes_io_part_of="hyperconverged-cluster"&#10;|kubernetes_labels_app_kubernetes_io_component="schedule"</pre></td>
</tr>
<tr>
  <td>Container</td>
  <td>[source,text] ---- {log_type=~".+",kubernetes_container_name=~"<container><container>"} jsonkubernetes_labels_app_kubernetes_io_part_of="hyperconverged-cluster" ----<br><br>Specify one or more containers separated by a pipe (<code></code>).</td>
</tr>
<tr>
  <td><code>virt-launcher</code></td>
  <td>You must select <strong>application</strong> from the log type list before running this query.<br><br><pre>{log_type=~".+", kubernetes_container_name="compute"}|json&#10;|!= "custom-ga-command"</pre><br><br><code>|!= "custom-ga-command"</code> excludes libvirt logs that contain the string <code>custom-ga-command</code>. (<a href="https://bugzilla.redhat.com/show_bug.cgi?id=2177684"><strong>BZ#2177684</strong></a>)</td>
</tr>
</tbody>
</table>

You can filter log lines to include or exclude strings or regular expressions by using line filter expressions.

**Line filter expressions**

<table>
<thead>
<tr>
  <th>Line filter expression</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>|= "&lt;string&gt;"</code></td>
  <td>Log line contains string</td>
</tr>
<tr>
  <td><code>!= "&lt;string&gt;"</code></td>
  <td>Log line does not contain string</td>
</tr>
<tr>
  <td><code>|~ "&lt;regex&gt;"</code></td>
  <td>Log line contains regular expression</td>
</tr>
<tr>
  <td><code>!~ "&lt;regex&gt;"</code></td>
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