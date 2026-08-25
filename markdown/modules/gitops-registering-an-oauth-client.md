{%- set _mod_docs_content_type = "PROCEDURE" %}
# Registering an additional an OAuth client {id="registering-an-additional-oauth-client_{{ context }}"}

If you need an additional OAuth client to manage authentication for your {{ product_title }} cluster, you can register one.

**Procedure**

*   To register your client:
    ```terminal
    $ oc create -f <(echo '
    kind: OAuthClient
    apiVersion: oauth.openshift.io/v1
    metadata:
     name: keycloak-broker (1)
    secret: "..." (2)
    redirectURIs:
    - "https://keycloak-keycloak.apps.dev-svc-4.7-020201.devcluster.openshift.com/auth/realms/myrealm/broker/openshift-v4/endpoint" (3)
    grantMethod: prompt (4)
    ')
    ```
    1.  The name of the OAuth client is used as the `client_id` parameter when making requests to `<namespace_route>/oauth/authorize` and `<namespace_route>/oauth/token`.
    1.  The `secret` is used as the `client_secret` parameter when making requests to `<namespace_route>/oauth/token`.
    1.  The `redirect_uri` parameter specified in requests to `<namespace_route>/oauth/authorize` and `<namespace_route>/oauth/token` must be equal to or prefixed by one of the URIs listed in the `redirectURIs` parameter value.
    1.  If the user has not granted access to this client, the `grantMethod` determines which action to take when this client requests tokens. Specify `auto` to automatically approve the grant and retry the request, or `prompt` to prompt the user to approve or deny the grant.