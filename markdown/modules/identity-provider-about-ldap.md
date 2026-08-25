{%- set _mod_docs_content_type = "CONCEPT" %}
# About LDAP authentication {id="identity-provider-about-ldap_{{ context }}"}

Review how usernames and passwords are validated against the LDAP directory so you can configure the LDAP identity provider correctly. {._abstract}

During authentication, the LDAP directory is searched for an entry that matches the provided username. If a single unique match is found, a simple bind is attempted using the distinguished name (DN) of the entry plus the provided
password.

LDAP authentication uses the following process:

1.  Generates a search filter by combining the attribute and filter in the configured `url` with the user-provided username.
1.  Searches the directory using the generated filter. Denies access if the search does not return exactly one entry.
1.  Attempts to bind to the LDAP server using the DN of the entry retrieved from the search, and the user-provided password.
1.  Denies access if the bind is unsuccessful.
1.  Builds an identity using the configured attributes as the identity, email address, display name, and preferred username if the bind is successful.

The configured `url` is an RFC 2255 URL, which specifies the LDAP host and search parameters to use. The syntax of the URL is:

```
ldap://host:port/basedn?attribute?scope?filter
```

For this URL:

<table>
<thead>
<tr>
  <th>URL component</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>ldap</code></td>
  <td>For regular LDAP, use the string <code>ldap</code>. For secure LDAP (LDAPS), use <code>ldaps</code> instead.</td>
</tr>
<tr>
  <td><code>host:port</code></td>
  <td>The name and port of the LDAP server. Defaults to <code>localhost:389</code> for LDAP and <code>localhost:636</code> for LDAPS.</td>
</tr>
<tr>
  <td><code>basedn</code></td>
  <td>The DN of the branch of the directory where all searches should start from. At the very least, this must be the top of your directory tree, but it could also specify a subtree in the directory.</td>
</tr>
<tr>
  <td><code>attribute</code></td>
  <td>The attribute to search for. Although RFC 2255 allows a comma-separated list of attributes, only the first attribute is used, no matter how many are provided. If no attributes are provided, the default is to use <code>uid</code>. It is recommended to choose an attribute that is unique across all entries in the subtree you are using.</td>
</tr>
<tr>
  <td><code>scope</code></td>
  <td>The scope of the search. Can be either <code>one</code> or <code>sub</code>. If the scope is not provided, the default is to use a scope of <code>sub</code>.</td>
</tr>
<tr>
  <td><code>filter</code></td>
  <td>A valid LDAP search filter. If not provided, defaults to <code>(objectClass=*)</code></td>
</tr>
</tbody>
</table>

During a search, the attribute and filter from the configured `url` are combined with the user-provided username to create a search filter in the following format:

```
(&(<filter>)(<attribute>=<username>))
```

For example, consider a URL of:

```
ldap://ldap.example.com/o=Acme?cn?sub?(enabled=true)
```

When a client attempts to connect using username `bob`, the resulting search filter is `(&(enabled=true)(cn=bob))`.

If the LDAP directory requires authentication to search, specify a `bindDN` and `bindPassword` to use to perform the entry search.