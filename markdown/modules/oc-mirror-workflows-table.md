{%- set _mod_docs_content_type = "REFERENCE" %}
# Comparison of oc-mirror workflows {id="oc-mirror-workflows-table_{{ context }}"}

Use the following table to compare the supported use cases for the mirror-to-disk (m2d), disk-to-mirror (d2m), and mirror-to-mirror (m2m) workflows. {._abstract}

<table>
<thead>
<tr>
  <th><strong>Use Case</strong></th>
  <th><strong>Mirror To Disk (m2d) and Disk To Mirror (d2m)</strong></th>
  <th><strong>Mirror To Mirror (m2m)</strong></th>
</tr>
</thead>
<tbody>
<tr>
  <td>The target registry exists in an environment with no internet access and no external access.</td>
  <td>&#10003;</td>
  <td></td>
</tr>
<tr>
  <td>The target registry exists in an environment with no internet access but is accessible from another machine. For example, the target registry resides in a bastion host.</td>
  <td></td>
  <td>&#10003;</td>
</tr>
<tr>
  <td>You must move content to the disconnected environment by using a physical method, such as USB devices.</td>
  <td>&#10003;</td>
  <td></td>
</tr>
<tr>
  <td>The workflow moves content directly to the target registry without generating an intermediate tar file.</td>
  <td></td>
  <td>&#10003;</td>
</tr>
<tr>
  <td>The workflow uses an internal cache to resume after failures but requires additional disk space.</td>
  <td>&#10003;</td>
  <td></td>
</tr>
<tr>
  <td>The workflow does not use a cache, restarts from the beginning after a failure, and requires no additional disk space.</td>
  <td></td>
  <td>&#10003;</td>
</tr>
</tbody>
</table>