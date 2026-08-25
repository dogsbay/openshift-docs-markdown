{%- set _mod_docs_content_type = "REFERENCE" %}
# Network object configuration for tracking network flows {id="nw-network-flows-object_{{ context }}"}

The fields for configuring network flows collectors in the Cluster Network Operator (CNO) are shown in the following table:

***Network flows configuration***

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
  <td>The name of the CNO object. This name is always <code>cluster</code>.</td>
</tr>
<tr>
  <td><code>spec.exportNetworkFlows</code></td>
  <td><code>object</code></td>
  <td>One or more of <code>netFlow</code>, <code>sFlow</code>, or <code>ipfix</code>.</td>
</tr>
<tr>
  <td><code>spec.exportNetworkFlows.netFlow.collectors</code></td>
  <td><code>array</code></td>
  <td>A list of IP address and network port pairs for up to 10 collectors.</td>
</tr>
<tr>
  <td><code>spec.exportNetworkFlows.sFlow.collectors</code></td>
  <td><code>array</code></td>
  <td>A list of IP address and network port pairs for up to 10 collectors.</td>
</tr>
<tr>
  <td><code>spec.exportNetworkFlows.ipfix.collectors</code></td>
  <td><code>array</code></td>
  <td>A list of IP address and network port pairs for up to 10 collectors.</td>
</tr>
</tbody>
</table>

After applying the following manifest to the CNO, the Operator configures Open vSwitch (OVS) on each node in the cluster to send network flows records to the NetFlow collector that is listening at `192.168.1.99:2056`.

```yaml title="Example configuration for tracking network flows"
apiVersion: operator.openshift.io/v1
kind: Network
metadata:
  name: cluster
spec:
  exportNetworkFlows:
    netFlow:
      collectors:
        - 192.168.1.99:2056
```