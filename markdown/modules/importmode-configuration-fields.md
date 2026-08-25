{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuration fields for --import-mode {id="importmode-configuration-fields_{{ context }}"}

To implement multi-architecture image management using the `--import-mode` flag, reference the necessary configuration fields. These fields define precise parameters for selecting and importing specific manifests into your {{ product_title }} cluster. {._abstract}

The following table describes the options available for the `--import-mode=` flag:

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><strong>Legacy</strong></td>
  <td>The default option for <code>--import-mode</code>. When specified, the manifest list is discarded, and a single sub-manifest is imported. The platform is chosen in the following order of priority:</td>
</tr>
<tr>
  <td><strong>PreserveOriginal</strong></td>
  <td>When specified, the original manifest is preserved. For manifest lists, the manifest list and all of its sub-manifests are imported.</td>
</tr>
</tbody>
</table>