{%- set _mod_docs_content_type = "REFERENCE" %}
# About the `FirmwareSchema` resource {id="bmo-about-the-firmwareschema-resource_{{ context }}"}

The `FirmwareSchema` resource contains valid types and limits for BIOS settings on each host model, enabling you to identify valid values when configuring the `HostFirmwareSettings` resource. {._abstract}

**FirmwareSchema specification**

<table>
<thead>
<tr>
  <th>Parameters</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><pre>&lt;BIOS_setting_name&gt;&#10;  attribute_type:&#10;  allowable_values:&#10;  lower_bound:&#10;  upper_bound:&#10;  min_length:&#10;  max_length:&#10;  read_only:&#10;  unique:</pre></td>
  <td>The <code>spec</code> is a simple map consisting of the BIOS setting name and the limits of the setting. The fields include:<br><br><ul><li><code>attribute_type</code>: The type of setting. The supported types are:<ul><li><code>Enumeration</code></li><li><code>Integer</code></li><li><code>String</code></li><li><code>Boolean</code></li></ul></li><li><code>allowable_values</code>: A list of allowable values when the <code>attribute_type</code> is <code>Enumeration</code>.</li><li><code>lower_bound</code>: The lowest allowed value when <code>attribute_type</code> is <code>Integer</code>.</li><li><code>upper_bound</code>: The highest allowed value when <code>attribute_type</code> is <code>Integer</code>.</li><li><code>min_length</code>: The shortest string length that the value can have when <code>attribute_type</code> is <code>String</code>.</li><li><code>max_length</code>: The longest string length that the value can have when <code>attribute_type</code> is <code>String</code>.</li><li><code>read_only</code>: The setting is read only and cannot be modified.</li><li><code>unique</code>: The setting is specific to this host.</li></ul></td>
</tr>
</tbody>
</table>