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
<tbody>
<tr>
  <td>vCPU</td>
  {% if not upi %}<td>44</td>{% endif %}
  {% if upi %}<td>40</td>{% endif %}
  <td>20 per region</td>
  {% if not upi %}<td>A default cluster requires 44 vCPUs, so you must increase the account limit.<br><br>By default, each cluster creates the following instances:<br><br><ul><li>One bootstrap machine, which is removed after installation</li><li>Three control plane machines</li><li>Three compute machines</li></ul> {% if not upi %} Because the bootstrap and control plane machines use <code>Standard_D8s_v3</code> virtual machines, which use 8 vCPUs, and the compute machines use <code>Standard_D4s_v3</code> virtual machines, which use 4 vCPUs, a default cluster requires 44 vCPUs. The bootstrap node VM, which uses 8 vCPUs, is used only during installation. {% endif %} {% if upi %} Because the bootstrap machine uses <code>Standard_D4s_v3</code> machines, which use 4 vCPUs, the control plane machines use <code>Standard_D8s_v3</code> virtual machines, which use 8 vCPUs, and the worker machines use <code>Standard_D4s_v3</code> virtual machines, which use 4 vCPUs, a default cluster requires 40 vCPUs. The bootstrap node VM, which uses 4 vCPUs, is used only during installation. {% endif %} <br><br>To deploy more worker nodes, enable autoscaling, deploy large workloads, or use a different instance type, you must further increase the vCPU limit for your account to ensure that your cluster can deploy the machines that you require.</td>{% endif %}
  {% if upi %}<td>A default cluster requires 40 vCPUs, so you must increase the account limit.<br><br>By default, each cluster creates the following instances:<br><br><ul><li>One bootstrap machine, which is removed after installation</li><li>Three control plane machines</li><li>Three compute machines</li></ul> {% if not upi %} Because the bootstrap and control plane machines use <code>Standard_D8s_v3</code> virtual machines, which use 8 vCPUs, and the compute machines use <code>Standard_D4s_v3</code> virtual machines, which use 4 vCPUs, a default cluster requires 44 vCPUs. The bootstrap node VM, which uses 8 vCPUs, is used only during installation. {% endif %} {% if upi %} Because the bootstrap machine uses <code>Standard_D4s_v3</code> machines, which use 4 vCPUs, the control plane machines use <code>Standard_D8s_v3</code> virtual machines, which use 8 vCPUs, and the worker machines use <code>Standard_D4s_v3</code> virtual machines, which use 4 vCPUs, a default cluster requires 40 vCPUs. The bootstrap node VM, which uses 4 vCPUs, is used only during installation. {% endif %} <br><br>To deploy more worker nodes, enable autoscaling, deploy large workloads, or use a different instance type, you must further increase the vCPU limit for your account to ensure that your cluster can deploy the machines that you require.</td>{% endif %}
</tr>
<tr>
  <td>OS Disk</td>
  <td>7</td>
  <td></td>
  <td>Each cluster machine must have a minimum of 100 GB of storage and 300 IOPS.<dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>Faster storage is recommended for production clusters and clusters with intensive workloads. For more information about optimizing storage for performance, see the page titled "Optimizing storage" in the "Scalability and performance" section.</dd></dl></td>
</tr>
<tr>
  <td>VNet</td>
  <td>1</td>
  <td>1000 per region</td>
  <td>Each default cluster requires one Virtual Network (VNet), which contains two subnets.</td>
</tr>
<tr>
  <td>Network interfaces</td>
  <td>7</td>
  <td>65,536 per region</td>
  <td>Each default cluster requires seven network interfaces. If you create more machines or your deployed workloads create load balancers, your cluster uses more network interfaces.</td>
</tr>
<tr>
  <td>Network security groups</td>
  <td>2</td>
  <td>5000</td>
  <td>Each cluster creates network security groups for each subnet in the VNet. The default cluster creates network security groups for the control plane and for the compute node subnets:<br><br><dl><dt><code>controlplane</code></dt><dd>Allows the control plane machines to be reached on port 6443 from anywhere</dd><dt><code>node</code></dt><dd>Allows worker nodes to be reached from the internet on ports 80 and 443</dd></dl></td>
</tr>
<tr>
  <td>Network load balancers</td>
  <td>3</td>
  <td>1000 per region</td>
  <td>Each cluster creates the following <a href="https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview">load balancers</a>:<br><br><dl><dt><code>default</code></dt><dd>Public IP address that load balances requests to ports 80 and 443 across worker machines</dd><dt><code>internal</code></dt><dd>Private IP address that load balances requests to ports 6443 and 22623 across control plane machines</dd><dt><code>external</code></dt><dd>Public IP address that load balances requests to port 6443 across control plane machines</dd></dl>If your applications create more Kubernetes <code>LoadBalancer</code> service objects, your cluster uses more load balancers.</td>
</tr>
<tr>
  <td>Public IP addresses</td>
  <td>3</td>
  <td></td>
  <td>Each of the two public load balancers uses a public IP address. The bootstrap machine also uses a public IP address so that you can SSH into the machine to troubleshoot issues during installation. The IP address for the bootstrap node is used only during installation.</td>
</tr>
<tr>
  <td>Private IP addresses</td>
  <td>7</td>
  <td></td>
  <td>The internal load balancer, each of the three control plane machines, and each of the three worker machines each use a private IP address.</td>
</tr>
<tr>
  <td>Spot VM vCPUs (optional)</td>
  <td>0<br><br>If you configure spot VMs, your cluster must have two spot VM vCPUs for every compute node.</td>
  <td>20 per region</td>
  <td>This is an optional component. To use spot VMs, you must increase the Azure default limit to at least twice the number of compute nodes in your cluster.<dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>Using spot VMs for control plane nodes is not recommended.</dd></dl></td>
</tr>
</tbody>
</table>

{% endif %}

{% if ash %}
<table>
<thead>
<tr>
  <th>Component</th>
  <th>Number of components required by default</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>vCPU</td>
  <td>56</td>
  <td>A default cluster requires 56 vCPUs, so you must increase the account limit.<br><br>By default, each cluster creates the following instances:<br><br><ul><li>One bootstrap machine, which is removed after installation</li><li>Three control plane machines</li><li>Three compute machines</li></ul>Because the bootstrap, control plane, and worker machines use <code>Standard_DS4_v2</code> virtual machines, which use 8 vCPUs, a default cluster requires 56 vCPUs. The bootstrap node VM is used only during installation.<br><br>To deploy more worker nodes, enable autoscaling, deploy large workloads, or use a different instance type, you must further increase the vCPU limit for your account to ensure that your cluster can deploy the machines that you require.</td>
</tr>
<tr>
  <td>VNet</td>
  <td>1</td>
  <td>Each default cluster requires one Virtual Network (VNet), which contains two subnets.</td>
</tr>
<tr>
  <td>Network interfaces</td>
  <td>7</td>
  <td>Each default cluster requires seven network interfaces. If you create more machines or your deployed workloads create load balancers, your cluster uses more network interfaces.</td>
</tr>
<tr>
  <td>Network security groups</td>
  <td>2</td>
  <td>Each cluster creates network security groups for each subnet in the VNet. The default cluster creates network security groups for the control plane and for the compute node subnets:<br><br><dl><dt><code>controlplane</code></dt><dd>Allows the control plane machines to be reached on port 6443 from anywhere</dd><dt><code>node</code></dt><dd>Allows worker nodes to be reached from the internet on ports 80 and 443</dd></dl></td>
</tr>
<tr>
  <td>Network load balancers</td>
  <td>3</td>
  <td>Each cluster creates the following <a href="https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview">load balancers</a>:<br><br><dl><dt><code>default</code></dt><dd>Public IP address that load balances requests to ports 80 and 443 across worker machines</dd><dt><code>internal</code></dt><dd>Private IP address that load balances requests to ports 6443 and 22623 across control plane machines</dd><dt><code>external</code></dt><dd>Public IP address that load balances requests to port 6443 across control plane machines</dd></dl>If your applications create more Kubernetes <code>LoadBalancer</code> service objects, your cluster uses more load balancers.</td>
</tr>
<tr>
  <td>Public IP addresses</td>
  <td>2</td>
  <td>The public load balancer uses a public IP address. The bootstrap machine also uses a public IP address so that you can SSH into the machine to troubleshoot issues during installation. The IP address for the bootstrap node is used only during installation.</td>
</tr>
<tr>
  <td>Private IP addresses</td>
  <td>7</td>
  <td>The internal load balancer, each of the three control plane machines, and each of the three worker machines each use a private IP address.</td>
</tr>
</tbody>
</table>

{% endif %}

To increase an account limit, file a support request on the Azure portal. For more information, see [Request a quota limit increase for Azure Deployment Environments resources](https://learn.microsoft.com/en-us/azure/deployment-environments/how-to-request-quota-increase).

{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = "" -%}
{%- set upi = "" -%}
{% endif %}
{% if context == "installing-azure-stack-hub-account" %}
{%- set ash = "" -%}
{%- set upi = "" -%}
{% endif %}
{% if context == "installing-azure-user-infra" %}
{%- set upi = "" -%}
{% endif %}
{% if context == "installing-azure-account" %}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{% endif %}