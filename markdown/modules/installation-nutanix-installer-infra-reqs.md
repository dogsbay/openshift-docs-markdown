{%- set _mod_docs_content_type = "CONCEPT" %}
# Environment requirements {id="installation-nutanix-installer-infra-reqs_{{ context }}"}

Before you install an {{ product_title }} cluster, verify that your infrastructure, account privileges, and network configuration meet the Nutanix AOS environment requirements needed for a successful installation. {._abstract}

## Infrastructure requirements {id="installation-nutanix-installer-infrastructure-reqs_{{ context }}"}

You can install {{ product_title }} on on-premise Nutanix clusters, Nutanix Cloud Clusters (NC2) on {{ aws_first }}, or NC2 on {{ azure_first }}.

## Required account privileges {id="installation-nutanix-installer-infra-reqs-account_{{ context }}"}

The installation program requires access to a Nutanix account with the necessary permissions to deploy the cluster and to maintain the daily operation of it. The following options are available to you:

*   You can use a local Prism Central user account with administrative privileges. Using a local account is the quickest way to grant access to an account with the required permissions.
*   If your organization’s security policies require that you use a more restrictive set of permissions, use the permissions that are listed in the following table to create a custom Cloud Native role in Prism Central. You can then assign the role to a user account that is a member of a Prism Central authentication directory.

Consider the following when managing this user account:

*   When assigning entities to the role, ensure that the user can access only the Prism Element and subnet that are required to deploy the virtual machines.
*   Ensure that the user is a member of the project to which it needs to assign virtual machines.

**Required permissions for creating a Custom Cloud Native role**

<table>
<thead>
<tr>
  <th>Nutanix Object</th>
  <th>When required</th>
  <th>Required permissions in Nutanix API</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Categories</td>
  <td>Always</td>
  <td><ul><li><code>Create_Category_Mapping</code></li><li><code>Create_Or_Update_Name_Category</code></li><li><code>Create_Or_Update_Value_Category</code></li><li><code>Delete_Category_Mapping</code></li><li><code>Delete_Name_Category</code></li><li><code>Delete_Value_Category</code></li><li><code>View_Category_Mapping</code></li><li><code>View_Name_Category</code></li><li><code>View_Value_Category</code></li></ul></td>
  <td>Create, read, and delete categories that are assigned to the {{ product_title }} machines.</td>
</tr>
<tr>
  <td>Images</td>
  <td>Always</td>
  <td><ul><li><code>Create_Image</code></li><li><code>Delete_Image</code></li><li><code>View_Image</code></li></ul></td>
  <td>Create, read, and delete the operating system images used for the {{ product_title }} machines.</td>
</tr>
<tr>
  <td>Virtual Machines</td>
  <td>Always</td>
  <td><ul><li><code>Create_Virtual_Machine</code></li><li><code>Delete_Virtual_Machine</code></li><li><code>View_Virtual_Machine</code></li></ul></td>
  <td>Create, read, and delete the {{ product_title }} machines.</td>
</tr>
<tr>
  <td>Clusters</td>
  <td>Always</td>
  <td><code>View_Cluster</code></td>
  <td>View the Prism Element clusters that host the {{ product_title }} machines.</td>
</tr>
<tr>
  <td>Subnets</td>
  <td>Always</td>
  <td><code>View_Subnet</code></td>
  <td>View the subnets that host the {{ product_title }} machines.</td>
</tr>
<tr>
  <td>Projects</td>
  <td>If you will associate a project with compute machines, control plane machines, or all machines.</td>
  <td><code>View_Project</code></td>
  <td>View the projects defined in Prism Central and allow a project to be assigned to the {{ product_title }} machines.</td>
</tr>
<tr>
  <td>Tasks</td>
  <td>Always</td>
  <td><code>View_Task</code></td>
  <td>Fetch and view tasks on the Prism Element that contain {{ product_title }} machines and nodes.</td>
</tr>
<tr>
  <td>Hosts</td>
  <td>If you use GPUs with compute machines.</td>
  <td><code>View_Host</code></td>
  <td>Fetch and view hosts on the Prism Element that have GPUs attached.</td>
</tr>
</tbody>
</table>

## Cluster limits {id="installation-nutanix-installer-infra-reqs-limits_{{ context }}"}

Available resources vary between clusters. The number of possible clusters within a Nutanix environment is limited primarily by available storage space and any limitations associated with the resources that the cluster creates, and resources that you require to deploy the cluster, such a IP addresses and networks.

## Cluster resources {id="installation-nutanix-installer-infra-reqs-resources_{{ context }}"}

A minimum of 800 GB of storage is required to use a standard cluster.

When you deploy a {{ product_title }} cluster that uses installer-provisioned infrastructure, the installation program must be able to create several resources in your Nutanix instance. Although these resources use 856 GB of storage, the bootstrap node is destroyed as part of the installation process.

A standard {{ product_title }} installation creates the following resources:

*   1 label
*   Virtual machines:
    *   1 disk image
    *   1 temporary bootstrap node
    *   3 control plane nodes
    *   3 compute machines

## Networking requirements {id="installation-nutanix-installer-infra-requirements-networking_{{ context }}"}

You must use either AHV IP Address Management (IPAM) or Dynamic Host Configuration Protocol (DHCP) for the network and ensure that it is configured to provide persistent IP addresses to the cluster machines. Additionally, create the following networking resources before you install the {{ product_title }} cluster:

*   IP addresses
*   DNS records

Nutanix Flow Virtual Networking is supported for new cluster installations. To use this feature, enable Flow Virtual Networking on your AHV cluster before installing.


:::note

It is recommended that each {{ product_title }} node in the cluster have access to a Network Time Protocol (NTP) server that is discoverable via DHCP. Installation is possible without an NTP server. However, an NTP server prevents errors typically associated with asynchronous server clocks.

:::


## Required IP Addresses {id="installation-nutanix-installer-infra-reqs-_{{ context }}"}
An installer-provisioned installation requires two static virtual IP (VIP) addresses:

*   A VIP address for the API is required. This address is used to access the cluster API.
*   A VIP address for ingress is required. This address is used for cluster ingress traffic.

You specify these IP addresses when you install the {{ product_title }} cluster.

## DNS records {id="installation-nutanix-installer-infra-reqs-dns-records_{{ context }}"}
You must create DNS records for two static IP addresses in the appropriate DNS server for the Nutanix instance that hosts your {{ product_title }} cluster. In each record, `<cluster_name>` is the cluster name and `<base_domain>` is the cluster base domain that you specify when you install the cluster.

If you use your own DNS or DHCP server, you must also create records for each node, including the bootstrap, control plane, and compute nodes.

A complete DNS record takes the form: `<component>.<cluster_name>.<base_domain>.`.

**Required DNS records**

<table>
<thead>
<tr>
  <th>Component</th>
  <th>Record</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>API VIP</td>
  <td><code>api.&lt;cluster_name&gt;.&lt;base_domain&gt;.</code></td>
  <td>This DNS A/AAAA or CNAME record must point to the load balancer for the control plane machines. This record must be resolvable by both clients external to the cluster and from all the nodes within the cluster.</td>
</tr>
<tr>
  <td>Ingress VIP</td>
  <td><code>*.apps.&lt;cluster_name&gt;.&lt;base_domain&gt;.</code></td>
  <td>A wildcard DNS A/AAAA or CNAME record that points to the load balancer that targets the machines that run the Ingress router pods, which are the worker nodes by default. This record must be resolvable by both clients external to the cluster and from all the nodes within the cluster.</td>
</tr>
</tbody>
</table>

## Additional resources {id="_additional_resources" ._additional-resources}
*   [Nutanix Cloud Clusters on AWS](https://www.nutanix.com/products/nutanix-cloud-clusters/aws)
*   [Nutanix Cloud Clusters on Microsoft Azure](https://www.nutanix.com/products/nutanix-cloud-clusters/azure)
*   [Custom Cloud Native role](https://opendocs.nutanix.com/guides/cloud_native_role/)
*   [Assigning a role](https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Security-Guide:ssp-ssp-role-assignment-pc-t.html)
*   [Adding a user to a project](https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Admin-Center-Guide-vpc_2023_1_0_1:ssp-projects-add-users-t.html)
*   [Flow Virtual Networking overview](https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Flow-Virtual-Networking-Guide-vpc_2024_1:ear-flow-nw-overview-pc.html)