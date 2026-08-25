{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample OpenID Connect CRs {id="identity-provider-oidc-CR_{{ context }}"}

The following custom resources (CRs) show the parameters and acceptable values for an OpenID Connect identity provider.

If you must specify a custom certificate bundle, extra scopes, extra authorization request parameters, or a `userInfo` URL, use the full OpenID Connect CR.

```yaml title="Standard OpenID Connect CR"
apiVersion: config.openshift.io/v1
kind: OAuth
metadata:
  name: cluster
spec:
  identityProviders:
  - name: oidcidp (1)
    mappingMethod: claim (2)
    type: OpenID
    openID:
      clientID: ... (3)
      clientSecret: (4)
        name: idp-secret
      claims: (5)
        preferredUsername:
        - preferred_username
        name:
        - name
        email:
        - email
        groups:
        - groups
      issuer: https://www.idp-issuer.com (6)
```
1.  This provider name is prefixed to the value of the identity claim to form an identity name. It is also used to build the redirect URL.
1.  Controls how mappings are established between this provider’s identities and `User` objects.
1.  The client ID of a client registered with the OpenID provider. The client must be allowed to redirect to `https://oauth-openshift.apps.<cluster_name>.<cluster_domain>/oauth2callback/<idp_provider_name>`.
1.  A reference to an {{ product_title }} `Secret` object containing the client secret.
1.  The list of claims to use as the identity. The first non-empty claim is used.
1.  The [Issuer Identifier](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier) described in the OpenID spec. Must use `https` without query or fragment component.

```yaml title="Full OpenID Connect CR"
apiVersion: config.openshift.io/v1
kind: OAuth
metadata:
  name: cluster
spec:
  identityProviders:
  - name: oidcidp
    mappingMethod: claim
    type: OpenID
    openID:
      clientID: ...
      clientSecret:
        name: idp-secret
      ca: (1)
        name: ca-config-map
      extraScopes: (2)
      - email
      - profile
      extraAuthorizeParameters: (3)
        include_granted_scopes: "true"
      claims:
        preferredUsername: (4)
        - preferred_username
        - email
        name: (5)
        - nickname
        - given_name
        - name
        email: (6)
        - custom_email_claim
        - email
        groups: (7)
        - groups
      issuer: https://www.idp-issuer.com
```
1.  Optional: Reference to an {{ product_title }} config map containing the PEM-encoded certificate authority bundle to use in validating server certificates for the configured URL.
1.  Optional: The list of scopes to request, in addition to the `openid` scope, during the authorization token request.
1.  Optional: A map of extra parameters to add to the authorization token request.
1.  The list of claims to use as the preferred user name when provisioning a user
for this identity. The first non-empty claim is used.
1.  The list of claims to use as the display name. The first non-empty claim is used.
1.  The list of claims to use as the email address. The first non-empty claim is used.
1.  The list of claims to use to synchronize groups from the OpenID Connect provider to {{ product_title }} upon user login. The first non-empty claim is used.