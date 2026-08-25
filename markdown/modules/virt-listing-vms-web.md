{%- set _mod_docs_content_type = "PROCEDURE" %}
# List virtual machines by using the web console {id="virt-listing-vms-web_{{ context }}"}

You can list all of the virtual machines (VMs) in your cluster by using the web console. {._abstract}

**Procedure**

1.  Click **Virtualization** -> **VirtualMachines** from the side menu to access the tree view of all projects and VMs in your cluster.
1.  Optional: Enable the **Show only projects with VirtualMachines** option above the tree view to limit the displayed projects.
1.  Click the **Virtual machines** tab.
1.  Optional: Click the **Search virtual machines** text box and begin to type the name of a virtual machine. A list of filtered virtual machine names will appear and change as you type.
1.  Optional: Click the **Advanced search** button next to the search bar to use more search options.
    1.  Use the fields provided to further filter your virtual machine search.
<table>
<thead>
<tr>
  <th>Field</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Name</td>
  <td>The virtual machine name.</td>
</tr>
<tr>
  <td>Project</td>
  <td>A project that is part of your deployment.</td>
</tr>
<tr>
  <td>Description</td>
  <td>Text in the description of the virtual machine.</td>
</tr>
<tr>
  <td>Status</td>
  <td>The status of the virtual machine.</td>
</tr>
<tr>
  <td>Operating system</td>
  <td>The operating system of the virtual machine.</td>
</tr>
<tr>
  <td>vCPU</td>
  <td>The number of vCPUs alotted to the virtual machine. Select a modifying expression and enter a value to search on.</td>
</tr>
<tr>
  <td>Memory</td>
  <td>The amount of memory alotted to the virtual machine. Select a modifying expression, enter a value to search on, and select what that value represents.</td>
</tr>
<tr>
  <td>Storage class</td>
  <td>The storage class the virtual machine uses.</td>
</tr>
<tr>
  <td>Hardware devices</td>
  <td>The type of hardware device assocaited with the virtual machine.</td>
</tr>
<tr>
  <td>Date created</td>
  <td>The date range the virtual machine was created in.</td>
</tr>
<tr>
  <td>Labels</td>
  <td>The labels associated with the virtual machine.</td>
</tr>
<tr>
  <td>Scheduling</td>
  <td>The scheduling logic associated with the virtual machine.</td>
</tr>
<tr>
  <td>Nodes</td>
  <td>The nodes associated with the virtual machine.</td>
</tr>
<tr>
  <td>IP address</td>
  <td>The IP address of the virtual machine.</td>
</tr>
<tr>
  <td>Network Attachment Definitions</td>
  <td>Select the appropriate definition.</td>
</tr>
</tbody>
</table>
    1.  Click **Search**.
    1.  Optional: Click **Clear all** to clear all search criteria.
1.  Optional: Click **Save search** to save the current for reuse later.
1.  Optional: Select a saved search from the **Saved searches** list to reuse.
1.  Optional: Filter the list of virtual machines by project using the **Project** list.
1.  Optional: Filter the list of virtual machines by status using the **Status** list.
1.  Optional: Filter the list of virtual machines by operating system using the **Operating system** list.
1.  Optional: Filter the list of virtual machines by name using the **Search by name** field.
1.  Optional: Use the **Selection** list to quickly select or deselect a group of virtual machines.
1.  Optional: Use the **Actions** list to perform an action on all selected virtual machines.
1.  Optional: Click the **More actions** icon beside an individual virtual machine listing to perform an action on that virtual machine.