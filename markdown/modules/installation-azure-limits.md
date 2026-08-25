{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = true -%}
{%- set cp = "Azure Stack Hub" -%}
{%- set upi = true -%}
{% endif %}
{% if context == "installing-azure-stack-hub-account" %}
{%- set ash = true -%}
{%- set upi = true -%}
{%- set cp = "Azure Stack Hub" -%}
{% endif %}
{% if context == "installing-azure-user-infra" %}
{%- set cp = "Azure" -%}
{%- set upi = true -%}
{% endif %}
{% if context == "installing-azure-account" %}
{%- set cp = "Azure" -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set cp = "Azure" -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ cp }} account limits {id="installation-azure-limits_{{ context }}"}

{% if not ash %}
The {{ product_title }} cluster uses a number of Microsoft {{ cp }} components. Default subscription and service limits, quotas, and constraints can affect your ability to install {{ product_title }} clusters. {._abstract}

For more information on Azure subscription and service limits, see "Azure subscription and service limits, quotas, and constraints".


:::important

Default limits vary by offer category types, such as Free Trial and Pay-As-You-Go, and by series, such as Dv2, F, and G. For example, the default for Enterprise Agreement subscriptions is 350 cores.

Check the limits for your subscription type and if necessary, increase quota limits for your account before you install a default
cluster on Azure.

:::

{% endif %}
{% if ash %}
The {{ product_title }} cluster uses a number of Microsoft Azure Stack Hub components, and the default [Quota types in Azure Stack Hub](https://docs.microsoft.com/en-us/azure-stack/operator/azure-stack-quota-types?view=azs-2102) affect your ability to install {{ product_title }} clusters.
{% endif %}

The following table summarizes the {{ cp }} components whose limits can impact your
ability to install and run {{ product_title }} clusters.

{% if not ash %}
<table>
<thead>
<tr>
  <th>Component</th>
  <th>Number of components required by default</th>
  <th>Default {{ cp }} limit</th>
  <th>Description</th>
</tr>
</thead>
</table>

|Component |Number of components required by default |Description
{% endif %}

|vCPU
{%- if not ash %}
{% if not upi %}
|44
{% endif %}
{% if upi %}
|40
{%- endif %}
|20 per region
{%- if not upi %}
|A default cluster requires 44 vCPUs, so you must increase the account limit.
{% endif %}
{% if upi %}
|A default cluster requires 40 vCPUs, so you must increase the account limit.
{% endif %}

By default, each cluster creates the following instances:

*   One bootstrap machine, which is removed after installation
*   Three control plane machines
*   Three compute machines

{% if not upi %}
Because the bootstrap and control plane machines use `Standard_D8s_v3` virtual
machines, which use 8 vCPUs, and the compute machines use `Standard_D4s_v3`
virtual machines, which use 4 vCPUs, a default cluster requires 44 vCPUs.
The bootstrap node VM, which uses 8 vCPUs, is used only during installation.
{% endif %}
{% if upi %}
Because the bootstrap machine uses `Standard_D4s_v3` machines, which use 4 vCPUs,
the control plane machines use `Standard_D8s_v3` virtual
machines, which use 8 vCPUs, and the worker machines use `Standard_D4s_v3`
virtual machines, which use 4 vCPUs, a default cluster requires 40 vCPUs.
The bootstrap node VM, which uses 4 vCPUs, is used only during installation.
{% endif %}
{% endif %}
{% if ash %}
|56
|A default cluster requires 56 vCPUs, so you must increase the account limit.

By default, each cluster creates the following instances:

*   One bootstrap machine, which is removed after installation
*   Three control plane machines
*   Three compute machines

Because the bootstrap, control plane, and worker machines use `Standard_DS4_v2` virtual machines, which use 8 vCPUs, a default cluster requires 56 vCPUs. The bootstrap node VM is used only during installation.
{% endif %}

To deploy more worker nodes, enable autoscaling, deploy large workloads, or use
a different instance type, you must further increase the vCPU limit for your
account to ensure that your cluster can deploy the machines that you require.

{% if not ash %}
|OS Disk
|7
|
|Each cluster machine must have a minimum of 100 GB of storage and 300 IOPS.

:::note

Faster storage is recommended for production clusters and clusters with intensive workloads. For more information about optimizing storage for performance, see the page titled "Optimizing storage" in the "Scalability and performance" section.

:::

{% endif %}

|VNet
| 1
{%- if not ash %}
| 1000 per region
{%- endif %}
| Each default cluster requires one Virtual Network (VNet), which contains two
subnets.

|Network interfaces
|7
{%- if not ash %}
|65,536 per region
{%- endif %}
|Each default cluster requires seven network interfaces. If you create more
machines or your deployed workloads create load balancers, your cluster uses
more network interfaces.

|Network security groups
|2
{%- if not ash %}
|5000
{%- endif %}
| Each cluster creates network security groups for each subnet in the VNet.
The default cluster creates network
security groups for the control plane and for the compute node subnets:


`controlplane`
:   Allows the control plane machines to be reached on port 6443
     from anywhere

`node`
:   Allows worker nodes to be reached from the internet on ports 80 and 443

|Network load balancers
| 3
{%- if not ash %}
| 1000 per region
{%- endif %}
|Each cluster creates the following
[load balancers](https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview):


`default`
:   Public IP address that load balances requests to ports 80 and 443 across worker machines

`internal`
:   Private IP address that load balances requests to ports 6443 and 22623 across control plane machines

`external`
:   Public IP address that load balances requests to port 6443 across control plane machines

If your applications create more Kubernetes `LoadBalancer` service objects,
your cluster uses more load balancers.

|Public IP addresses
{%- if not ash %}
|3
|
|Each of the two public load balancers uses a public IP address. The bootstrap
machine also uses a public IP address so that you can SSH into the
machine to troubleshoot issues during installation. The IP address for the
bootstrap node is used only during installation.
{% endif %}
{% if ash %}
|2
|The public load balancer uses a public IP address. The bootstrap
machine also uses a public IP address so that you can SSH into the
machine to troubleshoot issues during installation. The IP address for the
bootstrap node is used only during installation.
{% endif %}

|Private IP addresses
|7
{%- if not ash %}
|
{%- endif %}
|The internal load balancer, each of the three control plane machines, and each
of the three worker machines each use a private IP address.

{% if not ash %}
|Spot VM vCPUs (optional)
|0

If you configure spot VMs, your cluster must have two spot VM vCPUs for every compute node.
|20 per region
|This is an optional component. To use spot VMs, you must increase the Azure default limit to at least twice the number of compute nodes in your cluster.

:::note

Using spot VMs for control plane nodes is not recommended.

:::

{%- endif %}
<table>
</table>