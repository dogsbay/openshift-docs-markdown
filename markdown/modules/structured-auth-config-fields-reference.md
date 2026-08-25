{%- set _mod_docs_content_type = "REFERENCE" %}
# Advanced authentication field reference {id="structured-auth-config-fields-reference_{{ context }}"}

The following table describes the advanced authentication configuration fields available as Technology Preview in {{ product_title }}. {._abstract}

***Advanced `oidcProviders` configuration fields***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>issuer.discoveryURL</code></td>
  <td>Optional parameter. Custom OIDC discovery endpoint URL for retrieving identity provider metadata from a non-standard location.<br><br>Requirements:<br><br><ul><li>Must be a valid HTTPS URL</li><li>Must differ from <code>issuer.issuerURL</code></li></ul>When not specified, {{ product_title }} constructs the discovery URL by using the standard OIDC format: <code>{{ issuerURL }}/.well-known/openid-configuration</code>.<br><br><strong>Example:</strong><br><br><pre>issuer:&#10;  issuerURL: https://idp.example.com&#10;  discoveryURL: https://custom-discovery.example.com/.well-known/openid-configuration</pre></td>
</tr>
<tr>
  <td><code>claimValidationRules</code></td>
  <td>Optional parameter. Array of validation rules for JWT token claims using Common Expression Language (CEL) expressions. All rules must evaluate to <code>true</code> for authentication to succeed (AND operation).<br><br>Each rule has:<br><br><ul><li><code>type</code>: Set to <code>CEL</code> for CEL-based validation</li><li><code>cel</code>: Object with <code>expression</code> (must evaluate to <code>true</code>) and <code>message</code> (error text)</li></ul>CEL expressions access claims by using <code>claims</code> variable (for example, <code>claims.sub</code>).<br><br><strong>Example:</strong><br><br><pre>claimValidationRules:&#10;- type: CEL&#10;  cel:&#10;    expression: 'claims.exp - claims.nbf &lt;= 86400'&#10;    message: 'Total token lifetime must not exceed 24 hours'&#10;- type: CEL&#10;  cel:&#10;    expression: 'has(claims.email) &amp;&amp; claims.email.contains("@example.com")'&#10;    message: 'Email claim must be present and from example.com domain'</pre></td>
</tr>
<tr>
  <td><code>claimValidationRules[].type</code></td>
  <td>Required. Validation rule type. Set to <code>CEL</code> for CEL-based validation. Requires <code>cel</code> field.</td>
</tr>
<tr>
  <td><code>claimValidationRules[].cel</code></td>
  <td>Required when <code>type</code> is <code>CEL</code>. Contains <code>expression</code> (CEL expression to evaluate) and <code>message</code> (error text).</td>
</tr>
<tr>
  <td><code>claimValidationRules[].cel.expression</code></td>
  <td>Required. CEL expression that validates token claims. Must evaluate to <code>true</code> for authentication to succeed.<br><br>Constraints: 1-1024 characters, must evaluate to boolean.<br><br>Access claims by using <code>claims</code> variable: <code>claims.sub</code>, <code>claims.foo.bar</code> (nested), <code>has(claims.email)</code> (existence check).<br><br><dl><dt>Note</dt><dd>When using the <code>email</code> claim in CEL expressions, you must also validate the <code>email_verified</code> claim to ensure the email address has been verified by the identity provider. For example: <code>claims.email_verified && claims.email.endsWith("@example.com")</code>.</dd></dl></td>
</tr>
<tr>
  <td><code>claimValidationRules[].cel.message</code></td>
  <td>Required. Error message displayed when validation fails. Constraints: 1-256 characters.</td>
</tr>
<tr>
  <td><code>userValidationRules</code></td>
  <td>Optional parameter. Array of validation rules for user objects by using CEL expressions. All rules must evaluate to <code>true</code> for authentication to succeed (AND operation).<br><br>Each rule has <code>expression</code> (must evaluate to <code>true</code>) and <code>message</code> (error text).<br><br>CEL expressions access user object by using <code>user</code> variable: <code>user.username</code> (string), <code>user.groups</code> (array), <code>user.uid</code> (string), <code>user.extra</code> (map).<br><br><strong>Example:</strong><br><br><pre>userValidationRules:&#10;- expression: "!user.username.startsWith('system:')"&#10;  message: 'Username cannot use reserved system: prefix'&#10;- expression: "!user.groups.exists(g, g.startsWith('system:'))"&#10;  message: 'Groups cannot use reserved system: prefix'</pre></td>
</tr>
<tr>
  <td><code>userValidationRules[].expression</code></td>
  <td>Required. CEL expression that validates the user object. Must evaluate to <code>true</code> for authentication to succeed.<br><br>Constraints: 1-1024 characters, must evaluate to boolean.<br><br>Access user fields: <code>user.username.startsWith('system:')</code>, <code>user.groups.exists(g, g == "admin")</code>, <code>user.extra["example.com/role"]</code>.</td>
</tr>
<tr>
  <td><code>userValidationRules[].message</code></td>
  <td>Required. Error message displayed when validation fails. Must not be empty.</td>
</tr>
</tbody>
</table>