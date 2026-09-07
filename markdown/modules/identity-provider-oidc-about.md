{%- set _mod_docs_content_type = "CONCEPT" %}
# About OpenID Connect authentication {id="identity-provider-oidc-about_{{ context }}"}

Review OpenID Connect (OIDC) discovery, scopes, and claim mapping before you configure the `oidc` identity provider. OIDC support and correctly mapped claims are required for the Authentication Operator to authenticate users in {{ product_title }}. {._abstract}

The Authentication Operator in {{ product_title }} requires that the configured OIDC identity provider implements the OIDC discovery specification. For more information, see "OpenID Connect Discovery".

{% if openshift_origin %}
You can [configure a Keycloak](https://www.keycloak.org/docs/latest/server_admin/index.html#openshift) server as an OpenID Connect identity provider for {{ product_title }}.
{% endif %}


:::note

`ID Token` and `UserInfo` decryptions are not supported.

:::


By default, the `openid` scope is requested. If required, extra scopes can be specified in the `extraScopes` field.

Claims are read from the JWT `id_token` returned from the OpenID identity provider and, if specified, from the JSON returned by the `UserInfo` URL.

At least one claim must be configured to use as the identity of the user. The standard identity claim is `sub`.

You can also indicate which claims to use as the preferred username, display name, and email address of the user. If multiple claims are specified, the first one with a non-empty value is used. The following table lists the standard claims:

| Claim | Description |
| --- | --- |
| `sub` | Short for "subject identifier." The remote identity for the user at the issuer. |
| `preferred_username` | The preferred username when provisioning a user. A shorthand name that the user wants to be referred to, such as `janedoe`. Typically a value that corresponds to the login or username of the user in the authentication system, such as username or email. |
| `email` | Email address. |
| `name` | Display name. |

For more information, see "OpenID claims documentation".


:::note

Unless your OpenID Connect identity provider supports the resource owner password credentials (ROPC) grant flow, users must get a token from `<namespace_route>/oauth/token/request` to use with command-line tools.

:::