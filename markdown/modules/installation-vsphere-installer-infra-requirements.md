{%- if context == "ipi-vsphere-installation-reqs" %}
{%- set ipi = true -%}
{% endif %}
{% if context == "upi-vsphere-installation-reqs" %}
{%- set upi = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# vCenter requirements {id="installation-vsphere-installer-infra-requirements_{{ context }}"}

{% if not upi %}
Before you install an {{ product_title }} cluster on your vCenter that uses infrastructure that the installation program provisions, you must prepare your environment.
{% endif %} {._abstract}

{% if upi %}
Before you install an {{ product_title }} cluster on your vCenter that uses infrastructure that you provided, you must prepare your environment.
{% endif %} {._abstract}

## Required vCenter account privileges {id="installation-vsphere-installer-infra-requirements-account_{{ context }}"}

{% if not upi %}
To install an {{ product_title }} cluster in a vCenter, the installation program requires access to an account with privileges to read and create the required resources. Using an account that has global administrative privileges is the simplest way to access all of the necessary permissions.

If you cannot use an account with global administrative privileges, you must create roles to grant the privileges necessary for {{ product_title }} cluster installation. Most of the privileges are always required. Some privileges are required only if you plan for the installation program to provision a folder to contain the {{ product_title }} cluster on your vCenter instance, which is the default behavior. You must create or change vSphere roles for the specified objects to grant the required privileges.

The installation program requires an additional role to create a vSphere virtual machine folder.
{% endif %}

{% if upi %}
To install an {{ product_title }} cluster in a vCenter, your vSphere account must include privileges for reading and creating the required resources. Using an account that has global administrative privileges is the simplest way to access all of the necessary permissions.
{% endif %}


:::note

The following tables do not explicitly list the ESXi host object. In the {{ vmw_short }} hierarchy, ESXi hosts are child objects of the cluster. If you apply your custom role to the vSphere vCenter Cluster object with the "Propagate to children" setting enabled, the required privileges automatically propagate down to the ESXi hosts. You do not need to apply permissions directly to individual ESXi host objects.

:::


***Roles and privileges required for installation in vSphere API***

<table>
<thead>
<tr>
  <th>vSphere object for role</th>
  <th>When required</th>
  <th>Required privileges in vSphere API</th>
</tr>
</thead>
<tbody>
<tr>
  <td>vSphere vCenter</td>
  <td>Always</td>
  <td><ul><li><code>Cns.Searchable</code></li><li><code>InventoryService.Tagging.AttachTag</code></li><li><code>InventoryService.Tagging.CreateCategory</code></li><li><code>InventoryService.Tagging.CreateTag</code></li><li><code>InventoryService.Tagging.DeleteCategory</code></li><li><code>InventoryService.Tagging.DeleteTag</code></li><li><code>InventoryService.Tagging.EditCategory</code></li><li><code>InventoryService.Tagging.EditTag</code></li><li><code>Sessions.ValidateSession</code></li><li><code>StorageProfile.Update</code></li><li><code>StorageProfile.View</code></li></ul></td>
</tr>
<tr>
  <td>vSphere vCenter Cluster</td>
  <td>Always</td>
  <td><ul><li><code>Host.Config.Storage</code></li><li><code>Resource.AssignVMToPool</code></li><li><code>VApp.AssignResourcePool</code></li><li><code>VApp.Import</code></li><li><code>VirtualMachine.Config.AddNewDisk</code></li></ul></td>
</tr>
<tr>
  <td>vSphere vCenter Resource Pool</td>
  <td>For a provided existing resource pool</td>
  <td><ul><li><code>Resource.AssignVMToPool</code></li><li><code>VApp.AssignResourcePool</code></li><li><code>VApp.Import</code></li><li><code>VirtualMachine.Config.AddNewDisk</code></li></ul></td>
</tr>
<tr>
  <td>vSphere Datastore</td>
  <td>Always</td>
  <td><ul><li><code>Datastore.AllocateSpace</code></li><li><code>Datastore.Browse</code></li><li><code>Datastore.FileManagement</code></li><li><code>InventoryService.Tagging.ObjectAttachable</code></li></ul></td>
</tr>
<tr>
  <td>vSphere Port Group</td>
  <td>Always</td>
  <td><code>Network.Assign</code></td>
</tr>
<tr>
  <td>Virtual Machine Folder</td>
  <td>Always</td>
  <td><ul><li><code>InventoryService.Tagging.ObjectAttachable</code></li><li><code>Resource.AssignVMToPool</code></li><li><code>VApp.Import</code></li><li><code>VirtualMachine.Config.AddExistingDisk</code></li><li><code>VirtualMachine.Config.AddNewDisk</code></li><li><code>VirtualMachine.Config.AddRemoveDevice</code></li><li><code>VirtualMachine.Config.AdvancedConfig</code></li><li><code>VirtualMachine.Config.Annotation</code></li><li><code>VirtualMachine.Config.CPUCount</code></li><li><code>VirtualMachine.Config.DiskExtend</code></li><li><code>VirtualMachine.Config.DiskLease</code></li><li><code>VirtualMachine.Config.EditDevice</code></li><li><code>VirtualMachine.Config.Memory</code></li><li><code>VirtualMachine.Config.RemoveDisk</code></li><li><code>VirtualMachine.Config.Rename</code></li><li><code>Host.Config.Storage</code></li><li><code>VirtualMachine.Config.ResetGuestInfo</code></li><li><code>VirtualMachine.Config.Resource</code></li><li><code>VirtualMachine.Config.Settings</code></li><li><code>VirtualMachine.Config.UpgradeVirtualHardware</code></li><li><code>VirtualMachine.Interact.GuestControl</code></li><li><code>VirtualMachine.Interact.PowerOff</code></li><li><code>VirtualMachine.Interact.PowerOn</code></li><li><code>VirtualMachine.Interact.Reset</code></li><li><code>VirtualMachine.Inventory.Create</code></li><li><code>VirtualMachine.Inventory.CreateFromExisting</code></li><li><code>VirtualMachine.Inventory.Delete</code></li><li><code>VirtualMachine.Provisioning.Clone</code></li><li><code>VirtualMachine.Provisioning.MarkAsTemplate</code></li><li><code>VirtualMachine.Provisioning.DeployTemplate</code></li></ul></td>
</tr>
<tr>
  <td>vSphere vCenter data center</td>
  {% if ipi %}<td>The installation program creates the virtual machine folder.</td>{% endif %}
  {% if upi %}<td><code>VirtualMachine.Inventory.Create</code> and <code>VirtualMachine.Inventory.Delete</code> privileges are optional if your cluster does not use the Machine API. See the "Minimum permissions for the Machine API" table.</td>{% endif %}
  <td><ul><li><code>InventoryService.Tagging.ObjectAttachable</code></li><li><code>Resource.AssignVMToPool</code></li><li><code>VirtualMachine.Config.AddExistingDisk</code></li><li><code>VirtualMachine.Config.AddNewDisk</code></li><li><code>VirtualMachine.Config.AddRemoveDevice</code></li><li><code>VirtualMachine.Config.AdvancedConfig</code></li><li><code>VirtualMachine.Config.Annotation</code></li><li><code>VirtualMachine.Config.CPUCount</code></li><li><code>VirtualMachine.Config.DiskExtend</code></li><li><code>VirtualMachine.Config.DiskLease</code></li><li><code>VirtualMachine.Config.EditDevice</code></li><li><code>VirtualMachine.Config.Memory</code></li><li><code>VirtualMachine.Config.RemoveDisk</code></li><li><code>VirtualMachine.Config.Rename</code></li><li><code>VirtualMachine.Config.ResetGuestInfo</code></li><li><code>VirtualMachine.Config.Resource</code></li><li><code>VirtualMachine.Config.Settings</code></li><li><code>VirtualMachine.Config.UpgradeVirtualHardware</code></li><li><code>VirtualMachine.Interact.GuestControl</code></li><li><code>VirtualMachine.Interact.PowerOff</code></li><li><code>VirtualMachine.Interact.PowerOn</code></li><li><code>VirtualMachine.Interact.Reset</code></li><li><code>VirtualMachine.Inventory.Create</code></li><li><code>VirtualMachine.Inventory.CreateFromExisting</code></li><li><code>VirtualMachine.Inventory.Delete</code></li><li><code>VirtualMachine.Provisioning.Clone</code></li><li><code>VirtualMachine.Provisioning.DeployTemplate</code></li><li><code>VirtualMachine.Provisioning.MarkAsTemplate</code></li><li><code>Folder.Create</code></li><li><code>Folder.Delete</code></li></ul></td>
</tr>
</tbody>
</table>

***Roles and privileges required for installation in vCenter graphical user interface (GUI)***

<table>
<thead>
<tr>
  <th>vSphere object for role</th>
  <th>When required</th>
  <th>Required privileges in vCenter GUI</th>
</tr>
</thead>
<tbody>
<tr>
  <td>vSphere vCenter</td>
  <td>Always</td>
  <td><ul><li><code>Cns.Searchable</code></li><li><code>"vSphere Tagging"."Assign or Unassign vSphere Tag"</code></li><li><code>"vSphere Tagging"."Create vSphere Tag Category"</code></li><li><code>"vSphere Tagging"."Create vSphere Tag"</code></li><li><code>vSphere Tagging"."Delete vSphere Tag Category"</code></li><li><code>"vSphere Tagging"."Delete vSphere Tag"</code></li><li><code>"vSphere Tagging"."Edit vSphere Tag Category"</code></li><li><code>"vSphere Tagging"."Edit vSphere Tag"</code></li><li><code>Sessions."Validate session"</code></li><li><code>"VM storage policies"."Update VM storage policies"</code></li><li><code>"VM storage policies"."View VM storage policies"</code></li></ul></td>
</tr>
<tr>
  <td>vSphere vCenter Cluster</td>
  <td>Always</td>
  <td><ul><li><code>Host.Configuration."Storage partition configuration"</code></li><li><code>Resource."Assign virtual machine to resource pool"</code></li><li><code>VApp."Assign resource pool"</code></li><li><code>VApp.Import</code></li><li><code>"Virtual machine"."Change Configuration"."Add new disk"</code></li></ul></td>
</tr>
<tr>
  <td>vSphere vCenter Resource Pool</td>
  <td>If providing an existing resource pool</td>
  <td><ul><li><code>Host.Configuration."Storage partition configuration"</code></li><li><code>Resource."Assign virtual machine to resource pool"</code></li><li><code>VApp."Assign resource pool"</code></li><li><code>VApp.Import</code></li><li><code>"Virtual machine"."Change Configuration"."Add new disk"</code></li></ul></td>
</tr>
<tr>
  <td>vSphere Datastore</td>
  <td>Always</td>
  <td><ul><li><code>Datastore."Allocate space"</code></li><li><code>Datastore."Browse datastore"</code></li><li><code>Datastore."Low level file operations"</code></li><li><code>"vSphere Tagging"."Assign or Unassign vSphere Tag on Object"</code></li></ul></td>
</tr>
<tr>
  <td>vSphere Port Group</td>
  <td>Always</td>
  <td><code>Network."Assign network"</code></td>
</tr>
<tr>
  <td>Virtual Machine Folder</td>
  <td>Always</td>
  <td><ul><li><code>"vSphere Tagging"."Assign or Unassign vSphere Tag on Object"</code></li><li><code>Resource."Assign virtual machine to resource pool"</code></li><li><code>VApp.Import</code></li><li><code>"Virtual machine"."Change Configuration"."Add existing disk"</code></li><li><code>"Virtual machine"."Change Configuration"."Add new disk"</code></li><li><code>"Virtual machine"."Change Configuration"."Add or remove device"</code></li><li><code>"Virtual machine"."Change Configuration"."Advanced configuration"</code></li><li><code>"Virtual machine"."Change Configuration"."Set annotation"</code></li><li><code>"Virtual machine"."Change Configuration"."Change CPU count"</code></li><li><code>"Virtual machine"."Change Configuration"."Extend virtual disk"</code></li><li><code>"Virtual machine"."Change Configuration"."Acquire disk lease"</code></li><li><code>"Virtual machine"."Change Configuration"."Modify device settings"</code></li><li><code>"Virtual machine"."Change Configuration"."Change Memory"</code></li><li><code>"Virtual machine"."Change Configuration"."Remove disk"</code></li><li><code>"Virtual machine"."Change Configuration".Rename</code></li><li><code>"Virtual machine"."Change Configuration"."Reset guest information"</code></li><li><code>"Virtual machine"."Change Configuration"."Change resource"</code></li><li><code>"Virtual machine"."Change Configuration"."Change Settings"</code></li><li><code>"Virtual machine"."Change Configuration"."Upgrade virtual machine compatibility"</code></li><li><code>"Virtual machine".Interaction."Guest operating system management by VIX API"</code></li><li><code>"Virtual machine".Interaction."Power off"</code></li><li><code>"Virtual machine".Interaction."Power on"</code></li><li><code>"Virtual machine".Interaction.Reset</code></li><li><code>"Virtual machine"."Edit Inventory"."Create new"</code></li><li><code>"Virtual machine"."Edit Inventory"."Create from existing"</code></li><li><code>"Virtual machine"."Edit Inventory"."Remove"</code></li><li><code>"Virtual machine".Provisioning."Clone virtual machine"</code></li><li><code>"Virtual machine".Provisioning."Mark as template"</code></li><li><code>"Virtual machine".Provisioning."Deploy template"</code></li></ul></td>
</tr>
<tr>
  <td>vSphere vCenter data center</td>
  {% if ipi %}<td>The installation program creates the virtual machine folder.</td>{% endif %}
  {% if upi %}<td><code>VirtualMachine.Inventory.Create</code> and <code>VirtualMachine.Inventory.Delete</code> privileges are optional if your cluster does not use the Machine API.</td>{% endif %}
  <td><ul><li><code>"vSphere Tagging"."Assign or Unassign vSphere Tag on Object"</code></li><li><code>Resource."Assign virtual machine to resource pool"</code></li><li><code>VApp.Import</code></li><li><code>"Virtual machine"."Change Configuration"."Add existing disk"</code></li><li><code>"Virtual machine"."Change Configuration"."Add new disk"</code></li><li><code>"Virtual machine"."Change Configuration"."Add or remove device"</code></li><li><code>"Virtual machine"."Change Configuration"."Advanced configuration"</code></li><li><code>"Virtual machine"."Change Configuration"."Set annotation"</code></li><li><code>"Virtual machine"."Change Configuration"."Change CPU count"</code></li><li><code>"Virtual machine"."Change Configuration"."Extend virtual disk"</code></li><li><code>"Virtual machine"."Change Configuration"."Acquire disk lease"</code></li><li><code>"Virtual machine"."Change Configuration"."Modify device settings"</code></li><li><code>"Virtual machine"."Change Configuration"."Change Memory"</code></li><li><code>"Virtual machine"."Change Configuration"."Remove disk"</code></li><li><code>"Virtual machine"."Change Configuration".Rename</code></li><li><code>"Virtual machine"."Change Configuration"."Reset guest information"</code></li><li><code>"Virtual machine"."Change Configuration"."Change resource"</code></li><li><code>"Virtual machine"."Change Configuration"."Change Settings"</code></li><li><code>"Virtual machine"."Change Configuration"."Upgrade virtual machine compatibility"</code></li><li><code>"Virtual machine".Interaction."Guest operating system management by VIX API"</code></li><li><code>"Virtual machine".Interaction."Power off"</code></li><li><code>"Virtual machine".Interaction."Power on"</code></li><li><code>"Virtual machine".Interaction.Reset</code></li><li><code>"Virtual machine"."Edit Inventory"."Create new"</code></li><li><code>"Virtual machine"."Edit Inventory"."Create from existing"</code></li><li><code>"Virtual machine"."Edit Inventory"."Remove"</code></li><li><code>"Virtual machine".Provisioning."Clone virtual machine"</code></li><li><code>"Virtual machine".Provisioning."Deploy template"</code></li><li><code>"Virtual machine".Provisioning."Mark as template"</code></li><li><code>Folder."Create folder"</code></li><li><code>Folder."Delete folder"</code></li></ul></td>
</tr>
</tbody>
</table>

Additionally, the user requires some `ReadOnly` permissions, and some of the roles require permission to propagate the permissions to child objects. These settings vary depending on whether or not you install the cluster into an existing folder.

***Required permissions and propagation settings***

<table>
<thead>
<tr>
  <th>vSphere object</th>
  <th>When required</th>
  <th>Propagate to children</th>
  <th>Permissions required</th>
</tr>
</thead>
<tbody>
<tr>
  <td>vSphere vCenter</td>
  <td>Always</td>
  <td>False</td>
  <td>Listed required privileges</td>
</tr>
<tr>
  {% if upi %}<td>vSphere vCenter data center</td>{% endif %}
  {% if upi %}<td>Existing folder</td>{% endif %}
  {% if upi %}<td>False</td>{% endif %}
  {% if upi %}<td><code>ReadOnly</code> permission<br><br>.2+</td>{% endif %}
</tr>
<tr>
  {% if ipi %}<td>vSphere vCenter data center</td>{% endif %}
  {% if ipi %}<td>Existing folder</td>{% endif %}
  {% if ipi %}<td>False</td>{% endif %}
  {% if ipi %}<td><code>ReadOnly</code> permission</td>{% endif %}
</tr>
<tr>
  {% if ipi %}<td>Installation program creates the folder</td>{% endif %}
  {% if ipi %}<td>True</td>{% endif %}
  {% if ipi %}<td>Listed required privileges</td>{% endif %}
  <td>vSphere vCenter Cluster</td>
</tr>
<tr>
  <td>Always</td>
  <td>True</td>
  <td>Listed required privileges</td>
  <td>vSphere vCenter Datastore</td>
</tr>
<tr>
  <td>Always</td>
  <td>False</td>
  <td>Listed required privileges</td>
  <td>vSphere Switch</td>
</tr>
<tr>
  <td>Always</td>
  <td>False</td>
  <td><code>ReadOnly</code> permission</td>
  <td>vSphere Port Group</td>
</tr>
<tr>
  <td>Always</td>
  <td>False</td>
  <td>Listed required privileges</td>
  <td>vSphere vCenter Virtual Machine Folder</td>
</tr>
<tr>
  <td>Existing folder</td>
  <td>True</td>
  <td>Listed required privileges</td>
  <td>vSphere vCenter Resource Pool</td>
</tr>
<tr>
  <td>Existing resource pool</td>
  <td>True</td>
  <td>Listed required privileges</td>
</tr>
</tbody>
</table>

For more information about creating an account with only the required privileges, see [vSphere Permissions and User Management Tasks](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.security.doc/GUID-5372F580-5C23-4E9C-8A4E-EF1B4DD9033E.html) in the vSphere documentation.

## Minimum required vCenter account privileges {id="installation-vsphere-installer-infra-minimum-requirements_{{ context }}"}

After you create a custom role and assign privileges to the role, you can create permissions by selecting specific vSphere objects. You can then assign the custom role to a user or group for each object.

Before you create permissions or request for the creation of permissions for a vSphere object, decide what minimum permissions apply to the vSphere object. By doing this task, you can ensure a basic interaction exists between a vSphere object and {{ product_title }} architecture.


:::important

If you create a custom role and you do not assign privileges to it, the vSphere Server by default assigns a `Read Only` role to the custom role. Note that for the cloud provider API, the custom role only needs to inherit the privileges of the `Read Only` role.

:::


Consider creating a custom role when an account with global administrative privileges does not meet your needs.


:::important

Red&#160;Hat does not support configuring an account without including the required privileges. Red&#160;Hat tests {{ product_title }} cluster installations in vCenter against the full list of privileges described in the "Required vCenter account privileges" section. By adhering to the full list of privileges, you can reduce the possibility of unexpected behaviors that might occur when creating a custom role with a restricted set of privileges. You must retain the full set of privileges from the "Required vCenter account privileges" section after cluster installation. Reducing the account to only the permissions listed in the minimum permission tables in the "Minimum required vCenter account privileges" section after installation is not supported and can cause unexpected cluster behavior. The minimum permission tables are for reference only; they show which privileges apply to which {{ product_title }} components (such as storage or the Machine API) when you design or audit custom roles. The supported configuration is to assign the full set of privileges from the "Required vCenter account privileges" section at all times, both during and after installation.

:::


The following tables specify how the required vCenter account privileges provided earlier in this document are relevant to different aspects of {{ product_title }} architecture.

{% if not upi %}
<a name="installation-vsphere-minimum-permissions-ipi_{{ context }}"></a>

***Minimum permissions on installer-provisioned infrastructure***

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
  <td><ul><li><code>Cns.Searchable</code></li><li><code>InventoryService.Tagging.AttachTag</code></li><li><code>InventoryService.Tagging.CreateCategory</code></li><li><code>InventoryService.Tagging.CreateTag</code></li><li><code>InventoryService.Tagging.DeleteCategory</code></li><li><code>InventoryService.Tagging.DeleteTag</code></li><li><code>InventoryService.Tagging.EditCategory</code></li><li><code>InventoryService.Tagging.EditTag</code></li><li><code>Sessions.ValidateSession</code></li><li><code>StorageProfile.Update</code></li><li><code>StorageProfile.View</code></li></ul></td>
</tr>
<tr>
  <td>vSphere vCenter Cluster</td>
  <td>If you intend to create VMs in the cluster root</td>
  <td><ul><li><code>Host.Config.Storage</code></li><li><code>Resource.AssignVMToPool</code></li><li><code>VApp.AssignResourcePool</code></li><li><code>VApp.Import</code></li><li><code>VirtualMachine.Config.AddNewDisk</code></li></ul></td>
</tr>
<tr>
  <td>vSphere vCenter Resource Pool</td>
  <td>If you included an existing resource pool in the <code>install-config.yaml</code> file</td>
  <td><ul><li><code>Host.Config.Storage</code></li><li><code>Resource.AssignVMToPool</code></li><li><code>VApp.AssignResourcePool</code></li><li><code>VApp.Import</code>minimum`</li></ul></td>
</tr>
<tr>
  <td>vSphere Datastore</td>
  <td>If you referenced a datastore in the <code>install-config.yaml</code> file</td>
  <td><ul><li><code>Datastore.Browse</code></li><li><code>Datastore.FileManagement</code></li><li><code>InventoryService.Tagging.ObjectAttachable</code></li></ul></td>
</tr>
<tr>
  <td>vSphere Port Group</td>
  <td>Always</td>
  <td><code>Network.Assign</code></td>
</tr>
<tr>
  <td>Virtual Machine Folder</td>
  <td>Always</td>
  <td><ul><li><code>InventoryService.Tagging.ObjectAttachable</code></li><li><code>Resource.AssignVMToPool</code></li><li><code>VApp.Import</code></li><li><code>VirtualMachine.Config.AddExistingDisk</code></li><li><code>VirtualMachine.Config.AddNewDisk</code></li><li><code>VirtualMachine.Config.AddRemoveDevice</code></li><li><code>VirtualMachine.Config.AdvancedConfig</code></li><li><code>VirtualMachine.Config.Annotation</code></li><li><code>VirtualMachine.Config.CPUCount</code></li><li><code>VirtualMachine.Config.DiskExtend</code></li><li><code>VirtualMachine.Config.DiskLease</code></li><li><code>VirtualMachine.Config.EditDevice</code></li><li><code>VirtualMachine.Config.Memory</code></li><li><code>VirtualMachine.Config.RemoveDisk</code></li><li><code>VirtualMachine.Config.Rename</code></li><li><code>VirtualMachine.Config.ResetGuestInfo</code></li><li><code>VirtualMachine.Config.Resource</code></li><li><code>VirtualMachine.Config.Settings</code></li><li><code>VirtualMachine.Config.UpgradeVirtualHardware</code></li><li><code>VirtualMachine.Interact.GuestControl</code></li><li><code>VirtualMachine.Interact.PowerOff</code></li><li><code>VirtualMachine.Interact.PowerOn</code></li><li><code>VirtualMachine.Interact.Reset</code></li><li><code>VirtualMachine.Inventory.Create</code></li><li><code>VirtualMachine.Inventory.CreateFromExisting</code></li><li><code>VirtualMachine.Inventory.Delete</code></li><li><code>VirtualMachine.Provisioning.Clone</code></li><li><code>VirtualMachine.Provisioning.MarkAsTemplate</code></li><li><code>VirtualMachine.Provisioning.DeployTemplate</code></li></ul></td>
</tr>
<tr>
  <td>vSphere vCenter data center</td>
  <td>If the virtual machine folder does not already exist, the installation program creates the virtual machine folder. If your cluster does use the Machine API and you want to set the minimum set of permissions for the API, see the "Minimum permissions for the Machine API" table.</td>
  <td><ul><li><code>Folder.Create</code></li><li><code>Folder.Delete</code></li><li><code>InventoryService.Tagging.ObjectAttachable</code></li><li><code>Resource.AssignVMToPool</code></li><li><code>VApp.Import</code></li><li><code>VirtualMachine.Config.AddExistingDisk</code></li><li><code>VirtualMachine.Config.AddNewDisk</code></li><li><code>VirtualMachine.Config.AddRemoveDevice</code></li><li><code>VirtualMachine.Config.AdvancedConfig</code></li><li><code>VirtualMachine.Config.Annotation</code></li><li><code>VirtualMachine.Config.CPUCount</code></li><li><code>VirtualMachine.Config.DiskExtend</code></li><li><code>VirtualMachine.Config.DiskLease</code></li><li><code>VirtualMachine.Config.EditDevice</code></li><li><code>VirtualMachine.Config.Memory</code></li><li><code>VirtualMachine.Config.RemoveDisk</code></li><li><code>VirtualMachine.Config.Rename</code></li><li><code>VirtualMachine.Config.ResetGuestInfo</code></li><li><code>VirtualMachine.Config.Resource</code></li><li><code>VirtualMachine.Config.Settings</code></li><li><code>VirtualMachine.Config.UpgradeVirtualHardware</code></li><li><code>VirtualMachine.Interact.GuestControl</code></li><li><code>VirtualMachine.Interact.PowerOff</code></li><li><code>VirtualMachine.Interact.PowerOn</code></li><li><code>VirtualMachine.Interact.Reset</code></li><li><code>VirtualMachine.Inventory.Create</code></li><li><code>VirtualMachine.Inventory.CreateFromExisting</code></li><li><code>VirtualMachine.Inventory.Delete</code></li><li><code>VirtualMachine.Provisioning.Clone</code></li><li><code>VirtualMachine.Provisioning.DeployTemplate</code></li><li><code>VirtualMachine.Provisioning.MarkAsTemplate</code></li></ul></td>
</tr>
</tbody>
</table>

{% endif %}

<a name="post-installation-vsphere-minimum-permissions_{{ context }}"></a>

***Minimum permissions for postinstallation management of components***

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
  <td><ul><li><code>Cns.Searchable</code></li><li><code>InventoryService.Tagging.AttachTag</code></li><li><code>InventoryService.Tagging.CreateCategory</code></li><li><code>InventoryService.Tagging.CreateTag</code></li><li><code>InventoryService.Tagging.DeleteCategory</code></li><li><code>InventoryService.Tagging.DeleteTag</code></li><li><code>InventoryService.Tagging.EditCategory</code></li><li><code>InventoryService.Tagging.EditTag</code></li><li><code>Sessions.ValidateSession</code></li><li><code>StorageProfile.Update</code></li><li><code>StorageProfile.View</code></li></ul></td>
</tr>
<tr>
  <td>vSphere vCenter Cluster</td>
  <td>If you intend to create VMs in the cluster root</td>
  <td><ul><li><code>Host.Config.Storage</code></li><li><code>Resource.AssignVMToPool</code></li></ul></td>
</tr>
<tr>
  <td>vSphere vCenter Resource Pool</td>
  <td>If you included an existing resource pool in the <code>install-config.yaml</code> file</td>
  <td><code>Host.Config.Storage</code></td>
</tr>
<tr>
  <td>vSphere Datastore</td>
  <td>Always</td>
  <td><ul><li><code>Datastore.AllocateSpace</code></li><li><code>Datastore.Browse</code></li><li><code>Datastore.FileManagement</code></li><li><code>InventoryService.Tagging.ObjectAttachable</code></li></ul></td>
</tr>
<tr>
  <td>vSphere Port Group</td>
  <td>Always</td>
  <td><code>Network.Assign</code></td>
</tr>
<tr>
  <td>Virtual Machine Folder</td>
  <td>Always</td>
  <td><ul><li><code>VirtualMachine.Config.AddExistingDisk</code></li><li><code>VirtualMachine.Config.AddRemoveDevice</code></li><li><code>VirtualMachine.Config.AdvancedConfig</code></li><li><code>VirtualMachine.Config.Annotation</code></li><li><code>VirtualMachine.Config.CPUCount</code></li><li><code>VirtualMachine.Config.DiskExtend</code></li><li><code>VirtualMachine.Config.Memory</code></li><li><code>VirtualMachine.Config.Settings</code></li><li><code>VirtualMachine.Interact.PowerOff</code></li><li><code>VirtualMachine.Interact.PowerOn</code></li><li><code>VirtualMachine.Inventory.CreateFromExisting</code></li><li><code>VirtualMachine.Inventory.Delete</code></li><li><code>VirtualMachine.Provisioning.Clone</code></li><li><code>VirtualMachine.Provisioning.DeployTemplate</code></li></ul></td>
</tr>
<tr>
  <td>vSphere vCenter data center</td>
  {% if ipi %}<td>If the virtual machine folder does not already exist, the installation program creates the virtual machine folder.</td>{% endif %}
  {% if upi %}<td><code>VirtualMachine.Inventory.Create</code> and <code>VirtualMachine.Inventory.Delete</code> privileges are optional if your cluster does not use the Machine API. If your cluster does use the Machine API and you want to set the minimum set of permissions for the API, see the "Minimum permissions for the Machine API" table.</td>{% endif %}
  <td><ul><li><code>Resource.AssignVMToPool</code></li><li><code>VirtualMachine.Config.AddExistingDisk</code></li><li><code>VirtualMachine.Config.AddRemoveDevice</code></li><li><code>VirtualMachine.Interact.PowerOff</code></li><li><code>VirtualMachine.Interact.PowerOn</code></li><li><code>VirtualMachine.Provisioning.DeployTemplate</code></li></ul></td>
</tr>
</tbody>
</table>

<a name="installation-vsphere-minimum-permissions-storage_{{ context }}"></a>

***Minimum permissions for the storage components***

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
  <td><ul><li><code>Cns.Searchable</code></li><li><code>InventoryService.Tagging.CreateCategory</code></li><li><code>InventoryService.Tagging.CreateTag</code></li><li><code>InventoryService.Tagging.EditCategory</code></li><li><code>InventoryService.Tagging.EditTag</code></li><li><code>StorageProfile.Update</code></li><li><code>StorageProfile.View</code></li></ul></td>
</tr>
<tr>
  <td>vSphere vCenter Cluster</td>
  <td>If you intend to create VMs in the cluster root</td>
  <td><code>Host.Config.Storage</code></td>
</tr>
<tr>
  <td>vSphere vCenter Resource Pool</td>
  <td>If you included an existing resource pool in the <code>install-config.yaml</code> file</td>
  <td><code>Host.Config.Storage</code></td>
</tr>
<tr>
  <td>vSphere Datastore</td>
  <td>Always</td>
  <td><ul><li><code>Datastore.Browse</code></li><li><code>Datastore.FileManagement</code></li><li><code>InventoryService.Tagging.ObjectAttachable</code></li></ul></td>
</tr>
<tr>
  <td>vSphere Port Group</td>
  <td>Always</td>
  <td><code>Read Only</code></td>
</tr>
<tr>
  <td>Virtual Machine Folder</td>
  <td>Always</td>
  <td><ul><li><code>VirtualMachine.Config.AddExistingDisk</code></li><li><code>VirtualMachine.Config.AddRemoveDevice</code></li></ul></td>
</tr>
<tr>
  <td>vSphere vCenter data center</td>
  {% if ipi %}<td>If the virtual machine folder does not already exist, the installation program creates the virtual machine folder.</td>{% endif %}
  {% if upi %}<td><code>VirtualMachine.Inventory.Create</code> and <code>VirtualMachine.Inventory.Delete</code> privileges are optional if your cluster does not use the Machine API. If your cluster does use the Machine API and you want to set the minimum set of permissions for the API, see the "Minimum permissions for the Machine API" table.</td>{% endif %}
  <td><ul><li><code>VirtualMachine.Config.AddExistingDisk</code></li><li><code>VirtualMachine.Config.AddRemoveDevice</code></li></ul></td>
</tr>
</tbody>
</table>

<a name="post-installation-vsphere-minimum-machine-api_{{ context }}"></a>

***Minimum permissions for the Machine API***

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
  <td><ul><li><code>InventoryService.Tagging.AttachTag</code></li><li><code>InventoryService.Tagging.CreateCategory</code></li><li><code>InventoryService.Tagging.CreateTag</code></li><li><code>InventoryService.Tagging.DeleteCategory</code></li><li><code>InventoryService.Tagging.DeleteTag</code></li><li><code>InventoryService.Tagging.EditCategory</code></li><li><code>InventoryService.Tagging.EditTag</code></li><li><code>Sessions.ValidateSession</code></li><li><code>StorageProfile.Update</code></li><li><code>StorageProfile.View</code></li></ul></td>
</tr>
<tr>
  <td>vSphere vCenter Cluster</td>
  <td>If you intend to create VMs in the cluster root</td>
  <td><code>Resource.AssignVMToPool</code></td>
</tr>
<tr>
  <td>vSphere vCenter Resource Pool</td>
  <td>If you included an existing resource pool in the <code>install-config.yaml</code> file</td>
  <td><code>Read Only</code></td>
</tr>
<tr>
  <td>vSphere Datastore</td>
  <td>Always</td>
  <td><ul><li><code>Datastore.AllocateSpace</code></li><li><code>Datastore.Browse</code></li></ul></td>
</tr>
<tr>
  <td>vSphere Port Group</td>
  <td>Always</td>
  <td><code>Network.Assign</code></td>
</tr>
<tr>
  <td>Virtual Machine Folder</td>
  <td>Always</td>
  <td><ul><li><code>VirtualMachine.Config.AddRemoveDevice</code></li><li><code>VirtualMachine.Config.AdvancedConfig</code></li><li><code>VirtualMachine.Config.Annotation</code></li><li><code>VirtualMachine.Config.CPUCount</code></li><li><code>VirtualMachine.Config.DiskExtend</code></li><li><code>VirtualMachine.Config.Memory</code></li><li><code>VirtualMachine.Config.Settings</code></li><li><code>VirtualMachine.Interact.PowerOff</code></li><li><code>VirtualMachine.Interact.PowerOn</code></li><li><code>VirtualMachine.Inventory.CreateFromExisting</code></li><li><code>VirtualMachine.Inventory.Delete</code></li><li><code>VirtualMachine.Provisioning.Clone</code></li><li><code>VirtualMachine.Provisioning.DeployTemplate</code></li></ul></td>
</tr>
<tr>
  <td>vSphere vCenter data center</td>
  {% if ipi %}<td>If the virtual machine folder does not already exist, the installation program creates the virtual machine folder.</td>{% endif %}
  {% if upi %}<td><code>VirtualMachine.Inventory.Create</code> and <code>VirtualMachine.Inventory.Delete</code> privileges are optional if your cluster does not use the Machine API.</td>{% endif %}
  <td><ul><li><code>Resource.AssignVMToPool</code></li><li><code>VirtualMachine.Interact.PowerOff</code></li><li><code>VirtualMachine.Interact.PowerOn</code></li><li><code>VirtualMachine.Provisioning.DeployTemplate</code></li></ul></td>
</tr>
</tbody>
</table>

## Using {{ product_title }} with vMotion {id="installation-vsphere-installer-infra-requirements-vmotion_{{ context }}"}

If you intend on using vMotion in your vSphere environment, consider the following before installing an {{ product_title }} cluster.

*   Using Storage vMotion can cause issues and is not supported.
*   Using VMware compute vMotion to migrate the workloads for both {{ product_title }} compute machines and control plane machines is generally supported, where _generally_ implies that you meet all VMware best practices for vMotion.
    To help ensure the uptime of your compute and control plane nodes, ensure that you follow the VMware best practices for vMotion, and use VMware anti-affinity rules to improve the availability of {{ product_title }} during maintenance or hardware issues.

    For more information about vMotion and anti-affinity rules, see the VMware vSphere documentation for  [vMotion networking requirements](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vcenterhost.doc/GUID-3B41119A-1276-404B-8BFB-A32409052449.html) and [VM anti-affinity rules](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.resmgmt.doc/GUID-FBE46165-065C-48C2-B775-7ADA87FF9A20.html).
*   If you are using {{ vmw_full }} volumes in your pods, migrating a VM across datastores, either manually or through Storage vMotion, causes invalid references within {{ product_title }} persistent volume (PV) objects that can result in data loss.
*   {{ product_title }} does not support selective migration of virtual machine disks (VMDKs) across datastores, using datastore clusters for VM provisioning or for dynamic or static provisioning of PVs, or using a datastore that is part of a datastore cluster for dynamic or static provisioning of PVs.

    :::important

    You can specify the path of any datastore that exists in a datastore cluster. By default, Storage Distributed Resource Scheduler (SDRS), which uses Storage vMotion, is automatically enabled for a datastore cluster. Red Hat does not support Storage vMotion, so you must disable SDRS to avoid data loss issues for your {{ product_title }} cluster.
    If you must specify VMs across many datastores, use a `datastore` object to specify a failure domain in your cluster’s `install-config.yaml` configuration file. For more information, see "VMware vSphere region and zone enablement".
    
    :::


## Cluster resources {id="installation-vsphere-installer-infra-requirements-resources_{{ context }}"}

{% if not upi %}
When you deploy an {{ product_title }} cluster that uses installer-provisioned infrastructure, the installation program must be able to create several resources in your vCenter instance.

A standard {{ product_title }} installation creates the following vCenter resources:
{% endif %}

{% if upi %}
When you deploy an {{ product_title }} cluster that uses infrastructure that you provided, you must create the following resources in your vCenter instance:
{% endif %}

*   1 Folder
*   1 Tag category
*   1 Tag
*   Virtual machines:
    *   1 template
    *   1 temporary bootstrap node
    *   3 control plane nodes
    *   3 compute machines

Although these resources use 856 GB of storage, the bootstrap node gets deleted during the cluster installation process. At a minimum, a standard cluster requires 800 GB of storage.

If you deploy more compute machines, the {{ product_title }} cluster will use more storage.

## Cluster limits {id="installation-vsphere-installer-infra-requirements-limits_{{ context }}"}

Available resources vary between clusters. A limit exists for the number of possible clusters within vCenter, primarily by available storage space and any limitations on the number of required resources. Be sure to consider both limitations to the vCenter resources that the cluster creates and the resources that you require to deploy a cluster, such as IP addresses and networks.

## Networking requirements {id="installation-vsphere-installer-infra-requirements-networking_{{ context }}"}

You can use Dynamic Host Configuration Protocol (DHCP) for the network and configure the DHCP server to set persistent IP addresses to machines in your cluster. In the DHCP lease, you must configure the DHCP to use the default gateway.


:::note

You do not need to use the DHCP for the network if you want to provision nodes with static IP addresses.

:::


{% if upi %}
If you specify nodes or groups of nodes on different VLANs for a cluster that you want to install on user-provisioned infrastructure, you must ensure that machines in your cluster meet the requirements outlined in the "Network connectivity requirements" section of the _Networking requirements for user-provisioned infrastructure_ document.
{% endif %}

If you are installing to a restricted environment, the VM in your restricted network must have access to vCenter so that it can provision and manage nodes, persistent volume claims (PVCs), and other resources.


:::note

Ensure that each {{ product_title }} node in the cluster has access to a Network Time Protocol (NTP) server that is discoverable by DHCP. Installation is possible without an NTP server. However, asynchronous server clocks can cause errors, which the NTP server prevents.

:::


Additionally, you must create the following networking resources before you install the {{ product_title }} cluster:

{% if not upi %}

## Required IP addresses {id="installation-vsphere-installer-infra-requirements-_{{ context }}"}
For a network that uses DHCP, an installer-provisioned vSphere installation requires two static IP addresses:

*   The ***API*** address for accessing the cluster API.
*   The ***Ingress*** address for cluster ingress traffic.

You must give these IP addresses to the installation program when you install the {{ product_title }} cluster.
{% endif %}

## DNS records {id="installation-vsphere-installer-infra-requirements-dns-records_{{ context }}"}
You must create DNS records for two static IP addresses in the appropriate DNS server for the vCenter instance that hosts your {{ product_title }} cluster. In each record, `<cluster_name>` is the cluster name and `<base_domain>` is the cluster base domain that you specify when you install the cluster. A complete DNS record takes the form: `<component>.<cluster_name>.<base_domain>.`.

***Required DNS records***

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
  <td><code>api.<cluster_name>.<base_domain>.</code></td>
  <td>This DNS A/AAAA or CNAME (Canonical Name) record must point to the load balancer for the control plane machines. This record must be resolvable by both clients external to the cluster and from all the nodes within the cluster.</td>
</tr>
<tr>
  <td>Ingress VIP</td>
  <td><code>*.apps.<cluster_name>.<base_domain>.</code></td>
  <td>A wildcard DNS A/AAAA or CNAME record that points to the load balancer that targets the machines that run the Ingress router pods, which are the worker nodes by default. This record must be resolvable by both clients external to the cluster and from all the nodes within the cluster.</td>
</tr>
</tbody>
</table>

{% if context == "ipi-vsphere-installation-reqs" %}
{%- set ipi = false -%}
{% endif %}
{% if context == "upi-vsphere-installation-reqs" %}
{%- set upi = false -%}
{% endif %}