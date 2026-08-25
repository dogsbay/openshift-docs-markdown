{%- set _mod_docs_content_type = "CONCEPT" %}
# Network connectivity requirements {id="installation-vsphere-installer-network-requirements_{{ context }}"}

You must configure the network connectivity between machines to allow {{ product_title }} cluster components to communicate. {._abstract}

Review the following details about the required network ports.

***Ports used for all-machine to all-machine communications***

<table>
<thead>
<tr>
  <th>Protocol</th>
  <th>Port</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>VRRP</td>
  <td>N/A</td>
  <td>Required for keepalived</td>
</tr>
<tr>
  <td>ICMP</td>
  <td>N/A</td>
  <td>Network reachability tests<br><br>.3+</td>
</tr>
<tr>
  <td>TCP</td>
  <td><code>1936</code></td>
  <td>Metrics</td>
</tr>
<tr>
  <td><code>9000</code>-<code>9999</code></td>
  <td>Host level services, including the node exporter on ports <code>9100</code>-<code>9101</code> andthe Cluster Version Operator on port <code>9099</code>.</td>
  <td><code>10250</code>-<code>10259</code></td>
</tr>
<tr>
  <td>The default ports that Kubernetes reserves<br><br>.5+</td>
  <td>UDP</td>
  <td><code>6081</code></td>
</tr>
<tr>
  <td>Geneve</td>
  <td><code>9000</code>-<code>9999</code></td>
  <td>Host level services, including the node exporter on ports <code>9100</code>-<code>9101</code>.</td>
</tr>
<tr>
  <td><code>500</code></td>
  <td>IPsec IKE packets</td>
  <td><code>4500</code></td>
</tr>
<tr>
  <td>IPsec NAT-T packets</td>
  <td>TCP/UDP</td>
  <td><code>30000</code>-<code>32767</code></td>
</tr>
<tr>
  <td>Kubernetes node port</td>
  <td>ESP</td>
  <td>N/A</td>
</tr>
<tr>
  <td>IPsec Encapsulating Security Payload (ESP)</td>
</tr>
</tbody>
</table>

***Ports used for all-machine to control plane communications***

<table>
<thead>
<tr>
  <th>Protocol</th>
  <th>Port</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>TCP</td>
  <td><code>6443</code></td>
  <td>Kubernetes API</td>
</tr>
</tbody>
</table>

***Ports used for control plane machine to control plane machine communications***

<table>
<thead>
<tr>
  <th>Protocol</th>
  <th>Port</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>TCP</td>
  <td><code>2379</code>-<code>2380</code></td>
  <td>etcd server and peer ports</td>
</tr>
</tbody>
</table>