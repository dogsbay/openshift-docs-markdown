{%- set _newdoc_version = "2.18.5" -%}
{%- set _template_generated = "2025-08-13" -%}
{%- set _mod_docs_content_type = "REFERENCE" %}

# VM export commands {id="vm-export-commands_{{ context }}"}

Use `virtctl vmexport` commands to create, download, or delete a volume exported from a VM, VM snapshot, or persistent volume claim (PVC). Certain manifests also contain a header secret, which grants access to the endpoint to import a disk image in a format that {{ VirtProductName }} can use. {._abstract}

**VM export commands**

<table>
<thead>
<tr>
  <th>Command</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>virtctl vmexport create &lt;vmexport_name&gt; --vm|snapshot|pvc=&lt;object_name&gt;</code></td>
  <td>Create a <code>VirtualMachineExport</code> custom resource (CR) to export a volume from a VM, VM snapshot, or PVC.<br><br><ul><li><code>--vm</code>: Exports the PVCs of a VM.</li><li><code>--snapshot</code>: Exports the PVCs contained in a <code>VirtualMachineSnapshot</code> CR.</li><li><code>--pvc</code>: Exports a PVC.</li><li>Optional: <code>--ttl=1h</code> specifies the time to live. The default duration is 2 hours.</li></ul></td>
</tr>
<tr>
  <td><code>virtctl vmexport delete &lt;vmexport_name&gt;</code></td>
  <td>Delete a <code>VirtualMachineExport</code> CR manually.</td>
</tr>
<tr>
  <td><code>virtctl vmexport download &lt;vmexport_name&gt; --output=&lt;output_file&gt; --volume=&lt;volume_name&gt;</code></td>
  <td>Download the volume defined in a <code>VirtualMachineExport</code> CR.<br><br><ul><li><code>--output</code> specifies the file format. Example: <code>disk.img.gz</code>.</li><li><code>--volume</code> specifies the volume to download. This flag is optional if only one volume is available.</li></ul>Optional:<br><br><ul><li><code>--keep-vme</code> retains the <code>VirtualMachineExport</code> CR after download. The default behavior is to delete the <code>VirtualMachineExport</code> CR after download.</li><li><code>--insecure</code> enables an insecure HTTP connection.</li></ul></td>
</tr>
<tr>
  <td><code>virtctl vmexport download &lt;vmexport_name&gt; --vm|snapshot|pvc=&lt;object_name&gt; --output=&lt;output_file&gt; --volume=&lt;volume_name&gt;</code></td>
  <td>Create a <code>VirtualMachineExport</code> CR and then download the volume defined in the CR.</td>
</tr>
<tr>
  <td><code>virtctl vmexport download export --manifest</code></td>
  <td>Retrieve the manifest for an existing export. The manifest does not include the header secret.</td>
</tr>
<tr>
  <td><code>virtctl vmexport download export --manifest --vm=example</code></td>
  <td>Create a VM export for a VM example, and retrieve the manifest. The manifest does not include the header secret.</td>
</tr>
<tr>
  <td><code>virtctl vmexport download export --manifest --snap=example</code></td>
  <td>Create a VM export for a VM snapshot example, and retrieve the manifest. The manifest does not include the header secret.</td>
</tr>
<tr>
  <td><code>virtctl vmexport download export --manifest --include-secret</code></td>
  <td>Retrieve the manifest for an existing export. The manifest includes the header secret.</td>
</tr>
<tr>
  <td><code>virtctl vmexport download export --manifest --manifest-output-format=json</code></td>
  <td>Retrieve the manifest for an existing export in json format. The manifest does not include the header secret.</td>
</tr>
<tr>
  <td><code>virtctl vmexport download export --manifest --include-secret --output=manifest.yaml</code></td>
  <td>Retrieve the manifest for an existing export. The manifest includes the header secret and writes it to the file specified.</td>
</tr>
</tbody>
</table>