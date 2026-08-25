{% if context == "installing-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z_restricted = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z_restricted = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-azure-user-infra" %}
{%- set azure = true -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set azure = true -%}
{% endif %}
{% if context == "installing-gcp-user-infra" %}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-gcp-user-infra-vpc" %}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp" %}
{%- set gcp = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set azure = true -%}
{% endif %}
{% if context == "upi-vsphere-installation-reqs" %}
{%- set vsphere = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Networking requirements for user-provisioned infrastructure {id="installation-network-user-infra_{{ context }}"}

You must configure networking for all the {{ op_system_first }} machines in `initramfs` during boot, so that they can fetch their Ignition config files. {._abstract}

{% if vsphere %}

:::important

Ensure you enable the `disk.EnableUUID` parameter on all virtual machines in your cluster.

:::

{% endif %}

{% if not (azure or gcp) %}
{% if ibm_z %}
During the initial boot, the machines require an HTTP or HTTPS server to
establish a network connection to download their Ignition config files.

The machines are configured with static IP addresses. No DHCP server is required. Ensure that the machines have persistent IP addresses and hostnames.
{% endif %}
{% if not ibm_z %}
During the initial boot, the machines require an IP address configuration that is set either through a DHCP server or statically by providing the required boot options. After a network connection is established, the machines download their Ignition config files from an HTTP or HTTPS server. The Ignition config files are then used to set the exact state of each machine. The Machine Config Operator completes more changes to the machines, such as the application of new certificates or keys, after installation.


:::note

*   Consider using a DHCP server for long-term management of the cluster machines. Ensure that the DHCP server is configured to provide persistent IP addresses, DNS server information, and hostnames to the cluster machines.
*   If a DHCP service is not available for your user-provisioned infrastructure, you can instead provide the IP networking configuration and the address of the DNS server to the nodes at {{ op_system }} install time. These can be passed as boot arguments if you are installing from an ISO image. See the _Installing {{ op_system }} and starting the {{ product_title }} bootstrap process_ section for more information about static IP provisioning and advanced networking options.

:::

{% endif %}

The Kubernetes API server must be able to resolve the node names of the cluster machines. If the API servers and worker nodes are in different zones, you can configure a default DNS search zone to allow the API server to resolve the node names. Another supported approach is to always refer to hosts by their fully-qualified domain names in both the node objects and all DNS requests.
{% endif %}

{% if not (ibm_z or azure) %}
## Setting the cluster node hostnames through DHCP {id="installation-host-names-dhcp-user-infra_{{ context }}"}

On {{ op_system_first }} machines, the hostname is set through NetworkManager. By default, the machines obtain their hostname through DHCP. If the hostname is not provided by DHCP, set statically through kernel arguments, or another method, it is obtained through a reverse DNS lookup. Reverse DNS lookup occurs after the network has been initialized on a node and can take time to resolve. Other system services can start prior to this and detect the hostname as `localhost` or similar. You can avoid this by using DHCP to provide the hostname for each cluster node.

Additionally, setting the hostnames through DHCP can bypass any manual DNS record name configuration errors in environments that have a DNS split-horizon implementation.
{% endif %}

## Network connectivity requirements {id="installation-network-connectivity-user-infra_{{ context }}"}

You must configure the network connectivity between machines to allow {{ product_title }} cluster components to communicate. Each machine must be able to resolve the hostnames of all other machines in the cluster.

This section provides details about the ports that are required.

{% if not (restricted or origin) %}

:::important

In connected {{ product_title }} environments, all nodes are required to have internet access to pull images
for platform containers and provide telemetry data to Red Hat.

:::


{% endif %}

{% if ibm_z %}

:::note

In a {{ op_system_base }} KVM environment the host must be configured to use bridged networking in libvirt or MacVTap to connect the network to the virtual machines. The virtual machines must have access to the network, which is attached to the {{ op_system_base }} KVM host. Virtual Networks, for example network address translation (NAT), within KVM are not a supported configuration.

:::

{% endif %}

**Ports used for all-machine to all-machine communications**

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
  <td>ICMP</td>
  <td>N/A</td>
  <td>Network reachability tests</td>
</tr>
<tr>
  <td rowspan="4">TCP</td>
  <td><code>1936</code></td>
  <td>Metrics</td>
</tr>
<tr>
  <td><code>9000</code>-<code>9999</code></td>
  <td>Host level services, including the node exporter on ports <code>9100</code>-<code>9101</code> and the Cluster Version Operator on port <code>9099</code>.</td>
</tr>
<tr>
  <td><code>10250</code>-<code>10259</code></td>
  <td>The default ports that Kubernetes reserves</td>
</tr>
<tr>
  <td><code>22623</code></td>
  <td>The port handles traffic from the Machine Config Server and directs the traffic to the control plane machines.</td>
</tr>
<tr>
  <td rowspan="5">UDP</td>
  <td><code>6081</code></td>
  <td>Geneve</td>
</tr>
<tr>
  <td><code>9000</code>-<code>9999</code></td>
  <td>Host level services, including the node exporter on ports <code>9100</code>-<code>9101</code>.</td>
</tr>
<tr>
  <td><code>500</code></td>
  <td>IPsec IKE packets</td>
</tr>
<tr>
  <td><code>4500</code></td>
  <td>IPsec NAT-T packets</td>
</tr>
<tr>
  <td><code>123</code></td>
  <td>Network Time Protocol (NTP) on UDP port <code>123</code>. If an external NTP time server is configured, you must open UDP port <code>123</code>.</td>
</tr>
<tr>
  <td>TCP/UDP</td>
  <td><code>30000</code>-<code>32767</code></td>
  <td>Kubernetes node port</td>
</tr>
<tr>
  <td>ESP</td>
  <td>N/A</td>
  <td>IPsec Encapsulating Security Payload (ESP)</td>
</tr>
</tbody>
</table>

**Ports used for all-machine to control plane communications**

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

**Ports used for control plane machine to control plane machine communications**

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

{% if not (azure or gcp) %}

## NTP configuration for user-provisioned infrastructure {id="_ntp_configuration_for_user-provisioned_infrastructure"}

{{ product_title }} clusters are configured to use a public Network Time Protocol (NTP) server by default. If you want to use a local enterprise NTP server, or if your cluster is being deployed in a disconnected network, you can configure the cluster to use a specific time server. For more information, see the documentation for _Configuring chrony time service_.

{% if not (ibm_z or ibm_z_restricted) %}
If a DHCP server provides NTP server information, the chrony time service on the {{ op_system_first }} machines read the information and can sync the clock with the NTP servers.
{% endif %}
{% endif %}

{% if context == "installing-ibm-z" %}
{%- set ibm_z = "" -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z_restricted = "" -%}
{%- set restricted = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set restricted = "" -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z_restricted = "" -%}
{%- set restricted = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set restricted = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = "" -%}
{% endif %}
{% if context == "installing-azure-user-infra" %}
{%- set azure = "" -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set azure = "" -%}
{% endif %}
{% if context == "installing-gcp-user-infra" %}
{%- set gcp = "" -%}
{% endif %}
{% if context == "installing-gcp-user-infra-vpc" %}
{%- set gcp = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp" %}
{%- set gcp = "" -%}
{%- set restricted = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set azure = "" -%}
{% endif %}
{% if context == "upi-vsphere-installation-reqs" %}
{%- set vsphere = "" -%}
{% endif %}