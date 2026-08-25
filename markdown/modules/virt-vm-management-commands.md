{%- set _newdoc_version = "2.18.5" -%}
{%- set _template_generated = "2025-08-13" -%}
{%- set _mod_docs_content_type = "REFERENCE" %}

# VM management commands {id="vm-management-commands_{{ context }}"}

You can use the following `virtctl` commands to manage and migrate virtual machines (VMs) and VM instances (VMIs). {._abstract}

**VM management commands**

<table>
<thead>
<tr>
  <th>Command</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>virtctl start &lt;vm_name&gt;</code></td>
  <td>Start a VM.</td>
</tr>
<tr>
  <td><code>virtctl start --paused &lt;vm_name&gt;</code></td>
  <td>Start a VM in a paused state. This option enables you to interrupt the boot process from the VNC console.</td>
</tr>
<tr>
  <td><code>virtctl stop &lt;vm_name&gt;</code></td>
  <td>Stop a VM.</td>
</tr>
<tr>
  <td><code>virtctl stop &lt;vm_name&gt; --grace-period 0 --force</code></td>
  <td>Force stop a VM. This option might cause data inconsistency or data loss.</td>
</tr>
<tr>
  <td><code>virtctl pause vm &lt;vm_name&gt;</code></td>
  <td>Pause a VM. The machine state is kept in memory.</td>
</tr>
<tr>
  <td><code>virtctl unpause vm &lt;vm_name&gt;</code></td>
  <td>Unpause a VM.</td>
</tr>
<tr>
  <td><code>virtctl migrate &lt;vm_name&gt;</code></td>
  <td>Migrate a VM.</td>
</tr>
<tr>
  <td><code>virtctl migrate-cancel &lt;vm_name&gt;</code></td>
  <td>Cancel a VM migration.</td>
</tr>
<tr>
  <td><code>virtctl restart &lt;vm_name&gt;</code></td>
  <td>Restart a VM.</td>
</tr>
</tbody>
</table>