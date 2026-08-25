{%- set _mod_docs_content_type = "REFERENCE" %}
# Minimum required vCenter privileges for compute machine set management {id="machineset-vsphere-requirements-user-provisioned-machine-sets_{{ context }}"}

To manage compute machine sets in an {{ product_title }} cluster on vCenter, you must use an account with privileges to read, create, and delete the required resources. Using an account that has global administrative privileges is the simplest way to access all of the necessary permissions. {._abstract}

If you cannot use an account with global administrative privileges, you must create roles to grant the minimum required privileges. The following table lists the minimum vCenter roles and privileges that are required to create, scale, and delete compute machine sets and to delete machines in your {{ product_title }} cluster.

***Minimum vCenter roles and privileges required for compute machine set management***

<table>
<thead>
<tr>
  <th>vSphere object for role</th>
  <th>When required</th>
  <th>Required privileges</th>
</tr>
</thead>
<tbody>
<tr>
  <td>vSphere vCenter</td>
  <td>Always</td>
  <td><code>InventoryService.Tagging.AttachTag</code><code>InventoryService.Tagging.CreateCategory</code><code>InventoryService.Tagging.CreateTag</code><code>InventoryService.Tagging.DeleteCategory</code><code>InventoryService.Tagging.DeleteTag</code><code>InventoryService.Tagging.EditCategory</code><code>InventoryService.Tagging.EditTag</code><code>Sessions.ValidateSession</code><code>StorageProfile.Update</code>^1^<code>StorageProfile.View</code>^1^</td>
</tr>
<tr>
  <td>vSphere vCenter Cluster</td>
  <td>Always</td>
  <td><code>Resource.AssignVMToPool</code></td>
</tr>
<tr>
  <td>vSphere datastore</td>
  <td>Always</td>
  <td><code>Datastore.AllocateSpace</code><code>Datastore.Browse</code></td>
</tr>
<tr>
  <td>vSphere Port Group</td>
  <td>Always</td>
  <td><code>Network.Assign</code></td>
</tr>
<tr>
  <td>Virtual Machine Folder</td>
  <td>Always</td>
  <td><code>VirtualMachine.Config.AddRemoveDevice</code><code>VirtualMachine.Config.AdvancedConfig</code><code>VirtualMachine.Config.Annotation</code><code>VirtualMachine.Config.CPUCount</code><code>VirtualMachine.Config.DiskExtend</code><code>VirtualMachine.Config.Memory</code><code>VirtualMachine.Config.Settings</code><code>VirtualMachine.Interact.PowerOff</code><code>VirtualMachine.Interact.PowerOn</code><code>VirtualMachine.Inventory.CreateFromExisting</code><code>VirtualMachine.Inventory.Delete</code><code>VirtualMachine.Provisioning.Clone</code></td>
</tr>
<tr>
  <td>vSphere vCenter data center</td>
  <td>If the installation program creates the virtual machine folder.</td>
  <td><code>Resource.AssignVMToPool</code><code>VirtualMachine.Provisioning.DeployTemplate</code><br><br>3+a</td>
</tr>
<tr>
  <td> ^1^ The <code>StorageProfile.Update</code> and <code>StorageProfile.View</code> permissions are required only for storage backends that use the Container Storage Interface (CSI).</td>
</tr>
</tbody>
</table>

The following table details the permissions and propagation settings that are required for compute machine set management.

***Required permissions and propagation settings***

<table>
<thead>
<tr>
  <th>vSphere object</th>
  <th>Folder type</th>
  <th>Propagate to children</th>
  <th>Permissions required</th>
</tr>
</thead>
<tbody>
<tr>
  <td>vSphere vCenter</td>
  <td>Always</td>
  <td>Not required</td>
  <td>Listed required privileges<br><br>.2+</td>
</tr>
<tr>
  <td>vSphere vCenter data center</td>
  <td>Existing folder</td>
  <td>Not required</td>
  <td><code>ReadOnly</code> permission</td>
</tr>
<tr>
  <td>Installation program creates the folder</td>
  <td>Required</td>
  <td>Listed required privileges</td>
  <td>vSphere vCenter Cluster</td>
</tr>
<tr>
  <td>Always</td>
  <td>Required</td>
  <td>Listed required privileges</td>
  <td>vSphere vCenter datastore</td>
</tr>
<tr>
  <td>Always</td>
  <td>Not required</td>
  <td>Listed required privileges</td>
  <td>vSphere Switch</td>
</tr>
<tr>
  <td>Always</td>
  <td>Not required</td>
  <td><code>ReadOnly</code> permission</td>
  <td>vSphere Port Group</td>
</tr>
<tr>
  <td>Always</td>
  <td>Not required</td>
  <td>Listed required privileges</td>
  <td>vSphere vCenter Virtual Machine Folder</td>
</tr>
<tr>
  <td>Existing folder</td>
  <td>Required</td>
  <td>Listed required privileges</td>
</tr>
</tbody>
</table>

For more information about creating an account with only the required privileges, see [vSphere Permissions and User Management Tasks](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.security.doc/GUID-5372F580-5C23-4E9C-8A4E-EF1B4DD9033E.html) in the vSphere documentation.