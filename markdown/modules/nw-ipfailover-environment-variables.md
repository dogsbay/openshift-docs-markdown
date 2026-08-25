{%- set _mod_docs_content_type = "REFERENCE" %}
# IP failover environment variables {id="nw-ipfailover-environment-variables_{{ context }}"}

The IP failover environment variables reference lists all variables you can use to configure IP failover in {{ product_title }}, including VIP addresses, monitoring ports, and network interfaces. {._abstract}

***IP failover environment variables***

<table>
<thead>
<tr>
  <th>Variable Name</th>
  <th>Default</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>OPENSHIFT_HA_MONITOR_PORT</code></td>
  <td><code>80</code></td>
  <td>The IP failover pod tries to open a TCP connection to this port on each Virtual IP (VIP). If connection is established, the service is considered to be running. If this port is set to <code>0</code>, the test always passes.</td>
</tr>
<tr>
  <td><code>OPENSHIFT_HA_NETWORK_INTERFACE</code></td>
  <td></td>
  <td>The interface name that IP failover uses to send Virtual Router Redundancy Protocol (VRRP) traffic. The default value is <code>eth0</code>.<br><br>If your cluster uses the OVN-Kubernetes network plugin, set this value to <code>br-ex</code> to avoid packet loss. For a cluster that uses the OVN-Kubernetes network plugin, all listening interfaces do not serve VRRP but instead expect inbound traffic over a <code>br-ex</code> bridge.</td>
</tr>
<tr>
  <td><code>OPENSHIFT_HA_REPLICA_COUNT</code></td>
  <td><code>2</code></td>
  <td>The number of replicas to create. This must match <code>spec.replicas</code> value in IP failover deployment configuration.</td>
</tr>
<tr>
  <td><code>OPENSHIFT_HA_VIRTUAL_IPS</code></td>
  <td></td>
  <td>The list of IP address ranges to replicate. This must be provided. For example, <code>1.2.3.4-6,1.2.3.9</code>.</td>
</tr>
<tr>
  <td><code>OPENSHIFT_HA_VRRP_ID_OFFSET</code></td>
  <td><code>10</code></td>
  <td>The offset value used to set the virtual router IDs. Using different offset values allows multiple IP failover configurations to exist within the same cluster. The default offset is <code>10</code>, and the allowed range is <code>0</code> through <code>255</code>.</td>
</tr>
<tr>
  <td><code>OPENSHIFT_HA_VIP_GROUPS</code></td>
  <td></td>
  <td>The number of groups to create for VRRP. If not set, a group is created for each virtual IP range specified with the <code>OPENSHIFT_HA_VIP_GROUPS</code> variable.</td>
</tr>
<tr>
  <td><code>OPENSHIFT_HA_IPTABLES_CHAIN</code></td>
  <td>INPUT</td>
  <td>The name of the iptables chain, to automatically add an <code>iptables</code> rule to allow the VRRP traffic on. If the value is not set, an <code>iptables</code> rule is not added. If the chain does not exist, it is not created.</td>
</tr>
<tr>
  <td><code>OPENSHIFT_HA_CHECK_SCRIPT</code></td>
  <td></td>
  <td>The full path name in the pod file system of a script that is periodically run to verify the application is operating.</td>
</tr>
<tr>
  <td><code>OPENSHIFT_HA_CHECK_INTERVAL</code></td>
  <td><code>2</code></td>
  <td>The period, in seconds, that the check script is run.</td>
</tr>
<tr>
  <td><code>OPENSHIFT_HA_NOTIFY_SCRIPT</code></td>
  <td></td>
  <td>The full path name in the pod file system of a script that is run whenever the state changes.</td>
</tr>
<tr>
  <td><code>OPENSHIFT_HA_PREEMPTION</code></td>
  <td><code>preempt_nodelay 300</code></td>
  <td>The strategy for handling a new higher priority host. The <code>nopreempt</code> strategy does not move master from the lower priority host to the higher priority host.</td>
</tr>
</tbody>
</table>