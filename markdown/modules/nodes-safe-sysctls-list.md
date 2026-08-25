{%- set _mod_docs_content_type = "REFERENCE" %}
# Safe and unsafe sysctls {id="safe_and_unsafe_sysctls_{{ context }}"}

In a {{ product_title }} cluster, you can use _safe_ or _unsafe_ sysctls. {._abstract}

For system-wide sysctls to be considered safe, they must be namespaced. A namespaced sysctl ensures there is isolation between namespaces and therefore pods. If you set a sysctl for one pod it must not take any of the following actions:

*   Influence on any other pod on the node
*   Harm the node health
*   Gain CPU or memory resources outside of the resource limits of a pod


:::note

Being namespaced alone is not sufficient for the sysctl to be considered safe.

:::


Any sysctl that is not added to the allowed list on {{ product_title }} is considered unsafe for {{ product_title }}.

Unsafe sysctls are not allowed by default. For system-wide sysctls, a cluster administrator must manually enable them on a per-node basis. Pods with disabled unsafe sysctls are scheduled but do not launch.


:::note

You cannot manually enable interface-specific unsafe sysctls.

:::


{{ product_title }} adds the following system-wide and interface-specific safe sysctls to an allowed safe list:

***System-wide safe sysctls***

<table>
<thead>
<tr>
  <th>sysctl</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>kernel.shm_rmid_forced</code></td>
  <td>When set to <code>1</code>, all shared memory objects in current IPC namespace are automatically forced to use IPC_RMID. For more information, see <a href="https://docs.kernel.org/admin-guide/sysctl/kernel.html?highlight=shm_rmid_forced#shm-rmid-forced">shm_rmid_forced</a>.</td>
</tr>
<tr>
  <td><code>net.ipv4.ip_local_port_range</code></td>
  <td>Defines the local port range that is used by TCP and UDP to choose the local port. The first number is the first port number, and the second number is the last local port number. If possible, ensure these numbers have different parity, such as one even and one odd value. The numbers must be greater than or equal to <code>ip_unprivileged_port_start</code>. The default values are <code>32768</code> and <code>60999</code> respectively. For more information, see <a href="https://docs.kernel.org/networking/ip-sysctl.html?highlight=ip_local_port_range#ip-variables">ip_local_port_range (Kernel.org documentation)</a>.<br><br><dl><dt>Important</dt><dd>When specifying a range for the <code>net.ipv4.ip_local_port_range</code> sysctl parameter, ensure the range does not overlap with the range you set for the <code>serviceNodePortRange</code> parameter. For more information, see "Configuring the node port service range".</dd></dl></td>
</tr>
<tr>
  <td><code>net.ipv4.tcp_syncookies</code></td>
  <td>When <code>net.ipv4.tcp_syncookies</code> is set, the kernel handles TCP SYN packets normally until the</td>
</tr>
<tr>
  <td><code>net.ipv4.ping_group_range</code></td>
  <td>Restricts <code>ICMP_PROTO</code> datagram sockets to users in the group range. The default is <code>1 0</code>, meaning that nobody, not even root, can create ping sockets. For more information, see <a href="https://docs.kernel.org/networking/ip-sysctl.html?highlight=ping_group_range#ip-variables">ping_group_range (Kernel.org documentation)</a>.</td>
</tr>
<tr>
  <td><code>net.ipv4.ip_unprivileged_port_start</code></td>
  <td>Defines the first unprivileged port in the network namespace. To disable all privileged ports, set to <code>0</code>. Privileged ports must not overlap with the <code>ip_local_port_range</code>. For more information, see <a href="https://docs.kernel.org/networking/ip-sysctl.html?highlight=ip_unprivileged_port_start#ip-variables#ip-variables">ip_unprivileged_port_start (Kernel.org documentation)</a>.</td>
</tr>
<tr>
  <td><code>net.ipv4.ip_local_reserved_ports</code></td>
  <td>Specifies a range of comma-separated local ports that you want to reserve for applications or services.</td>
</tr>
<tr>
  <td><code>net.ipv4.tcp_keepalive_time</code></td>
  <td>Specifies the interval in seconds before the first <code>keepalive</code> probe should be sent after a connection has become idle.</td>
</tr>
<tr>
  <td><code>net.ipv4.tcp_fin_timeout</code></td>
  <td>Specifies the time in seconds that a connection remains in the <code>FIN-WAIT-2</code> state before it is aborted.</td>
</tr>
<tr>
  <td><code>net.ipv4.tcp_keepalive_intvl</code></td>
  <td>Specifies the interval in seconds between the <code>keepalive</code> probes. This value is multiplied by the <code>tcp_keepalive_probes</code> value to determine the total time required before it is decided that the connection is broken.</td>
</tr>
<tr>
  <td><code>net.ipv4.tcp_keepalive_probes</code></td>
  <td>Specifies how many <code>keepalive</code> probes to send until it is determined that the connection is broken.</td>
</tr>
</tbody>
</table>

***Interface-specific safe sysctls***

<table>
<thead>
<tr>
  <th>sysctl</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>net.ipv4.conf.IFNAME.accept_redirects</code></td>
  <td>Accepts IPv4 ICMP redirect messages.</td>
</tr>
<tr>
  <td><code>net.ipv4.conf.IFNAME.accept_source_route</code></td>
  <td>Accepts IPv4 packets with strict source route (SRR) option.</td>
</tr>
<tr>
  <td><code>net.ipv4.conf.IFNAME.arp_accept</code></td>
  <td>Defines the behavior for gratuitous ARP frames with an IPv4 address that is not already present in the ARP table:<br><br><ul><li><code>0</code> - Do not create new entries in the ARP table.</li><li><code>1</code> - Create new entries in the ARP table.</li></ul></td>
</tr>
<tr>
  <td><code>net.ipv4.conf.IFNAME.arp_notify</code></td>
  <td>Defines the mode for notification of IPv4 address and device changes.</td>
</tr>
<tr>
  <td><code>net.ipv4.conf.IFNAME.disable_policy</code></td>
  <td>Disables IPSEC policy (SPD) for this IPv4 interface.</td>
</tr>
<tr>
  <td><code>net.ipv4.conf.IFNAME.secure_redirects</code></td>
  <td>Accepts ICMP redirect messages only to gateways listed in the interface’s current gateway list.</td>
</tr>
<tr>
  <td><code>net.ipv4.conf.IFNAME.send_redirects</code></td>
  <td>Sends redirects only if the node acts as a router. That is, a host should not send an ICMP redirect message. It is used by routers to notify the host about a better routing path that is available for a particular destination.</td>
</tr>
<tr>
  <td><code>net.ipv6.conf.IFNAME.accept_ra</code></td>
  <td>Accepts IPv6 Router advertisements; autoconfigure using them. It also determines whether or not to transmit router solicitations. Router solicitations are transmitted only if the functional setting is to accept router advertisements.</td>
</tr>
<tr>
  <td><code>net.ipv6.conf.IFNAME.accept_redirects</code></td>
  <td>Accepts IPv6 ICMP redirect messages.</td>
</tr>
<tr>
  <td><code>net.ipv6.conf.IFNAME.accept_source_route</code></td>
  <td>Accepts IPv6 packets with SRR option.</td>
</tr>
<tr>
  <td><code>net.ipv6.conf.IFNAME.arp_accept</code></td>
  <td>Defines the behavior for gratuitous ARP frames with an IPv6 address that is not already present in the ARP table:<br><br><ul><li><code>0</code> - Do not create new entries in the ARP table.</li><li><code>1</code> - Create new entries in the ARP table.</li></ul></td>
</tr>
<tr>
  <td><code>net.ipv6.conf.IFNAME.arp_notify</code></td>
  <td>Defines the mode for notification of IPv6 address and device changes.</td>
</tr>
<tr>
  <td><code>net.ipv6.neigh.IFNAME.base_reachable_time_ms</code></td>
  <td>Controls the hardware address to IP mapping lifetime in the neighbor table for IPv6.</td>
</tr>
<tr>
  <td><code>net.ipv6.neigh.IFNAME.retrans_time_ms</code></td>
  <td>Sets the retransmit timer for neighbor discovery messages.</td>
</tr>
</tbody>
</table>


:::note

When setting these values using the `tuning` CNI plugin, use the value `IFNAME` literally. The interface name is represented by the `IFNAME` token, and is replaced with the actual name of the interface at runtime.

:::