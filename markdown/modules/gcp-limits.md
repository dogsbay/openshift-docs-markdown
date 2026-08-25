{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ gcp_short }} account limits {id="gcp-limits_{{ context }}"}

The {{ product_title }} cluster uses a number of {{ gcp_first }} components, but the default [quotas](https://cloud.google.com/docs/quota) do not affect your ability to install an {{ product_title }} cluster.

A standard {{ product_title }} cluster uses the following resources. Note that some resources are required only during the bootstrap process and are removed after the cluster deploys.


:::note

3 subnets are required to deploy a private cluster with Private Service Connect (PSC). These subnets are a control plane subnet, a worker subnet, and a subnet used for the PSC service attachment with the purpose set to Private Service Connect.

48 vCPUs for a default multi-AZ {{ product_title }} cluster consists of 3 compute nodes (4 vCPUs each, one per availability zone), 3 infra nodes (4 vCPU each), and 3 control plane nodes (8 vCPU each).

40 vCPUs for a default single-AZ {{ product_title }} cluster consists of 2 compute nodes (4 vCPUs each), 2 infra nodes (4 vCPU each) and 3 control plane nodes (8 vCPU each).

:::


**{{ gcp_short }} resources used in a default cluster**

<table>
<thead>
<tr>
  <th>Service</th>
  <th>Component</th>
  <th>Location</th>
  <th>Total resources required</th>
  <th>Resources removed after bootstrap</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Service account</td>
  <td>IAM</td>
  <td>Global</td>
  <td>10</td>
  <td>0</td>
</tr>
<tr>
  <td>Firewall Rules</td>
  <td>Compute</td>
  <td>Global</td>
  <td>11</td>
  <td>1</td>
</tr>
<tr>
  <td>Forwarding Rules</td>
  <td>Compute</td>
  <td>Global</td>
  <td>2</td>
  <td>0</td>
</tr>
<tr>
  <td>In-use global IP addresses</td>
  <td>Compute</td>
  <td>Global</td>
  <td>4</td>
  <td>1</td>
</tr>
<tr>
  <td>Health checks</td>
  <td>Compute</td>
  <td>Global</td>
  <td>3</td>
  <td>0</td>
</tr>
<tr>
  <td>Images</td>
  <td>Compute</td>
  <td>Global</td>
  <td>1</td>
  <td>0</td>
</tr>
<tr>
  <td>Networks</td>
  <td>Compute</td>
  <td>Global</td>
  <td>2</td>
  <td>0</td>
</tr>
<tr>
  <td>Static IP addresses</td>
  <td>Compute</td>
  <td>Region</td>
  <td>4</td>
  <td>1</td>
</tr>
<tr>
  <td>Routers</td>
  <td>Compute</td>
  <td>Global</td>
  <td>1</td>
  <td>0</td>
</tr>
<tr>
  <td>Routes</td>
  <td>Compute</td>
  <td>Global</td>
  <td>2</td>
  <td>0</td>
</tr>
<tr>
  <td>Subnetworks</td>
  <td>Compute</td>
  <td>Global</td>
  <td>3</td>
  <td>0</td>
</tr>
<tr>
  <td>Target Pools</td>
  <td>Compute</td>
  <td>Global</td>
  <td>3</td>
  <td>0</td>
</tr>
<tr>
  <td>CPUs</td>
  <td>Compute</td>
  <td>Region</td>
  <td>48</td>
  <td>4</td>
</tr>
<tr>
  <td>Persistent Disk SSD (GB)</td>
  <td>Compute</td>
  <td>Region</td>
  <td>1060</td>
  <td>128</td>
</tr>
</tbody>
</table>


:::note

If any of the quotas are insufficient during installation, the installation program displays an error that states both which quota was exceeded and the region.

:::


Be sure to consider your actual cluster size, planned cluster growth, and any usage from other clusters that are associated with your account. The CPU, Static IP addresses, and Persistent Disk SSD (Storage) quotas are the ones that are most likely to be insufficient.

If you plan to deploy your cluster in one of the following regions, you will exceed the maximum storage quota and are likely to exceed the CPU quota limit:

*   asia-east2
*   asia-northeast2
*   asia-south1
*   australia-southeast1
*   europe-north1
*   europe-west2
*   europe-west3
*   europe-west6
*   northamerica-northeast1
*   southamerica-east1
*   us-west2

You can increase resource quotas from the [{{ gcp_short }} console](https://console.cloud.google.com/iam-admin/quotas), but you might need to file a support ticket. Be sure to plan your cluster size early so that you can allow time to resolve the support ticket before you install your {{ product_title }} cluster.