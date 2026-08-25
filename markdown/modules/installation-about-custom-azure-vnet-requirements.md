{% if context == "installing-azure-government-region" %}
{%- set azure = true -%}
{% endif %}
{% if context == "installing-azure-private" %}
{%- set azure_private = true -%}
{% endif %}
{% if context == "installing-azure-vnet" %}
{%- set azure = true -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-installer-provisioned" %}
{%- set azure = true -%}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Requirements for using your VNet {id="installation-about-custom-azure-vnet-requirements_{{ context }}"}

When you deploy a cluster by using an existing VNet, you must perform additional network configuration before you install the cluster. In installer-provisioned infrastructure clusters, the installation program usually creates the following components, but it does not create them when you install into an existing VNet: {._abstract}

*   Subnets
*   Route tables
*   VNets
*   Network Security Groups

{% include "./snippets/custom-dns-server.md" %}

If you use a custom VNet, you must correctly configure it and its subnets for the installation program and the cluster to use. The installation program cannot subdivide network ranges for the cluster to use, set route tables for the subnets, or set VNet options like DHCP, so you must do so before you install the cluster.

The cluster must be able to access the resource group that contains the existing VNet and subnets. While all of the resources that the cluster creates are placed in a separate resource group that it creates, some network resources are used from a separate group. Some cluster Operators must be able to access resources in both resource groups. For example, the Machine API controller attaches NICs for the virtual machines that it creates to subnets from the networking resource group.

Your VNet must meet the following characteristics:

*   The VNet’s CIDR block must contain the `Networking.MachineCIDR` range, which is the IP address pool for cluster machines.
*   The VNet and its subnets must belong to the same resource group, and the subnets must be configured to use Azure-assigned DHCP IP addresses instead of static IP addresses.

You must provide two subnets within your VNet, one for the control plane machines and one for the compute machines. Because Azure distributes machines in different availability zones within the region that you specify, your cluster will have high availability by default.


:::note

By default, if you specify availability zones in the `install-config.yaml` file, the installation program distributes the control plane machines and the compute machines across availability zones within a region. To ensure high availability for your cluster, select a region with at least three availability zones. If your region contains fewer than three availability zones, the installation program places more than one control plane machine in the available zones. For more information, see "Availability zones" and "Regions".

:::


To ensure that the subnets that you provide are suitable, the installation program confirms the following data:

*   All the specified subnets exist.
*   There are two private subnets, one for the control plane machines and one for the compute machines.
*   The subnet CIDRs belong to the machine CIDR that you specified. Machines are not provisioned in availability zones that you do not provide private subnets for.
{%- if azure %}
If required, the installation program creates public load balancers that manage the control plane and worker nodes, and Azure allocates a public IP address to them.
{%- endif %}


:::note

If you destroy a cluster that uses an existing VNet, the VNet is not deleted.

:::


## Network security group requirements {id="installation-about-custom-azure-vnet-nsg-requirements_{{ context }}"}

The network security groups for the subnets that host the compute and control plane machines require specific access to ensure that the cluster communication is correct. You must create rules to allow access to the required cluster communication ports.


:::important

The network security group rules must be in place before you install the cluster. If you attempt to install a cluster without the required access, the installation program cannot reach the Azure APIs, and installation fails.

:::


**Required ports**

<table>
<thead>
<tr>
  <th>Port</th>
  <th>Description</th>
  <th>Control plane</th>
  <th>Compute</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>80</code></td>
  <td>Allows HTTP traffic</td>
  <td></td>
  <td>x</td>
</tr>
<tr>
  <td><code>443</code></td>
  <td>Allows HTTPS traffic</td>
  <td></td>
  <td>x</td>
</tr>
<tr>
  <td><code>6443</code></td>
  <td>Allows communication to the control plane machines</td>
  <td>x</td>
  <td></td>
</tr>
<tr>
  <td><code>22623</code></td>
  <td>Allows internal communication to the machine config server for provisioning machines</td>
  <td>x</td>
  <td></td>
</tr>
<tr>
  {% if restricted %}<td><code>*</code></td>{% endif %}
  {% if restricted %}<td>Allows connections to Azure APIs. You must set a Destination Service Tag to <code>AzureCloud</code>. <sup>[1]</sup></td>{% endif %}
  {% if restricted %}<td>x</td>{% endif %}
  {% if restricted %}<td>x</td>{% endif %}
</tr>
<tr>
  {% if restricted %}<td><code>*</code></td>{% endif %}
  {% if restricted %}<td>Denies connections to the internet. You must set a Destination Service Tag to <code>Internet</code>. <sup>[1]</sup></td>{% endif %}
  {% if restricted %}<td>x</td>{% endif %}
  {% if restricted %}<td>x</td>{% endif %}
</tr>
</tbody>
</table>

1.  If you are using Azure Firewall to restrict the internet access, then you can configure Azure Firewall to allow the Azure APIs. A network security group rule is not needed. For more information, see "Configuring your firewall" in "Additional resources".

{% include "./snippets/mcs-endpoint-limitation.md" %}

Because cluster components do not modify the user-provided network security groups, which the Kubernetes controllers update, a pseudo-network security group is created for the Kubernetes controller to modify without impacting the rest of the environment.

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
  <td rowspan="3">TCP</td>
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
  <td>Network Time Protocol (NTP) on UDP port <code>123</code>. If you configure an external NTP time server, you must open UDP port <code>123</code>.</td>
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

{% if context == "installing-azure-government-region" %}
{%- set azure = "" -%}
{% endif %}
{% if context == "installing-azure-private" %}
{%- set azure_private = "" -%}
{% endif %}
{% if context == "installing-azure-vnet" %}
{%- set azure = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-installer-provisioned" %}
{%- set azure = "" -%}
{%- set restricted = "" -%}
{% endif %}