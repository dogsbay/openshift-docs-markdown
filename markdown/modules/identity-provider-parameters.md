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
  <td>Defines how new identities are mapped to users when they log in. Enter one of the following values:<br><br>claim:: The default value. Provisions a user with the identity's preferred user name. Fails if a user with that user name is already mapped to another identity. lookup:: Looks up an existing identity, user identity mapping, and user, but does not automatically provision users or identities. This allows cluster administrators to set up identities and users manually, or using an external process. Using this method requires you to manually provision users. add:: Provisions a user with the identity's preferred user name. If a user with that user name already exists, the identity is mapped to the existing user, adding to any existing identity mappings for the user. Required when multiple identity providers are configured that identify the same set of users and map to the same user names.</td>
</tr>
</tbody>
</table>


:::note

When adding or changing identity providers, you can map identities from the new provider to existing users by setting the `mappingMethod` parameter to `add`.

:::