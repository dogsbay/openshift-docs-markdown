{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample request header CR {id="identity-provider-request-header-CR_{{ context }}"}

The following custom resource (CR) shows the parameters and
acceptable values for a request header identity provider.

```yaml title="Request header CR"
apiVersion: config.openshift.io/v1
kind: OAuth
metadata:
  name: cluster
spec:
  identityProviders:
  - name: requestheaderidp (1)
    mappingMethod: claim (2)
    type: RequestHeader
    requestHeader:
      challengeURL: "https://www.example.com/challenging-proxy/oauth/authorize?${query}" (3)
      loginURL: "https://www.example.com/login-proxy/oauth/authorize?${query}" (4)
      ca: (5)
        name: ca-config-map
      clientCommonNames: (6)
      - my-auth-proxy
      headers: (7)
      - X-Remote-User
      - SSO-User
      emailHeaders: (8)
      - X-Remote-User-Email
      nameHeaders: (9)
      - X-Remote-User-Display-Name
      preferredUsernameHeaders: (10)
      - X-Remote-User-Login
```
1.  This provider name is prefixed to the user name in the request header to
form an identity name.
1.  Controls how mappings are established between this provider’s identities and `User` objects.
1.  Optional: URL to redirect unauthenticated `/oauth/authorize` requests to,
that will authenticate browser-based clients and then proxy their request to
`https://_<namespace_route>_/oauth/authorize`.
The URL that proxies to `https://_<namespace_route>_/oauth/authorize` must end with `/authorize` (with no trailing slash),
and also proxy subpaths, in order for OAuth approval flows to work properly.
`${{ url }}`{minja} is replaced with the current URL, escaped to be safe in a query parameter.
`${{ query }}`{minja} is replaced with the current query string.
If this attribute is not defined, then `loginURL` must be used.
1.  Optional: URL to redirect unauthenticated `/oauth/authorize` requests to,
that will authenticate clients which expect `WWW-Authenticate` challenges, and
then proxy them to `https://_<namespace_route>_/oauth/authorize`.
`${{ url }}`{minja} is replaced with the current URL, escaped to be safe in a query parameter.
`${{ query }}`{minja} is replaced with the current query string.
If this attribute is not defined, then `challengeURL` must be used.
1.  Reference to an {{ product_title }} `ConfigMap` object containing a PEM-encoded
certificate bundle. Used as a trust anchor to validate the TLS
certificates presented by the remote server.

    :::important

    As of {{ product_title }} 4.1, the `ca` field is required for this identity
    provider. This means that your proxy must support mutual TLS.
    
    :::

1.  Optional: list of common names (`cn`). If set, a valid client certificate with
a Common Name (`cn`) in the specified list must be presented before the request headers
are checked for user names. If empty, any Common Name is allowed. Can only be used in combination
with `ca`.
1.  Header names to check, in order, for the user identity. The first header containing
a value is used as the identity. Required, case-insensitive.
1.  Header names to check, in order, for an email address. The first header containing
a value is used as the email address. Optional, case-insensitive.
1.  Header names to check, in order, for a display name. The first header containing
a value is used as the display name. Optional, case-insensitive.
1.  Header names to check, in order, for a preferred user name, if different than the immutable
identity determined from the headers specified in `headers`. The first header containing
a value is used as the preferred user name when provisioning. Optional, case-insensitive.