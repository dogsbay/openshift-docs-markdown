{%- set _mod_docs_content_type = "REFERENCE" %}
# Default cluster roles for {{ VirtProductName }} {id="default-cluster-roles-for-virt_{{ context }}"}

By using cluster role aggregation, {{ VirtProductName }} extends the default {{ product_title }} cluster roles to include permissions for accessing virtualization objects. Roles unique to {{ VirtProductName }} are not aggregated with {{ product_title }} roles. {._abstract}

**{{ VirtProductName }} cluster roles**

<table>
<thead>
<tr>
  <th>Default cluster role</th>
  <th>{{ VirtProductName }} cluster role</th>
  <th>{{ VirtProductName }} cluster role description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>view</code></td>
  <td><code>kubevirt.io:view</code></td>
  <td>A user that can view all {{ VirtProductName }} resources in the cluster but cannot create, delete, modify, or access them. For example, the user can see that a virtual machine (VM) is running but cannot shut it down or gain access to its console.</td>
</tr>
<tr>
  <td><code>edit</code></td>
  <td><code>kubevirt.io:edit</code></td>
  <td>A user that can modify all {{ VirtProductName }} resources in the cluster. For example, the user can create VMs, access VM consoles, and delete VMs.</td>
</tr>
<tr>
  <td><code>admin</code></td>
  <td><code>kubevirt.io:admin</code></td>
  <td>A user that has full permissions to all {{ VirtProductName }} resources, including the ability to delete collections of resources. The user can also view and modify the {{ VirtProductName }} runtime configuration, which is located in the <code>HyperConverged</code> custom resource in the <code>openshift-cnv</code> namespace.</td>
</tr>
<tr>
  <td><code>N/A</code></td>
  <td><code>kubevirt.io:migrate</code></td>
  <td>A user that can create, delete, and update VM live migration requests, which are represented by namespaced <code>VirtualMachineInstanceMigration</code> (VMIM) objects. This role is specific to {{ VirtProductName }}.</td>
</tr>
</tbody>
</table>