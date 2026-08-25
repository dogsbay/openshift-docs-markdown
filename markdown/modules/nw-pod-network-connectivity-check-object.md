{%- set _mod_docs_content_type = "REFERENCE" %}
# PodNetworkConnectivityCheck object fields {id="nw-pod-network-connectivity-check-object_{{ context }}"}

The `PodNetworkConnectivityCheck` object fields are described in the following tables.

***PodNetworkConnectivityCheck object fields***

<table>
<thead>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>metadata.name</code></td>
  <td><code>string</code></td>
  <td>The name of the object in the following format: <code><source>-to-<target></code>. The destination described by <code><target></code> includes one of following strings:<br><br><ul><li><code>load-balancer-api-external</code></li><li><code>load-balancer-api-internal</code></li><li><code>kubernetes-apiserver-endpoint</code></li><li><code>kubernetes-apiserver-service-cluster</code></li><li><code>network-check-target</code></li><li><code>openshift-apiserver-endpoint</code></li><li><code>openshift-apiserver-service-cluster</code></li></ul></td>
</tr>
<tr>
  <td><code>metadata.namespace</code></td>
  <td><code>string</code></td>
  <td>The namespace that the object is associated with. This value is always <code>openshift-network-diagnostics</code>.</td>
</tr>
<tr>
  <td><code>spec.sourcePod</code></td>
  <td><code>string</code></td>
  <td>The name of the pod where the connection check originates, such as <code>network-check-source-596b4c6566-rgh92</code>.</td>
</tr>
<tr>
  <td><code>spec.targetEndpoint</code></td>
  <td><code>string</code></td>
  <td>The target of the connection check, such as <code>api.devcluster.example.com:6443</code>.</td>
</tr>
<tr>
  <td><code>spec.tlsClientCert</code></td>
  <td><code>object</code></td>
  <td>Configuration for the TLS certificate to use.</td>
</tr>
<tr>
  <td><code>spec.tlsClientCert.name</code></td>
  <td><code>string</code></td>
  <td>The name of the TLS certificate used, if any. The default value is an empty string.</td>
</tr>
<tr>
  <td><code>status</code></td>
  <td><code>object</code></td>
  <td>An object representing the condition of the connection test and logs of recent connection successes and failures.</td>
</tr>
<tr>
  <td><code>status.conditions</code></td>
  <td><code>array</code></td>
  <td>The latest status of the connection check and any previous statuses.</td>
</tr>
<tr>
  <td><code>status.failures</code></td>
  <td><code>array</code></td>
  <td>Connection test logs from unsuccessful attempts.</td>
</tr>
<tr>
  <td><code>status.outages</code></td>
  <td><code>array</code></td>
  <td>Connect test logs covering the time periods of any outages.</td>
</tr>
<tr>
  <td><code>status.successes</code></td>
  <td><code>array</code></td>
  <td>Connection test logs from successful attempts.</td>
</tr>
</tbody>
</table>

The following table describes the fields for objects in the `status.conditions` array:

**status.conditions**

| Field | Type | Description |
| --- | --- | --- |
| `lastTransitionTime` | `string` | The time that the condition of the connection transitioned from one status to another. |
| `message` | `string` | The details about last transition in a human readable format. |
| `reason` | `string` | The last status of the transition in a machine readable format. |
| `status` | `string` | The status of the condition. |
| `type` | `string` | The type of the condition. |

The following table describes the fields for objects in the `status.conditions` array:

**status.outages**

| Field | Type | Description |
| --- | --- | --- |
| `end` | `string` | The timestamp from when the connection failure is resolved. |
| `endLogs` | `array` | Connection log entries, including the log entry related to the successful end of the outage. |
| `message` | `string` | A summary of outage details in a human readable format. |
| `start` | `string` | The timestamp from when the connection failure is first detected. |
| `startLogs` | `array` | Connection log entries, including the original failure. |

## Connection log fields {id="_connection_log_fields"}

The fields for a connection log entry are described in the following table. The object is used in the following fields:

*   `status.failures[]`
*   `status.successes[]`
*   `status.outages[].startLogs[]`
*   `status.outages[].endLogs[]`

**Connection log object**

| Field | Type | Description |
| --- | --- | --- |
| `latency` | `string` | Records the duration of the action. |
| `message` | `string` | Provides the status in a human readable format. |
| `reason` | `string` | Provides the reason for status in a machine readable format. The value is one of `TCPConnect`, `TCPConnectError`, `DNSResolve`, `DNSError`. |
| `success` | `boolean` | Indicates if the log entry is a success or failure. |
| `time` | `string` | The start time of connection check. |