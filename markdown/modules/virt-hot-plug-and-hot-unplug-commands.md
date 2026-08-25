{%- set _newdoc_version = "2.18.5" -%}
{%- set _template_generated = "2025-08-13" -%}
{%- set _mod_docs_content_type = "REFERENCE" %}

# Hot plug and hot unplug  commands {id="hot-plug-and-hot-unplug-commands_{{ context }}"}

You can use the following `virtctl` commands to add or remove resources from running virtual machines (VMs) and VM instances (VMIs). {._abstract}

**Hot plug and hot unplug commands**

<table>
<thead>
<tr>
  <th>Command</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>virtctl addvolume &lt;vm_name&gt; --volume-name=&lt;datavolume_or_PVC&gt; [--persist] [--serial=&lt;label&gt;]</code></td>
  <td>Hot plug a data volume or persistent volume claim (PVC).<br><br>Optional:<br><br><ul><li><code>--persist</code> mounts the virtual disk permanently on a VM. <strong>This flag does not apply to VMIs.</strong></li><li><code>--serial=&lt;label&gt;</code> adds a label to the VM. If you do not specify a label, the default label is the data volume or PVC name.</li></ul></td>
</tr>
<tr>
  <td><code>virtctl removevolume &lt;vm_name&gt; --volume-name=&lt;virtual_disk&gt;</code></td>
  <td>Hot unplug a virtual disk.</td>
</tr>
</tbody>
</table>