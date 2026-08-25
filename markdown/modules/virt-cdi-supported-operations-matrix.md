{%- set _mod_docs_content_type = "REFERENCE" %}
# CDI supported operations matrix {id="virt-cdi-supported-operations-matrix_{{ context }}"}

This matrix shows the supported CDI operations for content types against endpoints, and which of these operations requires scratch space. {._abstract}

<table>
<thead>
<tr>
  <th>Content types</th>
  <th>HTTP</th>
  <th>HTTPS</th>
  <th>Basic HTTP authentication</th>
  <th>Registry</th>
  <th>Upload</th>
</tr>
</thead>
<tbody>
<tr>
  <td>KubeVirt (QCOW2)</td>
  <td>&#10003; QCOW2<br><br>&#10003; GZ*<br><br>&#10003; XZ*</td>
  <td>&#10003; QCOW2**<br><br>&#10003; GZ*<br><br>&#10003; XZ*</td>
  <td>&#10003; QCOW2<br><br>&#10003; GZ*<br><br>&#10003; XZ*</td>
  <td>&#10003; QCOW2*<br><br>&#9633; GZ<br><br>&#9633; XZ</td>
  <td>&#10003; QCOW2*<br><br>&#10003; GZ*<br><br>&#10003; XZ*</td>
</tr>
<tr>
  <td>KubeVirt (raw)</td>
  <td>&#10003; raw<br><br>&#10003; GZ<br><br>&#10003; XZ</td>
  <td>&#10003; raw<br><br>&#10003; GZ<br><br>&#10003; XZ</td>
  <td>&#10003; raw<br><br>&#10003; GZ<br><br>&#10003; XZ</td>
  <td>&#10003; raw*<br><br>&#9633; GZ<br><br>&#9633; XZ</td>
  <td>&#10003; raw*<br><br>&#10003; GZ*<br><br>&#10003; XZ*</td>
</tr>
</tbody>
</table>


&#10003;
:   Supported operation

&#9633;
:   Unsupported operation

$$*$$
:   Requires scratch space

$$**$$
:   Requires scratch space if a custom certificate authority is required