{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring token inactivity timeout for the internal OAuth server {id="oauth-token-inactivity-timeout_{{ context }}"}

Configure the internal OAuth server to automatically expire tokens after a set period of inactivity, improving security by invalidating idle sessions. {._abstract}

By default, no token inactivity timeout is set.


:::note

If the token inactivity timeout is also configured in your OAuth client, that value overrides the timeout that is set in the internal OAuth server configuration.

:::


**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have configured an identity provider (IDP).

**Procedure**

1.  Update the `OAuth` configuration to set a token inactivity timeout.
    1.  Edit the `OAuth` object:
        ```terminal
        $ oc edit oauth cluster
        ```

        Add the `spec.tokenConfig.accessTokenInactivityTimeout` field and set your timeout value:
        ```yaml
        apiVersion: config.openshift.io/v1
        kind: OAuth
        metadata:
        ...
        spec:
          tokenConfig:
            accessTokenInactivityTimeout: 400s
        ```

        where:

        `spec.tokenConfig.accessTokenInactivityTimeout`
        :   Specifies the token inactivity timeout with appropriate units, for example `400s` for 400 seconds, or `30m` for 30 minutes. The minimum allowed timeout value is `300s`.

    1.  Save the file to apply the changes.
1.  Check that the OAuth server pods have restarted:
    ```terminal
    $ oc get clusteroperators authentication
    ```

    Do not continue to the next step until `PROGRESSING` is listed as `False`, as shown in the following output:
    ```terminal title="Example output" {minja}
    NAME             VERSION   AVAILABLE   PROGRESSING   DEGRADED   SINCE
    authentication   {{ product_version }}.0    True        False         False      145m
    ```
1.  Check that a new revision of the Kubernetes API server pods has rolled out. This will take several minutes.
    ```terminal
    $ oc get clusteroperators kube-apiserver
    ```

    Do not continue to the next step until `PROGRESSING` is listed as `False`, as shown in the following output:
    ```terminal title="Example output" {minja}
    NAME             VERSION   AVAILABLE   PROGRESSING   DEGRADED   SINCE
    kube-apiserver   {{ product_version }}.0     True        False         False      145m
    ```

    If `PROGRESSING` is showing `True`, wait a few minutes and try again.

**Verification**

1.  Log in to the cluster with an identity from your IDP.
1.  Execute a command and verify that it was successful.
1.  Wait longer than the configured timeout without using the identity. In this procedure’s example, wait longer than 400 seconds.
1.  Try to execute a command from the same identity’s session.

    This command should fail because the token should have expired due to inactivity longer than the configured timeout.
    ```terminal title="Example output"
    error: You must be logged in to the server (Unauthorized)
    ```