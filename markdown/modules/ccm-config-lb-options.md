{%- set _mod_docs_content_type = "REFERENCE" %}
# Load balancer options {id="ccm-config-lb-options_{{ context }}"}

You can configure load balancer options to control how the Cloud Controller Manager (CCM) creates and manages {{ rh_openstack }} Octavia load balancers for services in your cluster. {._abstract}


:::note

Neutron-LBaaS support is deprecated.

:::


<table>
<thead>
<tr>
  <th>Option</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>enabled</code></td>
  <td>Enables the <code>LoadBalancer</code> service type integration. The default value is <code>true</code>.</td>
</tr>
<tr>
  <td><code>floating-network-id</code></td>
  <td>Optional. The external network used to create floating IP addresses for load balancer virtual IP addresses (VIPs). If there are multiple external networks in the cloud, you must set this option or specify the <code>loadbalancer.openstack.org/floating-network-id</code> label in the service annotation.</td>
</tr>
<tr>
  <td><code>floating-subnet-id</code></td>
  <td>Optional. The external network subnet used to create floating IP addresses for the load balancer VIP. Can be overridden by the service annotation <code>loadbalancer.openstack.org/floating-subnet-id</code>.</td>
</tr>
<tr>
  <td><code>floating-subnet</code></td>
  <td>Optional. A name pattern (glob or regular expression if starting with <code>~</code>) for the external network subnet used to create floating IP addresses for the load balancer VIP. Can be overridden by the service annotation <code>loadbalancer.openstack.org/floating-subnet</code>. If multiple subnets match the pattern, the first one with available IP addresses is used.</td>
</tr>
<tr>
  <td><code>floating-subnet-tags</code></td>
  <td>Optional. Tags for the external network subnet used to create floating IP addresses for the load balancer VIP. Can be overridden by the service annotation <code>loadbalancer.openstack.org/floating-subnet-tags</code>. If multiple subnets match these tags, the first one with available IP addresses is used.<br><br>If the {{ rh_openstack }} network is configured with sharing disabled, for example, with the <code>--no-share</code> flag used during creation, this option is unsupported. Set the network to share to use this option.</td>
</tr>
<tr>
  <td><code>lb-method</code></td>
  <td>The load balancing algorithm used to create the load balancer pool. For the Amphora provider the value can be <code>ROUND_ROBIN</code>, <code>LEAST_CONNECTIONS</code>, or <code>SOURCE_IP</code>. The default value is <code>ROUND_ROBIN</code>.<br><br>For the OVN provider, only the <code>SOURCE_IP_PORT</code> algorithm is supported.<br><br>For the Amphora provider, if using the <code>LEAST_CONNECTIONS</code> or <code>SOURCE_IP</code> methods, configure the <code>create-monitor</code> option as <code>true</code> in the <code>cloud-provider-config</code> config map on the <code>openshift-config</code> namespace and <code>ETP:Local</code> on the load-balancer type service to allow balancing algorithm enforcement in the client to service endpoint connections.</td>
</tr>
<tr>
  <td><code>lb-provider</code></td>
  <td>Optional. Used to specify the provider of the load balancer, for example, <code>amphora</code> or <code>octavia</code>. Only the Amphora and Octavia providers are supported.</td>
</tr>
<tr>
  <td><code>lb-version</code></td>
  <td>Optional. The load balancer API version. Only <code>"v2"</code> is supported.</td>
</tr>
<tr>
  <td><code>subnet-id</code></td>
  <td>The ID of the Networking service subnet on which load balancer VIPs are created. For dual stack deployments, leave this option unset. The OpenStack cloud provider automatically selects which subnet to use for a load balancer.</td>
</tr>
<tr>
  <td><code>network-id</code></td>
  <td>The ID of the Networking service network on which load balancer VIPs are created. Unnecessary if <code>subnet-id</code> is set. If this property is not set, the network is automatically selected based on the network that cluster nodes use.</td>
</tr>
<tr>
  <td><code>create-monitor</code></td>
  <td>Creates a health monitor for the service load balancer. A health monitor is required for services that declare <code>externalTrafficPolicy: Local</code>. The default value is <code>false</code>.<br><br>This option is unsupported if you use {{ rh_openstack }} earlier than version 17 with the <code>ovn</code> provider.</td>
</tr>
<tr>
  <td><code>monitor-delay</code></td>
  <td>The interval in seconds by which probes are sent to members of the load balancer. The default value is <code>5</code>.</td>
</tr>
<tr>
  <td><code>monitor-max-retries</code></td>
  <td>The number of successful checks that are required to change the operating status of a load balancer member to <code>ONLINE</code>. The valid range is <code>1</code> to <code>10</code>, and the default value is <code>1</code>.</td>
</tr>
<tr>
  <td><code>monitor-timeout</code></td>
  <td>The time in seconds that a monitor waits to connect to the back end before it times out. The default value is <code>3</code>.</td>
</tr>
<tr>
  <td><code>internal-lb</code></td>
  <td>Whether or not to create an internal load balancer without floating IP addresses. The default value is <code>false</code>.</td>
</tr>
<tr>
  <td><code>LoadBalancerClass "ClassName"</code></td>
  <td>This is a config section that comprises a set of options:<br><br><ul><li><code>floating-network-id</code></li><li><code>floating-subnet-id</code></li><li><code>floating-subnet</code></li><li><code>floating-subnet-tags</code></li><li><code>network-id</code></li><li><code>subnet-id</code></li></ul>The behavior of these options is the same as that of the identically named options in the load balancer section of the CCM config file.<br><br>You can set the <code>ClassName</code> value by specifying the service annotation <code>loadbalancer.openstack.org/class</code>.</td>
</tr>
<tr>
  <td><code>max-shared-lb</code></td>
  <td>The maximum number of services that can share a load balancer. The default value is <code>2</code>.</td>
</tr>
</tbody>
</table>