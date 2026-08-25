---
title: Understanding identity provider configuration
---

# Understanding identity provider configuration {#understanding-identity-provider}

As an administrator, you can configure OAuth to specify an identity provider after you install your cluster. Developers and administrators obtain OAuth access tokens to authenticate themselves to the API.

The OpenShift Container Platform master includes a built-in OAuth server.

## Identity providers in OpenShift Container Platform {#identity-provider-overview_understanding-identity-provider}

You can configure identity providers by creating a custom resource (CR) that describes the provider and adding it to the cluster. Identity providers enable user authentication in OpenShift Container Platform beyond the default `kubeadmin` user.

> [!NOTE]
> OpenShift Container Platform usernames containing `/`, `:`, and `%` are not supported.

## Supported identity providers {#supported-identity-providers_understanding-identity-provider}

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
  <td><a href="/openshift-docs-markdown/authentication/identity_providers/configuring-htpasswd-identity-provider#configuring-htpasswd-identity-provider">htpasswd</a></td>
  <td>Configure the <code>htpasswd</code> identity provider to validate user names and passwordsagainst a flat file generated using<a href="http://httpd.apache.org/docs/2.4/programs/htpasswd.html"><code>htpasswd</code></a>.</td>
</tr>
<tr>
  <td><a href="/openshift-docs-markdown/authentication/identity_providers/configuring-keystone-identity-provider#configuring-keystone-identity-provider">Keystone</a></td>
  <td>Configure the <code>keystone</code> identity provider to integrateyour OpenShift Container Platform cluster with Keystone to enable shared authentication withan OpenStack Keystone v3 server configured to store users in an internaldatabase.</td>
</tr>
<tr>
  <td><a href="/openshift-docs-markdown/authentication/identity_providers/configuring-ldap-identity-provider#configuring-ldap-identity-provider">LDAP</a></td>
  <td>Configure the <code>ldap</code> identity provider to validate user names and passwordsagainst an LDAPv3 server, using simple bind authentication.</td>
</tr>
<tr>
  <td><a href="/openshift-docs-markdown/authentication/identity_providers/configuring-basic-authentication-identity-provider#configuring-basic-authentication-identity-provider">Basic authentication</a></td>
  <td>Configure a <code>basic-authentication</code> identity provider for users to log in toOpenShift Container Platform with credentials validated against a remote identity provider.Basic authentication is a generic backend integration mechanism.</td>
</tr>
<tr>
  <td><a href="/openshift-docs-markdown/authentication/identity_providers/configuring-request-header-identity-provider#configuring-request-header-identity-provider">Request header</a></td>
  <td>Configure a <code>request-header</code> identity provider to identify users from requestheader values, such as <code>X-Remote-User</code>. It is typically used in combination withan authenticating proxy, which sets the request header value.</td>
</tr>
<tr>
  <td><a href="/openshift-docs-markdown/authentication/identity_providers/configuring-github-identity-provider#configuring-github-identity-provider">GitHub or GitHub Enterprise</a></td>
  <td>Configure a <code>github</code> identity provider to validate user names and passwordsagainst GitHub or GitHub Enterprise's OAuth authentication server.</td>
</tr>
<tr>
  <td><a href="/openshift-docs-markdown/authentication/identity_providers/configuring-gitlab-identity-provider#configuring-gitlab-identity-provider">GitLab</a></td>
  <td>Configure a <code>gitlab</code> identity provider to use<a href="https://gitlab.com/">GitLab.com</a> or any other GitLab instance as an identityprovider.</td>
</tr>
<tr>
  <td><a href="/openshift-docs-markdown/authentication/identity_providers/configuring-google-identity-provider#configuring-google-identity-provider">Google</a></td>
  <td>Configure a <code>google</code> identity provider using<a href="https://developers.google.com/identity/protocols/OpenIDConnect">Google's OpenID Connect integration</a>.</td>
</tr>
<tr>
  <td><a href="/openshift-docs-markdown/authentication/identity_providers/configuring-oidc-identity-provider#configuring-oidc-identity-provider">OpenID Connect</a></td>
  <td>Configure an <code>oidc</code> identity provider to integrate with an OpenID Connectidentity provider using an<a href="http://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth">Authorization Code Flow</a>.</td>
</tr>
</tbody>
</table>

Once an identity provider has been defined, you can [use RBAC to define and apply permissions](/openshift-docs-markdown/authentication/using-rbac#authorization-overview_using-rbac).

## Removing the kubeadmin user {#removing-kubeadmin_understanding-identity-provider}

After you define an identity provider and create a new `cluster-admin` user, you can remove the `kubeadmin` to improve cluster security.

> [!WARNING]
> If you follow this procedure before another user is a `cluster-admin`, then OpenShift Container Platform must be reinstalled. It is not possible to undo this command.

**Prerequisites**

- You must have configured at least one identity provider.
- You must have added the `cluster-admin` role to a user.
- You must be logged in as an administrator.

**Procedure**

- Remove the `kubeadmin` secrets:

  ```terminal
  $ oc delete secrets kubeadmin -n kube-system
  ```

## Identity provider parameters {#identity-provider-parameters_understanding-identity-provider}

The following parameters are common to all identity providers:

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

> [!NOTE]
> When adding or changing identity providers, you can map identities from the new provider to existing users by setting the `mappingMethod` parameter to `add`.

## Sample identity provider CR {#identity-provider-default-CR_understanding-identity-provider}

You can use a custom resource (CR) to see the parameters and default values that you use to configure an identity provider.

The following example uses the htpasswd identity provider.

```yaml {title="Sample identity provider CR"}
apiVersion: config.openshift.io/v1
kind: OAuth
metadata:
  name: cluster
spec:
  identityProviders:
  - name: my_identity_provider
    mappingMethod: claim
    type: HTPasswd
    htpasswd:
      fileData:
        name: htpass-secret
```

where:

`spec.identityProviders.name`
:   Specifies the provider name, which is prefixed to provider user names to form an identity name.

`spec.identityProviders.mappingMethod`
:   Specifies how mappings are established between this provider’s identities and `User` objects.

`spec.identityProviders.htpasswd.fileData.name`
:   Specifies an existing secret containing a file generated using [`htpasswd`](http://httpd.apache.org/docs/2.4/programs/htpasswd.html).

## Manually provisioning a user when using the lookup mapping method {#identity-provider-provisioning-user-lookup-mapping_understanding-identity-provider}

You can manually provision users when the `lookup` mapping method is enabled. The `lookup` method disables automatic identity-to-user mapping during login, requiring manual provisioning of each user after configuring the identity provider.

**Prerequisites**

- You have installed the OpenShift CLI (`oc`).

**Procedure**

1. Create an OpenShift Container Platform user:

   ```terminal
   $ oc create user <username>
   ```
2. Create an OpenShift Container Platform identity:

   ```terminal
   $ oc create identity <identity_provider>:<identity_provider_user_id>
   ```

   Where `<identity_provider_user_id>` is a name that uniquely represents the user in the identity provider.
3. Create a user identity mapping for the created user and identity:

   ```terminal
   $ oc create useridentitymapping <identity_provider>:<identity_provider_user_id> <username>
   ```

**Additional resources**

- [How to create user, identity and map user and identity in LDAP authentication for `mappingMethod` as `lookup` inside the OAuth manifest](https://access.redhat.com/solutions/6006921)
- [How to create user, identity and map user and identity in OIDC authentication for `mappingMethod` as `lookup`](https://access.redhat.com/solutions/7072510)
