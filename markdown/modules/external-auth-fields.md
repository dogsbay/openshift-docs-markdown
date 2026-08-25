{%- set _mod_docs_content_type = "REFERENCE" %}
# OIDC provider configuration parameters {id="external-auth-fields_{{ context }}"}

Configure OIDC providers for external authentication by using these parameters to map JWT token claims to cluster identities, validate authentication tokens, and enable platform components to authenticate with identity providers. {._abstract}

The following table lists all available OIDC provider parameters for direct authentication:

**`oidcProviders` configuration**

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>claimMappings</code></td>
  <td>Configures the rules to be used by the Kubernetes API server for translating claims in a JSON web token (JWT), issued by the identity provider, to a cluster identity.</td>
</tr>
<tr>
  <td><code>claimMappings.extra</code></td>
  <td>An optional field for configuring the mappings used to construct the extra attribute for the cluster identity. When omitted, no extra attributes will be present on the cluster identity. Key values for extra mappings must be unique. A maximum of 32 extra attribute mappings can be provided.</td>
</tr>
<tr>
  <td><code>claimMappings.extra.key</code></td>
  <td>A required field that specifies the string to use as the extra attribute key. The following restrictions apply:<br><br><ul><li>Key must be a domain-prefix path (e.g <code>example.org/foo</code>).</li><li>Key must not exceed 510 characters in length.</li><li>Key must contain the <code>/</code> character, separating the domain and path characters.</li><li>Key must not be empty.</li><li>The domain portion of the key (string of characters before the <code>/</code>) must be a valid RFC1123 subdomain.</li><li>It must not exceed 253 characters in length.</li><li>It must start and end with an alphanumeric character.</li><li>It must only contain lower case alphanumeric characters and <code>-</code> or <code>.</code>.</li><li>It must not use the reserved domains, or be subdomains of, <code>kubernetes.io</code>, <code>k8s.io</code>, and <code>openshift.io</code>.</li><li>The path portion of the key (string of characters after the <code>/</code>) must not be empty and must consist of at least one alphanumeric character, percent-encoded octets, <code>-</code>, <code>.</code>, <code>_</code>, <code>~</code>, <code>!</code>, <code>$</code>, <code>&amp;</code>, <code>'</code>, <code>(</code>, <code>)</code>, <code>*</code>, <code>+</code>, <code>,</code>, <code>;</code>, <code>=</code>, and <code>:</code>.</li><li>Domain portion of the key must not exceed 256 characters in length.</li></ul></td>
</tr>
<tr>
  <td><code>claimMappings.extra.valueExpression</code></td>
  <td>A required field to specify the CEL expression to extract the extra attribute value from claims of a JWT token. The <code>valueExpression</code> field must produce a string or string array value. The following restrictions apply:<br><br><ul><li>CEL expressions that return "", [], and null are treated as the extra mapping not being present.</li><li>Empty string values within an array are filtered out. For example, [<code>one</code>, `<code>, </code>three<code>] becomes [</code>one<code>, </code>three`].</li><li>CEL expressions have access to the token claims through a CEL variable, <code>claims</code>.</li><li><code>claims</code> is a map of claim names to claim values. For example, the <code>sub</code> claim value can be accessed as <code>claims.sub</code>.</li><li>Nested claims can be accessed using dot notation (<code>claims.foo.bar</code>).</li><li>The <code>valueExpression</code> value must not exceed 1024 characters in length.</li><li>The <code>valueExpression</code> value must not be empty.</li></ul></td>
</tr>
<tr>
  <td><code>claimMappings.groups</code></td>
  <td>Configures how the groups of a cluster identity should be constructed from the claims in a JWT token issued by the identity provider. When referencing a claim, if the claim is present in the JWT token, its value must be a comma-separated list of groups.</td>
</tr>
<tr>
  <td><code>claimMappings.groups.claim</code></td>
  <td>Optional parameter. JWT token claim used for groups mapping. Set either <code>claim</code> or <code>expression</code>, not both. Length: 1-256 characters.</td>
</tr>
<tr>
  <td><code>claimMappings.groups.expression</code></td>
  <td>Optional parameter (Technology Preview). CEL expression that produces a string or string array from JWT token claims.<br><br>Access claims by using the <code>claims</code> variable (for example, <code>claims.groups</code> or <code>claims.foo.bar</code> for nested claims).<br><br>Set either <code>claim</code> or <code>expression</code>, not both. Length: 1-1024 characters.</td>
</tr>
<tr>
  <td><code>claimMappings.groups.prefix</code></td>
  <td>Configures the prefix that is applied to the cluster identity attribute during the process of mapping JWT claims to cluster identity attributes.</td>
</tr>
<tr>
  <td><code>claimMappings.uid</code></td>
  <td>An optional field for configuring the claim mapping used to construct the UID for the cluster identity. When omitted, this means the user has no opinion and the platform is left to choose a default, which is subject to change over time. The current default is to use the <code>sub</code> claim.</td>
</tr>
<tr>
  <td><code>claimMappings.uid.claim</code></td>
  <td>An optional field for specifying the JWT token claim that is used in the mapping. The value of this claim will be assigned to the field in which this mapping is associated. To specify the claim, use a single string value for <code>uid.claim</code>.<br><br>You must set either <code>claim</code> or <code>expression</code>. Do not specify <code>claim</code> when <code>expression</code> is set. The value of <code>claim</code> must be at least 1 character and must not exceed 256 characters in length.</td>
</tr>
<tr>
  <td><code>claimMappings.uid.expression</code></td>
  <td>An optional field for specifying a CEL expression that produces a string value from JWT token claims. When using <code>uid.expression</code> the expression must result in a single string value.<br><br>CEL expressions have access to the token claims through a CEL variable, <code>claims</code>. The <code>claims</code> variable is a map of claim names to claim values. For example, you can access the <code>sub</code> claim value as <code>claims.sub</code>. Nested claims can be accessed using dot notation for example, <code>claims.foo.bar</code>.<br><br>You must set either <code>claim</code> or <code>expression</code>. Do not specify <code>expression</code> when <code>claim</code> is set. The value of <code>expression</code> must be at least 1 character and must not exceed 1024 characters in length.</td>
</tr>
<tr>
  <td><code>claimMappings.username</code></td>
  <td>Configures how the username of a cluster identity should be constructed from the claims in a JWT token issued by the identity provider.</td>
</tr>
<tr>
  <td><code>claimMappings.username.claim</code></td>
  <td>Optional parameter. JWT token claim used for username mapping. Set either <code>claim</code> or <code>expression</code>, not both. Length: 1-256 characters.</td>
</tr>
<tr>
  <td><code>claimMappings.username.expression</code></td>
  <td>Optional parameter (Technology Preview). CEL expression that produces a string value from JWT token claims. Must result in a single string.<br><br>Access claims by using the <code>claims</code> variable (for example, <code>claims.email</code> or <code>claims.foo.bar</code> for nested claims).<br><br>Set either <code>claim</code> or <code>expression</code>, not both. Length: 1-1024 characters.</td>
</tr>
<tr>
  <td><code>claimMappings.username.prefix</code></td>
  <td>Configures the prefix that should be prepended to the value of the JWT claim. Must be set when <code>prefixPolicy</code> is set to <code>Prefix</code> and must be unset otherwise.</td>
</tr>
<tr>
  <td><code>claimMappings.username.prefix.prefixString</code></td>
  <td>Configures the prefix that is applied to the cluster identity username attribute during the process of mapping JWT claims to cluster identity attributes. Must not be an empty string (<code>""</code>).</td>
</tr>
<tr>
  <td><code>claimMappings.username.prefixPolicy</code></td>
  <td>Configures how a prefix should be applied to the value of the JWT claim specified in the <code>claim</code> field. Allowed values are <code>Prefix</code>, <code>NoPrefix</code>, and omitted (not provided or an empty string).<br><br>When set to <code>Prefix</code>, the value specified in the prefix field is prepended to the value of the JWT claim. The prefix field must be set when <code>prefixPolicy</code> is <code>Prefix</code>.<br><br>When set to <code>NoPrefix</code>, no prefix is prepended to the value of the JWT claim.<br><br>When omitted, this means no opinion and the platform is left to choose any prefixes that are applied which is subject to change over time.<br><br>Currently, the platform prepends <code>{{ issuerURL }}#</code> to the value of the JWT claim when the claim is not <code>email</code>.</td>
</tr>
<tr>
  <td><code>claimValidationRules</code></td>
  <td>Configures the rules to be used by the Kubernetes API server for validating the claims in a JWT token issued by the identity provider. Validation rules are joined by an <code>AND</code> operation.</td>
</tr>
<tr>
  <td><code>claimValidationRules.cel</code></td>
  <td>Optional parameter (Technology Preview). Required when <code>type</code> is <code>CEL</code>. Contains <code>expression</code> (CEL expression to evaluate) and <code>message</code> (error text).</td>
</tr>
<tr>
  <td><code>claimValidationRules.cel.expression</code></td>
  <td>Technology Preview. CEL expression that validates token claims. Must evaluate to <code>true</code> for authentication to succeed.<br><br>Access claims by using the <code>claims</code> variable using dot notation (for example, <code>claims.sub</code> or <code>claims.foo.bar</code>).<br><br>Constraints: 1-1024 characters.</td>
</tr>
<tr>
  <td><code>claimValidationRules.cel.message</code></td>
  <td>Technology Preview. Error message displayed when validation fails. Constraints: 1-256 characters.</td>
</tr>
<tr>
  <td><code>claimValidationRules.requiredClaim</code></td>
  <td>Configures the required claim and value that the Kubernetes API server uses to validate if an incoming JWT is valid for this identity provider. Required when <code>type</code> is set to <code>RequiredClaim</code>.</td>
</tr>
<tr>
  <td><code>claimValidationRules.requiredClaim.claim</code></td>
  <td>Configures the name of the required claim. When taken from the JWT claims, the claim must be a string value. Must not be an empty string (<code>""</code>).</td>
</tr>
<tr>
  <td><code>claimValidationRules.requiredClaim.requiredValue</code></td>
  <td>Configures the value that <code>claim</code> must have when taken from the incoming JWT claims. If the value in the JWT claims does not match, the token is rejected for authentication. Must not be an empty string (<code>""</code>).</td>
</tr>
<tr>
  <td><code>claimValidationRules.type</code></td>
  <td>Validation rule type. Allowed values: <code>RequiredClaim</code> and <code>CEL</code>.<br><br><ul><li><code>RequiredClaim</code> - Validates that the JWT contains the required claim with the required value</li><li><code>CEL</code> (Technology Preview) - Validates the JWT against a CEL expression</li></ul></td>
</tr>
<tr>
  <td><code>issuer</code></td>
  <td>A required field that configures how the platform interacts with the identity provider and how tokens issued from the identity provider are evaluated by the Kubernetes API server.</td>
</tr>
<tr>
  <td><code>issuer.audiences</code></td>
  <td>A required field that configures the acceptable audiences the JWT token, issued by the identity provider, must be issued to. At least one of the entries must match the <code>aud</code> claim in the JWT token. Must contain at least one entry and must not exceed 10 entries.</td>
</tr>
<tr>
  <td><code>issuer.discoveryURL</code></td>
  <td>Optional parameter (Technology Preview). Custom OIDC discovery endpoint URL. Must be a valid HTTPS URL and differ from <code>issuer.issuerURL</code>.<br><br>When not specified, {{ product_title }} constructs the discovery URL by using the standard OIDC format: <code>{{ issuerURL }}/.well-known/openid-configuration</code>.</td>
</tr>
<tr>
  <td><code>issuer.issuerCertificateAuthority</code></td>
  <td>Configures the certificate authority, used by the Kubernetes API server, to validate the connection to the identity provider when fetching discovery information. When not specified, the system trust is used. When specified, it must reference a config map in the <code>openshift-config</code> namespace containing the PEM-encoded CA certificates under the <code>ca-bundle.crt</code> key in the <code>data</code> field of the config map.</td>
</tr>
<tr>
  <td><code>issuer.issuerCertificateAuthority.name</code></td>
  <td>The name of the referenced config map.</td>
</tr>
<tr>
  <td><code>issuer.issuerURL</code></td>
  <td>Configures the URL used to issue tokens by the identity provider. The Kubernetes API server determines how authentication tokens should be handled by matching the <code>iss</code> claim in the JWT to the issuerURL of configured identity providers. This field is required and must use the <code>https://</code> scheme.</td>
</tr>
<tr>
  <td><code>name</code></td>
  <td>A required field that configures the unique human-readable identifier associated with the identity provider. It is used to distinguish between multiple identity providers and has no impact on token validation or authentication mechanics. Must not be an empty string (<code>""</code>).</td>
</tr>
<tr>
  <td><code>oidcClients</code></td>
  <td>Configures how on-cluster, platform clients should request tokens from the identity provider. Must not exceed 20 entries and entries must have unique namespace/name pairs.</td>
</tr>
<tr>
  <td><code>oidcClients.clientID</code></td>
  <td>Configures the client identifier, from the identity provider, that the platform component uses for authentication requests made to the identity provider. The identity provider must accept this identifier for platform components to be able to use the identity provider as an authentication mode. Must not be an empty string (<code>""</code>).</td>
</tr>
<tr>
  <td><code>oidcClients.clientSecret</code></td>
  <td>Configures the client secret used by the platform component when making authentication requests to the identity provider.<br><br>When not specified, no client secret is used when making authentication requests to the identity provider.<br><br>When specified, it references a secret in the <code>openshift-config</code> namespace that contains the client secret in the <code>clientSecret</code> key of the <code>.data</code> field. The client secret is used when making authentication requests to the identity provider.<br><br>Public clients do not require a client secret, but private clients do require a client secret to work with the identity provider.</td>
</tr>
<tr>
  <td><code>oidcClients.clientSecret.name</code></td>
  <td>The name of the referenced secret.</td>
</tr>
<tr>
  <td><code>oidcClients.componentName</code></td>
  <td>Specifies the name of the platform component being configured to use the identity provider as an authentication mode. It is used in combination with <code>componentNamespace</code> as a unique identifier. Must not be an empty string (<code>""</code>) and must not exceed 256 characters in length.</td>
</tr>
<tr>
  <td><code>oidcClients.componentNamespace</code></td>
  <td>Specifies the namespace in which the platform component being configured to use the identity provider as an authentication mode is running. It is used in combination with <code>componentName</code> as a unique identifier. Must not be an empty string (<code>""</code>) and must not exceed 63 characters in length.</td>
</tr>
<tr>
  <td><code>oidcClients.extraScopes</code></td>
  <td>Configures the extra scopes that should be requested by the platform component when making authentication requests to the identity provider. This is useful if you have configured claim mappings that require specific scopes to be requested beyond the standard OIDC scopes. When omitted, no additional scopes are requested.</td>
</tr>
<tr>
  <td><code>userValidationRules</code></td>
  <td>Optional parameter (Technology Preview). Validation rules for user objects created from authenticated tokens. All rules must pass (AND operation).<br><br>Each rule contains <code>expression</code> (must evaluate to <code>true</code>) and <code>message</code> (error text).<br><br>Access user by using the <code>user</code> variable: <code>user.username</code> (string), <code>user.groups</code> (array), <code>user.uid</code> (string), <code>user.extra</code> (map).</td>
</tr>
<tr>
  <td><code>userValidationRules[].expression</code></td>
  <td>Required. CEL expression that validates the user object. Must evaluate to <code>true</code> for authentication to succeed. Constraints: 1-1024 characters, boolean result.</td>
</tr>
<tr>
  <td><code>userValidationRules[].message</code></td>
  <td>Required. Error message displayed when validation fails.</td>
</tr>
</tbody>
</table>