{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ op_system_bundle }} release compatibility matrix {id="microshift-rhde-compatibility-table_{{ context }}"}

{{ op_system_base_full }} and {{ microshift_short }} work together as a single solution for device-edge computing. You can update each component separately, but the product versions must be compatible. {._abstract}

Supported configurations of {{ op_system_bundle }} use verified releases for each together as listed in the following table:


:::note

Be sure to check the support status of a release on the product lifecycle page.

:::


<table>
<thead>
<tr>
  <th><strong>{{ op_system_base }} Version(s)</strong></th>
  <th><strong>{{ microshift_short }} Version</strong></th>
  <th><strong>Supported {{ microshift_short }} Version&#160;&#8594;&#160;Version Updates</strong></th>
</tr>
</thead>
<tbody>
<tr>
  <td>10.2</td>
  <td>4.22</td>
  <td>4.22.0&#160;&#8594;&#160;4.22.z (Technology Preview)</td>
</tr>
<tr>
  <td>9.8</td>
  <td>4.22</td>
  <td>4.22.0&#160;&#8594;&#160;4.22.z, 4.22 on {{ op_system_base }} 9.8&#160;&#8594;&#160;4.22 on {{ op_system_base }} 10.2 (Technology Preview)</td>
</tr>
<tr>
  <td>9.6</td>
  <td>4.21</td>
  <td>4.21.0&#160;&#8594;&#160;4.21.z, 4.21&#160;&#8594;&#160;4.22, 4.21&#160;&#8594;&#160;4.22 on {{ op_system_base }} 9.8, 4.21&#160;&#8594;&#160;4.22 on {{ op_system_base }} 10.2 (Technology Preview)</td>
</tr>
<tr>
  <td>9.6</td>
  <td>4.20</td>
  <td>4.20.0&#160;&#8594;&#160;4.20.z, 4.20&#160;&#8594;&#160;4.21, 4.20&#160;&#8594;&#160;4.22 on {{ op_system_base }} 10.2 (Technology Preview)</td>
</tr>
<tr>
  <td>9.6</td>
  <td>4.19</td>
  <td>4.19.0&#160;&#8594;&#160;4.19.z, 4.19&#160;&#8594;&#160;4.20</td>
</tr>
<tr>
  <td>9.4</td>
  <td>4.18</td>
  <td>4.18.0&#160;&#8594;&#160;4.18.z, 4.18&#160;&#8594;&#160;4.20 on {{ op_system_base }} 9.6</td>
</tr>
<tr>
  <td>9.4</td>
  <td>4.17</td>
  <td>4.17.1&#160;&#8594;&#160;4.17.z, 4.17&#160;&#8594;&#160;4.18</td>
</tr>
<tr>
  <td>9.4</td>
  <td>4.16</td>
  <td>4.16.0&#160;&#8594;&#160;4.16.z, 4.16&#160;&#8594;&#160;4.17, 4.16&#160;&#8594;&#160;4.18</td>
</tr>
</tbody>
</table>