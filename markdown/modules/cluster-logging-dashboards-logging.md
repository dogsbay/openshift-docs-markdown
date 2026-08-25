{%- set _mod_docs_content_type = "CONCEPT" %}
# About the OpenShift Logging dashboard {id="cluster-logging-dashboards-logging_{{ context }}"}

The **OpenShift Logging** dashboard contains charts that show details about your Elasticsearch instance at a cluster-level that you can use to diagnose and anticipate problems.

**OpenShift Logging charts**

<table>
<thead>
<tr>
  <th>Metric</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Elastic Cluster Status</td>
  <td>The current Elasticsearch status:<br><br><ul><li>ONLINE - Indicates that the Elasticsearch instance is online.</li><li>OFFLINE - Indicates that the Elasticsearch instance is offline.</li></ul></td>
</tr>
<tr>
  <td>Elastic Nodes</td>
  <td>The total number of Elasticsearch nodes in the Elasticsearch instance.</td>
</tr>
<tr>
  <td>Elastic Shards</td>
  <td>The total number of Elasticsearch shards in the Elasticsearch instance.</td>
</tr>
<tr>
  <td>Elastic Documents</td>
  <td>The total number of Elasticsearch documents in the Elasticsearch instance.</td>
</tr>
<tr>
  <td>Total Index Size on Disk</td>
  <td>The total disk space that is being used for the Elasticsearch indices.</td>
</tr>
<tr>
  <td>Elastic Pending Tasks</td>
  <td>The total number of Elasticsearch changes that have not been completed, such as index creation, index mapping, shard allocation, or shard failure.</td>
</tr>
<tr>
  <td>Elastic JVM GC time</td>
  <td>The amount of time that the JVM spent executing Elasticsearch garbage collection operations in the cluster.</td>
</tr>
<tr>
  <td>Elastic JVM GC Rate</td>
  <td>The total number of times that JVM executed garbage activities per second.</td>
</tr>
<tr>
  <td>Elastic Query/Fetch Latency Sum</td>
  <td><ul><li>Query latency: The average time each Elasticsearch search query takes to execute.</li><li>Fetch latency: The average time each Elasticsearch search query spends fetching data.</li></ul>Fetch latency typically takes less time than query latency. If fetch latency is consistently increasing, it might indicate slow disks, data enrichment, or large requests with too many results.</td>
</tr>
<tr>
  <td>Elastic Query Rate</td>
  <td>The total queries executed against the Elasticsearch instance per second for each Elasticsearch node.</td>
</tr>
<tr>
  <td>CPU</td>
  <td>The amount of CPU used by Elasticsearch, Fluentd, and Kibana, shown for each component.</td>
</tr>
<tr>
  <td>Elastic JVM Heap Used</td>
  <td>The amount of JVM memory used. In a healthy cluster, the graph shows regular drops as memory is freed by JVM garbage collection.</td>
</tr>
<tr>
  <td>Elasticsearch Disk Usage</td>
  <td>The total disk space used by the Elasticsearch instance for each Elasticsearch node.</td>
</tr>
<tr>
  <td>File Descriptors In Use</td>
  <td>The total number of file descriptors used by Elasticsearch, Fluentd, and Kibana.</td>
</tr>
<tr>
  <td>FluentD emit count</td>
  <td>The total number of Fluentd messages per second for the Fluentd default output, and the retry count for the default output.</td>
</tr>
<tr>
  <td>FluentD Buffer Usage</td>
  <td>The percent of the Fluentd buffer that is being used for chunks. A full buffer might indicate that Fluentd is not able to process the number of logs received.</td>
</tr>
<tr>
  <td>Elastic rx bytes</td>
  <td>The total number of bytes that Elasticsearch has received from FluentD, the Elasticsearch nodes, and other sources.</td>
</tr>
<tr>
  <td>Elastic Index Failure Rate</td>
  <td>The total number of times per second that an Elasticsearch index fails. A high rate might indicate an issue with indexing.</td>
</tr>
<tr>
  <td>FluentD Output Error Rate</td>
  <td>The total number of times per second that FluentD is not able to output logs.</td>
</tr>
</tbody>
</table>