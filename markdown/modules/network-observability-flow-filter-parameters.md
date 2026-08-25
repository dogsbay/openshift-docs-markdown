{%- set _mod_docs_content_type = "REFERENCE" %}

# Flow filter configuration parameters {id="network-observability-flowcollector-flowfilter-parameters_{{ context }}"}

Reference the required and optional parameters for configuring flow filter rules in the `FlowCollector` resource, including CIDR ranges, filter actions, protocols, and specific port configurations. {._abstract}

***Required configuration parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>enable</code></td>
  <td>Set <code>enable</code> to <code>true</code> to enable the eBPF flow filtering feature.</td>
</tr>
<tr>
  <td><code>cidr</code></td>
  <td>Provides the IP address and CIDR mask for the flow filter rule. Supports both IPv4 and IPv6 address format. If you want to match against any IP, you can use <code>0.0.0.0/0</code> for IPv4 or <code>::/0</code> for IPv6.</td>
</tr>
<tr>
  <td><code>action</code></td>
  <td>Describes the action that is taken for the flow filter rule. The possible values are <code>Accept</code> or <code>Reject</code>.<br><br><ul><li>For the <code>Accept</code> action matching rule, the flow data is cached in the eBPF table and updated with the global metric, <code>FlowFilterAcceptCounter</code>.</li><li>For the <code>Reject</code> action matching rule, the flow data is dropped and not cached in the eBPF table. The flow data is updated with the global metric, <code>FlowFilterRejectCounter</code>.</li><li>If the rule is not matched, the flow is cached in the eBPF table and updated with the global metric, <code>FlowFilterNoMatchCounter</code>.</li></ul></td>
</tr>
</tbody>
</table>

***Optional configuration parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>direction</code></td>
  <td>Defines the direction of the flow filter rule. Possible values are <code>Ingress</code> or <code>Egress</code>.</td>
</tr>
<tr>
  <td><code>protocol</code></td>
  <td>Defines the protocol of the flow filter rule. Possible values are <code>TCP</code>, <code>UDP</code>, <code>SCTP</code>, <code>ICMP</code>, and <code>ICMPv6</code>.</td>
</tr>
<tr>
  <td><code>tcpFlags</code></td>
  <td>Defines the TCP flags to filter flows. Possible values are <code>SYN</code>, <code>SYN-ACK</code>, <code>ACK</code>, <code>FIN</code>, <code>RST</code>, <code>PSH</code>, <code>URG</code>, <code>ECE</code>, <code>CWR</code>, <code>FIN-ACK</code>, and <code>RST-ACK</code>.</td>
</tr>
<tr>
  <td><code>ports</code></td>
  <td>Defines the ports to use for filtering flows. It can be used for either source or destination ports. To filter a single port, set a single port as an integer value. For example <code>ports: 80</code>. To filter a range of ports, use a "start-end" range in string format. For example <code>ports: "80-100"</code></td>
</tr>
<tr>
  <td><code>sourcePorts</code></td>
  <td>Defines the source port to use for filtering flows. To filter a single port, set a single port as an integer value, for example <code>sourcePorts: 80</code>. To filter a range of ports, use a "start-end" range, string format, for example <code>sourcePorts: "80-100"</code>.</td>
</tr>
<tr>
  <td><code>destPorts</code></td>
  <td>DestPorts defines the destination ports to use for filtering flows. To filter a single port, set a single port as an integer value, for example <code>destPorts: 80</code>. To filter a range of ports, use a "start-end" range in string format, for example <code>destPorts: "80-100"</code>.</td>
</tr>
<tr>
  <td><code>icmpType</code></td>
  <td>Defines the ICMP type to use for filtering flows.</td>
</tr>
<tr>
  <td><code>icmpCode</code></td>
  <td>Defines the ICMP code to use for filtering flows.</td>
</tr>
<tr>
  <td><code>peerIP</code></td>
  <td>Defines the IP address to use for filtering flows, for example: <code>10.10.10.10</code>.</td>
</tr>
</tbody>
</table>