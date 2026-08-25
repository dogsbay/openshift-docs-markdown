{%- set _mod_docs_content_type = "REFERENCE" %}
# Supported identity providers {id="post-install-supported-identity-providers_{{ context }}"}

You can configure the following types of identity providers: {._abstract}

<table>
<thead>
<tr>
  <th>Identity provider</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><a href="/authentication/identity_providers/configuring-htpasswd-identity-provider#configuring-htpasswd-identity-provider">htpasswd</a></td>
  <td>Configure the <code>htpasswd</code> identity provider to validate user names and passwords against a flat file generated using <a href="http://httpd.apache.org/docs/2.4/programs/htpasswd.html"><code>htpasswd</code></a>.</td>
</tr>
<tr>
  <td><a href="/authentication/identity_providers/configuring-keystone-identity-provider#configuring-keystone-identity-provider">Keystone</a></td>
  <td>Configure the <code>keystone</code> identity provider to integrate your {{ product_title }} cluster with Keystone to enable shared authentication with an OpenStack Keystone v3 server configured to store users in an internal database.</td>
</tr>
<tr>
  <td><a href="/authentication/identity_providers/configuring-ldap-identity-provider#configuring-ldap-identity-provider">LDAP</a></td>
  <td>Configure the <code>ldap</code> identity provider to validate user names and passwords against an LDAPv3 server, using simple bind authentication.</td>
</tr>
<tr>
  <td><a href="/authentication/identity_providers/configuring-basic-authentication-identity-provider#configuring-basic-authentication-identity-provider">Basic authentication</a></td>
  <td>Configure a <code>basic-authentication</code> identity provider for users to log in to {{ product_title }} with credentials validated against a remote identity provider. Basic authentication is a generic backend integration mechanism.</td>
</tr>
<tr>
  <td><a href="/authentication/identity_providers/configuring-request-header-identity-provider#configuring-request-header-identity-provider">Request header</a></td>
  <td>Configure a <code>request-header</code> identity provider to identify users from request header values, such as <code>X-Remote-User</code>. It is typically used in combination with an authenticating proxy, which sets the request header value.</td>
</tr>
<tr>
  <td><a href="/authentication/identity_providers/configuring-github-identity-provider#configuring-github-identity-provider">GitHub or GitHub Enterprise</a></td>
  <td>Configure a <code>github</code> identity provider to validate user names and passwords against GitHub or GitHub Enterprise's OAuth authentication server.</td>
</tr>
<tr>
  <td><a href="/authentication/identity_providers/configuring-gitlab-identity-provider#configuring-gitlab-identity-provider">GitLab</a></td>
  <td>Configure a <code>gitlab</code> identity provider to use <a href="https://gitlab.com/">GitLab.com</a> or any other GitLab instance as an identity provider.</td>
</tr>
<tr>
  <td><a href="/authentication/identity_providers/configuring-google-identity-provider#configuring-google-identity-provider">Google</a></td>
  <td>Configure a <code>google</code> identity provider using <a href="https://developers.google.com/identity/protocols/OpenIDConnect">Google's OpenID Connect integration</a>.</td>
</tr>
<tr>
  <td><a href="/authentication/identity_providers/configuring-oidc-identity-provider#configuring-oidc-identity-provider">OpenID Connect</a></td>
  <td>Configure an <code>oidc</code> identity provider to integrate with an OpenID Connect identity provider using an <a href="http://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth">Authorization Code Flow</a>.</td>
</tr>
</tbody>
</table>

Once an identity provider has been defined, you can
[use RBAC to define and apply permissions](/authentication/using-rbac#authorization-overview_using-rbac).