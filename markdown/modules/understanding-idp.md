{%- set _mod_docs_content_type = "CONCEPT" %}
# Supported identity providers {id="understanding-idp_{{ context }}"}

{{ product_title }} includes a built-in OAuth server. Developers and administrators obtain OAuth access tokens to authenticate themselves to the API. As an administrator, you can configure OAuth to specify an identity provider after you install your cluster. After you configure identity providers, users can log in and access the cluster. {._abstract}

You can configure the following types of identity providers:

<table>
<thead>
<tr>
  <th>Identity provider</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>GitHub or GitHub Enterprise</td>
  <td>Configure a GitHub identity provider to validate usernames and passwords against GitHub or GitHub Enterprise's OAuth authentication server.</td>
</tr>
<tr>
  <td>GitLab</td>
  <td>Configure a GitLab identity provider to use GitLab.com or any other GitLab instance as an identity provider.</td>
</tr>
<tr>
  <td>Google</td>
  <td>Configure a Google identity provider by using Google OpenID Connect integration.</td>
</tr>
<tr>
  <td>LDAP</td>
  <td>Configure an LDAP identity provider to validate usernames and passwords against an LDAPv3 server, using simple bind authentication.</td>
</tr>
<tr>
  <td>OpenID Connect</td>
  <td>Configure an OpenID Connect (OIDC) identity provider to integrate with an OIDC identity provider using an Authorization Code Flow.</td>
</tr>
<tr>
  <td>htpasswd</td>
  <td>Configure an htpasswd identity provider for a single, static administration user. You can log in to the cluster as the user to troubleshoot issues.<br><br><dl><dt>Important</dt><dd>The htpasswd identity provider option is included only to enable the creation of a single, static administration user. htpasswd is not supported as a general-use identity provider for {{ product_title }}. For the steps to configure the single user, see <em>Configuring an htpasswd identity provider</em>.</dd></dl></td>
</tr>
</tbody>
</table>