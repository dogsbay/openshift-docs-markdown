{%- set _mod_docs_content_type = "REFERENCE" %}
# Identity provider parameters {id="identity-provider-parameters_{{ context }}"}

The following parameters are common to all identity providers: {._abstract}

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>name</code></td>
  <td>The provider name is prefixed to provider user names to form an identity name.</td>
</tr>
<tr>
  <td><code>mappingMethod</code></td>
  <td>Defines how new identities are mapped to users when they log in. Enter one of the following values:</td>
</tr>
</tbody>
</table>


:::note

When adding or changing identity providers, you can map identities from the new provider to existing users by setting the `mappingMethod` parameter to `add`.

:::