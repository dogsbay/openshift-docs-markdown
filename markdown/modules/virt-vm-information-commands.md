{%- set _newdoc_version = "2.18.5" -%}
{%- set _template_generated = "2025-08-13" -%}
{%- set _mod_docs_content_type = "REFERENCE" %}

# VM information commands {id="vm-information-commands_{{ context }}"}

You can use the following `virtctl` commands to view the file systems, operating systems, and logged-in users of a guest machine. {._abstract}

**VM information commands**

<table>
<thead>
<tr>
  <th>Command</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>virtctl fslist &lt;vm_name&gt;</code></td>
  <td>View the file systems available on a guest machine.</td>
</tr>
<tr>
  <td><code>virtctl guestosinfo &lt;vm_name&gt;</code></td>
  <td>View information about the operating systems on a guest machine.</td>
</tr>
<tr>
  <td><code>virtctl userlist &lt;vm_name&gt;</code></td>
  <td>View the logged-in users on a guest machine.</td>
</tr>
</tbody>
</table>