{%- set _mod_docs_content_type = "REFERENCE" %}
# Configuration checks run by the {{ operator_name }} {id="vsphere-problem-detector-config-checks_{{ context }}"}

The following tables identify the configuration checks that the {{ operator_name }} runs. Some checks verify the configuration of the cluster. Other checks verify the configuration of each node in the cluster. {._abstract}

***Cluster configuration checks***

<table>
<thead>
<tr>
  <th>Name</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>CheckDefaultDatastore</code></td>
  <td>Verifies that the default datastore name in the {{ vmw_full }} configuration is short enough for use with dynamic provisioning.<br><br>If this check fails, you can expect the following:<br><br><ul><li><code>systemd</code> logs errors to the journal such as <code>Failed to set up mount unit: Invalid argument</code>.</li><li><code>systemd</code> does not unmount volumes if the virtual machine shuts down or reboots without draining all the pods from the node.</li></ul>If this check fails, reconfigure {{ vmw_short }} with a shorter name for the default datastore.</td>
</tr>
<tr>
  <td><code>CheckFolderPermissions</code></td>
  <td>Verifies the permission to list volumes in the default datastore. You must enable the permission to create volumes. The Operator verifies the permission by listing the <code>/</code> and <code>/kubevols</code> directories. When the Operator performs the check, the root directory must exist. The <code>/kubevols</code> directory might not exist at the time of the check. The creation of the <code>/kubevols</code> directory occurs when the datastore supports dynamic provisioning.<br><br>If this check fails, review the required permissions for the vCenter account that you specified during the {{ product_title }} installation.</td>
</tr>
<tr>
  <td><code>CheckStorageClasses</code></td>
  <td>Verifies the following:<br><br><ul><li>The fully qualified path to each persistent volume that the storage class provisions does not go lower than 255 characters.</li><li>The storage class can use only one storage policy and the policy must be defined.</li></ul></td>
</tr>
<tr>
  <td><code>CheckTaskPermissions</code></td>
  <td>Verifies the permission to list recent tasks and datastores.</td>
</tr>
<tr>
  <td><code>ClusterInfo</code></td>
  <td>Collects the cluster version and UUID from {{ vmw_short }} vCenter.</td>
</tr>
</tbody>
</table>

***Node configuration checks***

<table>
<thead>
<tr>
  <th>Name</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>CheckNodeDiskUUID</code></td>
  <td>Verifies that all the {{ vmw_short }} virtual machines include the <code>disk.enableUUID=TRUE</code> configuration.<br><br>If this check fails, see the <a href="https://access.redhat.com/solutions/4606201">How to check <code>disk.EnableUUID</code> parameter from VM in vSphere</a> Red Hat Knowledgebase solution.</td>
</tr>
<tr>
  <td><code>CheckNodeProviderID</code></td>
  <td>Verifies that all nodes have the <code>ProviderID</code> configuration from {{ vmw_short }} vCenter. This check fails when the output from the following command does not include a provider ID for each node.<br><br><pre>$ oc get nodes -o custom-columns=NAME:.metadata.name,PROVIDER_ID:.spec.providerID,UUID:.status.nodeInfo.systemUUID</pre><br><br>If this check fails, reference the {{ vmw_short }} product documentation on how to set the provider ID for each node in the cluster.</td>
</tr>
<tr>
  <td><code>CollectNodeESXiVersion</code></td>
  <td>Reports the version of the ESXi hosts that run nodes.</td>
</tr>
<tr>
  <td><code>CollectNodeHWVersion</code></td>
  <td>Reports the virtual machine hardware version for a node.</td>
</tr>
</tbody>
</table>