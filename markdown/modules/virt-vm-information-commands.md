{%- set _newdoc_version = "2.18.5" -%}
{%- set _template_generated = "2025-08-13" -%}
{%- set _mod_docs_content_type = "REFERENCE" %}

# VM information commands {id="vm-information-commands_{{ context }}"}

You can use `virtctl` to view information about virtual machines (VMs) and virtual machine instances (VMIs). {._abstract}

***VM information commands***

<table>
<thead>
<tr>
  <th>Command</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>virtctl fslist <vm_name></code></td>
  <td>View the file systems available on a guest machine.</td>
</tr>
<tr>
  <td><code>virtctl guestosinfo <vm_name></code></td>
  <td>View information about the operating systems on a guest machine.</td>
</tr>
<tr>
  <td><code>virtctl userlist <vm_name></code></td>
  <td>View the logged-in users on a guest machine.</td>
</tr>
</tbody>
</table>