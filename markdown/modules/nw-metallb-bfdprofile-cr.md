{%- set _mod_docs_content_type = "REFERENCE" %}
# About the BFD profile custom resource {id="nw-metallb-bfdprofile-cr_{{ context }}"}

As a cluster administrator, you can specify parameters in the BFD profile CR. The MetalLB Operator uses the BFD profile custom resources to identify which BGP sessions use BFD to provide faster path failure detection than BGP alone provides. {._abstract}

The following table describes parameters for the BFD profile CR:

**BFD profile custom resource**

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Type</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>metadata.name</code></td>
  <td><code>string</code></td>
  <td>Specifies the name for the BFD profile custom resource.</td>
</tr>
<tr>
  <td><code>metadata.namespace</code></td>
  <td><code>string</code></td>
  <td>Specifies the namespace for the BFD profile custom resource.</td>
</tr>
<tr>
  <td><code>spec.detectMultiplier</code></td>
  <td><code>integer</code></td>
  <td>Specifies the detection multiplier to determine packet loss. The remote transmission interval is multiplied by this value to determine the connection loss detection timer.<br><br>For example, when the local system has the detect multiplier set to <code>3</code> and the remote system has the transmission interval set to <code>300</code>, the local system detects failures only after <code>900</code> ms without receiving packets. The range is <code>2</code> to <code>255</code>. The default value is <code>3</code>.</td>
</tr>
<tr>
  <td><code>spec.echoMode</code></td>
  <td><code>boolean</code></td>
  <td>Specifies the echo transmission mode. If you are not using distributed BFD, echo transmission mode works only when the peer is also FRR. The default value is <code>false</code> and echo transmission mode is disabled.<br><br>When echo transmission mode is enabled, consider increasing the transmission interval of control packets to reduce bandwidth usage. For example, consider increasing the transmit interval to <code>2000</code> ms.</td>
</tr>
<tr>
  <td><code>spec.echoInterval</code></td>
  <td><code>integer</code></td>
  <td>Specifies the minimum transmission interval, less jitter, that this system uses to send and receive echo packets. The range is <code>10</code> to <code>60000</code>. The default value is <code>50</code> ms.</td>
</tr>
<tr>
  <td><code>spec.minimumTtl</code></td>
  <td><code>integer</code></td>
  <td>Specifies the minimum expected TTL for an incoming control packet. This field applies to multi-hop sessions only.<br><br>The purpose of setting a minimum TTL is to make the packet validation requirements more stringent and avoid receiving control packets from other sessions. The default value is <code>254</code> and indicates that the system expects only one hop between this system and the peer.</td>
</tr>
<tr>
  <td><code>spec.passiveMode</code></td>
  <td><code>boolean</code></td>
  <td>Specifies whether a session is marked as active or passive. A passive session does not attempt to start the connection. Instead, a passive session waits for control packets from a peer before it begins to reply.<br><br>Marking a session as passive is useful when you have a router that acts as the central node of a star network and you want to avoid sending control packets that you do not need the system to send. The default value is <code>false</code> and marks the session as active.</td>
</tr>
<tr>
  <td><code>spec.receiveInterval</code></td>
  <td><code>integer</code></td>
  <td>Specifies the minimum interval that this system is capable of receiving control packets. The range is <code>10</code> to <code>60000</code>. The default value is <code>300</code> ms.</td>
</tr>
<tr>
  <td><code>spec.transmitInterval</code></td>
  <td><code>integer</code></td>
  <td>Specifies the minimum transmission interval, less jitter, that this system uses to send control packets. The range is <code>10</code> to <code>60000</code>. The default value is <code>300</code> ms.</td>
</tr>
</tbody>
</table>