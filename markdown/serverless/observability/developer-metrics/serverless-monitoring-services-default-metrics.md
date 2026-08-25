{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Knative service metrics exposed by default {id="serverless-monitoring-services-default-metrics"}
{%- set context = "serverless-monitoring-services-default-metrics" %}

***Metrics exposed by default for each Knative service on port 9090***

<table>
<thead>
<tr>
  <th>Metric name, unit, and type</th>
  <th>Description</th>
  <th>Metric tags</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>queue_requests_per_second</code> Metric unit: dimensionless Metric type: gauge</td>
  <td>Number of requests per second that hit the queue proxy. Formula: <code>stats.RequestCount / r.reportingPeriodSeconds</code> <code>stats.RequestCount</code> is calculated directly from the networking <code>pkg</code> stats for the given reporting duration.</td>
  <td>destination_configuration="event-display",</td>
</tr>
<tr>
  <td><code>queue_proxied_operations_per_second</code> Metric unit: dimensionless Metric type: gauge</td>
  <td>Number of proxied requests per second. Formula: <code>stats.ProxiedRequestCount / r.reportingPeriodSeconds</code> <code>stats.ProxiedRequestCount</code> is calculated directly from the networking <code>pkg</code> stats for the given reporting duration.</td>
  <td></td>
</tr>
<tr>
  <td><code>queue_average_concurrent_requests</code> Metric unit: dimensionless Metric type: gauge</td>
  <td>Number of requests currently being handled by this pod.<br><br>Average concurrency is calculated at the networking <code>pkg</code> side as follows:<br><br><ul><li>When a <code>req</code> change happens, the time delta between changes is calculated. Based on the result, the current concurrency number over delta is computed and added to the current computed concurrency. Additionally, a sum of the deltas is kept.</li></ul>+Current concurrency over delta is computed as follows:+<code>global_concurrency</code> × delta<br><br><ul><li>Each time a reporting is done, the sum and current computed concurrency are reset.</li><li>When reporting the average concurrency the current computed concurrency is divided by the sum of deltas.</li><li>When a new request comes in, the global concurrency counter is increased. When a request is completed, the counter is decreased.</li></ul></td>
  <td>destination_configuration="event-display",</td>
</tr>
<tr>
  <td><code>queue_average_proxied_concurrent_requests</code> Metric unit: dimensionless Metric type: gauge</td>
  <td>Number of proxied requests currently being handled by this pod: <code>stats.AverageProxiedConcurrency</code></td>
  <td>destination_configuration="event-display",</td>
</tr>
<tr>
  <td><code>process_uptime</code> Metric unit: seconds Metric type: gauge</td>
  <td>The number of seconds that the process has been up.</td>
  <td>destination_configuration="event-display",</td>
</tr>
</tbody>
</table>

**Metrics exposed by default for each Knative service on port 9091**

| Metric name, unit, and type | Description | Metric tags |
| --- | --- | --- |
| `request_count` Metric unit: dimensionless Metric type: counter | The number of requests that are routed to `queue-proxy`. | configuration_name="event-display", container_name="queue-proxy", namespace_name="apiserversource1", pod_name="event-display-00001-deployment-658fd4f9cf-qcnr5", response_code="200", response_code_class="2xx", revision_name="event-display-00001", service_name="event-display" |
| `request_latencies` Metric unit: milliseconds Metric type: histogram | The response time in milliseconds. | configuration_name="event-display", container_name="queue-proxy", namespace_name="apiserversource1", pod_name="event-display-00001-deployment-658fd4f9cf-qcnr5", response_code="200", response_code_class="2xx", revision_name="event-display-00001", service_name="event-display" |
| `app_request_count` Metric unit: dimensionless Metric type: counter | The number of requests that are routed to `user-container`. | configuration_name="event-display", container_name="queue-proxy", namespace_name="apiserversource1", pod_name="event-display-00001-deployment-658fd4f9cf-qcnr5", response_code="200", response_code_class="2xx", revision_name="event-display-00001", service_name="event-display" |
| `app_request_latencies` Metric unit: milliseconds Metric type: histogram | The response time in milliseconds. | configuration_name="event-display", container_name="queue-proxy", namespace_name="apiserversource1", pod_name="event-display-00001-deployment-658fd4f9cf-qcnr5", response_code="200", response_code_class="2xx", revision_name="event-display-00001", service_name="event-display" |
| `queue_depth` Metric unit: dimensionless Metric type: gauge | The current number of items in the serving and waiting queue, or not reported if unlimited concurrency. `breaker.inFlight` is used. | configuration_name="event-display", container_name="queue-proxy", namespace_name="apiserversource1", pod_name="event-display-00001-deployment-658fd4f9cf-qcnr5", response_code="200", response_code_class="2xx", revision_name="event-display-00001", service_name="event-display" |