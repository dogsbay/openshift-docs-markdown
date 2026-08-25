{%- set _newdoc_version = "2.18.5" -%}
{%- set _template_generated = "2025-08-13" -%}
{%- set _mod_docs_content_type = "REFERENCE" %}

# Image upload commands {id="image-upload-commands_{{ context }}"}

You can use the following `virtctl image-upload` commands to upload a VM image to a data volume. {._abstract}

**Image upload commands**

<table>
<thead>
<tr>
  <th>Command</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>virtctl image-upload dv &lt;datavolume_name&gt; --image-path=&lt;/path/to/image&gt; --no-create</code></td>
  <td>Upload a VM image to a data volume that already exists.</td>
</tr>
<tr>
  <td><code>virtctl image-upload dv &lt;datavolume_name&gt; --size=&lt;datavolume_size&gt; --image-path=&lt;/path/to/image&gt;</code></td>
  <td>Upload a VM image to a new data volume of a specified requested size.</td>
</tr>
<tr>
  <td><code>virtctl image-upload dv &lt;datavolume_name&gt; --datasource --size=&lt;datavolume_size&gt; --image-path=&lt;/path/to/image&gt;</code></td>
  <td>Upload a VM image to a new data volume and create an associated <code>DataSource</code> object for it.</td>
</tr>
</tbody>
</table>