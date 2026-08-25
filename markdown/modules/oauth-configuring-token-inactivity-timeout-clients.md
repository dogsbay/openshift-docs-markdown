{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring token inactivity timeout for an OAuth client {id="oauth-token-inactivity-timeout_{{ context }}"}

Configure OAuth clients to expire tokens after a set period of inactivity, improving security by automatically invalidating idle sessions. {._abstract}

By default, no token inactivity timeout is set.


:::note

If the token inactivity timeout is also configured in the internal OAuth server configuration, the timeout that is set in the OAuth client overrides that value.

:::


**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have configured an identity provider (IDP).

**Procedure**

*   Update the `OAuthClient` configuration to set a token inactivity timeout.
    1.  Edit the `OAuthClient` object:
        ```terminal
        $ oc edit oauthclient <oauth_client>
        ```

        Replace `<oauth_client>` with the OAuth client to configure, for example, `console`.

        Add the `accessTokenInactivityTimeoutSeconds` field and set your timeout value:
        ```yaml
        apiVersion: oauth.openshift.io/v1
        grantMethod: auto
        kind: OAuthClient
        metadata:
        ...
        accessTokenInactivityTimeoutSeconds: 600
        ```

        where:

        `accessTokenInactivityTimeoutSeconds`
        :   Specifies the token inactivity timeout in seconds. The minimum allowed value is `300`.

    1.  Save the file to apply the changes.

**Verification**

1.  Log in to the cluster with an identity from your IDP. Be sure to use the OAuth client that you just configured.
1.  Perform an action and verify that it was successful.
1.  Wait longer than the configured timeout without using the identity. In this procedure’s example, wait longer than 600 seconds.
1.  Try to perform an action from the same identity’s session.

    This attempt should fail because the token should have expired due to inactivity longer than the configured timeout.